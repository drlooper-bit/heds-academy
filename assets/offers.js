/* HEDS offers: one shared "How it works" illustration for every paid offer.
   Each offer has numbered steps, the deliverable, and the price.
   To change a price or step, edit it here once and every page updates.
   Pages place an offer with <div data-offer="snapshot"></div>.
   No dashes or bullet lists in any text below. Full sentences only. */
(function (w) {
  'use strict';

  var BOOK = 'https://calendar.app.google/8R2rX7THVQffsytT8';
  var EXTRA = 'Additional work you ask for beyond the package is billed at $200 an hour.';
  var TRAVEL = 'Travel time, mileage, lodging and meals are invoiced at actual cost and are not built into the price.';

  // price rows: { label, amount }. Edit amounts here and every page updates.
  var OFFERS = {

    snapshot: {
      title: 'Initial Snapshot',
      steps: [
        { h: 'Book a short call', t: 'You book a discovery call with HEDS to confirm which location the snapshot covers and which reports you can send.' },
        { h: 'Send a few reports', t: 'You send a small set of reports you already run, such as the Departmental P&L Summary, the Open Work Order Report and the Shop Labor Tracking Report.' },
        { h: 'HEDS reads them', t: 'HEDS reads those reports against a handful of KPIs from the HEDS KPI Library, such as location absorption, effective labor rate, labor recovery, parts gross margin and Last Labor to Invoice.' },
        { h: 'You get the snapshot', t: 'HEDS returns a short snapshot of where your location stands and calls out your biggest dollar leak.' }
      ],
      deliver: 'A short written snapshot that shows where your location stands on a handful of KPIs, with your biggest dollar leak called out so you know where to start.',
      see: { links: [{ t: 'Dealer KPI Library', h: 'dealer-kpi-library.html' }], then: 'then book the ', next: { t: 'Operational Health Analysis', h: 'index.html#health-analysis' } },
      price: [ { label: 'Initial Snapshot, one page on three KPIs', amount: 'Free' } ]
    },

    analysis: {
      title: 'Operational Health Analysis',
      lead: 'This is a remote review of one branch. There is no onsite visit.',
      // NAME-PLACEHOLDER: "Operational Health Analysis" is a placeholder name until Daniel confirms it.
      steps: [
        { h: 'Send your reports', t: 'You send your P&L and the standard service and parts reports for the branch from your dealer system.' },
        { h: 'We review the numbers', t: 'HEDS reviews the branch reports remotely against our benchmarks and identifies where performance is falling short.' },
        { h: 'Receive your report', t: 'You receive a written report on the branch with recommendations.' }
      ],
      deliver: 'Your branch performance against HEDS benchmarks, a projection of what closing each gap is worth in dollars calculated from your own numbers, and a written report with recommendations for the branch.',
      see: { links: [{ t: 'Dealer KPI Library', h: 'dealer-kpi-library.html' }], then: 'then, when findings are presented, talk about the ', next: { t: '90-day pilot implementation', h: 'index.html#pilot' } },
      price: [ { label: 'Operational Health Analysis, one branch, remote', amount: '$1,600' } ],
      note: 'If you want an onsite review, the Single Location Audit is the onsite option. If you book the $3,200 Single Location Audit within 30 days, your $1,600 is credited toward it, so you pay $1,600 more. The credit applies once.',
      extra: true, travel: false,
      cta: { label: 'Book a Discovery Call', href: BOOK }
    },

    audit: {
      title: 'Onsite Audit and Due Diligence',
      lead: 'The onsite audit is done at your location.',
      steps: [
        { h: 'Scope the audit', t: 'You book a 30 minute discovery call, and HEDS agrees the locations, the departments and the number of days with you.' },
        { h: 'Send your reports', t: 'You pull four standard ERP or DMS reports, and HEDS builds a baseline snapshot before arriving onsite.' },
        { h: 'We audit onsite', t: 'Our team walks the shop floor, reviews the parts counter and the rental yard, verifies the ERP reports and interviews your managers.' },
        { h: 'Receive your findings report', t: 'HEDS delivers the findings report within 5 business days, and the report is included with every audit.' }
      ],
      deliver: 'A findings report with dollar quantified leaks, a department by department scorecard against industry benchmarks, and a prioritized fix list ranked by dollar impact and ease of implementation.',
      see: { links: [{ t: 'Due Diligence Scorecard', h: 'due-diligence-scorecard.html' }], then: 'then book the ', next: { t: 'Operational Health Analysis', h: 'index.html#health-analysis' } },
      price: [
        { label: 'Single Location Audit, 1 day', amount: '$3,200' },
        { label: 'Full Branch Audit, 2 days', amount: '$5,600' },
        { label: 'Multi Branch Audit, 1 day per site', amount: '$2,800 per site' },
        { label: 'Multi Branch Audit, 2 days per site', amount: '$4,800 per site' },
        { label: 'Acquisition Due Diligence, 3 days', amount: '$8,000' },
        { label: 'Acquisition Due Diligence, 5 days', amount: '$12,000' }
      ],
      extra: true, travel: true,
      cta: { label: 'Book a Discovery Call', href: BOOK }
    },

    training: {
      title: 'Onsite Training Course, 5 Days',
      lead: 'Training is a supporting offer, not the first ask. Each course is five days onsite for one manager, one on one with HEDS, built on your real data.',
      steps: [
        { h: 'Take the assessment', t: 'Step one: the Industry Knowledge Assessment shows where to focus with each manager. Each manager sits the proctored 50 question assessment and gets a score report.' },
        { h: 'Scope the course', t: 'You book a discovery call, and HEDS recommends the right track and agrees the dates for the manager or managers who will attend.' },
        { h: 'Send the pre-work', t: 'Three to five days before the course, you send four standard reports, and HEDS returns a one page Current State Scorecard.' },
        { h: 'Five days onsite', t: 'The manager spends five days at your location with classroom work, floor time and live process redesign using your real data.' },
        { h: 'Leave with a plan', t: 'By the end of the week the manager has built a personal scorecard and a written 90 day action plan from your own numbers.' }
      ],
      deliver: 'A personal scorecard, a signed and dated 90 day action plan, an interactive dashboard you keep, the 50 question Industry Knowledge Assessment with a score report, implementation templates and a Management Readiness Score.',
      see: { links: [{ t: 'Service Manager', h: 'service-manager-dashboard.html' }, { t: 'Parts Manager', h: 'parts-manager-dashboard.html' }, { t: 'Rental Manager', h: 'rental-manager-dashboard.html' }, { t: 'Rental Service Manager', h: 'rental-service-manager-dashboard.html' }], then: 'then book a discovery call to choose your course.' },
      price: [ { label: 'Any one of the four courses', amount: '$8,000 per manager' } ],
      priceList: ['Service Manager', 'Parts Manager', 'Rental Manager', 'Rental Service Manager'],
      note: 'Location packages for several managers are scoped on a discovery call. Branch Manager and Regional and Executive Leadership courses are in development.',
      extra: true, travel: true,
      cta: { label: 'Book a Discovery Call', href: BOOK }
    },

    followup: {
      title: 'Follow-Up Coaching',
      lead: 'Purchased separately after a course or after a 90-day pilot. It is never bundled into a package you may not need.',
      steps: [
        { h: 'A metric stalls', t: 'After your course, you or HEDS see that a metric is not moving as planned.' },
        { h: 'Agree the focus', t: 'You and HEDS agree which stalled metric the coaching will target.' },
        { h: 'Virtual sessions', t: 'HEDS runs virtual coaching sessions on that specific area until execution is back on plan.' }
      ],
      deliver: 'Virtual coaching sessions focused on the specific metric that is not progressing as planned.',
      price: [
        { label: 'Follow-Up Coaching, one session', amount: '$300' },
        { label: 'Follow-Up Coaching, 5 sessions', amount: '$1,350' }
      ],
      cta: { label: 'Book a Discovery Call', href: BOOK }
    },

    fleet: {
      title: 'HEDS for Fleet Owners',
      lead: 'For construction companies, municipal fleets and utility fleets that own heavy equipment and depend on dealers and rental companies for parts and service.',
      steps: [
        { h: 'Talk with HEDS', t: 'You book a discovery call to agree which dealers, rental companies and machines you want reviewed.' },
        { h: 'Send the history', t: 'You send each machine\u2019s service work orders, parts purchases, down days and total maintenance cost for the period you want to judge.' },
        { h: 'HEDS reads the record', t: 'HEDS works out maintenance cost as a percent of OEC, reviews the downtime and its causes, and scores each vendor on labor rate billed, parts on the shelf, work order close time and first time fix.' },
        { h: 'You decide', t: 'You use the findings to decide whether to repair, rebuild, replace or buy, and to hold your dealer or rental company to a standard.' }
      ],
      // DELIVERABLE-TBC: Daniel to confirm the package name, scope and report format for fleet owners.
      deliver: 'A written read of each vendor\u2019s service and parts performance against the HEDS KPI targets, with the maintenance cost and downtime history for each machine you want to judge.',
      see: { links: [{ t: 'fleet KPI table', h: 'fleet-owners.html#fleet-kpis' }], then: 'then book a discovery call to talk about your fleet.' },
      price: [ { label: 'Fleet owner package, up to 25 machines', amount: '$3,200' } ],
      extra: true, travel: true,
      cta: { label: 'Book a Discovery Call', href: BOOK }
    },

    pilot: {
      title: '90-Day Pilot Implementation',
      lead: 'The 90-day term starts after the findings from the Operational Health Analysis or an onsite audit are presented.',
      steps: [
        { h: 'Findings are presented', t: 'HEDS presents the findings from the Operational Health Analysis or from an onsite audit, and you agree which leaks the 90-day term will address first.' },
        { h: 'Agree the term', t: 'You and HEDS agree the 90-day scope, the managers we will coach, the onsite days, and the weekly operating rhythm for the term.' },
        { h: 'We lead the work', t: 'HEDS leads the turnaround for the fixed 90-day term and coaches the service and parts managers as the work proceeds.' },
        { h: 'Review the term', t: 'At the end of the 90 days you review the work against the plan and decide whether to continue with further implementation work or an operating seat.' }
      ],
      deliver: 'HEDS leads the operational turnaround for a fixed 90-day term and coaches the service and parts managers through that term.',
      see: { links: [{ t: 'Operational Health Analysis', h: 'index.html#health-analysis' }], then: 'then, after findings are presented, you can also talk about a ', next: { t: 'Fractional Executive seat', h: 'index.html#fractional' } },
      price: [
        { label: '90-day pilot implementation', amount: '$200 an hour' }
      ],
      note: 'The work is priced at $200 an hour from the realistic hours required to perform it. Each quote lists the hours and the total before work starts. There is no set package or project price. This is an example of the math, not a package: 16 hours at $200 an hour is $3,200.',
      travel: true,
      cta: { label: 'Book a Discovery Call', href: BOOK }
    },

    seats: {
      title: 'Fractional Executive',
      lead: 'HEDS holds one named seat for an agreed term, runs the daily and weekly rhythm with your managers, and reports the numbers to you every week.',
      steps: [
        { h: 'Name the seat', t: 'You and HEDS agree which seat we will fill, for how long, which managers we will lead and coach, and the onsite days.' },
        { h: 'Set the baseline', t: 'In the first 30 days we pull your reports, start the daily WIP stand-up and the weekly meetings, and give you a written baseline against the HEDS targets.' },
        { h: 'Run the rhythm', t: 'We close the first leaks with your managers, put the standards in writing, and send you the scorecard every week.' },
        { h: 'Review and hand over', t: 'At the end of the term you decide whether the seat ends, is extended, or is handed to a permanent leader, and we hand over the standards and the scorecard.' }
      ],
      deliver: 'A named leader in the seat, a written baseline, an action plan with an owner and a target for each leak, a weekly scorecard, a monthly review with you, and written standards your managers keep after the term.',
      price: [
        { label: 'Fractional Executive seat', amount: '$200 an hour' }
      ],
      note: 'Each service is priced from the realistic hours required to perform it at $200 an hour, and the quote lists the hours and the total before work starts. This applies to Interim and Fractional VP of Product Support, and Director of Service, Parts and Aftermarket Operations, for equipment dealers and rental companies, plus Fixed Operations leadership. There is no set package or project price. This is an example of the math, not a package: 16 hours at $200 an hour is $3,200.',
      travel: true,
      cta: { label: 'Book a Discovery Call', href: BOOK }
    }

  };

  // Old offer ids still resolve to the merged offer.
  OFFERS.ohc = OFFERS.analysis;
  OFFERS.review = OFFERS.analysis;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function build(id, o, noCta) {
    var steps = o.steps.map(function (s, i) {
      return '<li class="ho-step"><span class="ho-num" aria-hidden="true">' + (i + 1) + '</span>' +
        '<h4>' + esc(s.h) + '</h4><p>' + esc(s.t) + '</p></li>';
    }).join('');

    var rows = o.price.map(function (r) {
      return '<div class="ho-row"><span class="ho-label">' + esc(r.label) + '</span><span class="ho-amount">' + esc(r.amount) + '</span></div>';
    }).join('');

    var list = o.priceList ? '<ul class="ho-list">' + o.priceList.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul>' : '';

    var fine = [];
    if (o.extra) fine.push(EXTRA);
    if (o.travel) fine.push(TRAVEL);

    var see = '';
    if (o.see) {
      var ls = o.see.links.map(function (l) { return '<a href="' + l.h + '">' + esc(l.t) + '</a>'; });
      var names = ls.length > 1 ? ls.slice(0, -1).join(', ') + ' or ' + ls[ls.length - 1] : ls[0];
      var noun = (id === 'training') ? ' dashboard' : '';
      var lead = 'on the ';
      see = '<p class="ho-see">See where your shop stands ' + lead + names + noun + ', ' + esc(o.see.then) +
        (o.see.next ? '<a href="' + o.see.next.h + '">' + esc(o.see.next.t) + '</a>.' : '') + '</p>';
    }

    var cta = (o.cta && !noCta) ? '<p class="ho-cta"><a class="cta-btn" href="' + o.cta.href + '" target="_blank" rel="noopener">' +
      esc(o.cta.label) + '<span class="sr-only"> (opens in a new tab)</span></a></p>' : '';

    var html =
      '<section class="heds-offer" data-offer-id="' + id + '" aria-label="' + esc(o.title) + ': how it works">' +
        '<p class="ho-kicker">How it works</p>' +
        '<h3 class="ho-title">' + esc(o.title) + '</h3>' +
        (o.lead ? '<p class="ho-lead">' + esc(o.lead) + '</p>' : '') +
        '<ol class="ho-steps">' + steps + '</ol>' +
        '<div class="ho-foot">' +
          '<div class="ho-box"><h4>What you receive</h4><p>' + esc(o.deliver) + '</p></div>' +
          '<div class="ho-box ho-price"><h4>Price</h4>' + rows + list +
            (o.note ? '<p class="ho-note">' + esc(o.note) + '</p>' : '') + '</div>' +
        '</div>' +
        (fine.length ? '<p class="ho-fine">' + esc(fine.join(' ')) + '</p>' : '') + see +
        cta +
      '</section>';
    return { html: html };
  }

  function render() {
    var mounts = document.querySelectorAll('[data-offer]:not([data-offer-done])');
    for (var i = 0; i < mounts.length; i++) {
      var m = mounts[i];
      var id = m.getAttribute('data-offer');
      var o = OFFERS[id];
      if (!o) continue;
      var b = build(id, o, m.hasAttribute('data-offer-nocta'));
      m.innerHTML = b.html;
      m.setAttribute('data-offer-done', '1');
    }
  }

  w.hedsRenderOffers = render;
  w.HEDS_OFFERS = OFFERS;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})(window);
