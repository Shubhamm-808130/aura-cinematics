# 📋 Engineering Rules & Quality Standards
## Project: AURA CINEMATICS — Luxury Wedding Photography & Films Platform
**Version:** 2.4.0  
**Scope:** Architecture, UI/UX Implementation, Accessibility, Security, and Code Quality  

---

## 1. General Principles
1. **Zero-Framework Purity:** Do not introduce heavy front-end frameworks (React, Angular, Vue) unless explicitly approved. Keep application lightweight, fast, and dependency-free.
2. **Deterministic UI State:** The DOM is the projection of state. Every update must write to `localStorage` through `setDB()` and trigger localized sub-renders rather than uncoordinated DOM mutations.
3. **No Dead Caches:** Whenever modifying `app.js` or `styles.css`, always bump the query parameter cache-buster in `index.html` (e.g., `?v=20261117_audit`).

---

## 2. Accessibility & Document Outline Standards (WCAG 2.1 AA)

### Rule 2.1: Strict Heading Hierarchy (No Skipped Levels)
- Every page must contain exactly one `<h1>` element, positioned in the Hero section.
- Section titles must be `<h2>`.
- Card titles, package names, review author names, and sub-headings must be `<h3>`.
- **FORBIDDEN:** Skipping heading levels (e.g. jumping directly from `<h2>` to `<h4>` as flagged in Floto Audit Issues 19, 20, 21).

```html
<!-- Correct -->
<h2>Client Love Stories</h2>
<div class="review-card">
  <h3>Pooja & Vikram</h3>
</div>

<!-- Incorrect (Violates WCAG Outline) -->
<h2>Client Love Stories</h2>
<div class="review-card">
  <h4>Pooja & Vikram</h4> <!-- VIOLATION: Skipped H3 -->
</div>
```

### Rule 2.2: Contrast & Text Legibility
- All text over background images must maintain at least **4.5:1** contrast ratio for normal text and **3:1** for large text (>= 18pt or bold >= 14pt).
- Any text over photographic backgrounds (such as the Hero) MUST have a multi-stop gradient overlay and CSS drop-shadow (`drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]`).

### Rule 2.3: Minimum Font Size
- No body, label, or informational text may render smaller than **12px** (`text-xs` in Tailwind).
- Eliminate all sub-12px styling (`text-[10px]` or `text-[9px]`) from body prose and forms (Floto Audit Issue 17).

---

## 3. Design System & UI Consistency Rules

### Rule 3.1: Consolidated 3-Variant Button System
All interactive buttons in the application must strictly adhere to one of the three canonical classes defined in `src/styles.css` (Floto Audit Issue 1):

1. **`.btn-primary` (or `.gold-btn`):** High-contrast gold/amber gradient with white text and gold glow on hover. Used for primary calls-to-action (Booking, Submit, Key Actions).
2. **`.btn-secondary`:** Crisp white background with stone border (`#d6d3d1`), dark text, and subtle elevation on hover. Used for secondary actions, outlines, and standard package options.
3. **`.btn-ghost`:** Borderless, background-free interactive link/text button for low-priority actions (e.g. "View Offers →").

**FORBIDDEN:** Ad-hoc inline button color styles (e.g. random blue, plain grey, or non-conforming purple buttons).

### Rule 3.2: Button Text Casing (Title Case Mandatory)
- Button text must use **Title Case** (e.g. `Check Date Availability →`, `Book This Package`, `Access Your Photo`).
- **FORBIDDEN:** Long all-caps button text (e.g. `CHECK DATE AVAILABILITY`) which impairs reading speed and violates design consistency (Floto Audit Issues 5 & 18).

### Rule 3.3: Strict Design Tokens Constraint
- **Font Scale:** The application must utilize no more than **10 distinct font size steps** across the entire UI (Floto Audit Issue 2).
- **Color Tokens:** The palette is constrained to maximum **12 semantic color tokens** (Primary Amber/Gold `#b45309`, Deep Gold `#92400e`, Light Gold `#fbbf24`, Ivory `#fbf9f5`, Stone 900 `#1c1917`, Stone 600 `#57534e`, Stone 200 `#e7e2d7`, Emerald 600 `#059669`, White `#ffffff`, Black `#000000`, plus necessary neutral fills) (Floto Audit Issue 3).

### Rule 3.4: Equal-Height Package Cards & Baseline Alignment
- All package pricing cards must use flex column layout (`flex flex-col h-full justify-between`).
- The package title container must specify a minimum height (`min-h-[96px]`) to absorb multiline differences.
- The action button container must be pinned to the bottom using `mt-auto pt-6 border-t` so that buttons across all 4 cards share an identical horizontal baseline (Floto Audit Issues 13 & 16).

---

## 4. Performance & Rendering Rules

### Rule 4.1: Hardware Acceleration (GPU Offloading)
- All fixed overlays, sticky navigation bars, modals, and carousel slides must apply hardware acceleration:
  ```css
  transform: translateZ(0);
  will-change: transform;
  ```
- Cap CSS backdrop-filter blurs to **8px** (do not exceed 16px as it causes GPU frame drops on mobile WebKit).

### Rule 4.2: Image Optimization & Lazy Loading
- External photographic assets (e.g. Unsplash) must be sized appropriately with dynamic query parameters (`w=600&q=75` for gallery grid thumbnails, `w=1200&q=80` for full-screen lightbox).
- Every non-critical image element must include `loading="lazy"` and `decoding="async"`.

### Rule 4.3: Deferred Non-Critical Script Execution
- Heavy third-party scripts (Chart.js, Canvas Confetti) must include the `defer` attribute in `index.html`.
- Startup execution in `src/app.js` must never block initial DOM painting.

---

## 5. Security & Data Protection Standards

### Rule 5.1: XSS Sanitization on User-Generated Content
Any text entered by visitors (Review form: reviewer name, review quote; Booking form: couple name, special notes) must be sanitized before rendering into innerHTML:
```javascript
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
```

### Rule 5.2: Admin Session Isolation
- Administrative privileges must be validated on every admin action using `sessionStorage.getItem(DB_KEYS.ADMIN_AUTH) === 'true'`.
- Never store plain admin credentials or secrets in client-side code repositories.

### Rule 5.3: Zero Financial Intermediary Vulnerability
- Payments must strictly use peer-to-peer National Payments Corporation of India (NPCI) UPI deep-link protocols (`upi://pay`).
- The platform must NEVER solicit, accept, transmit, or store Credit Card numbers, CVVs, or NetBanking passwords.

---

## 6. Verification & Pre-Commit Quality Gate
Before submitting any code changes:
1. **Syntax Check:** Run `node --check "src/app.js"` to confirm zero syntax errors.
2. **Cache Busting:** Verify `index.html` has updated cache-busting version strings.
3. **Floto Audit Compliance:** Confirm no heading outline skips, button casing deviations, or unaligned baselines exist.
