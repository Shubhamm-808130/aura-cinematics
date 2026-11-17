# 🏛️ System Architecture Document
## Project: AURA CINEMATICS — Luxury Wedding Photography & Films Platform
**Version:** 2.4.0  
**Pattern:** Pure Client-Side Single Page Application (SPA) with Local Persistence  

---

## 1. Architectural Overview & Philosophy

Aura Cinematics follows a **Zero-Overhead Static Client-Side Architecture**. It requires no expensive servers, backend microservices, or proprietary databases, operating entirely in the browser while delivering dynamic enterprise-grade functionality.

```
+--------------------------------------------------------------------------------+
|                               Client Web Browser                               |
|                                                                                |
|  +--------------------------------------------------------------------------+  |
|  |                       DOM Tree (index.html)                              |  |
|  |  +-----------------+  +-----------------+  +--------------------------+  |  |
|  |  | #navbar-container|  | #hero-container |  | #portfolio-container    |  |  |
|  |  +-----------------+  +-----------------+  +--------------------------+  |  |
|  |  | #packages-cont. |  | #reviews-cont.  |  | #about- & #contact-cont. |  |  |
|  |  +-----------------+  +-----------------+  +--------------------------+  |  |
|  |  | #footer-cont.   |  | #modal-root     |  | Floating WhatsApp Widget |  |  |
|  |  +-----------------+  +-----------------+  +--------------------------+  |  |
|  +--------------------------------------------------------------------------+  |
|                                       ^                                        |
|                                       | Reactive Template Re-renders           |
|                                       v                                        |
|  +--------------------------------------------------------------------------+  |
|  |                    Core JavaScript Engine (src/app.js)                   |  |
|  |  - State Manager (getDB / setDB)     - UPI QR Code Generator             |  |
|  |  - 20-Photo Lightbox Navigator       - Client Gallery / Table Card Engine|  |
|  |  - Booking & Deposit Calculator      - Admin Dashboard & Chart.js Engine |  |
|  +--------------------------------------------------------------------------+  |
|                                       ^                                        |
|                                       v Read / Write JSON                      |
|  +--------------------------------------------------------------------------+  |
|  |                    Browser Storage (HTML5 localStorage)                  |  |
|  |  - DB_KEYS.PHOTOGRAPHER   - DB_KEYS.PACKAGES   - DB_KEYS.PORTFOLIO       |  |
|  |  - DB_KEYS.BOOKINGS       - DB_KEYS.GALLERIES  - DB_KEYS.REVIEWS         |  |
|  |  - DB_KEYS.SEASONAL_OFFER - DB_KEYS.HERO_SLIDES- DB_KEYS.ADMIN_AUTH      |  |
|  +--------------------------------------------------------------------------+  |
+--------------------------------------------------------------------------------+
```

### Key Architectural Tenets:
1. **Zero Runtime Server Costs:** Operates 100% statically on standard CDNs (Vercel, Netlify, GitHub Pages, Apache, NGINX).
2. **Instant Paint with CDN Acceleration:** Tailwind CSS, Google Fonts, Chart.js, and Confetti load via low-latency public CDNs.
3. **Atomic Re-Rendering:** Sections render into isolated root container elements (`#navbar-container`, `#hero-container`, `#portfolio-container`, etc.) without full-page reloads.
4. **Hardware Acceleration:** Animations and transitions utilize GPU offloading (`transform: translateZ(0)` and `will-change: transform`).

---

## 2. Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Markup** | HTML5 Semantic Living Standard | Accessibility, structured DOM containers, semantic outline. |
| **Styling** | Tailwind CSS (v3 CDN) + `src/styles.css` | Utility-first layout, custom gold tokens, GPU acceleration, `@media print`. |
| **Scripting** | Vanilla ECMAScript 6+ | Zero-framework runtime, high speed, minimal bundle footprint. |
| **State Storage** | HTML5 `localStorage` & `sessionStorage` | Persistent client-side data store with mockData fallback. |
| **Analytics Engine** | Chart.js (v4.4.1 UMD) | Interactive line and doughnut charts in the studio dashboard. |
| **Delight Engine** | Canvas Confetti (v1.9.2) | Particle celebration animation on verified booking deposits. |
| **Fonts** | Google Fonts API | *Playfair Display* (luxury serif) & *Plus Jakarta Sans* (clean body). |

---

## 3. Component Hierarchy & Flow

```
index.html
├── #navbar-container
│   ├── Seasonal Announcement Banner
│   ├── Studio Logo & Crest
│   ├── Desktop Nav Links (Gallery, Package, About, Contact)
│   ├── "Access Your Photo" Modal Trigger
│   └── "Book Your Date" Modal Trigger
├── <main>
│   ├── #hero-container
│   │   ├── GPU Slideshow (hero-slide active/inactive)
│   │   ├── High-Contrast Text Layer (H1 + Drop Shadow)
│   │   ├── Primary CTA Cluster (.btn-primary & .btn-secondary)
│   │   └── Frosted-Glass Pagination Indicator
│   ├── #portfolio-container
│   │   ├── Section Header (H2)
│   │   ├── Responsive Photo Grid (8 initial / 20 expanded)
│   │   └── "See More Photos ↓" / "Show Less Photos ↑" Toggle
│   ├── #packages-container
│   │   ├── 4 Package Cards (Equal-height flexbox layout)
│   │   ├── Baseline-aligned "Book This Package" CTAs
│   │   └── Custom Multi-City Destination Itinerary Card
│   ├── #reviews-container
│   │   ├── Rating Bar & "Write a Review" Trigger
│   │   ├── 4 Verified Review Cards with Luxury Avatars
│   │   └── Trust Stats Bar (Guarantees & Scans)
│   ├── #about-container
│   │   ├── Photographer Biography & Story
│   │   └── Cinema Production Gear Standards Grid
│   └── #contact-container
│       └── 3 Solid Action Cards (Call, Email, Location)
├── #footer-container
│   └── 12-Column Responsive Layout & Studio Portal Trigger
├── Aside Floating WhatsApp Quick Chat
└── #modal-root (Dynamically injected modals)
    ├── Master 20-Photo Lightbox Modal
    ├── Interactive Booking & UPI Payment Modal
    ├── QR Scanner & Access Code Modal
    ├── Client Dedicated Gallery Modal
    ├── Client Review Submission Modal
    └── Studio Admin Dashboard Modal
```

---

## 4. State Management & Data Schema

All persistent state keys are prefixed under the `DB_KEYS` namespace to prevent collision:

```javascript
const DB_KEYS = {
  PHOTOGRAPHER: 'aura_photographer_data',
  PACKAGES: 'aura_packages_data',
  PORTFOLIO: 'aura_portfolio_data',
  BOOKINGS: 'aura_bookings_data',
  GALLERIES: 'aura_galleries_data',
  REVIEWS: 'aura_reviews_data',
  SEASONAL_OFFER: 'aura_seasonal_offer_data',
  HERO_SLIDES: 'aura_hero_slides_data',
  ADMIN_AUTH: 'aura_admin_authenticated'
};
```

### Core Data Models:

#### 1. Portfolio Item Schema:
```typescript
interface PortfolioItem {
  id: string;              // e.g. "p1"
  type: "photo";          // Pure photo type
  category: "candid" | "prewedding" | "ceremony" | "reception";
  title: string;           // Descriptive royal wedding title
  couple: string;          // Couple name (e.g. "Kabir & Mehr")
  location: string;        // Venue & City (e.g. "City Palace, Udaipur")
  image: string;           // High-resolution image URL
}
```

#### 2. Package Schema:
```typescript
interface Package {
  id: string;              // e.g. "pkg-royal-combo"
  name: string;            // e.g. "Royal Combo Deluxe"
  subtitle: string;
  price: number;           // Standard list price (INR)
  deposit: number;         // Required date lock deposit (INR)
  popular: boolean;        // Highlight flag for most booked package
  badge: string;
  features: string[];      // Array of deliverable bullet points
}
```

#### 3. Client Gallery Schema:
```typescript
interface ClientGallery {
  id: string;              // e.g. "gal-1"
  slug: string;            // URL slug: "kabir-mehr-2026"
  coupleName: string;
  weddingDate: string;
  venue: string;
  accessCode: string;      // 6-digit access code (e.g. "KM2026")
  pin: string;             // Optional 4-digit PIN
  coverImage: string;
  totalScans: number;      // Table card scan counter
  totalDownloads: number;  // Guest download counter
  photos: Array<{ id: string; title: string; url: string }>;
}
```

---

## 5. Subsystem Specifications

### 5.1 20-Photo Lightbox & Media Navigation
- **Data Source:** Pulls dynamically from `portfolio` state array (20 items).
- **Index Tracking:** Maintained in `currentLightbox` singleton object with bounds clamping `[0, total - 1]`.
- **Keyboard Listeners:** Global event listeners bind `ArrowRight`, `ArrowLeft`, and `Escape` to respective controls.
- **Micro-Transitions:** 120ms opacity fade ensures seamless image swap without jarring layout reflows.

### 5.2 Direct UPI Peer-to-Peer Payment URI Generation
The application generates standardized National Payments Corporation of India (NPCI) UPI deep links:
```
upi://pay?pa={UPI_ID}&pn={NAME}&am={DEPOSIT_AMOUNT}&cu=INR&tn={BOOKING_REF}
```
- Rendered into a high-density QR matrix via public QR server API.
- Enables native smartphone camera scanning and 1-tap app launch (Google Pay, PhonePe, Paytm).

### 5.3 Printable Table Tent Card Engine
- Triggered directly from the Admin QR Manager.
- Uses `@media print` CSS rules to isolate the `#printable-qr-card` element, suppressing all header, navigation, and background elements.
- Outputs a standardized 4" x 6" high-DPI card formatted for event table placement.

---

## 6. Security & Data Protection
1. **Administrative Authentication:** Guarded by `sessionStorage.getItem(DB_KEYS.ADMIN_AUTH)`. Closing browser session terminates administrative session.
2. **XSS Mitigation:** User input strings from booking and review forms undergo text escaping prior to DOM injection.
3. **No Financial Risk:** Because payment happens through peer-to-peer UPI deep links, zero credit card, CVV, or banking credentials ever touch the application memory.
