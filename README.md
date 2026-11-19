# HEDS Operating Discipline Academy

Static site for Heavy Equipment Dealer Solutions LLC, served by GitHub Pages at https://hedsconsulting.net (see `CNAME`). There is no build step.

## Pages

- `index.html`: the main site. Tabs for Overview, Due Diligence, Dealership, Rental, Fleet Owners, Training, Assessment and Contact.
- `contact.html`, `fleet-owners.html`, `due-diligence-scorecard.html`, `curriculum-index.html`: supporting pages.
- `dealer-kpi-library.html`, `rental-kpi-library.html`: KPI libraries with targets and slider calculators.
- `service-manager-dashboard.html`, `rental-service-manager-dashboard.html`, `rental-manager-dashboard.html`, `parts-manager-dashboard.html`: the four training dashboards. Each is a standalone file with inline CSS and JS.
- `blog/`: articles.
- `404.html`: page shown for unknown addresses.

## Shared code

- `assets/kpi-targets.js` is the single source for KPI targets and PASS, WARN and FAIL grading. Edit targets here.
- `assets/kpi-calculator.js` builds the calculator tiles in the KPI libraries from those targets.

## Checks before publishing

Run the site check (dashes, banned words, phone number, local links) and the KPI target check that compares `assets/kpi-targets.js` text to the library rows.

## Branches

`main` is live. Work is staged on `site-package` and only merged to `main` when approved.
