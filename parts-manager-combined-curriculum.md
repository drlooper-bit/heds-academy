# HEDS Operating Discipline Academy
# Parts Manager Training Program — Combined Curriculum Outline
# Format: Sequential student + facilitator combined, 10th-grade reading level
# Path: D:\OneDrive\HEDS\SCHOOL\parts-manager-combined-curriculum.md

---

## Program Overview

**Who this is for:** Parts Managers, Assistant Parts Managers, Parts Counter Supervisors, and Warehouse/Inventory Leads at heavy equipment dealerships and rental companies.

**What this program does:** Teaches parts leaders to manage by daily habits — not month-end inventory reports. By the time an accounting report shows a problem, the cash is already tied up in dead stock or lost to empty shelves. This program connects what happens at the parts counter and in the warehouse every day directly to the dealership's bottom line.

**How long it takes:** 3-day intensive onsite, or 6-week accelerator format.

**What you walk away with:** Scorecards you built from your own numbers, checklists your team can use Monday morning, an obsolescence purge calendar with your name on it, and a 90-day action plan to move every KPI off the baseline.

---

## ERP Report Mapping Reference

**Before you start Module 1, know where to find your data.**

Different dealerships use different ERP/DMS systems. The report names in this workbook are the most common names. If your system uses a different name, find the equivalent using the table below.

| Report Name in This Workbook | CDK / VitalEdge | Infor | Epicor | Texada | e-Emphasys |
|---|---|---|---|---|---|
| Parts P&L Statement | Parts Dept P&L | Parts Profit Analysis | Parts GP Report | Parts Branch P&L | Parts Revenue Report |
| Parts Inventory Valuation | Inventory Valuation | Inventory Value Report | Stock Valuation | Inventory Valuation Export | Inventory Value Summary |
| Parts Sales Summary | Parts Sales Register | Parts Revenue Report | Parts Sales Detail | Parts Sales Export | Parts Sales Summary |
| Open PO / Stock Order Report | Open PO Report | Open Purchase Orders | Open PO List | Open Orders | PO Inquiry |
| Inventory Aging Report | Inventory Aging | Stock Aging Report | Aging Inventory | Inventory Aging Export | Stock Aging Report |
| Parts Fill Rate Report | Fill Rate Report | Parts Performance | Stock Fill Rate | Fill Rate Export | Fill Rate Report |
| Obsolete Inventory Report | Obsolete Stock | Dead Stock Report | Obsolete Inventory | Obsolete Stock Export | Dead Stock Report |
| Lost Sales Report | Lost Sales | Lost Sales Report | Lost Sales Log | Lost Sales Export | Lost Sales Inquiry |
| Payroll Distribution Report | Payroll Register | Labor Cost Report | Employee Time Summary | Payroll Export | Labor Cost Summary |
| Departmental P&L Summary | Dept P&L Summary | Branch P&L | Dept Margin Report | Branch Profit Report | Dept GP Summary |
| General Ledger Expense Report | GL Expense Detail | GL Transaction Report | GL Expense Export | GL Summary | GL Export |
| Customer Labor Sales Report | Service Sales Report | Labor Revenue Report | Service Revenue | Labor Sales Export | Service Revenue Report |

> **Floor Rule:** If you cannot find the report in your system, ask your controller, your DMS support contact, or your general manager. Do not skip the exercise because the report name is different. The data exists in every system — it just has a different label.

---

## Module 1: Understanding Your Department's Financials

**Goal:** Teach managers how to pull exact ERP reports, run core financial formulas using their own dealership data, and connect those numbers to what happens at the counter and in the warehouse.

> **Floor Rule:** If you cannot pull these reports and run these formulas yourself, you are managing blind. A parts manager who cannot read their own P&L is hoping for good results instead of driving them.

---

### Part 1: Parts Gross Margin

**What It Measures**
Parts Gross Margin is your pure profit percentage on parts sales. It tells you how much money is left after paying for the parts you sold. This is the single most important number in your department — every other KPI either feeds it or drains it.

**Required ERP Reports**
- Parts P&L Statement (Extract: Total Parts Revenue, Total Parts Cost)
- Parts Sales Summary (Extract: Gross Profit Dollars)

**Formula**
Parts Gross Margin % = ([YOUR TOTAL PARTS REVENUE] − [YOUR TOTAL PARTS COST]) ÷ [YOUR TOTAL PARTS REVENUE] × 100

**Step-by-Step Calculation**
1. Enter your total monthly parts revenue from the Parts P&L
2. Enter your total monthly parts cost (what you paid for the parts you sold) from the Parts P&L
3. Subtract parts cost from parts revenue — this is your Gross Profit dollars
4. Divide Gross Profit dollars by total parts revenue
5. Multiply by 100 to get your margin percentage

**HEDS Target Range:** 30% to 35%

> **Floor Rule:** If your margin drops below 30%, you are leaking cash every time a part crosses the counter. This happens when discounts are given without approval, when matrix pricing is not applied, or when high-cost parts are marked up at the same rate as low-cost parts. Fix it by enforcing tiered markup and requiring manager sign-off on any price override.

**What It Does NOT Measure**
Parts Gross Margin does not measure inventory efficiency. You can have a 35% margin and still have $200,000 in dead stock tying up your operating cash. Margin tells you how much you make per dollar sold — not how fast the inventory turns or how much is sitting unsold.

**Why This Number Goes Wrong**
- Discounts given at the counter without manager approval
- Matrix pricing not applied to low-cost parts (the biggest margin erosion source)
- High-cost parts marked up at the same flat percentage as cheap parts
- Wholesale accounts buying at retail pricing tiers instead of contract pricing
- Freight and handling costs not added to parts cost before calculating margin
- OEM price increases not passed through to the customer

**Hands-On Exercise**
Pull your last month's Parts P&L. Calculate your actual gross margin percentage. If it is below 30%, pull the 50 highest-dollar parts invoices for the month. Identify how many had price overrides, discounts, or missing matrix pricing. Calculate the dollar amount of margin lost on those 50 invoices.

**Deliverable:** Gross Margin baseline number on your Parts Department Baseline Health Assessment

---

### Part 2: Parts Department Absorption Rate

**What It Measures**
Parts Absorption Rate tells you what percentage of the dealership's total monthly overhead (rent, utilities, insurance, management salaries, floorplan interest) is covered by Parts Department gross profit alone. This is your "empty showroom" number — if parts absorption is high enough, the dealership survives even when no new equipment is sold.

**Required ERP Reports**
- Departmental P&L Summary (Extract: Parts Gross Profit)
- General Ledger Expense Report (Extract: Total Fixed and Variable Operating Expenses)

**Formula**
Parts Absorption Rate % = [YOUR PARTS GROSS PROFIT] ÷ [YOUR TOTAL FIXED AND VARIABLE OPERATING EXPENSES] × 100

**Step-by-Step Calculation**
1. Enter your total monthly Parts Gross Profit dollars from the Departmental P&L
2. Enter your total monthly fixed and variable operating expenses from the General Ledger Expense Report
3. Divide Parts Gross Profit by total expenses
4. Multiply by 100 to get your absorption percentage

**HEDS Target:** 60% or greater

> **Floor Rule:** If your parts absorption is below 60%, the dealership is depending on new equipment sales to keep the lights on. When the equipment market slows down — and it always does — the dealership bleeds. Parts is the steady revenue. If parts is not carrying its weight, nothing else can compensate for it.

**What It Does NOT Measure**
Parts absorption alone does not tell the full story — it is one of three departments (Parts, Service, Rental) that contribute to total dealership absorption. A parts department at 40% absorption may be fine if Service contributes another 40%. But if all three are weak, the dealership is one slow quarter away from a crisis. Know your number, but also know the combined number.

**Why This Number Goes Wrong**
- Parts gross profit is low because of margin erosion (see Part 1)
- Parts sales volume is low because of poor fill rates — customers buy elsewhere
- Wholesale accounts have eroded pricing without volume to justify it
- Service department is sourcing parts from outside vendors instead of internally
- Obsolete inventory is written off, reducing reported GP
- Freight costs are absorbed instead of passed through

**Hands-On Exercise**
Pull your departmental P&L summary and general ledger expense report. Calculate your current Parts Absorption Rate. Write down how much additional parts gross profit you would need to move from your current number to 60%. Identify two specific behaviors that, if changed, would deliver that GP.

**Deliverable:** Absorption Rate baseline number on your Parts Department Baseline Health Assessment

---

### Part 3: Parts Sales as a Percentage of Total Dealership Sales

**What It Measures**
This tells you how much of the dealership's total revenue comes from the Parts Department. If parts is 15% of total sales, the department is underperforming relative to the dealership's overall revenue. If parts is 28%, the department is a core revenue engine.

**Required ERP Reports**
- Departmental P&L Summary (Extract: Parts Sales Total, Total Dealership Sales)
- Parts Sales Summary (Extract: Total Parts Revenue)

**Formula**
Parts Sales as % of Dealership Sales = [YOUR TOTAL PARTS SALES] ÷ [YOUR TOTAL DEALERSHIP SALES] × 100

**Step-by-Step Calculation**
1. Enter your total monthly parts sales from the Parts Sales Summary or Departmental P&L
2. Enter your total monthly dealership sales (parts + service + rental + wholegoods + any other revenue) from the Departmental P&L
3. Divide parts sales by total dealership sales
4. Multiply by 100 to get your percentage

**HEDS Target Range:** 25% to 30%

> **Floor Rule:** If parts is under 25% of total dealership sales, either the parts department is underperforming or the dealership is over-reliant on equipment sales. Both are a problem. A dealership that does $20M in equipment sales and $2M in parts is one slow equipment quarter away from a cash crisis. Parts revenue is the recurring revenue that keeps the dealership alive between equipment cycles.

**What It Does NOT Measure**
This ratio does not tell you whether your parts margins are healthy. You can have 28% of total sales from parts and still have a 22% gross margin because of discounting. It measures volume contribution, not profit quality. Always read this number alongside the Gross Margin percentage.

**Why This Number Goes Wrong**
- Service department is sourcing parts from outside vendors or aftermarket suppliers instead of the parts department
- Wholesale accounts are underpricing your retail counter — customers buy direct from the wholesaler
- E-commerce or online parts sales channel does not exist or is not promoted
- Counter staff are order-takers, not salespeople — they do not upsell or cross-sell
- Parts inventory does not match the equipment mix the dealership sells and services

**Hands-On Exercise**
Pull your last 6 months of departmental P&L summaries. Calculate parts sales as a % of total dealership sales for each month. Is the trend up, down, or flat? If it is declining, identify whether service is sourcing elsewhere, wholesale is eroding, or the counter is not selling. Write down the specific cause.

**Deliverable:** Parts Sales % baseline number and 6-month trend on your Parts Department Baseline Health Assessment

---

### Part 4: Parts Salary as a Percentage of Gross Profit

**What It Measures**
This tells you how much of your parts gross profit is consumed by parts department payroll. If you generate $100,000 in parts GP and your parts payroll is $35,000, your salary ratio is 35% — you are overstaffed or underperforming on margin. This is the number that determines whether your department is a profit center or a cost center.

**Required ERP Reports**
- Parts P&L Statement (Extract: Total Parts Gross Profit)
- Payroll Distribution Report (Extract: Total Parts Department Salary)

**Formula**
Parts Salary % = [YOUR TOTAL PARTS SALARY] ÷ [YOUR PARTS GROSS PROFIT] × 100

**Step-by-Step Calculation**
1. Enter your total monthly parts department salary from the Payroll Distribution Report (include all parts staff: counter, warehouse, delivery, manager)
2. Enter your total monthly parts gross profit from the Parts P&L
3. Divide total salary by gross profit
4. Multiply by 100 to get your salary percentage

**HEDS Target:** 27.5% or less

> **Floor Rule:** If your salary ratio is above 27.5%, you either have too many people for the revenue you are generating, or your margins are too low to support the team you have. Do not cut staff first — fix the margin. If the margin is at target and the ratio is still high, then you are overstaffed. But never use low margin as a reason to cut staff. Fix the margin, and the ratio takes care of itself.

**What It Does NOT Measure**
This ratio does not measure individual productivity. A 25% salary ratio with two highly productive counter people is different from 25% with four underperformers. Always read this alongside counter sales per person and fill rate per counter person. The ratio tells you if the department is staffed efficiently — it does not tell you if each person is performing.

**Why This Number Goes Wrong**
- Overstaffing: too many counter people for the sales volume
- Underpricing: margins are too low, so the same staff produces less GP per dollar sold
- Overtime not controlled: OT pushes salary above budget without increasing GP
- Non-productive positions: a parts driver making deliveries to one customer per day is a cost, not a revenue generator
- Commission or spiff programs not tied to gross profit — they are tied to sales volume, which incentivizes discounting

**Hands-On Exercise**
Pull your last month's payroll distribution report and parts P&L. Calculate your salary ratio. If it is above 27.5%, calculate how much additional GP you would need to bring the ratio to target at your current staffing level. Then calculate how much salary you would need to cut to reach 27.5% at your current GP. Write down which path is realistic and what behavior change would get you there.

**Deliverable:** Salary Ratio baseline number on your Parts Department Baseline Health Assessment

---

## Module 2: The Baseline Audit — Where You Stand Right Now

**Goal:** Establish an honest starting point using your own data. You cannot improve what you have not measured.

> **Floor Rule:** The baseline is not a judgment. It is a starting line. If your fill rate is 72% and your obsolescence is 14%, those are your numbers. We are here to move them, not to argue about them.

---

### Part 1: The 30-Day Inventory Audit

**What You Do**
Pull your current inventory valuation report from your DMS. Categorize every SKU by its aging bucket:
- 0–90 days: Current stock
- 91–180 days: Slowing — review for reorder threshold adjustment
- 181–365 days: Aging — candidate for markdown or RTV
- 365+ days: Obsolete — purge or write-off candidate

**Why It Matters**
Most parts managers cannot tell you the dollar value of their inventory by aging bucket. The DMS says "total inventory: $1.2M" but nobody knows that $180,000 of that has been sitting for over a year. This audit forces clarity.

**Hands-On Exercise**
Pull your inventory aging report. For each bucket, calculate the total dollar value and the % of total inventory. Identify the top 20 SKUs by dollar value that are over 365 days. Write down the original reason each was stocked and whether it is returnable to the vendor.

**Deliverable:** Inventory aging audit summary with dollar totals by bucket and top 20 obsolete SKUs identified

---

### Part 2: Fill Rate and Stock Order Audit

**What You Do**
Pull your fill rate report and your stock order receipts report for the last 30 days. Calculate:
- First-time fill rate: how many line items were filled from shelf on the first request
- Stock order efficiency: what % of total receipts came from planned stock orders vs. emergency/special orders

**Why It Matters**
Fill rate is the daily operational metric that drives every other KPI. Low fill rate means the service department waits, customers buy elsewhere, and emergency orders spike — which drives up cost and kills margin. Stock order efficiency tells you whether your DMS-driven ordering plan is working or broken.

**Hands-On Exercise**
Pull your last 30 days of parts order history. Calculate your first-time fill rate. Calculate your stock order efficiency (stock order receipts ÷ total receipts). If fill rate is below 90%, identify the top 20 SKUs that were not filled from stock and write down whether each is a stocking error, a demand spike, or a vendor delay.

**Deliverable:** Fill rate and stock order audit with top 20 fill-rate gap SKUs identified

---

### Part 3: The Parts Department Baseline Health Assessment

**What It Is**
A one-page document that captures every baseline number from Module 1 and Module 2 in one place. This is your starting line. Every improvement will be measured against this page.

**What Goes On It**
| Metric | Your Current Number | HEDS Target | Gap |
|---|---|---|---|
| Parts Gross Margin % | [Your number] | 30–35% | [Gap] |
| Parts Absorption Rate % | [Your number] | ≥60% | [Gap] |
| Parts Sales as % of Dealership Sales | [Your number] | 25–30% | [Gap] |
| Parts Salary as % of GP | [Your number] | ≤27.5% | [Gap] |
| Gross Parts Turns | [Your number] | 3–4x | [Gap] |
| Stock Order Efficiency % | [Your number] | >75% | [Gap] |
| Obsolescence & Excessive Stock % | [Your number] | <10% | [Gap] |
| Parts Sales as % of Labor Sales | [Your number] | $1:$1 to $2:$1 | [Gap] |
| First-Time Fill Rate % | [Your number] | ≥90% | [Gap] |
| Days of Supply (30/90/360) | [Your number] | Rolling coverage | [Gap] |

**Deliverable:** Completed HEDS Parts Department Baseline Health Assessment — signed and dated

---

## Module 3: Finding the Leaks — What Is Broken and Why

**Goal:** Now that you know your numbers, find out exactly what is causing them to be bad. Every bad number has a specific floor behavior behind it. This module connects the number to the behavior.

> **Floor Rule:** You cannot fix a percentage. You can only fix a behavior. "Fill rate is 72%" is not a problem. "The counter person does not check stock before promising the customer it will be here tomorrow" is a problem you can fix.

---

### Part 1: The Parts Profit Leak Diagnostic Matrix

**What It Is**
A table that connects each KPI to the specific floor behavior that causes it to leak, and the dollar amount that leak costs per month.

| KPI | What Causes the Leak | Floor Behavior to Fix | Monthly $ Leak |
|---|---|---|---|
| Gross Margin < 30% | Discounts, missing matrix pricing, flat markup on high-cost parts | Enforce tiered markup, apply matrix pricing on every RO, manager sign-off on price overrides | $[Your number] |
| Absorption < 60% | Low parts GP, service sourcing parts elsewhere | Fix margin leaks, stop external sourcing, grow wholesale | $[Your number] |
| Parts Sales % < 25% | Service buying outside, no e-commerce, counter not selling | Close the service-to-parts loop, launch online channel, train counter on upselling | $[Your number] |
| Salary Ratio > 27.5% | Overstaffing, low margin, uncontrolled OT | Fix margin first, then evaluate staffing; control OT | $[Your number] |
| Gross Turns < 3x | Overstocking, slow-moving SKUs, no min/max discipline | Enforce min/max, purge dead stock, reduce safety stock on slow movers | $[Your number] |
| Stock Order Efficiency < 75% | Emergency orders, special orders, no DMS-driven ordering | Follow DMS stock order recommendations, reduce manual overrides | $[Your number] |
| Obsolescence > 10% | No aging review, no purge discipline, overordering for one job | Monthly aging review, RTV program, no one-job special stock | $[Your number] |
| Parts-to-Labor < $1:$1 | Service not quoting parts with labor, parts not staged for shop jobs | Require parts on every RO, stage parts before teardown, counter-to-shop communication protocol | $[Your number] |
| Fill Rate < 90% | Stocking errors, vendor delays, no lost-sale tracking | Track every lost sale, adjust min/max from lost-sale data, dual-source critical SKUs | $[Your number] |
| Days of Supply out of range | No demand forecasting, seasonal spikes not planned | 30/90/360-day rolling forecast, seasonal pre-stock for harvest/snow/peak | $[Your number] |

**Hands-On Exercise**
Using your Baseline Health Assessment numbers, fill in the dollar leak column for each KPI. Total the monthly dollar leakage. This is your "leakage scoreboard" — the total cash you are losing per month because of floor behaviors that can be fixed.

**Deliverable:** Completed Parts Profit Leak Diagnostic Matrix with total monthly dollar leakage

---

### Part 2: Prioritizing Which Leak to Fix First

**Rule:** Fix the leak with the highest dollar impact and the simplest behavior change first. Do not try to fix everything at once.

**How to Prioritize**
1. Rank your leaks from highest dollar impact to lowest
2. For each leak, rate the behavior change as Simple (can fix in 7 days), Moderate (needs 14–30 days), or Hard (needs 30+ days and may require system changes, vendor negotiations, or staffing adjustments)
3. Pick the top 3 leaks that are both high-dollar and Simple or Moderate
4. Those are your first 30-day targets

**Hands-On Exercise**
Rank your leaks. Pick your top 3. Write the specific behavior change for each one, the person who owns the change, and the target date for completion.

**Deliverable:** Top 3 leak fix plan with owners and dates

---

## Module 4: The Playbook — Daily and Weekly Scorecards

**Goal:** Replace complicated, unused software dashboards with simple scorecards that drive a decision every day. The scorecard is not a report — it is a management tool.

> **Floor Rule:** A scorecard that does not drive a decision is wallpaper. If the number on the scorecard does not make someone do something different today, it should not be on the board.

---

### Part 1: The Daily Scorecard

**What Goes On It**
| Metric | Source | Who Enters It | When |
|---|---|---|---|
| Fill rate for yesterday (% of line items filled from stock) | DMS fill rate report | Counter lead | Before 8:00 AM |
| Emergency/special orders placed yesterday (count and $) | PO report | Parts manager | Before 8:00 AM |
| Lost sales recorded yesterday (count and $) | DMS lost sale log | Counter lead | Before 8:00 AM |
| Backorders outstanding (count and estimated arrival) | Open PO report | Warehouse lead | Before 8:00 AM |
| Service department parts waiting list (open ROs with parts on order) | Open WO + parts status | Counter lead | Before 8:00 AM |

**Rules of the Board**
- The counter lead or warehouse lead enters the data, not the manager. The manager reads it and acts on it.
- The board is updated at the same time every day. No exceptions.
- If any number hits a trigger point (fill rate below 85%, more than 5 emergency orders in one day, more than 10 backorders outstanding), the manager acts that day — not tomorrow.

**Hands-On Exercise**
Build your daily scorecard using your own numbers. Write it on a whiteboard, type it into a spreadsheet, or use the HEDS template. Enter today's numbers.

**Deliverable:** Your daily scorecard, populated with today's data, hanging on the parts department wall or on a shared screen

---

### Part 2: The Weekly Scorecard

**What Goes On It**
| Metric | Source | Who Enters It | When |
|---|---|---|---|
| Gross margin % for the week | Parts P&L / sales summary | Parts manager | Monday morning |
| Fill rate for the week (5-day average) | DMS fill rate report | Counter lead | Monday morning |
| Stock order efficiency % for the week | PO receipt report | Warehouse lead | Monday morning |
| Inventory aging summary (0-90, 91-180, 181-365, 365+ in $) | Inventory aging report | Parts manager | Monday morning |
| Obsolescence % of total inventory | Inventory aging report | Parts manager | Monday morning |
| Parts-to-labor ratio for the week (shop parts $ ÷ labor $) | Service sales + parts sales report | Parts manager | Monday morning |
| Lost sales $ for the week | DMS lost sale log | Counter lead | Monday morning |

**Hands-On Exercise**
Build your weekly scorecard. Pull last week's numbers and fill it in. Compare it to your baseline. Did anything move?

**Deliverable:** Your weekly scorecard, populated with last week's data

---

### Part 3: The 10-Minute Morning Standup

**What It Is**
A daily meeting — same time, same agenda, same attendees — that lasts 10 minutes and produces one decision minimum.

**Agenda**
1. What did we fill yesterday and what did we miss? (2 minutes)
2. What is on backorder and when does it arrive? (2 minutes)
3. What does the service department need today? (2 minutes)
4. **Capacity stress flag:** Are there more than 5 emergency orders or more than 10 backorders outstanding? If yes, what is the plan — expedite, transfer, or alternate source? (2 minutes)
5. One decision: who owns what by end of shift? (2 minutes)

**Rules**
- 10 minutes. Not 15. Not 30. Ten.
- Everyone stands. No sitting.
- The manager asks the questions. The counter and warehouse leads answer.
- One decision minimum. If no decision is needed, the standup is not needed.

> **Floor Rule:** If your standup takes 30 minutes, you are having a meeting, not a standup. Cut it to 10. If there is nothing to discuss, the standup is 3 minutes and everyone goes to work. The purpose is rhythm, not duration.

**Hands-On Exercise**
Run a mock standup with your cohort. Time it. If it goes over 10 minutes, identify what went wrong and adjust.

**Deliverable:** Your standup agenda, printed and posted in the parts department

---

### Part 4: The Weekly Inventory Review

**What It Is**
A 30-minute session once per week where the parts manager reviews the inventory aging report and forces decisions on every SKU over 180 days.

**The Decision Tree for Each SKU Over 180 Days**
| Situation | Decision | Owner |
|---|---|---|
| SKU over 365 days, no sales in 12 months | Purge: RTV, scrap, or write off | Parts manager |
| SKU 181–365 days, slow but has demand | Reduce min/max, reduce safety stock | Parts manager |
| SKU was stocked for one job that is complete | Return to vendor or transfer to another branch | Warehouse lead |
| SKU is a superseded part number | Convert to current supersession, return old | Parts manager |
| SKU is a seasonal part out of season | Hold until next season, flag for review | Parts manager |
| SKU has replacement aftermarket option | Evaluate switching, dispose of OEM stock | Parts manager |

> **Floor Rule:** Every SKU over 180 days gets a decision every week. No exceptions. If it sits for another week without a decision, it is because the manager chose not to act. Obsolescence does not happen to you — it happens because you let it.

**Hands-On Exercise**
Pull your inventory aging report. Identify every SKU over 180 days. For each one, run the decision tree. Assign a named owner and a target action date. Write it on the board.

**Deliverable:** Weekly inventory review log with all SKUs over 180 days assigned to named owners with action dates

---

## Module 5: Floor Execution — Inventory Discipline

**Goal:** Install discipline in the inventory lifecycle so that parts flow from order to shelf to counter without stalling. Every step has an owner, a standard, and a time limit.

> **Floor Rule:** The inventory lifecycle is not a suggestion. It is the production line. If a step is skipped, the fill rate drops, the turns slow, and the obsolescence grows. Treat the parts department like a factory floor — because that is what it is.

---

### Part 1: Gross Parts Turns and Inventory Velocity

**What It Measures**
Gross Parts Turns tells you how many times your parts inventory is sold and replaced in a year. If your average inventory is $500,000 and your annual cost of sales is $1.8M, your turns are 3.6x — meaning you replace your entire inventory 3.6 times per year.

**Required ERP Reports**
- Parts Sales Summary (Extract: Total Parts Cost of Sales for 12 months)
- Inventory Valuation Report (Extract: Average Monthly Inventory Value)

**Formula**
Gross Parts Turns = [YOUR ANNUAL PARTS COST OF SALES] ÷ [YOUR AVERAGE MONTHLY PARTS INVENTORY VALUE]

**Step-by-Step Calculation**
1. Enter your total annual parts cost of sales from the Parts Sales Summary (12-month total)
2. Enter your average monthly parts inventory value from the Inventory Valuation Report (average of 12 month-end values)
3. Divide annual cost of sales by average inventory value
4. The result is your gross turns (how many times you replace your inventory per year)

**HEDS Target Range:** 3 to 4 turns per year

> **Floor Rule:** If your turns are below 3, you are carrying too much inventory for the sales you are generating. If turns are above 5, you are probably understocked — fill rate is suffering because you do not carry enough depth. The target is not "as high as possible." The target is the range where fill rate stays above 90% and obsolescence stays below 10%.

**What It Does NOT Measure**
Turns do not tell you which parts are moving and which are dead. You can have 4x turns overall while 20% of your inventory has not moved in a year. The turn number averages the fast movers and the dead stock together. Always read turns alongside the obsolescence % to see the full picture.

**Why This Number Goes Wrong**
- Overstocking: min/max levels set too high for actual demand
- One-job special stock: a part was ordered for a specific job, the job was cancelled or completed without using it, and it sits forever
- No demand-based reordering: stock is ordered by gut feel instead of DMS-driven usage data
- Slow purge cycle: obsolete inventory is not removed, inflating the average inventory denominator
- Seasonal parts carried year-round instead of stocked seasonally

**Hands-On Exercise**
Pull your last 12 months of inventory valuation reports and your annual parts cost of sales. Calculate your gross turns. If below 3, calculate how much inventory you would need to remove to reach 3.5x turns at your current sales level. Identify the top 50 SKUs by dollar value that have not sold in 180 days.

**Deliverable:** Gross Turns baseline number and dead stock reduction target on your action plan

---

### Part 2: Stock Order Efficiency and DMS-Driven Ordering

**What It Measures**
Stock Order Efficiency tells you what percentage of your parts receipts come from planned, DMS-driven stock orders vs. emergency, special, or manual orders. If you receive $100,000 in parts this month and $75,000 came from stock orders, your stock order efficiency is 75% — the target. Below that, your ordering process is broken and you are paying for it in freight, margin, and fill rate gaps.

**Required ERP Reports**
- Open PO / Stock Order Report (Extract: Stock Order Receipts in $)
- Parts Sales Summary (Extract: Total Receipts in $)

**Formula**
Stock Order Efficiency % = [YOUR STOCK ORDER RECEIPTS] ÷ [YOUR TOTAL RECEIPTS] × 100

**Step-by-Step Calculation**
1. Enter your total monthly stock order receipts (dollar value of parts received from planned stock orders) from the PO Report
2. Enter your total monthly receipts (dollar value of all parts received, including stock orders, special orders, emergency orders, and transfers) from the Parts Sales Summary
3. Divide stock order receipts by total receipts
4. Multiply by 100 to get your efficiency percentage

**HEDS Target:** Greater than 75%

> **Floor Rule:** Every emergency order is a confession that your stocking plan failed. Some emergencies are unavoidable — a customer breaks a machine in the field and needs a part today. But if more than 25% of your receipts are emergency or special orders, your DMS-driven stock order program is not working. Fix the stocking plan before you fix the emergency. The emergency will keep happening until you do.

**What It Does NOT Measure**
Stock order efficiency does not measure fill rate. You can have 80% stock order efficiency and still have a 70% fill rate if your stock orders are bringing in the wrong parts. Stock order efficiency measures your ordering discipline — fill rate measures whether the right parts are on the shelf. Read both together.

**Why This Number Goes Wrong**
- DMS stock order recommendations are overridden by the manager ("I know what we need")
- Min/max levels are outdated and do not reflect current usage
- New model introductions are not stocked proactively — parts are ordered reactively after the first failure
- Special orders for one job are not returned to stock for common parts
- Vendor lead times are not updated in the DMS, so reorder points fire too late

**Hands-On Exercise**
Pull your last 30 days of PO receipts. Separate stock orders from special/emergency orders. Calculate your stock order efficiency. If below 75%, identify the top 20 SKUs that were ordered as emergency or special and write down whether each is a stocking error (should be on the shelf) or a legitimate one-time need.

**Deliverable:** Stock Order Efficiency baseline number and top 20 emergency-order SKUs identified for stocking review

---

### Part 3: Fill Rate — First-Time Fill from Stock

**What It Measures**
Fill Rate tells you what percentage of parts requests are filled from your shelf on the first request — without waiting for a special order, a backorder, or a transfer from another branch. This is the daily operational metric that drives every other KPI. Low fill rate means the service department waits, customers buy elsewhere, and emergency orders spike.

**Required ERP Reports**
- Parts Fill Rate Report (Extract: Orders Filled Immediately, Total Orders)

**Formula**
First-Time Fill Rate % = [YOUR ORDERS FILLED IMMEDIATELY FROM STOCK] ÷ [YOUR TOTAL PARTS ORDERS] × 100

**Step-by-Step Calculation**
1. Enter your total line items filled from stock on the first request from the Fill Rate Report
2. Enter your total line items requested (filled + backordered + special ordered) from the Fill Rate Report
3. Divide filled-from-stock by total requested
4. Multiply by 100 to get your fill rate percentage

**HEDS Target:** 90% or greater

> **Floor Rule:** If a service technician is standing at your counter waiting for a part you do not have, you are losing money twice — once on the technician's downtime and once on the emergency freight to get the part. Every fill rate miss below 90% is a customer or a technician leaving your counter empty-handed. Track every miss. Adjust your stock. The DMS tells you what to carry — listen to it.

**What It Does NOT Measure**
Fill rate does not measure speed of delivery once the part is in stock. A 92% fill rate with a 3-day delivery time is different from 92% with same-day delivery. If you deliver to the shop floor within the hour, that is a different operation than "it's on the shelf but nobody brought it to the tech." Track fill rate alongside counter-to-shop delivery time for the full picture.

**Why This Number Goes Wrong**
- Stocking levels do not match actual demand (DMS min/max not updated)
- Lost sales are not recorded in the DMS, so the system does not know what to stock
- New equipment models are introduced but parts are not stocked proactively
- Vendor lead times are longer than the DMS assumes, causing stockouts between order and receipt
- High-velocity SKUs have safety stock set too low for seasonal demand spikes
- No dual-sourcing on critical SKUs — one vendor delay empties the shelf

**Hands-On Exercise**
Pull your last 30 days of fill rate data. Calculate your first-time fill rate. If below 90%, pull the top 30 SKUs that were not filled from stock. For each, write down: is this a stocking error (should be on the shelf), a vendor delay (stock was on order), or a demand spike (unusual volume)?

**Deliverable:** Fill Rate baseline number and top 30 fill-rate gap SKUs identified for stocking adjustment

---

### Part 4: Obsolescence and Excessive Stock Control

**What It Measures**
Obsolescence tells you what percentage of your inventory is not moving — parts that have sat on the shelf past their useful life. Excessive stock is inventory beyond what you need to support current demand. Together, they measure how much of your capital is trapped in parts that will never generate revenue.

**Required ERP Reports**
- Inventory Aging Report (Extract: Dollar value by aging bucket)
- Obsolete Inventory Report (Extract: Total Obsolete Value)
- Inventory Valuation Report (Extract: Total Inventory Value)

**Formula**
Obsolescence & Excessive Stock % = ([YOUR OBSOLETE INVENTORY VALUE] + [YOUR EXCESSIVE STOCK VALUE]) ÷ [YOUR TOTAL INVENTORY VALUE] × 100

**Step-by-Step Calculation**
1. From the Inventory Aging Report, identify the dollar value of SKUs over 365 days (obsolete)
2. Identify the dollar value of SKUs where on-hand quantity exceeds max by more than 50% (excessive)
3. Add obsolete + excessive values together
4. Divide by your total inventory value
5. Multiply by 100 to get your obsolescence and excessive stock percentage

**HEDS Target:** Less than 10%

> **Floor Rule:** Every dollar in obsolete inventory is a dollar that used to be cash. It was cash when you bought the part. It became shelf stock when it sat. It becomes a write-off when you finally admit it is not going to sell. The longer you wait, the less it is worth. Run a monthly purge — RTV, markdown, transfer, or scrap — and do not let it accumulate. Obsolescence does not age well. It ages worse.

**What It Does NOT Measure**
Obsolescence does not measure the cost of carrying the dead stock — warehouse space, insurance, interest on the capital, and the opportunity cost of not investing that cash in fast-moving parts. The true cost of obsolete inventory is 20–30% above its face value when you factor in carrying costs. A $100,000 dead stock problem is really a $125,000 problem.

**Why This Number Goes Wrong**
- No monthly aging review — obsolescence accumulates silently
- One-job special orders that were never returned to stock or to the vendor
- Superseded part numbers not converted — old stock sits while the new number is ordered
- Overstocking for a season that never came (e.g., snow parts in a warm winter)
- No RTV (return to vendor) program — the dealer does not ask, the vendor does not offer
- "We might need it someday" thinking — the most expensive words in inventory management

**Hands-On Exercise**
Pull your inventory aging report. Calculate the dollar value of SKUs over 365 days (obsolete) and the dollar value of excessive stock (on-hand > max by 50%+). Calculate your total obsolescence % as a share of total inventory. Identify the top 50 obsolete SKUs by dollar value and write the specific action for each: RTV, transfer, markdown, or scrap.

**Deliverable:** Obsolescence baseline number and top 50 purge SKUs with action plan

---

### Part 5: Days of Supply and Min/Max Management

**What It Measures**
Days of Supply tells you how many days your current inventory will last at the current usage rate. If you have $50,000 in filters and you use $5,000 per month, you have 300 days of supply — too much. If you have $2,000 in hydraulic hoses and you use $8,000 per month, you have 7.5 days — too little. This metric drives your min/max reordering discipline.

**Required ERP Reports**
- Inventory Usage Report (Extract: Average Daily Usage by SKU)
- Inventory Valuation Report (Extract: Current On-Hand Value by SKU)

**Formula**
Days of Supply = [YOUR CURRENT INVENTORY VALUE] ÷ [YOUR AVERAGE DAILY USAGE VALUE]

**Step-by-Step Calculation**
1. Enter your current inventory value for a SKU or category from the Inventory Valuation Report
2. Enter your average daily usage for that SKU or category from the Inventory Usage Report (annual usage ÷ 365, or monthly usage ÷ 30)
3. Divide current inventory by average daily usage
4. The result is the number of days your current stock will last

**HEDS Target:** Rolling coverage — 30 days for high-velocity SKUs, 90 days for medium-velocity, 180 days for slow-moving. Total department days of supply should not exceed 90–120 days.

> **Floor Rule:** If you have 300 days of supply on a part that moves 10 times per year, you are tying up 10 months of cash in one SKU. Set the max at 90 days for medium movers and 30 days for fast movers. When the DMS says "reorder," reorder — do not override it because "we just ordered last month." The DMS knows the usage rate better than your gut.

**What It Does NOT Measure**
Days of supply does not account for vendor lead time variability. If your supplier delivers in 3 days, 30 days of supply is plenty. If your supplier delivers in 21 days, 30 days of supply means you will be out of stock for 9 days before the next order arrives. Always set your min above (lead time in days × daily usage) to avoid stockouts between order and receipt.

**Why This Number Goes Wrong**
- Min/max levels were set years ago and never updated
- Usage rate changed (new equipment model introduced, old model retired) but the DMS was not updated
- Seasonal demand is not factored — a part used only during harvest season should not carry 365 days of supply year-round
- No usage review cycle — nobody checks whether the parts being stocked match the parts being used
- Safety stock is set as a flat dollar amount instead of a usage-based calculation

**Hands-On Exercise**
Pull your top 100 SKUs by inventory value. Calculate days of supply for each. Flag any SKU with more than 180 days of supply. For each flagged SKU, write down: is the min/max outdated, is the usage declining, or is this a one-job overstock? Adjust the min/max for any SKU where the current setting does not match actual usage.

**Deliverable:** Top 100 SKU days-of-supply audit with min/max adjustment list

---

### Part 6: Parts-to-Labor Ratio and the Service Department Partnership

**What It Measures**
The Parts-to-Labor Ratio tells you how many parts dollars you sell for every labor dollar the service department sells. If service bills $100,000 in labor and parts bills $80,000 in shop parts (parts sold through service ROs), your ratio is $0.80:$1 — below target. This ratio measures whether the parts department is feeding the service department or starving it.

**Required ERP Reports**
- Parts Sales Summary (Extract: Customer Shop Parts Sales — parts sold on service ROs only)
- Customer Labor Sales Report (Extract: Customer Labor Sales — labor billed to customers)

**Formula**
Parts-to-Labor Ratio = [YOUR CUSTOMER SHOP PARTS SALES] ÷ [YOUR CUSTOMER LABOR SALES]

**Step-by-Step Calculation**
1. Enter your total monthly customer shop parts sales (parts sold on service repair orders, not counter/wholesale) from the Parts Sales Summary
2. Enter your total monthly customer labor sales (labor billed to customers, not internal) from the Customer Labor Sales Report
3. Divide shop parts sales by customer labor sales
4. The result is your ratio — expressed as $X:$1 (e.g., $1.50:$1 means $1.50 in parts for every $1.00 in labor)

**HEDS Target Range:** $1:$1 to $2:$1 (one to two dollars in parts for every dollar in labor)

> **Floor Rule:** If your ratio is below $1:$1, the service department is performing labor without selling parts. That means either the technician is not quoting parts on the repair order, the customer is buying parts elsewhere and bringing them in, or the parts department does not have the parts in stock and the service department proceeded without them. All three are leaks. Every labor dollar without a parts dollar is a missed opportunity.

**What It Does NOT Measure**
This ratio does not measure parts margins or labor margins individually. A $1.50:$1 ratio with 25% parts margin is different from $1.50:$1 with 35% parts margin. The ratio measures volume balance between departments — not profit quality. Always read this alongside the gross margin %.

**Why This Number Goes Wrong**
- Service technicians do not quote parts on repair orders — they quote labor only
- Customer brings their own parts (bought online or from a competitor) and the service department installs them
- Parts department does not stock the parts the service department needs, so service proceeds without parts
- No communication protocol between the counter and the shop — the counter does not know what the shop needs
- Service advisor does not present parts pricing to the customer alongside the labor quote

**Hands-On Exercise**
Pull your last month's parts sales by type (counter, wholesale, shop/internal). Pull your customer labor sales. Calculate your parts-to-labor ratio. If below $1:$1, pull 20 recent service ROs and count how many have parts line items vs. labor-only. Identify whether the gap is caused by missing parts (not stocked), customer-supplied parts, or service not quoting parts.

**Deliverable:** Parts-to-Labor Ratio baseline number and 20-RO audit with root cause identified

---

## Module 6: Seeing the Future — Forecasting with Leading Indicators

**Goal:** Train managers to see inventory stress and customer demand shifts weeks before they show up on the financial statement. By the time the accounting report catches it, the fill rate has already dropped and the emergency orders have already spiked.

> **Floor Rule:** Lagging indicators tell you what happened. Leading indicators tell you what is about to happen. A parts manager who only reads month-end inventory reports is driving by looking in the rearview mirror.

---

### Part 1: Leading vs. Lagging Indicators

| Lagging (What Happened) | Leading (What Is About to Happen) |
|---|---|
| Monthly P&L | Fill rate trend this week |
| Quarterly inventory turns | Backorder count trend this week |
| Annual obsolescence write-off | Inventory aging trend — dollars moving into 180+ bucket |
| Month-end gross margin % | Lost sales $ trend this week — customers asking for parts you do not have |
| Annual salary ratio | Emergency order count this week vs. last week |

**The Shift**
Stop asking "What did we sell last month?" Start asking "What are we going to run out of next week?"

---

### Part 2: Demand Forecasting and Seasonal Planning

**What It Is**
Using DMS usage history to predict which parts will be needed in the next 30, 60, and 90 days — and pre-stocking before the demand hits. Heavy equipment has seasonal demand cycles: harvest season, snow season, construction season, and freeze/thaw cycles all create predictable parts demand spikes.

**How to Build a Seasonal Demand Forecast**
1. Pull 3 years of parts usage history by SKU by month
2. Identify SKUs with seasonal demand patterns (e.g., filters spike in spring, hydraulics spike in harvest, heaters spike in fall)
3. For each seasonal SKU, calculate the average monthly usage during peak season vs. off-season
4. Set min/max levels that adjust for the season — higher max in the 60 days before peak, lower max in off-season
5. Review the forecast monthly and adjust based on actuals

**Hands-On Exercise**
Pull your top 50 seasonal SKUs by usage. Identify the peak month for each. Calculate the difference between peak and off-season usage. Write down the pre-stock date (when you need to order to have parts on the shelf before peak hits) for each.

**Deliverable:** Seasonal demand forecast for top 50 seasonal SKUs with pre-stock dates

---

### Part 3: Pricing Strategy and Margin Protection

**What It Is**
The discipline of applying tiered markup (matrix pricing) to every part that crosses the counter — higher markup on low-cost parts, disciplined markup on high-cost parts — so that gross margin stays in the 30–35% range without relying on end-of-month discounting to clear inventory.

**Matrix Pricing Standards**
| Parts Cost Range | Standard Markup | Example |
|---|---|---|
| $0–$10 | 60–75% | $5 part sells for $8.50–$8.75 |
| $11–$25 | 50–60% | $20 part sells for $30–$32 |
| $26–$50 | 40–50% | $40 part sells for $56–$60 |
| $51–$100 | 35–40% | $75 part sells for $101–$105 |
| $101–$500 | 30–35% | $200 part sells for $260–$270 |
| $500+ | 25–30% | $1,000 part sells for $1,250–$1,300 |

> **Floor Rule:** A flat 30% markup on every part is lazy management. It overprices cheap parts (customers notice and buy elsewhere) and underprices expensive parts (you leave margin on the table). Matrix pricing is not optional — it is the standard. Every DMS has a matrix pricing module. Turn it on, configure it, and enforce it. If a price needs to be overridden, it requires a manager's name on it.

**Hands-On Exercise**
Pull your last 50 parts invoices. Check whether matrix pricing was applied to each line item. If flat pricing was used, calculate the dollar difference between what was charged and what matrix pricing would have charged. Total the gap.

**Deliverable:** Matrix pricing audit with dollar gap between actual and matrix-standard pricing

---

### Part 4: Customer Retention and Wholesale Growth

**What It Is**
Tracking whether your parts customers — both internal (service department) and external (retail counter, wholesale accounts, e-commerce) — are growing or shrinking over time. A customer who bought $5,000 per month last year and $3,000 per month this year is drifting. Catch it before they stop entirely.

**How to Track It**
- Pull parts sales by customer for the last 12 months
- Calculate average monthly parts purchase per customer
- Flag any customer whose current 3-month average is more than 25% below their 12-month average
- Assign each flagged customer to a counter person or manager for a follow-up call
- Track wholesale account activity monthly — if an account goes silent for 60+ days, call them

**Hands-On Exercise**
Pull your top 20 parts customers by revenue for the last 12 months. Calculate each customer's 3-month trailing average vs. their 12-month average. Flag any customer with a 25%+ decline. Assign each flagged customer to a counter person for a follow-up call this week.

**Deliverable:** Customer retention watch list with assigned counter persons and call dates

---

## Program Toolkit and Implementation Assets

Every participant receives these templates (HEDS-owned, licensed for internal use):

| Asset | What It Does |
|---|---|
| HEDS Parts Department Baseline Health Assessment | One-page starting line for every KPI |
| Parts Profit Leak Diagnostic Matrix | Connects each KPI to the floor behavior causing the leak |
| Daily Operational Scorecard Template | 5–7 metrics, daily entry, trigger-point rules |
| Weekly Inventory Scorecard Template | 7 metrics, weekly entry, trend vs. baseline |
| 10-Minute Standup Agenda Template | Fixed agenda, 10-minute timer, one decision minimum |
| Weekly Inventory Review Decision Tree | RTV, markdown, transfer, or scrap — every SKU over 180 days gets a decision |
| Fill Rate Gap Tracker | Top 30 fill-rate miss SKUs with root cause and stocking adjustment |
| Obsolescence Purge Calendar | Monthly purge schedule with RTV/markdown/scrap actions |
| Stock Order Efficiency Audit | Stock vs. emergency order split with top 20 emergency SKUs |
| Days of Supply Audit Worksheet | Top 100 SKU days-of-supply with min/max adjustment list |
| Parts-to-Labor Ratio Audit | 20-RO audit template with root cause identification |
| Matrix Pricing Configuration Guide | Tiered markup standards by cost range with DMS setup instructions |
| Seasonal Demand Forecast Template | Top 50 seasonal SKUs with peak month and pre-stock dates |
| Customer Retention Watch List Template | 12-month vs. 3-month average with decline flags and call assignments |
| 90-Day Action Plan Template | Top 3 priorities with metric, target, owner, and review cadence |

---

## Commercial Value Targets (Internal Anchor — Not a Guarantee)

| Metric | Typical Baseline | Target After Training |
|---|---|---|
| Parts Gross Margin % | Below 30% | 30% to 35% |
| Parts Absorption Rate | Below 45% | 60% or greater |
| Parts Sales as % of Dealership Sales | Below 20% | 25% to 30% |
| Parts Salary as % of GP | Above 32% | 27.5% or less |
| Gross Parts Turns | Below 2.5x | 3 to 4 turns |
| Stock Order Efficiency | Below 60% | Greater than 75% |
| Obsolescence & Excessive Stock | Above 15% | Less than 10% |
| Parts-to-Labor Ratio | Below $0.80:$1 | $1:$1 to $2:$1 |
| First-Time Fill Rate | Below 80% | 90% or greater |
| Days of Supply | Inconsistent, 200+ on slow movers | 30/90/180 rolling by velocity tier |

*These are training targets, not contractual guarantees. The client's execution determines actual results.*

---

## Delivery Format Options

### Option A: 3-Day Intensive On-Site Bootcamp
| Day | Modules | Focus |
|---|---|---|
| Day 1 AM | Module 1 (Parts 1–4) | Financial foundation: gross margin, absorption, sales ratio, salary ratio — all formulas with your data |
| Day 1 Midday | Module 2 (Part 1) | **Hands-on break:** Inventory aging audit — pull your actual inventory aging report, categorize by bucket, calculate the dollar value of dead stock. Gets managers out of the accounting concepts and into their own data before the afternoon session. |
| Day 1 PM | Module 2 (Parts 2–3) + Module 3 | Fill rate and stock order audit, baseline health assessment completed, leak diagnostic matrix built |
| Day 2 | Modules 4–5 | Scorecard design, floor execution, inventory discipline — turns, stock order efficiency, fill rate, obsolescence, days of supply, parts-to-labor ratio |
| Day 3 | Module 6 + Capstone | Forecasting, pricing strategy, customer retention, 90-day action plan |

Post-training: 30 days of remote scorecard reviews (purchased separately if needed)

### Option B: 6-Week Parts Leadership Accelerator
| Week | Focus |
|---|---|
| Week 1 | On-site baseline audit and inventory review (Modules 1–2) |
| Weeks 2–3 | Interactive workshop and scorecard design (Modules 3–4) |
| Weeks 4–5 | Floor-level execution, inventory discipline, min/max adjustment, obsolescence purge (Module 5) |
| Week 6 | Forecasting, pricing strategy, customer retention, certification review (Module 6) |

Post-training: 60-day bi-weekly follow-up accountability calls (purchased separately)

---

## 90-Day Action Plan (Completed at End of Program)

| Priority | Standard to Install | Metric to Track | Target | Owner | Review Cadence |
|---|---|---|---|---|---|
| 1 | [Your choice] | [Your metric] | [Your number] | [Your name] | [Daily/Weekly] |
| 2 | [Your choice] | [Your metric] | [Your number] | [Your name] | [Daily/Weekly] |
| 3 | [Your choice] | [Your metric] | [Your number] | [Your name] | [Daily/Weekly] |

**Signed by:** _______________________________ **Date:** ____________

---

## Certificate of Completion

Issued at the end of the onsite or at the end of the 6-week accelerator. Confirms completion of the Parts Manager track. Does not convey certification, licensure, or qualification for any HEDS advisory or consulting tier.

---

## Follow-Up Coaching (Optional — Not Bundled)

Available after the program when specific performance gaps are identified. Purchased separately.

- Virtual sessions focused on the specific KPI, workflow, or rhythm where execution is lagging
- Available as individual sessions or as a bundled coaching package
- Engaged only when the client elects to address a specific gap
- No fixed 30/60/90 schedule — coaching is triggered by actual performance, not a calendar
