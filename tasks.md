# 📋 Implementation Tasks & Roadmap
## Project: AURA CINEMATICS — Luxury Wedding Photography & Films Platform
**Version:** 2.4.0  
**Status Legend:**  
- [x] Completed  
- [/] In Progress / Optimization  
- [ ] Planned / Future Roadmap  

---

## Phase 1: Core Showcase & Brand Foundation
- [x] Setup static project directory structure (`index.html`, `src/styles.css`, `src/app.js`).
- [x] Configure Google Fonts typography (*Playfair Display* & *Plus Jakarta Sans*).
- [x] Implement responsive luxury header with studio crest, desktop nav, and mobile drawer.
- [x] Build hero section with dynamic background slideshow and call-to-action cluster.
- [x] Implement 4 transparent wedding packages with feature checklists and deposit amounts.
- [x] Build Storyteller / About section showcasing studio credentials and Sony/DJI camera gear.
- [x] Design 12-column balanced footer with studio contact, Instagram link, and admin trigger.
- [x] Integrate floating WhatsApp quick-contact widget.

---

## Phase 2: Booking Engine & 0% Fee UPI Integration
- [x] Build interactive 3-step booking wizard modal (Date, Venue City, Package Selection).
- [x] Implement real-time advance deposit calculation (e.g. ₹10,000 to ₹35,000).
- [x] Integrate dynamic `upi://pay` deep-link generator for Google Pay, PhonePe, Paytm, and BHIM.
- [x] Render real-time UPI QR code matrix via public QR API for zero-fee peer-to-peer transfers.
- [x] Build booking confirmation receipt generator with unique reference code (e.g. `BK-84920`).
- [x] Add 1-click WhatsApp auto-sync sending formatted booking summary directly to studio.
- [x] Integrate Canvas Confetti celebration animation upon deposit confirmation.

---

## Phase 3: Client QR Codes & Guest Digital Delivery Hub
- [x] Create slug-based dedicated wedding gallery URLs (e.g. `?gallery=kabir-mehr-2026`).
- [x] Build in-browser QR Scanner modal using device camera with fallback manual code entry.
- [x] Implement optional 4-digit security PIN protection for client galleries.
- [x] Build single-photo high-res download and batch ZIP download simulation.
- [x] Implement `@media print` CSS engine generating 4" x 6" printable table tent cards for guest reception tables.

---

## Phase 4: Studio Admin Dashboard & Analytics Hub
- [x] Build administrative login modal with `sessionStorage` authentication guard.
- [x] Integrate Chart.js interactive analytics (Monthly Revenue Trend line chart + Package Popularity doughnut chart).
- [x] Build financial KPI metric cards (Total Revenue, Advance Collected, Pending Balances).
- [x] Implement Bookings Management Tab (Accept, Reject, Call, WhatsApp client directly).
- [x] Implement QR Code Manager Tab (Create client galleries, link Google Drive folders, print table cards).
- [x] Implement Portfolio Manager Tab (Add/delete photos and YouTube 4K teaser links).
- [x] Implement Pricing & Studio Settings Editor (Update rates, deposits, brand details, UPI ID).

---

## Phase 5: Web Usability Audit (Floto 23 Issues Resolution)
- [x] **Issue 1 (Major):** Consolidate scattered button styles into 3 canonical classes (`.btn-primary`, `.btn-secondary`, `.btn-ghost`).
- [x] **Issue 2 (Major):** Limit total typographic scale across the entire application to <= 10 steps.
- [x] **Issue 3 (Major):** Restrict text and UI color palette to <= 12 semantic tokens.
- [x] **Issue 4 (Minor):** Standardize testimonial avatars with cohesive luxury monograms and neutral/amber styling.
- [x] **Issue 5 (Minor):** Convert all-caps contact card buttons to Title Case (`Check Date Availability →`).
- [x] **Issue 6 (Major):** Add prominent high-contrast CTA cluster ("View Our Work" + "Check Date Availability") in Hero.
- [x] **Issue 7 (Major):** Ensure all 3 contact cards have consistent solid high-contrast action buttons.
- [x] **Issue 8 (Minor):** Upgrade review category tags with legible background and high contrast (`text-amber-900 bg-amber-50`).
- [x] **Issue 9 (Minor):** Make the "Write a Review" button prominent (`.btn-primary` with shadow and icon).
- [x] **Issue 10 (Major):** Eliminate duplicate promotional banner stacking inside the Hero section.
- [x] **Issue 11 (Minor):** Simplify package pricing clusters and increase vertical whitespace.
- [x] **Issue 12 (Major):** Apply rich multi-stop gradient overlay and drop-shadows on Hero heading for 100% legibility.
- [x] **Issue 13 (Major):** Enforce exact horizontal baseline alignment for "Book This Package" buttons across all 4 cards.
- [x] **Issue 14 (Minor):** Rebalance footer into a 12-column grid (`lg:grid-cols-12`) eliminating dead space.
- [x] **Issue 15 (Minor):** Reduce excessive whitespace around destination wedding itinerary notice.
- [x] **Issue 16 (Minor):** Enforce uniform minimum height on package header titles (`min-h-[96px]`).
- [x] **Issue 17 (Minor):** Enforce minimum body text size >= 12px throughout all components.
- [x] **Issue 18 (Minor):** Eliminate long uppercase body text strings.
- [x] **Issue 19 (Minor):** Correct heading hierarchy in Reviews section (changed `<h4` to `<h3`).
- [x] **Issue 20 (Minor):** Correct heading hierarchy in About / Gear section (changed `<h4` to `<h3`).
- [x] **Issue 21 (Minor):** Correct heading hierarchy in Contact section (changed `<h4` to `<h3`).
- [x] **Issues 22 & 23 (Minor/Suggestion):** Enclose Hero pagination dots in accessible frosted-glass container with expanded touch targets.

---

## Phase 6: Pure Photo Portfolio & Lightbox Experience
- [x] Replace nested photo sub-collections with a clean flat array of **20 master demo wedding photos**.
- [x] Implement initial 8-photo display with responsive grid (`lg:grid-cols-4`, `sm:grid-cols-2`).
- [x] Add clean **"See More Photos ↓" / "Show Less Photos ↑"** expand toggle (removed brackets).
- [x] Remove all distracting hover text, location labels, and magnifying glass icons from photo cards.
- [x] Build global 20-photo Lightbox viewer with Left/Right navigation, keyboard arrow support, and active thumbnail strip.
- [x] Update cache-busting version strings in `index.html` (`?v=20261117_audit`).

---

## Phase 7: Future Expansion (Roadmap)
- [ ] Multi-currency support (USD, AED, EUR, GBP) for international NRI wedding bookings.
- [ ] Webhook integration for automatic WhatsApp notification triggers via Twilio / Meta Cloud API.
- [ ] Offline PWA Service Worker caching for seamless portfolio presentation at client meetings without internet.
- [ ] Client photo favoriting / selection engine for photobook album proofing.
