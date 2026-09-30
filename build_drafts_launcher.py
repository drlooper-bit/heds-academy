import urllib.parse
import os

drafts = [
    {
        'num': 1,
        'name': 'Charlie Usina',
        'title': 'VP / Branch General Manager',
        'company': 'Ring Power Corporation (Caterpillar)',
        'location': 'St. Augustine, FL',
        'to': 'charlie.usina@ringpower.com',
        'subject': 'Product support leadership & service absorption at Ring Power',
        'body': """Charlie,

I’ve been following Ring Power’s growth across North and Central Florida and noticed your leadership over branch and product support operations.

With the pressure dealer leadership faces on technician retention, absorption rate, and turning the shop into a true profit center, the hardest operational challenge is often developing branch managers who can drive daily WIP without managing by month-end surprises.

Most generic programs pull managers into hotel seminars or assign video links that get forgotten by Monday morning.

I work strictly 1-on-1 with Service, Parts, and Rental managers on your active floor. In 3 to 5 days at their desk, we pull your standard ERP reports, reconcile your live open WIP, and install the daily morning rhythms and scorecards they need to run the shop with veteran discipline.

Would a brief 10-minute call next Tuesday make sense to see how we structure 1-on-1 desk calibration for your team?

Best regards,

Daniel Looper
Managing Director | Heavy Equipment Dealer Solutions LLC
Cell: 813-599-7893 | daniel@hedsconsulting.net
Leesburg, FL"""
    },
    {
        'num': 2,
        'name': 'Bruce Budd',
        'title': 'VP - Branch Operations',
        'company': 'Kelly Tractor Co. (Caterpillar)',
        'location': 'Miami / West Palm Beach, FL',
        'to': 'bruce_budd@kellytractor.com',
        'subject': 'Product support operations & shop floor discipline at Kelly Tractor',
        'body': """Bruce,

I’ve been following Kelly Tractor’s operations across South Florida and noticed your role leading branch operations.

In heavy equipment product support, one of the toughest challenges is transitioning great shop foremen or technicians into managers who can actually command the P&L, control unapplied labor, and enforce 48-hour WIP closes. General Managers and VPs rarely have 40 free hours to sit shoulder-to-shoulder with that manager.

That is where I step in. I spend 3 to 5 days onsite working strictly 1-on-1 with your manager on your active floor. We sit at their desk, go through your live aged work orders, and install our 48-Hour Close Standard. No classroom theory—just your numbers, your floor, and daily operating discipline.

Do you have 10 minutes next Tuesday morning for a quick introductory chat?

Daniel Looper
Heavy Equipment Dealer Solutions LLC
813-599-7893 | daniel@hedsconsulting.net
Leesburg, FL"""
    },
    {
        'num': 3,
        'name': 'Neil Thie',
        'title': 'VP - Parts & Product Support',
        'company': 'Linder Industrial Machinery (Komatsu)',
        'location': 'Plant City / Orlando, FL',
        'to': 'neil.thie@linder.com',
        'subject': 'Product support leadership & branch performance at Linder',
        'body': """Neil,

I’ve followed Linder’s footprint across Florida and the Carolinas and noticed your oversight over parts and product support.

Across multi-branch dealer networks, the difference between average and top-quartile branches almost always comes down to whether the local Service and Parts Managers have daily operating discipline or are just firefighting. Generic seminars never fix it because classroom slides don't survive Monday morning on a busy floor.

I work 1-on-1 with Service and Parts Managers directly at their desks. In 3 days onsite, we audit their live work order backlog, reconcile technician labor recovery against payroll, and install a daily morning standup rhythm. They leave with a working scorecard built from their actual branch reports.

Would you be open to a 10-minute call next week to see how we handle 1-on-1 desk calibration for branch managers?

Daniel Looper
813-599-7893 | daniel@hedsconsulting.net
Heavy Equipment Dealer Solutions LLC"""
    },
    {
        'num': 4,
        'name': 'Mike Kemmerer',
        'title': 'VP - Product Support',
        'company': 'Dobbs Equipment (John Deere)',
        'location': 'Riverview / Tampa, FL',
        'to': 'mike.kemmerer@dobbsequipment.com',
        'subject': 'Product support leadership & manager onboarding at Dobbs',
        'body': """Mike,

I’ve been watching Dobbs Equipment’s growth across the Southeast and noticed your role heading product support.

As dealer groups expand, the biggest drag on fixed absorption is often the 6-month ramp-up time it takes a newly promoted or hired Service Manager to master WIP triage and quote reconciliation. While they learn the system, open work orders back up, parts credits slip, and unapplied tech hours eat into your margins.

I provide 1-on-1 onsite mentorship for equipment service managers. I embed on your floor for 3 to 5 days and work directly with that specific manager. We walk through your active ERP reports, establish their daily morning triage habits, and lock in a 90-day execution plan. You get veteran operating discipline installed in week two rather than month six.

Do you have 10 minutes Wednesday or Thursday for a quick introductory conversation?

Daniel Looper
Heavy Equipment Dealer Solutions LLC | 813-599-7893
daniel@hedsconsulting.net"""
    },
    {
        'num': 5,
        'name': 'Jake Walker',
        'title': 'VP of Operations',
        'company': 'Beard Equipment Company (John Deere)',
        'location': 'Mobile, AL / North FL Branches',
        'to': 'jwalker@beardequipment.com',
        'subject': 'Operations & service floor calibration at Beard Equipment',
        'body': """Jake,

Noticed your role directing operations across Beard Equipment’s branch network.

With the constant pressure on technician wrench time and turning product support into a high-margin profit center, the friction usually sits right at the service manager’s desk with work orders aging past 48 hours. When a job sits open after machine testing, customer disputes multiply and billable hours get written off just to close the invoice.

I don't teach classroom workshops. I come onsite and spend 3 days 1-on-1 with your Service Manager at their desk. We clean up their live aged WIP, align their quote reconciliation process, and install daily morning triage rhythms using their actual shop numbers.

Would you be open to a brief 10-minute call this week to talk through it?

Daniel Looper
Managing Director | Heavy Equipment Dealer Solutions LLC
Cell: 813-599-7893 | daniel@hedsconsulting.net
Leesburg, FL"""
    }
]

html = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HEDS Academy — 1-on-1 Outreach Drafts Station</title>
<style>
:root {
  --bg: #0e1f38;
  --fg: #f8fafc;
  --card-bg: #152847;
  --border-color: #203b60;
  --accent-color: #e5ae25;
  --accent-hover: #c89718;
  --muted: #94a3b8;
  --font-main: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
body { background: var(--bg); color: var(--fg); font-family: var(--font-main); padding: 40px 20px; line-height: 1.6; }
.container { max-width: 860px; margin: 0 auto; }
.header { text-align: center; margin-bottom: 36px; padding-bottom: 24px; border-bottom: 2px solid var(--accent-color); }
h1 { color: var(--accent-color); font-size: 2rem; margin-bottom: 8px; }
.subtitle { color: var(--muted); font-size: 1rem; }
.sender-badge { display: inline-block; background: rgba(229,174,37,0.15); color: var(--accent-color); border: 1px solid var(--accent-color); padding: 4px 12px; border-radius: 20px; font-weight: 700; margin-top: 10px; font-size: 0.85rem; }
.card { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 8px; padding: 24px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
.card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; }
.target-name { font-size: 1.25rem; font-weight: 700; color: var(--fg); }
.target-meta { font-size: 0.88rem; color: var(--accent-color); }
.meta-row { font-size: 0.85rem; color: var(--muted); margin-bottom: 12px; }
.subject-box { background: rgba(0,0,0,0.2); padding: 10px 14px; border-radius: 6px; font-weight: 600; margin-bottom: 14px; border-left: 3px solid var(--accent-color); font-size: 0.95rem; }
.body-box { background: rgba(0,0,0,0.3); padding: 16px; border-radius: 6px; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 0.92rem; line-height: 1.6; color: #e2e8f0; margin-bottom: 18px; }
.btn-launch { display: inline-block; background: var(--accent-color); color: var(--bg); font-weight: 700; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 0.95rem; transition: all 0.2s; }
.btn-launch:hover { background: var(--accent-hover); transform: translateY(-1px); }
.tag { background: rgba(229,174,37,0.15); color: var(--accent-color); padding: 3px 8px; border-radius: 4px; font-size: 0.78rem; font-weight: 600; text-transform: uppercase; }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>HEDS 1-on-1 Manager Training — Draft Station</h1>
    <div class="subtitle">Personalized Executive Peer Outreach (Batch #1)</div>
    <div class="sender-badge">From: daniel@hedsconsulting.net</div>
  </div>
"""

for d in drafts:
    # Build standard Gmail compose link
    params = {
        'view': 'cm',
        'fs': '1',
        'to': d['to'],
        'su': d['subject'],
        'body': d['body']
    }
    gmail_url = "https://mail.google.com/mail/?" + urllib.parse.urlencode(params)
    html += f"""
  <div class="card">
    <div class="card-header">
      <div>
        <div class="target-name">{d['num']}. {d['name']}</div>
        <div class="target-meta">{d['title']} — {d['company']}</div>
      </div>
      <span class="tag">1-on-1 Desk Immersion</span>
    </div>
    <div class="meta-row">📍 Location: {d['location']} &nbsp;|&nbsp; ✉️ To: <code>{d['to']}</code></div>
    <div class="subject-box">Subject: {d['subject']}</div>
    <div class="body-box">{d['body']}</div>
    <a href="{gmail_url}" target="_blank" class="btn-launch">✉️ Open in Gmail Draft (daniel@hedsconsulting.net)</a>
  </div>
"""

html += """
</div>
</body>
</html>
"""

out_path = r'D:\OneDrive\HEDS\SCHOOL\gmail-drafts-launcher.html'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(html)

print('Successfully generated launcher at:', out_path)
