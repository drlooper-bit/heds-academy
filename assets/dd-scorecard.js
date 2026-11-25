/*
  HEDS Due Diligence scorecard. Plain static JavaScript, browser only, nothing is stored or sent.
  Targets and grades come from assets/kpi-targets.js. This file holds no target numbers.
  window.HEDS_DD.renderVisibility(el) draws the visibility view.
  window.HEDS_DD.renderScorecard(el, summaryEl) draws the inspection scorecard.
*/
(function () {
  'use strict';
  var T = window.HEDS_KPI_TARGETS, grade = window.hedsGrade;
  if (!T || !grade) return;

  function F(key, label, unit) { return { key: key, label: label, unit: unit || '' }; }
  function pct(a, b) { return 100 * a / b; }

  var DEPTS = [
    { name: 'Service', rows: [
      { inputs: [F('cbs', 'Customer-billed labor sales', '$'), F('cbh', 'Customer-billed hours', 'hours'), F('posted', 'Posted labor rate', '$ per hour')],
        need: ['cbs', 'cbh', 'posted'],
        outputs: [{ id: 'effective_labor_rate', f: function (v) { return pct(v.cbs / v.cbh, v.posted); },
          why: 'A low effective labor rate shows discounting that cuts earnings every month, so normalized earnings are lower than the reported figure.' }] },
      { inputs: [F('wo', 'Hours on work orders', 'hours'), F('paid', 'Paid payroll hours', 'hours')], need: ['wo', 'paid'],
        outputs: [{ id: 'technician_recovery', f: function (v) { return pct(v.wo, v.paid); },
          why: 'Paid hours that are never booked to a work order are a recurring cost that the earnings have to absorb every period.' }] },
      { inputs: [F('late', 'Work orders open more than 48 hours after last labor', 'orders')], need: ['late'],
        outputs: [{ id: 'last_labor_to_invoice', f: function (v) { return v.late; },
          why: 'Work orders held open past 48 hours can push revenue into a later period and hide how much cash is trapped in WIP.' }] },
      { inputs: [F('ls', 'Labor sales', '$'), F('tc', 'Direct technician cost', '$')], need: ['ls', 'tc'],
        outputs: [{ id: 'service_labor_gross_margin', f: function (v) { return pct(v.ls - v.tc, v.ls); },
          why: 'Labor margin shows whether service earnings come from sound pricing and cost control or from effects that will not repeat.' }] }
    ] },
    { name: 'Parts', rows: [
      { inputs: [F('ps', 'Parts sales', '$'), F('pc', 'Parts cost of sales', '$')], need: ['ps', 'pc'],
        outputs: [{ id: 'parts_gross_margin', f: function (v) { return pct(v.ps - v.pc, v.ps); },
          why: 'Parts margin is the base of recurring parts earnings, so a margin propped up by one-time moves overstates what a buyer can expect to keep.' }] },
      { inputs: [F('ob', 'Obsolete and excess inventory', '$'), F('ti', 'Total parts inventory', '$')], need: ['ob', 'ti'],
        outputs: [{ id: 'obsolete_excess_stock', f: function (v) { return pct(v.ob, v.ti); },
          why: 'Obsolete stock is carried as an asset but may never sell, so it can overstate the value of the business and point to write-downs ahead.' }] },
      { inputs: [F('cos', 'Annual parts cost of sales', '$'), F('inv', 'Average parts inventory at cost', '$')], need: ['cos', 'inv'],
        outputs: [{ id: 'gross_parts_turns', f: function (v) { return v.cos / v.inv; },
          why: 'Slow turns tie up cash in inventory, which lowers the cash a buyer actually receives from the earnings.' }] },
      { inputs: [F('so', 'Stock order purchases', '$'), F('tp', 'Total parts purchases', '$')], need: ['so', 'tp'],
        outputs: [{ id: 'stock_order_percent', f: function (v) { return pct(v.so, v.tp); },
          why: 'A low share of stock orders means more emergency buying, which adds cost and makes parts earnings less predictable.' }] }
    ] },
    { name: 'Rental Fleet', rows: [
      { inputs: [F('on', 'Days on rent', 'days'), F('av', 'Available rentable days', 'days')], need: ['on', 'av'],
        outputs: [{ id: 'time_utilization', f: function (v) { return pct(v.on, v.av); },
          why: 'Time on rent shows whether rental earnings come from steady demand or from a fleet that sits idle much of the time.' }] },
      { inputs: [F('rev', 'Annual rental revenue', '$'), F('oec', 'Fleet original equipment cost', '$')], need: ['rev', 'oec'],
        outputs: [{ id: 'dollar_utilization', f: function (v) { return pct(v.rev, v.oec); },
          why: 'Revenue against fleet cost shows whether the fleet earns its keep, which is the core of recurring rental earnings.' }] },
      { inputs: [F('mc', 'Annual maintenance cost, no technician labor', '$'), F('oec2', 'Fleet original equipment cost', '$')], need: ['mc', 'oec2'],
        outputs: [{ id: 'maintenance_cost_oec', f: function (v) { return pct(v.mc, v.oec2); },
          why: 'A very low maintenance cost can mean deferred maintenance, which flatters earnings today and leaves a repair bill for the buyer.' }] },
      { inputs: [F('dd', 'Down days', 'days'), F('fd', 'Days available for rent', 'days')], need: ['dd', 'fd'],
        outputs: [{ id: 'fleet_downtime', f: function (v) { return pct(v.dd, v.fd); },
          why: 'Down days cut revenue and often point to maintenance problems that the earnings do not yet show.' }] }
    ] },
    { name: 'Location', rows: [
      { inputs: [F('sgp', 'Service gross profit', '$'), F('pgp', 'Parts gross profit', '$'), F('opex', 'Total operating expenses for the whole location', '$')], need: ['sgp', 'pgp', 'opex'],
        outputs: [
          { id: 'location_absorption', f: function (v) { return pct(v.sgp + v.pgp, v.opex); },
            why: "Service and parts gross profit that covers the whole location's operating expenses is recurring earnings, and a shortfall means the location leans on one-time equipment sales." },
          { id: 'service_absorption', f: function (v) { return pct(v.sgp, v.opex); },
            why: "A service share below the band means the location's recurring earnings depend less on the shop than they should." },
          { id: 'parts_absorption', f: function (v) { return pct(v.pgp, v.opex); },
            why: "A parts share below the band means the location's recurring earnings depend less on the parts counter than they should." }] }
    ] }
  ];

  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  function nf(v) { return v.toLocaleString('en-US', { maximumFractionDigits: 1 }); }
  var UNIT = { '%': '%', turns: ' turns', hrs: ' hours', orders: ' orders', months: ' months' };

  function renderVisibility(root) {
    root.textContent = '';
    var wrap = el('div', 'dd-wrap');
    var table = el('table', 'dd-table');
    var head = el('thead'), hr = el('tr');
    ['Department', 'KPI a buyer checks', 'HEDS target', 'Why it matters to EBITDA quality'].forEach(function (h) { hr.appendChild(el('th', '', h)); });
    head.appendChild(hr); table.appendChild(head);
    var body = el('tbody');
    DEPTS.forEach(function (d) {
      var first = true;
      d.rows.forEach(function (r) {
        r.outputs.forEach(function (o) {
          var t = T[o.id], tr = el('tr');
          var c0 = el('td', 'dd-dept', first ? d.name : d.name); c0.setAttribute('data-label', 'Department');
          if (!first) c0.className = 'dd-dept dd-repeat';
          var c1 = el('td', 'dd-kpi', t.name); c1.setAttribute('data-label', 'KPI');
          var c2 = el('td', '', t.short || t.text); c2.setAttribute('data-label', 'HEDS target');
          var c3 = el('td', '', o.why); c3.setAttribute('data-label', 'Why it matters');
          [c0, c1, c2, c3].forEach(function (c) { tr.appendChild(c); });
          body.appendChild(tr); first = false;
        });
      });
    });
    table.appendChild(body); wrap.appendChild(table); root.appendChild(wrap);
  }

  function renderScorecard(root, summary) {
    root.textContent = '';
    var results = []; // {dept, id, why, node, pill, val, row}
    DEPTS.forEach(function (d) {
      var box = el('div', 'dd-dept-box');
      box.appendChild(el('h3', '', d.name));
      d.rows.forEach(function (r) {
        var row = el('div', 'dd-row'), vals = {}, inputs = {};
        var fields = el('div', 'dd-fields');
        r.inputs.forEach(function (f) {
          var lab = el('label', 'dd-field');
          lab.appendChild(el('span', '', f.label + (f.unit ? ' (' + f.unit + ')' : '')));
          var inp = document.createElement('input');
          inp.type = 'number'; inp.inputMode = 'decimal'; inp.step = 'any'; inp.min = '0';
          inp.setAttribute('aria-label', d.name + ': ' + f.label);
          inp.oninput = update; inputs[f.key] = inp; lab.appendChild(inp); fields.appendChild(lab);
        });
        row.appendChild(fields);
        var outs = el('div', 'dd-outs');
        var rowResults = r.outputs.map(function (o) {
          var line = el('div', 'dd-out');
          var nm = el('span', 'dd-nm', T[o.id].name);
          var val = el('span', 'dd-val', 'Enter the numbers above');
          var pill = el('span', 'pill');
          line.appendChild(nm); line.appendChild(val); line.appendChild(pill);
          outs.appendChild(line);
          var res = { dept: d.name, o: o, val: val, pill: pill, g: null, v: null };
          results.push(res); return res;
        });
        row.appendChild(outs);
        box.appendChild(row);
        function update() {
          var ok = r.need.every(function (k) { var x = parseFloat(inputs[k].value); vals[k] = x; return isFinite(x); });
          var denomOk = ok && r.need.every(function (k) { return true; });
          rowResults.forEach(function (res) {
            var value = NaN;
            if (ok) { try { value = res.o.f(vals); } catch (e) { value = NaN; } }
            if (!isFinite(value)) {
              res.g = null; res.v = null;
              res.val.textContent = 'Enter the numbers above'; res.pill.textContent = ''; res.pill.className = 'pill';
            } else {
              var g = grade(res.o.id, value);
              res.g = g; res.v = value;
              res.val.textContent = nf(value) + (UNIT[T[res.o.id].unit] || '');
              res.pill.textContent = g.grade === 'INFO' ? g.label : g.grade + (g.label ? ': ' + g.label : '');
              res.pill.className = 'pill ' + g.grade.toLowerCase();
            }
          });
          summarize();
        }
      });
      root.appendChild(box);
    });

    function summarize() {
      summary.textContent = '';
      var lines = el('div', 'dd-sum-lines'), flagged = [];
      DEPTS.forEach(function (d) {
        var rs = results.filter(function (r) { return r.dept === d.name; });
        var graded = rs.filter(function (r) { return r.g && r.g.grade !== 'INFO'; });
        var warn = graded.filter(function (r) { return r.g.grade === 'WARN'; }).length;
        var fail = graded.filter(function (r) { return r.g.grade === 'FAIL'; }).length;
        var text;
        if (!graded.length) text = d.name + ' has no numbers entered yet.';
        else if (!warn && !fail) text = d.name + ' has no flags across ' + graded.length + ' graded KPI' + (graded.length === 1 ? '' : 's') + '.';
        else text = d.name + ' has ' + (warn + fail) + ' flag' + (warn + fail === 1 ? '' : 's') + ' across ' + graded.length + ' graded KPI' + (graded.length === 1 ? '' : 's') + ', with ' + fail + ' FAIL and ' + warn + ' WARN.';
        lines.appendChild(el('p', '', text));
        graded.forEach(function (r) { if (r.g.grade !== 'PASS') flagged.push(r); });
      });
      summary.appendChild(lines);
      var h = el('h3', '', 'Flags that affect EBITDA quality');
      summary.appendChild(h);
      if (!flagged.length) {
        summary.appendChild(el('p', '', 'No flags yet. Flags appear here with the reason each one matters to EBITDA quality.'));
      } else {
        var ul = el('ul');
        flagged.forEach(function (r) {
          ul.appendChild(el('li', '', T[r.o.id].name + ' is ' + r.g.grade + ' in ' + r.dept + '. ' + r.o.why));
        });
        summary.appendChild(ul);
      }
    }
    summarize();
  }

  window.HEDS_DD = { renderVisibility: renderVisibility, renderScorecard: renderScorecard, depts: DEPTS };

  var v = document.getElementById('dd-visibility');
  if (v) renderVisibility(v);
  var s = document.getElementById('dd-scorecard-app'), sum = document.getElementById('dd-summary');
  if (s && sum) renderScorecard(s, sum);
})();
