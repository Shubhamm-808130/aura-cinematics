# 📄 Product Requirements Document (PRD)
## Project: AURA CINEMATICS — Luxury Wedding Photography & Films Platform
**Version:** 2.4.0  
**Status:** Active / Production Ready  
**Target Audience:** Luxury Wedding Couples, Wedding Guests, Professional Studio Owners  

---

## 1. Executive Summary & Vision
**Aura Cinematics** is a zero-hosting-cost, ultra-responsive web platform tailored specifically for elite wedding photographers, cinematographers, and production studios. 

Traditional wedding photography websites are either static portfolios that lack business automation or expensive SaaS platforms that charge commissions and monthly fees. Aura Cinematics bridges this gap by delivering:
- A high-converting, royal-editorial portfolio showcase.
- Direct-to-bank **0% fee UPI QR payment processing**.
- Instant QR-code photo delivery for wedding guests via printable table cards.
- A private, secure **Photographer Studio Admin Hub** with live financial analytics.

---

## 2. Target User Personas

### Persona A: Prospective Royal Couples (Primary Consumer)
- **Profile:** Couples planning destination or royal weddings (Udaipur, Jaipur, Goa, Delhi, International).
- **Needs:** High-resolution visual proof of work, transparent package pricing, clear coverage details, instant date availability check, and seamless booking.
- **Pain Points:** Hidden prices, slow gallery loading, cluttered interfaces, complex enquiry forms.

### Persona B: Wedding Guests & Family (Secondary Consumer)
- **Profile:** Attendees at client weddings wanting instant access to their event photos.
- **Needs:** Frictionless mobile photo access without creating accounts or downloading mobile apps.
- **Solution:** Table QR tent cards scanned at dinner tables with instant ZIP download or single-photo viewing.

### Persona C: Studio Owner / Lead Photographer (Admin)
- **Profile:** High-end boutique wedding photographer / studio director.
- **Needs:** Calendar management, client deposit verification, dynamic pricing editor, portfolio management, gallery publishing, and zero gateway commissions.

---

## 3. Core Functional Requirements

### 3.1 Luxury Client-Facing Showcase
- **Hero Section:**
  - Lightweight GPU-accelerated crossfade background slideshow of master portfolio stills.
  - High-contrast gradient overlay ensuring 100% WCAG legibility for the main heading and subtitle.
  - Prominent dual CTA cluster: **"View Our Work"** (smooth scroll) and **"Check Date Availability"** (booking modal).
  - Accessible, frosted-glass carousel pagination indicators with active state expansion.
  - Top announcement banner for festive and seasonal promotional booking offers.
- **Pure 20-Photo Demo Portfolio:**
  - Flat grid exhibiting 20 curated master wedding photographs (no confusing nested sub-collections).
  - **Progressive Reveal:** 8 photos displayed on initial load with a clean **"See More Photos ↓" / "Show Less Photos ↑"** toggle.
  - Minimalist photo cards without distracting hover badges, location text, or overlays.
- **Full-Screen Master Lightbox Viewer:**
  - One-click trigger from any portfolio card.
  - Global cycling through all 20 demo images via prominent Left/Right navigation buttons or keyboard arrows.
  - Synchronized thumbnail strip with active thumbnail border and auto-scroll centering.
  - Clean floating close button (`✕`) and live photo position counter (`Photo X of 20`).
- **Love Stories & Testimonials:**
  - 5.0-star rating callouts with verified platform tags (WedMeGood, Google Reviews).
  - Standardized warm-luxury monogram/avatar indicators.
  - Interactive **"Write a Review / Share Your Experience"** modal with live star rating and instant client submission.
- **Cinema Gear & Studio Credentials:**
  - Equipment disclosure (Sony FX3/FX6 Cinema Line, G-Master f/1.2 glass, DJI Mavic 3 Cine, Profoto B10X).
  - Verified badges: On-time delivery guarantee, 340+ completed royal celebrations, 15,000+ guest downloads.
- **Omnipresent Contact & Quick Booking:**
  - 3 standardized contact cards: Direct Call/WhatsApp, Official Email Inquiry, Flagship Studio Addresses.
  - Floating direct WhatsApp quick-action button with pre-filled inquiry text.

### 3.2 Transparent Investment & Packages
- **4 Standardized Wedding Tiers:**
  1. *Timeless Photography* (Stills specialist, raw SSD files, 350+ retouched masters).
  2. *Cinematic Filmography* (4K cinema teaser, documentary film, licensed drone aerials).
  3. *Royal Combo Deluxe (Most Popular)* (5-crew team, 40-sheet Canvera leather photobook, full coverage).
  4. *Palace Destination Elite* (Multi-day celebration, same-day edit teaser, VIP cloud portal).
- **Price Transparency:**
  - Real-time final price calculation reflecting active festive discounts (e.g. 15% off).
  - Exact advance deposit required to lock the date on the calendar.
  - Equal-height card layout with horizontal baseline alignment for all **"Book This Package"** action buttons.
  - Multi-city travel and destination wedding custom itinerary callout.

### 3.3 Interactive Booking Wizard & 0% Fee UPI Payment
- **3-Step Client Booking Flow:**
  - *Step 1: Event Details* (Full Name, Phone, Email, Wedding Date, Venue City, Package Selection).
  - *Step 2: Package & Date Confirmation* (Displays calculated package price, deposit amount, and savings).
  - *Step 3: Direct Bank UPI QR Payment* (Generates live `upi://pay` QR code for Google Pay, PhonePe, Paytm, BHIM).
- **Zero Commission Guarantee:** Direct peer-to-peer bank transfer without third-party aggregator deductions.
- **Booking Confirmation Receipt:**
  - Auto-generated downloadable transaction receipt with Unique Booking Reference ID (e.g. `BK-84920`).
  - One-click WhatsApp auto-sync sending complete booking confirmation to the studio WhatsApp number.
  - Confetti celebration animation upon payment confirmation.

### 3.4 Unique Client QR Codes & Guest Delivery Hub
- **Dedicated Wedding Galleries:**
  - Unique URL slug generated for every couple (e.g. `?gallery=kabir-mehr-2026`).
  - Protected by an optional 4-digit PIN set by the couple or studio.
- **Guest Access Methods:**
  - Direct camera QR code scan.
  - In-browser QR Scanner modal using device camera.
  - Manual 6-digit access code entry (e.g. `KM2026`).
- **Instant Photo Delivery:**
  - Master high-res ZIP package download simulation.
  - Social media-ready instant single-photo download.
- **Printable Reception Table Tent Cards:**
  - Print-ready CSS (`@media print`) generating elegant 4x6" table cards with couple names, wedding date, live QR code, and guest download instructions.

### 3.5 Studio Admin Dashboard & Analytics Hub
- **Authentication:** Protected modal login with session storage authorization.
- **Live Business Analytics (Chart.js):**
  - Financial KPI Cards: Total Booked Revenue, Advance Collected in Bank, Pending Receivables.
  - Operational KPIs: Total Completed Weddings, Upcoming Weddings Count.
  - Guest Engagement: Total Table QR Scans, Total Guest Photo Downloads.
  - Visual Charts: Monthly Revenue Trend (Line Chart) and Package Popularity Share (Doughnut Chart).
- **Studio Management Modules:**
  - *Bookings Tab:* View, filter, approve, or reject incoming reservations; 1-click client WhatsApp chat.
  - *QR Code Manager:* Create client galleries, link cloud storage folders, and launch print view for table cards.
  - *Portfolio Manager:* Add new wedding photos or YouTube 4K teaser links; delete outdated items.
  - *Packages & Pricing Editor:* Modify base prices and advance deposit requirements on the fly.
  - *Studio Settings:* Edit brand name, phone, WhatsApp number, and UPI Payment ID.

---

## 4. Non-Functional Requirements (NFRs)

| Attribute | Specification |
| :--- | :--- |
| **Performance** | First Contentful Paint (FCP) < 1.0s; GPU-accelerated crossfades; zero continuous transform loops. |
| **Usability / UX** | Strict compliance with Floto 23 Usability Criteria (WCAG 2.1 AA contrast, button consolidation, no skipped headings). |
| **Hosting Cost** | $0.00 / month forever (Deployable to Vercel, Netlify, or GitHub Pages as static bundle). |
| **Data Persistence** | HTML5 `localStorage` with fail-safe fallback to comprehensive default mock dataset. |
| **Responsiveness** | Mobile (320px–640px), Tablet (768px–1024px), Desktop (1280px–1920px+). |
| **Browser Compatibility** | Chrome, Safari, Edge, Firefox, iOS WebKit, Android Chrome. |

---

## 5. Success Metrics & Key Performance Indicators (KPIs)
1. **Conversion Rate:** >= 18% of unique visitors initiating the "Check Date Availability" booking wizard.
2. **Speed Score:** Lighthouse Performance Score >= 92 on mobile devices.
3. **Usability Score:** 100/100 compliance on web accessibility and layout consistency audits.
4. **Guest Engagement:** Average 45+ QR scans and 25+ photo downloads per wedding celebration.
