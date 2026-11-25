/*
  HEDS KPI calculator. Plain static JavaScript with no outside requests.
  Every target and grade comes from assets/kpi-targets.js, so this file holds no target numbers.
  Usage: put <div data-calc="service"></div> inside the category section, then load kpi-targets.js
  and this file. Categories: absorption, service, parts, rental, rental-service. Each one is its own calculator.
*/
(function () {
  'use strict';
  var T = window.HEDS_KPI_TARGETS, grade = window.hedsGrade;
  if (!T || !grade) return;

  function I(key, label, val, min, max, step, unit) {
    return { key: key, label: label, val: val, min: min, max: max, step: step || 1, unit: unit || '' };
  }
  function pct(a, b) { return 100 * a / Math.max(b, 0.01); }
  function ratio(id, nk, dk) { return [{ kpi: id, f: function (v) { return pct(v[nk], v[dk]); } }]; }

  var TABS = {
    dealer: [
      { name: 'Absorption', tiles: [
        { title: 'Location Absorption',
          def: "Service gross profit plus parts gross profit, divided by the location's total operating expenses, times 100. Service and parts each show their share of that same result.",
          inputs: [I('sgp', 'Service gross profit', 87000, 0, 300000, 1000, '$'), I('pgp', 'Parts gross profit', 36000, 0, 300000, 1000, '$'), I('opex', "Total location operating expenses", 120000, 10000, 500000, 1000, '$')],
          outputs: [
            { kpi: 'location_absorption', f: function (v) { return pct(v.sgp + v.pgp, v.opex); } },
            { kpi: 'service_absorption', f: function (v) { return pct(v.sgp, v.opex); } },
            { kpi: 'parts_absorption', f: function (v) { return pct(v.pgp, v.opex); } }] },
      ] },
      { name: 'Service', tiles: [
        { title: 'Labor Recovery', def: 'Hours on work orders divided by paid payroll hours, times 100.',
          inputs: [I('wo', 'Hours on work orders', 820, 10, 2200, 10, 'hours'), I('paid', 'Paid payroll hours', 1000, 100, 2000, 10, 'hours')], outputs: ratio('technician_recovery', 'wo', 'paid') },
        { title: 'Labor Utilization', def: 'Hours invoiced on work orders divided by hours on work orders, times 100.',
          inputs: [I('inv', 'Hours invoiced on work orders', 680, 0, 2200, 10, 'hours'), I('wo', 'Hours on work orders', 820, 10, 2200, 10, 'hours')], outputs: ratio('labor_utilization', 'inv', 'wo') },
        { title: 'Technician Efficiency', def: 'Shop: flat rate or estimated time divided by actual job time, times 100. This calculator grades the shop number. The road target is 80% to 110%.',
          inputs: [I('est', 'Flat rate or estimated time', 9, 1, 30, 0.1, 'hours'), I('act', 'Actual job time', 10, 1, 30, 0.1, 'hours')], outputs: ratio('shop_efficiency', 'est', 'act') },
        { title: 'Last Labor to Invoice', def: 'Count of work orders still open and not invoiced more than 48 hours after the last labor was posted.',
          inputs: [I('late', 'Work orders past 48 hours', 12, 0, 60, 1, 'orders'), I('lateD', 'Value of those work orders', 42000, 0, 200000, 500, '$')],
          outputs: [{ kpi: 'last_labor_to_invoice', f: function (v) { return v.late; } }] },
        { title: 'Service Labor Gross Margin', def: '(Labor sales minus direct technician cost) divided by labor sales, times 100.',
          inputs: [I('ls', 'Labor sales', 120000, 10000, 400000, 1000, '$'), I('tc', 'Direct technician cost', 36000, 0, 120000, 500, '$')],
          outputs: [{ kpi: 'service_labor_gross_margin', f: function (v) { return pct(v.ls - v.tc, v.ls); } }] },
        { title: 'Effective Labor Rate', def: 'Effective labor rate on customer-billed work divided by posted labor rate, times 100. Effective labor rate is customer-billed labor sales divided by customer-billed hours. Only the service manager approves labor discounts. Internal and warranty labor have their own rates and are not counted as discounts from the posted rate.',
          inputs: [I('cbs', 'Customer-billed labor sales', 100000, 1000, 400000, 1000, '$'), I('cbh', 'Customer-billed hours', 680, 10, 2200, 10, 'hours'), I('posted', 'Posted labor rate', 160, 25, 300, 1, '$/hour')],
          outputs: [{ kpi: 'effective_labor_rate', f: function (v) { return pct(v.cbs / Math.max(v.cbh, 1), v.posted); } }] },
        { title: 'First-Time Fix Rate', def: 'Repairs fixed on the first attempt divided by completed repairs, times 100.',
          inputs: [I('fx', 'Repairs fixed on the first attempt', 78, 0, 300, 1, 'repairs'), I('rp', 'Completed repairs', 100, 1, 300, 1, 'repairs')], outputs: ratio('first_time_fix_rate', 'fx', 'rp') }
      ] },
      { name: 'Parts', tiles: [
        { title: 'Parts Gross Margin', def: '(Parts sales minus parts cost of sales) divided by parts sales, times 100.',
          inputs: [I('ps', 'Parts sales', 250000, 10000, 800000, 1000, '$'), I('pc', 'Parts cost of sales', 175000, 0, 600000, 1000, '$')],
          outputs: [{ kpi: 'parts_gross_margin', f: function (v) { return pct(v.ps - v.pc, v.ps); } }] },
        { title: 'Parts Share of Dealership Gross Margin', def: 'Parts gross profit divided by total dealership gross profit, times 100.',
          inputs: [I('pg', 'Parts gross profit', 75000, 0, 300000, 1000, '$'), I('tg', 'Total dealership gross profit', 270000, 10000, 800000, 1000, '$')], outputs: ratio('parts_share_of_gross_margin', 'pg', 'tg') },
        { title: 'Parts Salaries as a Percent of Parts Gross Profit', def: 'Parts salaries divided by parts gross profit, times 100.',
          inputs: [I('sal', 'Parts salaries', 21000, 0, 120000, 500, '$'), I('pg2', 'Parts gross profit', 75000, 1000, 300000, 1000, '$')], outputs: ratio('parts_salaries_pct_gp', 'sal', 'pg2') },
        { title: 'Gross Parts Turns', def: 'Annual parts cost of sales divided by average parts inventory at cost.',
          inputs: [I('cos', 'Annual parts cost of sales', 900000, 10000, 3000000, 10000, '$'), I('inv', 'Average parts inventory at cost', 270000, 10000, 1200000, 5000, '$')],
          outputs: [{ kpi: 'gross_parts_turns', f: function (v) { return v.cos / Math.max(v.inv, 1); } }] },
        { title: 'Stock Order Percent', def: 'Parts purchases on stock orders divided by total parts purchases, times 100.',
          inputs: [I('so', 'Stock order purchases', 65000, 0, 300000, 1000, '$'), I('tp', 'Total parts purchases', 100000, 1000, 300000, 1000, '$')], outputs: ratio('stock_order_percent', 'so', 'tp') },
        { title: 'Obsolete and Excess Stock', def: 'Obsolete and excess inventory divided by total parts inventory, times 100.',
          inputs: [I('ob', 'Obsolete and excess inventory', 24000, 0, 300000, 1000, '$'), I('ti', 'Total parts inventory', 400000, 10000, 1200000, 5000, '$')], outputs: ratio('obsolete_excess_stock', 'ob', 'ti') },
        { title: 'Counter Fill Rate', def: 'Counter line items filled from stock divided by counter line items requested, times 100.',
          inputs: [I('cf', 'Counter lines filled from stock', 78, 0, 300, 1, 'lines'), I('cn', 'Counter lines requested', 100, 1, 300, 1, 'lines')], outputs: ratio('counter_fill_rate', 'cf', 'cn') },
        { title: 'Service Fill Rate', def: 'Service line items filled from stock divided by service line items requested, times 100.',
          inputs: [I('sf', 'Service lines filled from stock', 82, 0, 300, 1, 'lines'), I('sn', 'Service lines requested', 100, 1, 300, 1, 'lines')], outputs: ratio('service_fill_rate', 'sf', 'sn') }
      ] }
    ],
    rental: [
      { name: 'Rental', tiles: [
        { title: 'Time Utilization', def: 'Days on rent divided by available rentable days, times 100.',
          inputs: [I('on', 'Days on rent', 2100, 0, 15000, 50, 'days'), I('av', 'Available rentable days', 3000, 100, 15000, 100, 'days')], outputs: ratio('time_utilization', 'on', 'av') },
        { title: 'Dollar Utilization', def: 'Annual rental revenue divided by total original equipment cost (OEC), times 100.',
          inputs: [I('rev', 'Annual rental revenue', 2700000, 0, 10000000, 50000, '$'), I('oec', 'Fleet OEC', 4800000, 100000, 20000000, 100000, '$')], outputs: ratio('dollar_utilization', 'rev', 'oec') },
        { title: 'Maintenance Cost as a Percent of OEC', def: 'Annual maintenance cost, with technician labor left out, divided by fleet OEC, times 100.',
          inputs: [I('mc', 'Annual maintenance cost, no technician labor', 420000, 0, 2000000, 10000, '$'), I('oec2', 'Fleet OEC', 4800000, 100000, 20000000, 100000, '$')], outputs: ratio('maintenance_cost_oec', 'mc', 'oec2') },
        { title: 'EBITDA Margin', def: 'EBITDA divided by total rental revenue, times 100.',
          inputs: [I('eb', 'EBITDA', 700000, -500000, 4000000, 10000, '$'), I('rr', 'Total rental revenue', 2700000, 10000, 10000000, 50000, '$')], outputs: ratio('ebitda_margin', 'eb', 'rr') },
        { title: 'Customer Churn (quarterly)', def: 'Customers lost this quarter divided by active customers last quarter, times 100.',
          inputs: [I('lost', 'Customers lost this quarter', 6, 0, 100, 1, 'customers'), I('act', 'Active customers last quarter', 80, 1, 400, 1, 'customers')], outputs: ratio('customer_churn', 'lost', 'act') },
        { title: 'Fleet Downtime', def: 'Down days divided by days available for rent, times 100. Downtime lost revenue is downtime revenue times the cat class time utilization.',
          inputs: [I('dd', 'Days down in shop', 240, 0, 5000, 5, 'days'), I('av2', 'Days available for rent', 4000, 100, 15000, 100, 'days')], outputs: ratio('equipment_downtime', 'dd', 'av2') },
        { title: 'Rate Realization', def: 'Actual invoiced rate divided by rack rate, times 100.',
          inputs: [I('ar', 'Actual average invoiced daily rate', 290, 1, 2000, 1, '$'), I('rk', 'Rack daily rate', 321, 1, 2000, 1, '$')], outputs: ratio('rate_realization', 'ar', 'rk') },
        { title: 'Damage Recovery Rate', def: 'Customer damage collected divided by total cost of customer damage repairs, times 100.',
          inputs: [I('dc2', 'Customer damage collected', 15000, 0, 200000, 500, '$'), I('dr2', 'Total cost of customer damage repairs', 20000, 500, 200000, 500, '$')], outputs: ratio('damage_recovery_rate', 'dc2', 'dr2') },
        { title: 'Equipment to Orders Ratio', def: 'Available units in a class divided by active rental requests for that class.',
          inputs: [I('au', 'Available units in the class', 12, 0, 200, 1, 'units'), I('rq', 'Active rental requests for the class', 12, 1, 200, 1, 'requests')], outputs: [{ kpi: 'equipment_to_orders', f: function (v) { return v.au / Math.max(v.rq, 1); } }] }
      ] },
      { name: 'Rental Service', tiles: [
        { title: 'Off Rent to Rent-Ready', def: 'Hours from off rent into service to the rent-ready line, or to a failed inspection.',
          inputs: [I('hrs', 'Average hours, off rent to rent-ready', 36, 1, 200, 1, 'hours')], outputs: [{ kpi: 'rent_ready_turnaround', f: function (v) { return v.hrs; } }] },
        { title: 'Labor Recovery', def: 'Hours on work orders divided by paid payroll hours, times 100.',
          inputs: [I('wo', 'Hours on work orders', 870, 10, 2200, 10, 'hours'), I('paid', 'Paid payroll hours', 1000, 100, 2000, 10, 'hours')], outputs: ratio('rs_technician_recovery', 'wo', 'paid') },
        { title: 'Labor Utilization', def: 'Hours invoiced on work orders divided by hours on work orders, times 100.',
          inputs: [I('inv', 'Hours invoiced on work orders', 780, 0, 2200, 10, 'hours'), I('wo2', 'Hours on work orders', 870, 10, 2200, 10, 'hours')], outputs: ratio('rs_labor_utilization', 'inv', 'wo2') },
        { title: 'Maintenance Cost as a Percent of OEC', def: 'Annual maintenance cost, with technician labor left out, divided by fleet OEC, times 100.',
          inputs: [I('mc', 'Annual maintenance cost, no technician labor', 420000, 0, 2000000, 10000, '$'), I('oec', 'Fleet OEC', 4800000, 100000, 20000000, 100000, '$')], outputs: ratio('maintenance_cost_oec', 'mc', 'oec') },
        { title: 'Fleet Physical Availability', def: '(Rent-ready units plus on-rent units) divided by total fleet units, times 100.',
          inputs: [I('rr', 'Rent-ready units', 35, 0, 500, 1, 'units'), I('or', 'On-rent units', 105, 0, 500, 1, 'units'), I('tf', 'Total fleet units', 150, 1, 500, 1, 'units')],
          outputs: [{ kpi: 'fleet_availability', f: function (v) { return pct(v.rr + v.or, v.tf); } }] },
        { title: 'Fleet Downtime', def: 'Down days divided by days available for rent, times 100. Downtime lost revenue is downtime revenue times the cat class time utilization.',
          inputs: [I('dd', 'Down days', 315, 0, 5000, 5, 'days'), I('fd', 'Days available for rent', 4500, 100, 15000, 100, 'days')], outputs: ratio('fleet_downtime', 'dd', 'fd') },
        { title: 'Late Close Work Orders', def: 'Count of work orders not closed and invoiced within 48 hours of last labor.',
          inputs: [I('lc', 'Work orders past 48 hours', 3, 0, 60, 1, 'orders')], outputs: [{ kpi: 'late_close_work_orders', f: function (v) { return v.lc; } }] },
        { title: 'Damage Recovery Rate', def: 'Customer damage collected divided by total cost of customer damage repairs, times 100.',
          inputs: [I('dc', 'Customer damage collected', 15000, 0, 200000, 500, '$'), I('dr', 'Total cost of customer damage repairs', 20000, 500, 200000, 500, '$')], outputs: ratio('damage_recovery_rate', 'dc', 'dr') },
        { title: 'Telematics Triage', def: 'Critical alerts triaged within 2 hours divided by total critical alerts, times 100.',
          inputs: [I('tt', 'Critical alerts triaged within 2 hours', 18, 0, 200, 1, 'alerts'), I('ta', 'Total critical alerts', 20, 1, 200, 1, 'alerts')], outputs: ratio('telematics_triage', 'tt', 'ta') }
      ] }
    ]
  };

  var GROUPS = {
    absorption: TABS.dealer[0], service: TABS.dealer[1], parts: TABS.dealer[2],
    rental: TABS.rental[0], 'rental-service': TABS.rental[1]
  };

  var UNIT_SUFFIX = { '%': '%', turns: ' turns', hrs: ' hours', orders: ' orders', months: ' months' };

  function nf(v, d) { return v.toLocaleString('en-US', { maximumFractionDigits: d === undefined ? 1 : d }); }
  function showInput(d, v) {
    if (d.unit === '$') return '$' + Math.round(v).toLocaleString('en-US');
    if (d.unit === '$/hour') return '$' + Math.round(v).toLocaleString('en-US') + ' per hour';
    return nf(v, d.step < 1 ? 1 : 0) + (d.unit ? ' ' + d.unit : '');
  }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }

  function init(root) {
    var key = root.getAttribute('data-calc');
    var group = GROUPS[key];
    if (!group) return;
    var state = {};
    group.tiles.forEach(function (tile) { tile.inputs.forEach(function (d) { state[tile.title + ':' + d.key] = d.val; }); });

    var bar = el('div', 'calc-tabs');
    var reset = el('button', 'calc-reset', 'Reset to sample numbers');
    reset.type = 'button';
    reset.onclick = function () {
      group.tiles.forEach(function (tile) { tile.inputs.forEach(function (d) { state[tile.title + ':' + d.key] = d.val; }); });
      draw();
    };
    bar.appendChild(reset);
    var panel = el('div', 'calc-grid');

    function draw() {
      panel.textContent = '';
      var ordered = group.tiles.filter(function (t) { return T[t.outputs[0].kpi].tier !== 'secondary'; })
        .concat(group.tiles.filter(function (t) { return T[t.outputs[0].kpi].tier === 'secondary'; }));
      var firstSecondary = group.tiles.filter(function (t) { return T[t.outputs[0].kpi].tier === 'secondary'; })[0];
      if (firstSecondary) panel.appendChild(el('h4', 'tier-title', 'Core KPIs'));
      ordered.forEach(function (tile) {
        if (tile === firstSecondary) panel.appendChild(el('h4', 'tier-title tier-sec', 'Secondary measures'));
        var card = el('div', 'tile');
        card.appendChild(el('h4', '', tile.title));
        card.appendChild(el('p', 'def', tile.def));
        var outBox = el('div');
        card.appendChild(outBox);
        var vals = function () {
          var v = {};
          tile.inputs.forEach(function (d) { v[d.key] = state[tile.title + ':' + d.key]; });
          return v;
        };
        function refresh() {
          outBox.textContent = '';
          var v = vals();
          tile.outputs.forEach(function (o) {
            var t = T[o.kpi], val = o.f(v), g = grade(o.kpi, val);
            var row = el('div', 'out');
            row.appendChild(el('span', 'nm', t.name));
            row.appendChild(el('span', 'val', nf(val, t.unit === 'ratio' ? 2 : 1) + (UNIT_SUFFIX[t.unit] || '')));
            row.appendChild(el('span', 'pill ' + g.grade.toLowerCase(), (g.grade === 'INFO' ? g.label : g.grade + (g.label ? ': ' + g.label : ''))));
            row.appendChild(el('span', 'tg', 'Target: ' + t.text));
            outBox.appendChild(row);
          });
        }
        tile.inputs.forEach(function (d) {
          var sk = tile.title + ':' + d.key;
          var wrap = el('div', 'slider');
          var lab = el('label');
          var out = el('b', '', showInput(d, state[sk]));
          var idn = 'sl-' + key + '-' + tile.title.replace(/\W+/g, '') + '-' + d.key;
          lab.setAttribute('for', idn);
          lab.appendChild(el('span', '', d.label)); lab.appendChild(out);
          var r = document.createElement('input');
          r.type = 'range'; r.id = idn; r.min = d.min; r.max = d.max; r.step = d.step; r.value = state[sk];
          r.oninput = function () { state[sk] = parseFloat(r.value); out.textContent = showInput(d, state[sk]); refresh(); };
          wrap.appendChild(lab); wrap.appendChild(r);
          card.appendChild(wrap);
        });
        refresh();
        panel.appendChild(card);
      });
    }

    root.appendChild(bar);
    root.appendChild(panel);
    root.appendChild(el('p', 'calc-note', 'These sample numbers are made up for illustration. Move the sliders to see how each result and grade changes. Targets come from the same list the KPI Library uses.'));
    draw();
  }

  document.querySelectorAll('[data-calc]').forEach(init);

  // The old single calculator anchor now goes to the first category calculator on the page.
  function aliasJump() {
    var h = window.location.hash;
    if (h !== '#calculator' && h !== '#kpi-calculator') return;
    var first = document.querySelector('[data-calc]');
    if (!first || !first.parentNode.id) return;
    if (history.replaceState) history.replaceState(null, '', '#' + first.parentNode.id);
    setTimeout(function () { first.parentNode.scrollIntoView(); }, 50);
  }
  aliasJump();
})();
