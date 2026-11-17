# 🧠 Key Technical Decisions Log (Memory)
## Project: AURA CINEMATICS — Luxury Wedding Photography & Films Platform
**Version:** 2.4.0  
**Format:** Architectural Decision Records (ADR)  

---

## ADR 01: Pure Client-Side SPA Architecture with LocalStorage Persistence
- **Context:** The studio required a full-featured booking and management platform with zero monthly hosting, database, or server costs.
- **Decision:** Architect the platform as a pure client-side Single Page Application (SPA) utilizing HTML5 `localStorage` and `sessionStorage` for persistence, coupled with an in-memory `defaultData` fallback.
- **Consequences:** 
  - **Pros:** Zero hosting bills; deployable for free on Vercel, Netlify, or GitHub Pages; near-zero latency; works locally via `file:///` or VS Code Live Server.
  - **Cons:** Storage is client-scoped unless synchronized to an external cloud drive. A demo data reset button (`resetDemoData()`) was added to ensure graceful recovery.

---

## ADR 02: Visual Theme Evolution (Dark Theme to Royal Ivory & Gold)
- **Context:** Early designs featured a high-contrast black background, which felt heavy and obscured editorial photography details.
- **Decision:** Shifted to a **Royal Ivory (`#fbf9f5`) and Warm Gold (`#b45309`)** aesthetic.
- **Consequences:**
  - Dramatically enhanced photo card contrast and editorial luxury perception.
  - Aligned with high-end destination wedding publications (Vogue Weddings, WedMeGood).

---

## ADR 03: Direct Peer-to-Peer UPI Deep Links vs Payment Gateway Aggregators
- **Context:** Standard payment gateways (Razorpay, Stripe) charge 2% to 3% transaction fees per booking (e.g. ₹750–₹1,000 deduction on a ₹35,000 deposit), require legal entity KYC, and take 2–3 business days for settlement.
- **Decision:** Implement direct National Payments Corporation of India (NPCI) UPI deep-link QR generation (`upi://pay?pa=...&am=...`).
- **Consequences:**
  - **0% Gateway Fees:** 100% of client deposit lands directly into the photographer's bank account instantly.
  - Zero merchant account setup friction; supports Google Pay, PhonePe, Paytm, and BHIM natively.

---

## ADR 04: Portfolio Architecture — Flat 20-Photo Showcase vs Nested Sub-Collections
- **Context:** An earlier version nested sub-collections inside each portfolio card (e.g. clicking a card opened 6 sub-photos for that specific wedding), causing user confusion and navigation friction.
- **Decision:** 
  1. Consolidated the showcase into a clean, flat list of **20 distinct master wedding photographs**.
  2. Implemented progressive reveal: **8 photos displayed on initial load**, expanding to **20 photos** when tapping the clean **"See More Photos ↓"** button.
  3. Stripped away all card hover clutter (removed titles, location tags, and zoom icons).
  4. Global Lightbox viewer cycles through all 20 demo images via prominent Left/Right arrows and active thumbnail bar.
- **Consequences:** Cleaner visual presentation, zero user disorientation, and intuitive browsing experience.

---

## ADR 05: Resolution of 23 Usability & Accessibility Issues (Floto Audit)
- **Context:** Floto Web Usability Audit Report on `http://127.0.0.1:5500/index.html` scored 48/100, citing 23 usability issues (0 critical, 6 major, 16 minor, 1 suggestion).
- **Decisions & Mitigations:**
  1. **Button Consolidation (Issue 1):** Replaced scattered inline button styles with 3 standard classes (`.btn-primary`, `.btn-secondary`, `.btn-ghost`).
  2. **Typographic & Color Constriction (Issues 2 & 3):** Standardized font scale to <= 10 steps and color palette to <= 12 semantic tokens.
  3. **Heading Hierarchy (Issues 19, 20, 21):** Corrected skipped heading levels (changed reviewer names, gear headings, and contact titles from `<h4` to `<h3`) ensuring strict WCAG document outline compliance.
  4. **Equal-Height Package Baselines (Issues 13 & 16):** Implemented `flex flex-col h-full justify-between` and `mt-auto pt-6` to lock all 4 "Book This Package" buttons to an identical horizontal baseline.
  5. **Hero Text Legibility (Issue 12):** Added rich multi-stop gradient overlays and CSS drop-shadows to ensure 100% heading legibility over bright photographic slides.
  6. **Accessible Pagination Dots (Issues 22 & 23):** Enclosed pagination dots in a high-contrast frosted-glass container with enlarged touch hit areas.
  7. **12-Column Footer Grid (Issue 14):** Rebalanced footer columns into a 12-column grid (`lg:grid-cols-12`) eliminating awkward dead whitespace.

---

## ADR 06: Zero-Build CDN Stack
- **Context:** Complex npm build tooling (Webpack, Vite bundling) frequently introduces environment mismatch, Node version errors, and build friction for non-technical users.
- **Decision:** Utilize native browser ES modules and CDN-hosted runtime libraries (Tailwind CDN, Chart.js UMD, Canvas Confetti).
- **Consequences:** The entire application runs instantly by simply opening `index.html` in any web browser without running `npm install` or `npm run build`.

---

## ADR 07: Printable Table Tent Card Engine via Native CSS `@media print`
- **Context:** Photographers needed physical QR cards placed on dinner tables at wedding receptions so guests could scan and download photos during the event.
- **Decision:** Utilized browser-native `@media print` CSS rules inside `src/styles.css` to isolate `#printable-qr-card` and hide all navigation, buttons, and backgrounds during printing.
- **Consequences:** Eliminates third-party PDF generation libraries; produces crisp, high-DPI vector printouts directly from the browser's standard Print dialog (`Ctrl + P`).
