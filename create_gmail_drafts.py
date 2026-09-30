import base64
import json
import sys
from email.mime.text import MIMEText
from pathlib import Path

# Add scripts directory to path
scripts_dir = r"D:\OneDrive\HEDS\business-data\google-workspace-setup\google-workspace\scripts"
sys.path.insert(0, scripts_dir)

from google_api import build_service

drafts = [
    {
        "to": "charlie.usina@ringpower.com",
        "subject": "Product support leadership & service absorption at Ring Power",
        "body": """Charlie,

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
        "to": "bruce_budd@kellytractor.com",
        "subject": "Product support operations & shop floor discipline at Kelly Tractor",
        "body": """Bruce,

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
        "to": "neil.thie@linder.com",
        "subject": "Product support leadership & branch performance at Linder",
        "body": """Neil,

I’ve followed Linder’s footprint across Florida and the Carolinas and noticed your oversight over parts and product support.

Across multi-branch dealer networks, the difference between average and top-quartile branches almost always comes down to whether the local Service and Parts Managers have daily operating discipline or are just firefighting. Generic seminars never fix it because classroom slides don't survive Monday morning on a busy floor.

I work 1-on-1 with Service and Parts Managers directly at their desks. In 3 days onsite, we audit their live work order backlog, reconcile technician labor recovery against payroll, and install a daily morning standup rhythm. They leave with a working scorecard built from their actual branch reports.

Would you be open to a 10-minute call next week to see how we handle 1-on-1 desk calibration for branch managers?

Daniel Looper
813-599-7893 | daniel@hedsconsulting.net
Heavy Equipment Dealer Solutions LLC"""
    },
    {
        "to": "mike.kemmerer@dobbsequipment.com",
        "subject": "Product support leadership & manager onboarding at Dobbs",
        "body": """Mike,

I’ve been watching Dobbs Equipment’s growth across the Southeast and noticed your role heading product support.

As dealer groups expand, the biggest drag on fixed absorption is often the 6-month ramp-up time it takes a newly promoted or hired Service Manager to master WIP triage and quote reconciliation. While they learn the system, open work orders back up, parts credits slip, and unapplied tech hours eat into your margins.

I provide 1-on-1 onsite mentorship for equipment service managers. I embed on your floor for 3 to 5 days and work directly with that specific manager. We walk through your active ERP reports, establish their daily morning triage habits, and lock in a 90-day execution plan. You get veteran operating discipline installed in week two rather than month six.

Do you have 10 minutes Wednesday or Thursday for a quick introductory conversation?

Daniel Looper
Heavy Equipment Dealer Solutions LLC | 813-599-7893
daniel@hedsconsulting.net"""
    },
    {
        "to": "jwalker@beardequipment.com",
        "subject": "Operations & service floor calibration at Beard Equipment",
        "body": """Jake,

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

def create_all_drafts():
    try:
        service = build_service("gmail", "v1")
        print("Connected to Gmail API successfully.")
    except Exception as e:
        print(f"Failed to connect to Gmail API: {e}", file=sys.stderr)
        return False

    for idx, d in enumerate(drafts, 1):
        message = MIMEText(d["body"], "plain")
        message["To"] = d["to"]
        message["Subject"] = d["subject"]
        message["From"] = "daniel@hedsconsulting.net"

        raw = base64.urlsafe_b64encode(message.as_bytes()).decode()
        draft_body = {"message": {"raw": raw}}

        try:
            res = service.users().drafts().create(userId="me", body=draft_body).execute()
            print(f"[{idx}/5] Created draft for {d['to']} (Draft ID: {res.get('id')})")
        except Exception as e:
            print(f"Error creating draft for {d['to']}: {e}", file=sys.stderr)

    print("\nAll drafts created successfully in daniel@hedsconsulting.net!")
    return True

if __name__ == "__main__":
    create_all_drafts()
