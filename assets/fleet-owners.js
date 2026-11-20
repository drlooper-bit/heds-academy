/*
  Fleet owner KPI table. Targets come from assets/kpi-targets.js, so they cannot drift.
  Fills #fleet-kpis on index.html and fleet-owners.html.
*/
(function () {
  'use strict';
  var T = window.HEDS_KPI_TARGETS, root = document.getElementById('fleet-kpis');
  if (!T || !root) return;
  var ROWS = [
    ['Service you buy', 'effective_labor_rate', "Compare what you pay per billed hour with the dealer's posted rate to see whether your invoices match the rate you were quoted.", 'dealer-kpi-library.html#service-kpis'],
    ['Service you buy', 'technician_recovery', "It shows how much of the dealer's paid technician time is booked to work orders, which tells you how tightly the shop that services your machines is run.", 'dealer-kpi-library.html#service-kpis'],
    ['Service you buy', 'last_labor_to_invoice', 'A work order still open after the last labor delays your invoice and your records, so this shows how quickly your dealer closes the job.', 'dealer-kpi-library.html#service-kpis'],
    ['Service you buy', 'first_time_fix_rate', 'Repeat visits for the same fault keep your machine down longer, so this shows how often the dealer fixes it the first time.', 'dealer-kpi-library.html#service-kpis'],
    ['Parts you buy', 'counter_fill_rate', 'It shows how often the dealer has the part in stock when your people ask for it at the counter.', 'dealer-kpi-library.html#parts-kpis'],
    ['Parts you buy', 'service_fill_rate', 'It shows how often the dealer has the parts a repair needs on the shelf, so your machine is not waiting on an order.', 'dealer-kpi-library.html#parts-kpis'],
    ['Your fleet and rental vendors', 'fleet_downtime', 'Down days are days a machine is not working for you, so tracking them for owned and rented units shows where the time is going.', 'rental-kpi-library.html#rental-service-kpis'],
    ['Your fleet and rental vendors', 'maintenance_cost_oec', 'It compares what a machine costs to keep running with what it cost to buy, which is the core number for repair or replace.', 'rental-kpi-library.html#rental-kpis'],
    ['Your fleet and rental vendors', 'rent_ready_turnaround', 'For rented units, this shows how long a vendor takes to turn a machine around, which is how long you wait for a replacement.', 'rental-kpi-library.html#rental-service-kpis']
  ];
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; }
  var wrap = el('div', 'dd-wrap'), table = el('table', 'dd-table');
  var head = el('thead'), hr = el('tr');
  ['Area', 'KPI', 'HEDS target', 'Why it matters to a fleet owner'].forEach(function (h) { hr.appendChild(el('th', '', h)); });
  head.appendChild(hr); table.appendChild(head);
  var body = el('tbody'), last = '';
  ROWS.forEach(function (r) {
    var t = T[r[1]]; if (!t) return;
    var tr = el('tr'), c0 = el('td', 'dd-dept', r[0]); c0.setAttribute('data-label', 'Area');
    if (r[0] === last) c0.className = 'dd-dept dd-repeat'; last = r[0];
    var c1 = el('td', 'dd-kpi'); c1.setAttribute('data-label', 'KPI');
    var a = el('a', '', t.name); a.href = r[3]; a.style.color = 'inherit'; c1.appendChild(a);
    var c2 = el('td', '', t.short || t.text); c2.setAttribute('data-label', 'HEDS target');
    var c3 = el('td', '', r[2]); c3.setAttribute('data-label', 'Why it matters');
    [c0, c1, c2, c3].forEach(function (c) { tr.appendChild(c); }); body.appendChild(tr);
  });
  table.appendChild(body); wrap.appendChild(table); root.textContent = ''; root.appendChild(wrap);
})();
