# ResumeCraft — Simple, Fully Responsive Resume Builder

A simple, fast, and fully responsive **Resume Builder website built exclusively with HTML5, CSS3, and vanilla JavaScript**.

---

## 🌟 Key Features

### 1. Pure Vanilla Web Technologies
- **HTML5** for clean, semantic document structure.
- **CSS3** for modern dark-mode aesthetics, responsive layouts, CSS Grid, and print styles.
- **Vanilla JavaScript** (ES6+) for all dynamic functionality without any frameworks or external runtime dependencies.

### 2. Streamlined Navigation
Navigation is clean, focused, and distraction-free:
- **My Resume** — Create, view, search, duplicate, edit, and delete your saved resumes with persistent `localStorage`.
- **Templates** — Browse and preview all 9 professionally designed resume templates.

*(All portfolio-related pages, pricing, overview, and account settings have been completely removed).*

### 3. Exactly 9 Free Resume Templates
All 9 templates are 100% free with no locks, subscriptions, or paid tiers:
1. **Modern Minimal** — Clean typography and subtle accent dividers for tech and startup roles.
2. **ATS Classic** — High-density, single-column layout engineered for applicant tracking system parsers.
3. **Tech & Developer** — Monospace accents, categorized technical skill tags, and GitHub project links.
4. **Executive Leader** — Executive summary, core competencies grid, and milestone-focused achievements.
5. **Creative Designer** — Asymmetric header accent, visual design skill badges, and portfolio highlights.
6. **Academic & Fresher** — Education-first structure spotlighting degree honors, GPA, and academic coursework.
7. **Business & Management** — Metrics-focused corporate layout emphasizing quantifiable project delivery and ROI.
8. **Compact Elegant** — Space-optimized single-page layout to fit substantial experience on one page.
9. **Contemporary Sidebar** — Two-column layout with a left sidebar for contact & skills and full width for work experience.

### 4. Three-Column Template Grid (`grid-cols-3`)
- **Desktop:** 3-column CSS Grid layout (`repeat(3, 1fr)`).
- **Tablet:** 2-column layout.
- **Mobile:** Single-column layout.
- Consistent card dimensions, padding, and distortion-free miniature previews.

### 5. Dark Mode Only
- Modern, comfortable dark theme designed for extended use without eye strain.
- Slate/charcoal backgrounds (`#0b0f19`, `#131b2e`), high-contrast readable text (`#f8fafc`, `#94a3b8`), and restrained electric blue accents (`#3b82f6`).
- No light mode or unnecessary theme switching.

### 6. Interactive Two-Panel Resume Editor
- **Personal Information:** Name, Job Title, Email, Phone, Location, Portfolio, LinkedIn, GitHub.
- **Professional Summary / Objective:** Real-time editable summary.
- **Work Experience:** Dynamic repeater with Add/Remove, Current Job toggle, and bullet point achievements.
- **Education Details:** Dynamic repeater with Degree, University, Dates, GPA, and Coursework.
- **Skills & Competencies:** Categorized skill groups with easy comma-separated tags.
- **Projects:** Title, description, technologies, live demo, and GitHub repository links.
- **Certifications & Licenses:** Name, issuing organization, issue date, and credential URL.
- **Live Real-time A4 Preview:** Instant updates as you type with graceful omission of empty sections.
- **Design Customizer:** Real-time template switcher (preserves entered data), color accent swatches, font switching, and spacing controls.
- **Instant Autosave:** Debounced client-side `localStorage` autosave.

### 7. High-Fidelity PDF Export & Printing
- Direct client-side **Download PDF** button.
- Native browser **Print / Save as PDF** support (`@media print`) configured with exact A4 page dimensions, margins, and crisp vector typography.

---

## 🚀 Quick Start

### Option A: Using the Built-in Dev Server (Recommended)
```bash
npm run dev
# or
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option B: Direct Browser Opening
Simply double-click `index.html` or open it directly in any modern web browser.
