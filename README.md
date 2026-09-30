# Follow the job: a TaxDome tour (40-question interactive quiz)

A self-contained learning page for teams that don't work directly with clients. It teaches what TaxDome is, who it's for, what each part of the product does and how that helps accounting firms. It's built around understanding, not clicking through features.

The learner is a "job" moving through eight pipeline stages, the same way client work moves through TaxDome. Each stage has five questions. The last question of every stage is a match or ordering challenge worth double points.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app (HTML, CSS, JS). No build step, no dependencies. |
| `questions.js` | All content: stages, 40 questions, answers, explanations, links. |
| `README.md` | This file. |

## Deploy to GitHub Pages

1. Create a repository and upload `index.html`, `questions.js` and `README.md` to the root of the `main` branch.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute or two the page is live at `https://<user-or-org>.github.io/<repo>/`.

To test locally, open `index.html` in a browser. Keep `questions.js` in the same folder.

## Public page caution

GitHub Pages sites are public unless your organization is on GitHub Enterprise Cloud with private Pages.

- The page includes `noindex, nofollow`, so search engines are asked to skip it. Anyone with the link can still open it.
- Anyone can read the source, so every answer is visible in `questions.js`. Treat this as a learning tool, not a graded exam.
- Only public information is used. Do not add internal-only numbers (segmentation, pricing, headcount targets) to `questions.js`.
- Scores and progress are stored in the learner's own browser (`localStorage`). Nothing is sent anywhere. Nobody, including you, sees individual scores unless the learner shares them with the "Copy my result" button.

## What's in the tour

| Stage | Topic |
|---|---|
| 1 | Meet TaxDome (company, founders, mission, what we are and aren't) |
| 2 | Who we build for (customers, pain points, integrations with tax prep software) |
| 3 | Clients and CRM |
| 4 | Documents (storage, e-signatures, organizers, security on upload) |
| 5 | Workflows (pipelines, jobs, tasks, automations, Automove) |
| 6 | Billing (proposals, invoices, recurring billing, payments) |
| 7 | Team and clients (team management, reporting, client portal, mobile apps) |
| 8 | Trust, AI and what's next (compliance, AI features, newer products) |

Mix: 16 multiple choice, 8 true or false, 8 select-all, 4 matching, 4 ordering. Options, pairs and steps are shuffled on every play.

Scoring: 100 points for multiple choice, true or false and select-all (select-all gives partial credit). 200 points for matching and ordering (partial credit). A streak bonus of up to +50 per question rewards consecutive fully correct answers. The rank (Intern to Managing partner) is based on base points only, so streaks never change it.

Extras: stage recap cards with one takeaway each, a results page with a per-stage breakdown, a "revisit" list of missed questions, a printable **study sheet** (all 40 answers with explanations, which also works as a trainer's answer key), keyboard shortcuts, light and dark mode, reduced-motion support and screen-reader labels.

## Editing questions

Everything lives in `questions.js` as `window.TOUR`. Keep the `version` string in sync with meaningful edits: changing it resets saved progress for learners so nobody resumes into a different question set.

```js
window.TOUR = {
  version: '2026-09',
  stops: [ { name, short, intro, takeaway }, ... ],   // 8 stages
  questions: [ ... ],                                  // 40 questions, ordered by stage
  links: [ { label, url }, ... ]                       // shown on the results page
};
```

Every question has `stop` (0-based stage index), `type`, `q` (the question) and `why` (the 2-4 sentence explanation). Then, by type:

```js
// Multiple choice
{ stop: 0, type: 'mc', q: '...', options: ['A','B','C','D'], answer: 2, why: '...' }
// True or false
{ stop: 0, type: 'tf', q: '...', answer: true, why: '...' }
// Select all that apply (answer is an array of option indexes)
{ stop: 0, type: 'ms', q: '...', options: ['A','B','C','D'], answer: [0, 2], why: '...' }
// Match: pairs are [left, right] in the CORRECT pairing; the page shuffles the right side
{ stop: 0, type: 'match', q: '...', leftLabel: 'Feature', rightLabel: 'What it does',
  pairs: [['A','a'], ['B','b'], ['C','c']], why: '...' }
// Sequence: steps listed in the CORRECT order; the page shuffles them
{ stop: 0, type: 'seq', q: '...', steps: ['First','Second','Third'], why: '...' }
```

Rules the page relies on:

- Keep exactly five questions per stage, with the match or sequence question last in its stage (the page treats the last question in a stage as the stage challenge).
- Keep the stage count at 8 (the progress rail is an 8-column grid). If you change it, update the grid in the CSS (`.stages`).
- Avoid making the correct multiple choice option the longest one. It's a giveaway.

## Facts to refresh before each re-publish

Questions marked "(refresh)" in their explanations depend on things that change. Check these against taxdome.com before publishing:

- Company size and reach: number of countries, team members and team locations
- Founding details: launch year, headquarters, founder titles
- App store rating and review counts for the client mobile app
- Payments volume (the "$900M+ processed" figure)
- Newest products and features named in stage 8 (TaxDome AI, Juno, Bookkeeping Hub, Kiosk, Client Care) and which plan includes what
- Plan names (Essentials, Pro, Business)
- Compliance list (SOC 2 Type II, ISO 27001, PCI DSS, GLBA, HITRUST)

Primary sources: taxdome.com/company-information, taxdome.com/product-updates, taxdome.com/overview, and the Help Center.

## Fonts and branding

The page uses the brand palette (white, ink, blue `#266de8`, yellow used only as a fill) and the TaxDome logo. The brand typeface Suisse Intl is licensed, so it is not embedded. `index.html` lists it first in the font stack and falls back to Hanken Grotesk from Google Fonts. To use it, add your licensed font files next to `index.html` and add this to the top of the `<style>` block:

```css
@font-face { font-family: "Suisse Intl"; src: url("SuisseIntl-Regular.woff2") format("woff2"); font-weight: 400; }
@font-face { font-family: "Suisse Intl"; src: url("SuisseIntl-Medium.woff2") format("woff2"); font-weight: 500 700; }
```

Font files in a public repository are downloadable by anyone, so check your license terms first. If you would rather not load Google Fonts at all, remove the three `<link>` tags for `fonts.googleapis.com` and `fonts.gstatic.com` in the `<head>`. The page then uses the system font.

## Using it in training

- Solo self-study: about 20 minutes, no timer.
- Live session: run it as a team, then use the study sheet (Results > Study sheet > Print) as the debrief handout.
- Stages with "Worth a second look" on the results page show where a person or team should revisit the material.
