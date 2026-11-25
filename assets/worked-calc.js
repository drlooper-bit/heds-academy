(function (root) {
  function setDash(id, val) {
    var el = document.getElementById(id);
    if (!el) return;
    el.value = val;
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }
  function pct(v) { return Math.round(v * 10) / 10; }
  function ratio(v) { return Math.round(v * 100) / 100; }
  function money(v) { return Math.round(v); }
  function fmtPct(v) { return pct(v).toFixed(1) + '%'; }
  function fmtMoney(v) {
    var n = money(v);
    return (n < 0 ? '\u2212$' : '$') + Math.abs(n).toLocaleString();
  }
  function fmtRatio(v) { return ratio(v).toFixed(2); }
  function fmtHours(v) { return (Math.round(v * 10) / 10).toFixed(1) + ' hrs'; }
  function fmtNum(v) { return (Math.round(v * 10) / 10).toFixed(1); }
  function fmtInt(v) { return String(Math.round(v)); }
  var FMT = { pct: fmtPct, money: fmtMoney, ratio: fmtRatio, hours: fmtHours, num: fmtNum, int: fmtInt };
  function chip(kpi, value) {
    if (!kpi || typeof root.hedsGrade !== 'function' || value == null || !isFinite(value)) return '';
    var g = root.hedsGrade(kpi, value);
    var cls = g.grade === 'PASS' ? 'status-pass' : (g.grade === 'WARN' ? 'status-warn' : 'status-fail');
    return '<div class="metric-status ' + cls + '">' + g.grade + '</div>';
  }
  function resultBox(label, text, kpi, value) {
    return '<div class="metric-box"><div style="font-size:0.75rem;color:var(--muted);font-weight:700;">' + label +
      '</div><div class="metric-val" style="font-size:1.6rem;">' + text + '</div>' + chip(kpi, value) + '</div>';
  }
  function inputVal(wrap, id) {
    var el = wrap.querySelector('[data-fid="' + id + '"]');
    if (!el || el.value === '') return null;
    var n = parseFloat(el.value);
    return isFinite(n) ? n : null;
  }

  var CALCS = {
    turned_away: {
      kpi: 'turned_away_revenue', format: 'money', resultLabel: 'Turned-Away Revenue / mo',
      inputs: [
        { id: 'req', label: 'Lost rental requests per month', value: 6 },
        { id: 'rate', label: 'Average daily rate ($)', value: 475 },
        { id: 'days', label: 'Average days requested', value: 7 }
      ],
      compute: function (v) { return v.req * v.rate * v.days; },
      sync: function (res) { setDash('dm9_turned_away', money(res)); }
    },
    dollar_utilization: {
      kpi: 'dollar_utilization', format: 'pct', resultLabel: 'Dollar Utilization',
      inputs: [
        { id: 'rev', label: 'Annual rental revenue ($)', value: 2520000 },
        { id: 'oec', label: 'Total original equipment cost, OEC ($)', value: 4200000 }
      ],
      compute: function (v) { return v.oec ? (v.rev / v.oec) * 100 : null; },
      sync: function (res, v) { setDash('dm2_revenue', v.rev); setDash('dm2_oec', v.oec); }
    },
    time_utilization: {
      kpi: 'time_utilization', format: 'pct', resultLabel: 'Time Utilization',
      inputs: [
        { id: 'onrent', label: 'Total days units were on rent', value: 2980 },
        { id: 'avail', label: 'Net available rentable days', value: 4260 }
      ],
      compute: function (v) { return v.avail ? (v.onrent / v.avail) * 100 : null; },
      sync: function (res, v) { setDash('dm1_on_rent_days', v.onrent); setDash('dm1_avail_days', v.avail); }
    },
    idle_fleet: {
      kpi: 'idle_fleet', format: 'pct', resultLabel: 'Idle Fleet',
      inputs: [
        { id: 'idle', label: 'Units in yard not on rent (idle)', value: 35 },
        { id: 'total', label: 'Total fleet units', value: 150 }
      ],
      compute: function (v) { return v.total ? (v.idle / v.total) * 100 : null; },
      sync: function (res, v) { setDash('dm1_idle_units', v.idle); setDash('dm1_total_units', v.total); }
    },
    net_contribution: {
      kpi: 'net_contribution_per_unit', format: 'money', resultLabel: 'Net Contribution per Unit',
      inputs: [
        { id: 'rev', label: 'Annual rental revenue for the class ($)', value: 1360000 },
        { id: 'cost', label: 'Annual ownership cost for the class ($)', value: 384000 },
        { id: 'units', label: 'Unit count in the class', value: 8 }
      ],
      compute: function (v) { return v.units ? (v.rev / v.units) - (v.cost / v.units) : null; }
    },
    rack_rate: {
      format: 'money', resultLabel: 'Daily Rack Rate',
      inputs: [
        { id: 'cost', label: 'Annual ownership cost per unit ($)', value: 48000 },
        { id: 'mult', label: 'Target margin multiplier', value: 1.67 },
        { id: 'days', label: 'Target annual rental days', value: 250 },
        { id: 'actual', label: 'Actual invoiced rate ($/day)', value: '' }
      ],
      results: function (v) {
        var rack = (v.days && v.mult != null && v.cost != null) ? (v.cost * v.mult) / v.days : null;
        var out = [{ label: 'Daily Rack Rate', value: rack, format: 'money' }];
        if (rack && v.actual != null) {
          out.push({ label: 'Rate Realization', value: (v.actual / rack) * 100, format: 'pct', kpi: 'rate_realization' });
        }
        return out;
      },
      sync: function (res, v, outs) {
        var rack = outs && outs[0] ? outs[0].value : null;
        if (rack != null) setDash('dm6_rack_rate', money(rack));
        if (v.actual != null) setDash('dm6_actual_rate', v.actual);
        if (v.days != null) setDash('dm6_rental_days', v.days);
      }
    },
    avg_duration: {
      format: 'num', resultLabel: 'Average Rental Duration (days)',
      inputs: [
        { id: 'days', label: 'Total rental days', value: 2400 },
        { id: 'rentals', label: 'Total completed rentals', value: 85 }
      ],
      compute: function (v) { return v.rentals ? v.days / v.rentals : null; }
    },
    rate_erosion: {
      type: 'rows', format: 'money', resultLabel: 'Total Annual Rate Erosion',
      columns: [
        { key: 'name', label: 'Class', type: 'text' },
        { key: 'erode', label: 'Erosion ($/day)', type: 'number' },
        { key: 'days', label: 'Annual rental days', type: 'number' },
        { key: 'units', label: 'Unit count', type: 'number' }
      ],
      rows: [
        { name: 'Excavator', erode: 73, days: 250, units: 8 },
        { name: 'Skid Steer', erode: 28, days: 200, units: 15 },
        { name: 'Telehandler', erode: 45, days: 180, units: 6 }
      ],
      computeRow: function (r) { return r.erode * r.days * r.units; },
      sync: function (res) { setDash('dm9_rate_erosion', money(res / 12)); }
    },
    oec_roi: {
      kpi: 'dollar_utilization', format: 'pct', resultLabel: 'OEC ROI (Class)',
      inputs: [
        { id: 'rev', label: 'Annual rental revenue for the class ($)', value: 1360000 },
        { id: 'oec', label: 'Total OEC for the class ($)', value: 1920000 }
      ],
      compute: function (v) { return v.oec ? (v.rev / v.oec) * 100 : null; }
    },
    debt_to_asset: {
      kpi: 'debt_to_asset', format: 'pct', resultLabel: 'Debt-to-Asset Ratio',
      inputs: [
        { id: 'debt', label: 'Long-term fleet debt ($)', value: 1260000 },
        { id: 'oec', label: 'Total fleet OEC ($)', value: 4200000 }
      ],
      compute: function (v) { return v.oec ? (v.debt / v.oec) * 100 : null; }
    },
    lifetime_roi: {
      format: 'pct', resultLabel: 'Cumulative Lifetime ROI',
      inputs: [
        { id: 'rev', label: 'Total lifetime rental revenue ($)', value: 112000 },
        { id: 'oec', label: 'OEC ($)', value: 95000 },
        { id: 'net', label: 'Annual net contribution ($)', value: -4200 },
        { id: 'repair', label: 'Next required major repair ($)', value: 18000 }
      ],
      results: function (v) {
        var roi = v.oec ? (v.rev / v.oec) * 100 : null;
        var decision = '';
        if (roi != null && v.net != null) {
          if (roi > 100 && v.net < 0) decision = 'Disposition trigger met: recommend disposition, do not invest the next major repair.';
          else if (roi < 100 && v.net > 0) decision = 'Keep and monitor.';
          else if (roi < 100 && v.net < 0) decision = 'Review for major overhaul vs. disposition.';
        }
        var out = [{ label: 'Cumulative Lifetime ROI', value: roi, format: 'pct' }];
        if (decision) out.push({ label: 'Decision (from the stated trigger)', text: decision });
        return out;
      }
    },
    damage_recovery: {
      kpi: 'damage_recovery_rate', format: 'pct', resultLabel: 'Damage Recovery Rate',
      inputs: [
        { id: 'collected', label: 'Customer damage invoiced and collected ($)', value: 143000 },
        { id: 'cost', label: 'Total cost of customer damage repairs ($)', value: 186000 }
      ],
      compute: function (v) { return v.cost ? (v.collected / v.cost) * 100 : null; },
      sync: function (res, v) { setDash('dm7_invoiced', v.collected); setDash('dm7_total_damage', v.cost); }
    },
    collection_rate: {
      kpi: 'collection_rate', format: 'pct', resultLabel: 'Collection Rate',
      inputs: [
        { id: 'collected', label: 'Total rental revenue collected ($)', value: '' },
        { id: 'invoiced', label: 'Total rental revenue invoiced ($)', value: '' }
      ],
      compute: function (v) { return v.invoiced ? (v.collected / v.invoiced) * 100 : null; }
    },
    equipment_to_orders: {
      kpi: 'equipment_to_orders', format: 'ratio', resultLabel: 'Equipment-to-Orders Ratio',
      inputs: [
        { id: 'avail', label: 'Available units in the class', value: 10 },
        { id: 'reqs', label: 'Active rental requests for the class', value: 14 }
      ],
      compute: function (v) { return v.reqs ? v.avail / v.reqs : null; },
      sync: function (res, v) { setDash('dm8_avail_units', v.avail); setDash('dm8_active_reqs', v.reqs); }
    },
    quote_conversion: {
      kpi: 'quote_to_conversion', format: 'pct', resultLabel: 'Quote-to-Conversion',
      inputs: [
        { id: 'won', label: 'Quotes won', value: 52 },
        { id: 'sent', label: 'Total quotes sent', value: 85 }
      ],
      compute: function (v) { return v.sent ? (v.won / v.sent) * 100 : null; },
      sync: function (res, v) { setDash('dm8_quotes_won', v.won); setDash('dm8_quotes_sent', v.sent); }
    },
    freight: {
      inputs: [
        { id: 'cost', label: 'Total freight cost ($)', value: 48000 },
        { id: 'moves', label: 'Number of moves', value: 150 },
        { id: 'charged', label: 'Freight charged to customers ($)', value: 39600 }
      ],
      results: function (v) {
        var per = v.moves ? v.cost / v.moves : null;
        var rec = v.cost ? (v.charged / v.cost) * 100 : null;
        return [
          { label: 'Transport Cost per Move', value: per, format: 'money' },
          { label: 'Freight Recovery', value: rec, format: 'pct', kpi: 'freight_recovery' }
        ];
      },
      sync: function (res, v) {
        setDash('dm8_total_freight', v.cost);
        setDash('dm8_num_moves', v.moves);
        setDash('dm8_freight_charged', v.charged);
      }
    },
    stock_out: {
      type: 'rows', format: 'money', resultLabel: 'Total Monthly Stock-Out Revenue Loss',
      columns: [
        { key: 'name', label: 'Class', type: 'text' },
        { key: 'req', label: 'Turned-away requests', type: 'number' },
        { key: 'rate', label: 'Avg daily rate ($)', type: 'number' },
        { key: 'days', label: 'Avg days requested', type: 'number' }
      ],
      rows: [
        { name: 'Excavator', req: 6, rate: 850, days: 7 },
        { name: 'Skid Steer', req: 4, rate: 180, days: 5 }
      ],
      computeRow: function (r) { return r.req * r.rate * r.days; }
    },
    customer_churn: {
      kpi: 'customer_churn', format: 'pct', resultLabel: 'Quarterly Churn',
      inputs: [
        { id: 'lost', label: 'Customers lost this quarter', value: 4 },
        { id: 'total', label: 'Total active customers last quarter', value: 45 }
      ],
      compute: function (v) { return v.total ? (v.lost / v.total) * 100 : null; },
      sync: function (res, v) { setDash('s_churn_lost', v.lost); setDash('s_churn_total', v.total); }
    },
    hour_meter: {
      inputs: [
        { id: 'actual', label: 'Actual telematics hours', value: 194 },
        { id: 'contract', label: 'Contracted hours', value: 160 },
        { id: 'rate', label: 'Overage rate ($/hour)', value: 45 },
        { id: 'recon', label: 'Contracts reconciled with telematics', value: '' },
        { id: 'active', label: 'Total active contracts', value: '' }
      ],
      results: function (v) {
        var hours = (v.actual != null && v.contract != null) ? (v.actual - v.contract) : null;
        var rev = (hours != null && v.rate != null) ? hours * v.rate : null;
        var out = [
          { label: 'Hour-Meter Overage', value: hours, format: 'num', suffix: ' hours' },
          { label: 'Overage Revenue', value: rev, format: 'money' }
        ];
        if (v.active) out.push({ label: 'Billing Reconciliation Rate', value: (v.recon / v.active) * 100, format: 'pct', kpi: 'billing_reconciliation' });
        return out;
      }
    },
    ebitda_block: {
      inputs: [
        { id: 'ebitda', label: 'EBITDA ($)', value: 720000 },
        { id: 'rev', label: 'Total rental revenue ($)', value: 2400000 },
        { id: 'pers', label: 'Total wages + benefits + payroll taxes ($)', value: 624000 },
        { id: 'prior', label: 'Prior period revenue ($)', value: 2180000 }
      ],
      results: function (v) {
        return [
          { label: 'EBITDA Margin', value: v.rev ? (v.ebitda / v.rev) * 100 : null, format: 'pct', kpi: 'ebitda_margin' },
          { label: 'Personnel Expense', value: v.rev ? (v.pers / v.rev) * 100 : null, format: 'pct', kpi: 'personnel_expense' },
          { label: 'Revenue Growth', value: v.prior ? ((v.rev - v.prior) / v.prior) * 100 : null, format: 'pct', kpi: 'revenue_growth' }
        ];
      },
      sync: function (res, v) { setDash('s_ebitda_input', v.ebitda); setDash('s_revenue_input', v.rev); }
    },
    fleet_availability: {
      kpi: 'fleet_availability', format: 'pct', resultLabel: 'Fleet Physical Availability',
      inputs: [
        { id: 'ready', label: 'Rent-ready units', value: 35 },
        { id: 'onrent', label: 'On-rent units', value: 105 },
        { id: 'total', label: 'Total fleet units', value: 150 }
      ],
      compute: function (v) { return v.total ? ((v.ready + v.onrent) / v.total) * 100 : null; },
      sync: function (res, v) { setDash('dm1_ready_line', v.ready); setDash('dm1_on_rent', v.onrent); setDash('dm1_total_fleet', v.total); }
    },
    maint_oec: {
      kpi: 'maintenance_cost_oec', format: 'pct', resultLabel: 'Maintenance Cost as % of OEC',
      inputs: [
        { id: 'spend', label: 'Trailing 12-month maintenance spend, tech labor excluded ($)', value: 10800 },
        { id: 'oec', label: 'Original equipment cost ($)', value: 240000 }
      ],
      compute: function (v) { return v.oec ? (v.spend / v.oec) * 100 : null; },
      sync: function (res, v) { setDash('dm2_maint_spend', v.spend); setDash('dm2_oec', v.oec); }
    },
    mttr: {
      format: 'hours', resultLabel: 'Mean Time to Repair',
      inputs: [
        { id: 'hours', label: 'Total hands-on mechanical repair hours', value: '' },
        { id: 'jobs', label: 'Total completed repair jobs', value: '' }
      ],
      compute: function (v) { return v.jobs ? v.hours / v.jobs : null; }
    },
    labor_rs: {
      inputs: [
        { id: 'wo', label: 'Hours on work orders', value: 174 },
        { id: 'paid', label: 'Paid payroll hours', value: 200 },
        { id: 'inv', label: 'Hours invoiced on work orders', value: '' }
      ],
      results: function (v) {
        var out = [{ label: 'Labor Recovery', value: v.paid ? (v.wo / v.paid) * 100 : null, format: 'pct', kpi: 'rs_technician_recovery' }];
        if (v.wo && v.inv != null) out.push({ label: 'Labor Utilization', value: (v.inv / v.wo) * 100, format: 'pct', kpi: 'rs_labor_utilization' });
        return out;
      },
      sync: function (res, v) {
        setDash('dm5_wo_hours', v.wo); setDash('dm5_payroll_hours', v.paid);
        if (v.inv != null) setDash('dm5_inv_hours', v.inv);
      }
    },
    compliance: {
      kpi: 'compliance_audit', format: 'pct', resultLabel: 'Branch Compliance Audit Score',
      inputs: [
        { id: 'passed', label: 'Passed audit items', value: 17 },
        { id: 'total', label: 'Total audit items', value: 20 }
      ],
      compute: function (v) { return v.total ? (v.passed / v.total) * 100 : null; }
    },
    run_rate: {
      inputs: [
        { id: 'cons', label: 'Trailing 6-month parts consumption (units)', value: 48 },
        { id: 'onhand', label: 'Current on-hand inventory (units)', value: 24 }
      ],
      results: function (v) {
        var monthly = v.cons != null ? v.cons / 6 : null;
        var target = monthly != null ? monthly * 3 : null;
        return [
          { label: 'Monthly Run Rate', value: monthly, format: 'num', suffix: ' units/month' },
          { label: '90-Day Target Inventory', value: target, format: 'num', suffix: ' units' }
        ];
      }
    },
    spi: {
      type: 'rows', format: 'num', resultLabel: 'Highest SPI (repair first)',
      columns: [
        { key: 'name', label: 'Unit', type: 'text' },
        { key: 'rate', label: 'Daily book rental rate ($)', type: 'number' },
        { key: 'hours', label: 'Estimated mechanical repair hours', type: 'number' }
      ],
      rows: [
        { name: 'Unit A: 50-Ton Excavator', rate: 850, hours: 2 },
        { name: 'Unit B: 8,000-lb Telehandler', rate: 240, hours: 1.5 },
        { name: 'Unit C: 19ft Scissor Lift', rate: 70, hours: 4 }
      ],
      computeRow: function (r) { return r.hours ? r.rate / r.hours : null; },
      total: 'max'
    },
    damage_rs: {
      kpi: 'damage_recovery_rate', format: 'pct', resultLabel: 'Damage Recovery Rate',
      inputs: [
        { id: 'collected', label: 'Customer abuse invoiced and collected ($)', value: '' },
        { id: 'cost', label: 'Total cost of customer damage repairs ($)', value: '' }
      ],
      compute: function (v) { return v.cost ? (v.collected / v.cost) * 100 : null; },
      sync: function (res, v) { setDash('dm7_invoiced', v.collected); setDash('dm7_total_damage', v.cost); }
    },
    downtime_lost: {
      format: 'money', resultLabel: 'Downtime Lost Revenue / yr',
      inputs: [
        { id: 'rev', label: 'Annual rental revenue ($)', value: 10000000 },
        { id: 'down', label: 'Fleet downtime %', value: 6 },
        { id: 'util', label: 'Cat class time utilization %', value: 75 }
      ],
      compute: function (v) { return v.rev * (v.down / 100) * (v.util / 100); },
      sync: function (res, v) { setDash('dm4_revenue', v.rev); setDash('dm4_util', v.util); }
    },
    weekly_variance: {
      inputs: [
        { id: 'held', label: 'Days the standup was held', value: 4 },
        { id: 'days', label: 'Total business days', value: 5 },
        { id: 'late', label: 'Work orders not closed and invoiced within 48 hours of last labor', value: 3 }
      ],
      results: function (v) {
        return [
          { label: 'Standup Attendance Rate', value: v.days ? (v.held / v.days) * 100 : null, format: 'pct', kpi: 'standup_attendance' },
          { label: 'Late Close Work Orders', value: v.late, format: 'int', kpi: 'late_close_work_orders' }
        ];
      },
      sync: function (res, v) { if (v.late != null) setDash('dm5_late_count', v.late); }
    }
  };

  function readInputs(wrap, cfg) {
    var v = {}, missing = false, any = false;
    (cfg.inputs || []).forEach(function (inp) {
      var el = wrap.querySelector('[data-fid="' + inp.id + '"]');
      if (!el || el.value === '') { if (inp.value !== '' && inp.value != null) missing = true; return; }
      var n = parseFloat(el.value);
      if (!isFinite(n)) { missing = true; return; }
      v[inp.id] = n; any = true;
    });
    return { v: v, any: any };
  }
  function paintResults(wrap, items) {
    var box = wrap.querySelector('.wc-results');
    if (!box) return;
    box.innerHTML = items.filter(function (it) { return it && (it.text || (it.value != null && isFinite(it.value))); }).map(function (it) {
      if (it.text && it.value == null) {
        return '<div class="metric-box"><div style="font-size:0.75rem;color:var(--muted);font-weight:700;">' + it.label +
          '</div><div style="font-size:0.95rem;margin-top:6px;line-height:1.5;">' + it.text + '</div></div>';
      }
      var raw = it.value;
      var display = it.format === 'pct' ? pct(raw) : (it.format === 'ratio' ? ratio(raw) : (it.format === 'money' ? money(raw) : raw));
      var text = (FMT[it.format] ? FMT[it.format](raw) : String(raw)) + (it.suffix || '');
      var gradeVal = it.format === 'pct' || it.format === 'ratio' || it.format === 'money' ? display : raw;
      return resultBox(it.label, text, it.kpi, gradeVal);
    }).join('');
  }
  function run(wrap, user) {
    var id = wrap.getAttribute('data-calc');
    var cfg = CALCS[id]; if (!cfg) return;
    if (cfg.type === 'rows') {
      var rows = [];
      wrap.querySelectorAll('tbody tr').forEach(function (tr) {
        var r = {};
        cfg.columns.forEach(function (col) {
          var el = tr.querySelector('[data-col="' + col.key + '"]');
          if (!el) return;
          r[col.key] = col.type === 'text' ? el.value : parseFloat(el.value);
        });
        r._result = cfg.computeRow(r);
        rows.push(r);
        var cell = tr.querySelector('.wc-row-res');
        if (cell && r._result != null && isFinite(r._result)) cell.textContent = (FMT[cfg.format] || FMT.num)(r._result);
      });
      var total;
      if (cfg.total === 'max') {
        total = rows.reduce(function (m, r) { return r._result != null && (m == null || r._result > m) ? r._result : m; }, null);
      } else {
        total = rows.reduce(function (s, r) { return s + (isFinite(r._result) ? r._result : 0); }, 0);
      }
      paintResults(wrap, [{ label: cfg.resultLabel, value: total, format: cfg.format, kpi: cfg.kpi, suffix: cfg.suffix }]);
      if (user && cfg.sync) cfg.sync(total);
      return;
    }
    var got = readInputs(wrap, cfg);
    var items;
    if (cfg.results) items = cfg.results(got.v);
    else items = [{ label: cfg.resultLabel, value: cfg.compute(got.v), format: cfg.format, kpi: cfg.kpi, suffix: cfg.suffix }];
    paintResults(wrap, items);
    if (user && cfg.sync) cfg.sync(items[0] && items[0].value, got.v, items);
  }
  function hasExample(cfg) {
    if (cfg.type === 'rows') return true;
    return (cfg.inputs || []).some(function (i) { return i.value !== '' && i.value != null; });
  }
  function loadExample(wrap) {
    var cfg = CALCS[wrap.getAttribute('data-calc')]; if (!cfg) return;
    if (cfg.type === 'rows') {
      wrap.querySelectorAll('tbody tr').forEach(function (tr, i) {
        var row = (cfg.rows || [])[i]; if (!row) return;
        cfg.columns.forEach(function (col) {
          var el = tr.querySelector('[data-col="' + col.key + '"]');
          if (el) el.value = row[col.key];
        });
      });
    } else {
      (cfg.inputs || []).forEach(function (inp) {
        var el = wrap.querySelector('[data-fid="' + inp.id + '"]');
        if (el) el.value = inp.value === '' || inp.value == null ? '' : inp.value;
      });
    }
    run(wrap, false);
  }
  function render(el) {
    var id = el.getAttribute('data-calc');
    var cfg = CALCS[id];
    if (!cfg) { el.innerHTML = ''; return; }
    var head = '<div class="wc-head"><div class="wc-title">Enter your numbers</div>' +
      (hasExample(cfg) ? '<button type="button" class="wc-load">Load example</button>' : '') + '</div>';
    var body = '';
    if (cfg.type === 'rows') {
      var th = cfg.columns.map(function (c) { return '<th>' + c.label + '</th>'; }).join('') + '<th>Result</th>';
      var trs = (cfg.rows || []).map(function (row) {
        var tds = cfg.columns.map(function (c) {
          var typ = c.type === 'text' ? 'text' : 'number';
          return '<td><input type="' + typ + '" data-col="' + c.key + '" value="' + (row[c.key] != null ? row[c.key] : '') + '"></td>';
        }).join('');
        return '<tr>' + tds + '<td class="wc-row-res"></td></tr>';
      }).join('');
      body = '<div class="wc-rows"><table><thead><tr>' + th + '</tr></thead><tbody>' + trs + '</tbody></table></div>';
    } else {
      var cols = (cfg.inputs || []).length >= 4 ? ' wc-grid cols-3' : '';
      body = '<div class="wc-grid' + cols + '">' + (cfg.inputs || []).map(function (inp) {
        var val = inp.value === '' || inp.value == null ? '' : inp.value;
        return '<div class="form-group"><label>' + inp.label + '</label><input type="number" data-fid="' + inp.id + '" value="' + val + '"></div>';
      }).join('') + '</div>';
    }
    el.innerHTML = head + body + '<div class="wc-results"></div>';
    el.addEventListener('input', function () { run(el, true); });
    var btn = el.querySelector('.wc-load');
    if (btn) btn.addEventListener('click', function () { loadExample(el); });
    run(el, false);
  }
  function init() {
    document.querySelectorAll('.worked-calc[data-calc]').forEach(render);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
  root.HEDS_WORKED_CALCS = CALCS;
})(window);
