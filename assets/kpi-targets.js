/*
  HEDS KPI targets. This is the single source for every target the KPI calculators use.
  Change a target here and both the Dealer and Rental calculators change with it.
  A rule is checked in order against the result rounded to one decimal. The first rule that
  matches sets the grade. If none match, the "otherwise" grade applies.
  A "pending" note marks a target that Daniel has not settled. The calculator follows the live
  dashboards for any pending item.
*/
(function (root) {
  var LAB_TXT = 'Check time coding';
  var T = {
    /* ---- Dealer: Service ---- */
    location_absorption: { name: 'Location Absorption', unit: '%',
      text: 'The location target is 100% to 110%.',
      rules: [{ op: 'lt', v: 100, grade: 'FAIL', label: 'Below 100%' }], otherwise: { grade: 'PASS' } },
    service_absorption: { name: 'Service Absorption', unit: '%',
      text: "Service carries 70% to 75% of the location's absorption. Below 70% is a red flag.",
      rules: [{ op: 'lt', v: 70, grade: 'FAIL', label: 'Below 70%' }], otherwise: { grade: 'PASS' } },
    parts_absorption: { name: 'Parts Absorption', unit: '%',
      text: "Parts carries 30% to 40% of the location's absorption. Below 30% is a red flag.",
      rules: [{ op: 'lt', v: 30, grade: 'FAIL', label: 'Below 30%' }], otherwise: { grade: 'PASS' } },
    technician_recovery: { name: 'Labor Recovery', unit: '%',
      text: '95% to 100%',
      rules: [{ op: 'gt', v: 100, grade: 'WARN', label: LAB_TXT }, { op: 'gte', v: 95, grade: 'PASS' }, { op: 'gt', v: 85, grade: 'WARN' }],
      otherwise: { grade: 'FAIL', label: 'Red flag' },
      pending: 'Above-band grading. The live dashboards warn above 100%. The settled rule says above the band passes.' },
    labor_utilization: { name: 'Labor Utilization', unit: '%',
      text: '95% to 100%. At 85% or below, the shop is losing money.',
      rules: [{ op: 'gt', v: 100, grade: 'WARN', label: LAB_TXT }, { op: 'gte', v: 95, grade: 'PASS' }, { op: 'gt', v: 85, grade: 'WARN' }],
      otherwise: { grade: 'FAIL', label: 'Red flag' },
      pending: 'Above-band grading. The live dashboards warn above 100%. The settled rule says above the band passes.' },
    shop_efficiency: { name: 'Shop Efficiency', unit: '%',
      text: '110%',
      rules: [{ op: 'gte', v: 110, grade: 'PASS' }, { op: 'gte', v: 100, grade: 'WARN', label: 'Below 110%' }],
      otherwise: { grade: 'FAIL', label: 'Below 100%' },
      pending: 'Target value. The canvas simulation says 100% or better. The live site says 110%.' },
    last_labor_to_invoice: { name: 'Last Labor to Invoice', unit: 'orders',
      text: '48 hours',
      rules: [{ op: 'gt', v: 0, grade: 'FAIL', label: 'Past 48 hours' }], otherwise: { grade: 'PASS' } },
    service_labor_gross_margin: { name: 'Service Labor Gross Margin', unit: '%',
      text: '75% to 80%',
      rules: [{ op: 'gte', v: 75, grade: 'PASS' }], otherwise: { grade: 'FAIL' } },
    effective_labor_rate: { name: 'Effective Labor Rate', unit: '%',
      text: '92% of posted labor rate. Below 92% is a red flag.',
      rules: [{ op: 'gte', v: 92, grade: 'PASS' }], otherwise: { grade: 'FAIL', label: 'Red flag' } },
    first_time_fix_rate: { name: 'First-Time Fix Rate', unit: '%',
      text: '85% to 90%',
      rules: [{ op: 'gte', v: 85, grade: 'PASS' }], otherwise: { grade: 'FAIL' },
      pending: 'The library says 85% to 90%. The Service dashboard passes at 88% or more. The calculator passes at 85% or more.' },
    /* ---- Dealer: Parts ---- */
    parts_gross_margin: { name: 'Parts Gross Margin', unit: '%',
      text: '33% to 37%',
      rules: [{ op: 'gte', v: 33, grade: 'PASS' }], otherwise: { grade: 'FAIL' },
      pending: 'Target value. The canvas simulation says 30% to 35%. The live site says 33% to 37%.' },
    parts_share_of_gross_margin: { name: 'Parts Share of Dealership Gross Margin', unit: '%',
      text: '25% to 30% of total dealership gross margin, not percent of sales',
      rules: [{ op: 'gte', v: 25, grade: 'PASS' }, { op: 'gte', v: 20, grade: 'WARN' }], otherwise: { grade: 'FAIL' } },
    parts_salaries_pct_gp: { name: 'Parts Salaries as a Percent of Parts Gross Profit', unit: '%',
      text: '30% or less',
      rules: [{ op: 'lte', v: 30, grade: 'PASS' }, { op: 'lte', v: 32, grade: 'WARN' }], otherwise: { grade: 'FAIL' },
      pending: 'Red line. The canvas simulation turns red above 30%. The live dashboard warns to 32% and fails above 32%.' },
    gross_parts_turns: { name: 'Gross Parts Turns', unit: 'turns',
      text: '3 to 4 turns a year, reported overall and by ABC class',
      rules: [{ op: 'lt', v: 3, grade: 'WARN', label: 'Too much stock' }, { op: 'gt', v: 4, grade: 'WARN', label: 'Too little stock' }], otherwise: { grade: 'PASS' } },
    stock_order_percent: { name: 'Stock Order Percent', unit: '%',
      text: '80%',
      rules: [{ op: 'gte', v: 80, grade: 'PASS' }, { op: 'gte', v: 65, grade: 'WARN' }], otherwise: { grade: 'FAIL' },
      pending: 'Target value. The canvas simulation says 70% or better. The live site says 80%.' },
    obsolete_excess_stock: { name: 'Obsolete and Excess Stock', unit: '%',
      text: 'Under 5% of parts inventory',
      rules: [{ op: 'lt', v: 5, grade: 'PASS' }, { op: 'lte', v: 10, grade: 'WARN' }], otherwise: { grade: 'FAIL' } },
    counter_fill_rate: { name: 'Counter Fill Rate', unit: '%',
      text: '85%, the sweet spot',
      rules: [{ op: 'gte', v: 85, grade: 'PASS' }, { op: 'gte', v: 80, grade: 'WARN' }], otherwise: { grade: 'FAIL' },
      pending: 'Target value. The canvas simulation says 90% or better. The live site says 85%.' },
    service_fill_rate: { name: 'Service Fill Rate', unit: '%',
      text: '90% to 95%',
      rules: [{ op: 'gte', v: 90, grade: 'PASS' }, { op: 'gte', v: 85, grade: 'WARN' }], otherwise: { grade: 'FAIL' } },
    /* ---- Rental ---- */
    time_utilization: { name: 'Time Utilization', unit: '%',
      short: '65% to 75% passes, per the Rental dashboard',
      text: 'Rental targets are covered in training. The Rental dashboard grades 65% to 75% as a pass.',
      rules: [{ op: 'gt', v: 85, grade: 'FAIL' }, { op: 'gt', v: 75, grade: 'WARN', label: 'Check fleet size' }, { op: 'gte', v: 65, grade: 'PASS' }, { op: 'gte', v: 55, grade: 'WARN' }],
      otherwise: { grade: 'FAIL' },
      pending: 'Whether rental targets show in the calculator and library. Above-band grading warns above 75%.' },
    dollar_utilization: { name: 'Dollar Utilization', unit: '%',
      short: '55% or more passes, per the Rental dashboard',
      text: 'Rental targets are covered in training. The Rental dashboard grades 55% or more as a pass.',
      rules: [{ op: 'gte', v: 55, grade: 'PASS' }, { op: 'gte', v: 50, grade: 'WARN' }], otherwise: { grade: 'FAIL' },
      pending: 'Whether rental targets show in the calculator and library.' },
    maintenance_cost_oec: { name: 'Maintenance Cost as a Percent of OEC', unit: '%',
      short: '8% or less passes, per the dashboards',
      text: 'Rental targets are covered in training. The dashboards grade 8% or less as a pass.',
      rules: [{ op: 'lte', v: 8, grade: 'PASS' }, { op: 'lte', v: 10, grade: 'WARN' }], otherwise: { grade: 'FAIL' },
      pending: 'Red line. The canvas simulation turns red above 8%. The Rental Service dashboard warns from 8.1% to 10%.' },
    ebitda_margin: { name: 'EBITDA Margin', unit: '%',
      text: 'Rental targets are covered in training. The Rental dashboard grades 30% or more as a pass.',
      rules: [{ op: 'gte', v: 30, grade: 'PASS' }, { op: 'gte', v: 20, grade: 'WARN' }], otherwise: { grade: 'FAIL' },
      pending: 'Whether rental targets show in the calculator and library. The settled band is 30% to 46%.' },
    equipment_downtime: { name: 'Equipment Downtime', unit: '%',
      short: 'Under 8% passes, per the Rental dashboard',
      text: 'Rental targets are covered in training. The Rental dashboard grades under 8% as a pass. Downtime lost revenue is downtime revenue times the cat class time utilization.',
      rules: [{ op: 'lt', v: 8, grade: 'PASS' }, { op: 'lte', v: 12, grade: 'WARN' }], otherwise: { grade: 'FAIL' } },
    rate_realization: { name: 'Rate Realization', unit: '%',
      short: '90% or more passes, per the Rental dashboard',
      text: 'Rental targets are covered in training. The Rental dashboard grades 90% or more as a pass.',
      rules: [{ op: 'gte', v: 90, grade: 'PASS' }, { op: 'gte', v: 80, grade: 'WARN' }], otherwise: { grade: 'FAIL' } },
    equipment_to_orders: { name: 'Equipment to Orders Ratio', unit: 'ratio',
      short: '0.9 to 1.2 passes, per the Rental dashboard',
      text: 'Rental targets are covered in training. The Rental dashboard grades 0.9 to 1.2 as a pass.',
      rules: [{ op: 'lt', v: 0.8, grade: 'FAIL', label: 'Under supplied' }, { op: 'lt', v: 0.9, grade: 'WARN', label: 'Under supplied' }, { op: 'lte', v: 1.2, grade: 'PASS' }, { op: 'lte', v: 1.5, grade: 'WARN', label: 'Over supplied' }], otherwise: { grade: 'FAIL', label: 'Over supplied' } },
    customer_churn: { name: 'Customer Churn (quarterly)', unit: '%',
      text: 'Rental targets are covered in training. The Rental dashboard grades under 10% as a pass.',
      rules: [{ op: 'lt', v: 10, grade: 'PASS' }, { op: 'lte', v: 15, grade: 'WARN' }], otherwise: { grade: 'FAIL' },
      pending: 'Whether rental targets show in the calculator and library.' },
    /* ---- Rental Service ---- */
    rent_ready_turnaround: { name: 'Off Rent to Rent-Ready', unit: 'hrs',
      short: '48 hours or less passes, per the Rental Service dashboard',
      text: 'Rental targets are covered in training. The Rental Service dashboard grades 48 hours or less as a pass.',
      rules: [{ op: 'gt', v: 48, grade: 'FAIL', label: 'Over 48 hours' }], otherwise: { grade: 'PASS' } },
    rs_technician_recovery: { name: 'Labor Recovery', unit: '%',
      text: 'Rental targets are covered in training. The Rental Service dashboard grades 95% to 100% as a pass.',
      rules: [{ op: 'gt', v: 100, grade: 'WARN', label: LAB_TXT }, { op: 'gte', v: 95, grade: 'PASS' }, { op: 'gt', v: 85, grade: 'WARN' }],
      otherwise: { grade: 'FAIL', label: 'Red flag' },
      pending: 'Formula wording and above-band grading. The dashboard uses hours on work orders over paid hours.' },
    rs_labor_utilization: { name: 'Labor Utilization', unit: '%',
      text: 'Rental targets are covered in training. The Rental Service dashboard grades 95% to 100% as a pass.',
      rules: [{ op: 'gt', v: 100, grade: 'WARN', label: LAB_TXT }, { op: 'gte', v: 95, grade: 'PASS' }, { op: 'gt', v: 85, grade: 'WARN' }],
      otherwise: { grade: 'FAIL', label: 'Red flag' },
      pending: 'Above-band grading. The live dashboards warn above 100%.' },
    fleet_availability: { name: 'Fleet Physical Availability', unit: '%',
      text: 'Rental targets are covered in training. The Rental Service dashboard grades 92% or more as a pass.',
      rules: [{ op: 'gte', v: 92, grade: 'PASS' }, { op: 'gte', v: 88, grade: 'WARN' }], otherwise: { grade: 'FAIL' } },
    fleet_downtime: { name: 'Fleet Downtime', unit: '%',
      short: 'Under 8% passes, per the Rental Service dashboard',
      text: 'Rental targets are covered in training. The Rental Service dashboard grades under 8% as a pass. Downtime lost revenue is downtime revenue times the cat class time utilization.',
      rules: [{ op: 'lt', v: 8, grade: 'PASS' }, { op: 'lte', v: 12, grade: 'WARN' }], otherwise: { grade: 'FAIL' } },
    late_close_work_orders: { name: 'Late Close Work Orders', unit: 'orders',
      text: 'Rental targets are covered in training. Any work order past 48 hours of last labor is a fail.',
      rules: [{ op: 'gt', v: 0, grade: 'FAIL', label: 'Past 48 hours' }], otherwise: { grade: 'PASS' } },
    parts_buffer: { name: 'Parts Buffer (Months of Supply)', unit: 'months',
      text: 'Rental targets are covered in training. The Rental Service dashboard grades 2.5 to 3.5 months as a pass.',
      rules: [{ op: 'lt', v: 1.5, grade: 'FAIL', label: 'Stockout risk' }, { op: 'gt', v: 4.5, grade: 'FAIL', label: 'Excess stock' }, { op: 'lt', v: 2.5, grade: 'WARN' }, { op: 'gt', v: 3.5, grade: 'WARN' }],
      otherwise: { grade: 'PASS' } },
    damage_recovery_rate: { name: 'Damage Recovery Rate', unit: '%',
      text: 'Rental targets are covered in training. The Rental Service dashboard grades 85% or more as a pass.',
      rules: [{ op: 'gte', v: 85, grade: 'PASS' }, { op: 'gte', v: 70, grade: 'WARN' }], otherwise: { grade: 'FAIL' } },
    telematics_triage: { name: 'Telematics Triage', unit: '%',
      text: 'Rental targets are covered in training. The Rental Service dashboard grades 90% or more as a pass.',
      rules: [{ op: 'gte', v: 90, grade: 'PASS' }, { op: 'gte', v: 75, grade: 'WARN' }], otherwise: { grade: 'FAIL' } }
  };

  function grade(id, value) {
    var t = T[id];
    var v = t.unit === 'ratio' ? Math.round(value * 100) / 100 : Math.round(value * 10) / 10;
    for (var i = 0; i < t.rules.length; i++) {
      var r = t.rules[i], hit = false;
      if (r.op === 'gt') hit = v > r.v;
      else if (r.op === 'gte') hit = v >= r.v;
      else if (r.op === 'lt') hit = v < r.v;
      else if (r.op === 'lte') hit = v <= r.v;
      if (hit) return { grade: r.grade, label: r.label || '' };
    }
    return { grade: t.otherwise.grade, label: t.otherwise.label || '' };
  }

  root.HEDS_KPI_TARGETS = T;
  root.hedsGrade = grade;
})(window);
