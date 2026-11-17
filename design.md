# 🎨 UI/UX & Brand Design Guide
## Project: AURA CINEMATICS — Luxury Wedding Photography & Films Platform
**Aesthetic Theme:** Royal Ivory, Warm Amber & Gold Stills  
**Version:** 2.4.0  

---

## 1. Brand Identity & Visual Atmosphere

Aura Cinematics embodies the opulence and timeless romance of royal destination weddings in Udaipur, Jaipur, Jodhpur, and international heritage locales. 

The visual language balances **classical editorial grandeur** with **ultra-modern minimalist digital execution**:
- **Background:** Warm organic ivory (`#fbf9f5`) rather than harsh cold white or stark high-contrast pure black.
- **Accents:** Warm amber, burnished brass, and rich gold gradients.
- **Imagery:** Dominant, borderless, high-resolution photography capturing authentic tears, laughter, and regal architecture.

---

## 2. Color Palette & Semantic Tokens

### 2.1 Primary & Accent Tones
| Token Name | Hex Code | Tailwind Equivalent | Role / Usage |
| :--- | :--- | :--- | :--- |
| **Gold Primary** | `#b45309` | `gold-600` / `amber-700` | Primary brand accent, button gradients, active states. |
| **Gold Deep** | `#92400e` | `gold-700` / `amber-800` | Section subtitles, small caps badges, borders. |
| **Gold Light** | `#f59e0b` | `gold-400` / `amber-500` | Subtle glows, active pagination dot, rating stars. |
| **Ivory Canvas** | `#fbf9f5` | `bg-[#fbf9f5]` | Global application background (warm, paper-like). |
| **Card White** | `#ffffff` | `bg-white` | Elevated card surfaces, form inputs, modal dialogs. |
| **Stone Dark** | `#1c1917` | `text-stone-900` | Primary headlines, bold typography, high-contrast text. |
| **Stone Muted** | `#57534e` | `text-stone-600` | Secondary body text, descriptions, feature bullet points. |
| **Stone Border** | `#e7e2d7` | `border-stone-200` | Subtle division lines, glassmorphism borders. |
| **Emerald Action** | `#059669` | `bg-emerald-600` | Verified badges, direct WhatsApp contact button. |

---

## 3. Typography Scale & Hierarchy

### 3.1 Type Families
- **Headings & Serif Accents:** `Playfair Display`, Georgia, serif.
- **Body & Interface Elements:** `Plus Jakarta Sans`, Inter, sans-serif.

### 3.2 Canonical Font Scale (Max 10 Steps)
| Level | Font Size | Line Height | Weight | Font Family | Example Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | 4.5rem (72px) | 1.1 | 700 Bold | Playfair Display | Hero H1 headline on desktop |
| **H1 Mobile** | 2.5rem (40px) | 1.2 | 700 Bold | Playfair Display | Hero H1 headline on mobile |
| **H2 Section** | 2.25rem (36px) | 1.25 | 700 Bold | Playfair Display | Section main headers |
| **H3 Card** | 1.25rem (20px) | 1.35 | 700 Bold | Playfair Display | Package titles, review couple names |
| **Price Hero** | 2.0rem (32px) | 1.2 | 700 Bold | Playfair Display | Package investment figures |
| **Body Large** | 1.125rem (18px) | 1.6 | 500 Medium | Plus Jakarta | Hero subtext card |
| **Body Standard**| 1.0rem (16px) | 1.5 | 400 Regular | Plus Jakarta | General descriptive paragraphs |
| **Body Small** | 0.875rem (14px) | 1.4 | 400/500 | Plus Jakarta | Form inputs, review quotes, table info |
| **Label / Meta** | 0.75rem (12px) | 1.3 | 600 SemiBold| Plus Jakarta | Feature lists, date tags, badges |
| **Micro Caps** | 0.75rem (12px) | 1.0 | 700 Bold | Plus Jakarta | Uppercase tracking tags (e.g. `ROYAL PORTFOLIO`) |

---

## 4. Component Design Specifications

### 4.1 Buttons & Interactive Controls
```
+-------------------------------------------------------------+
| [.btn-primary]                                              |
| Background: linear-gradient(135deg, #d97706, #b45309, #92400e)|
| Text: #FFFFFF, Font: 14px SemiBold                          |
| Shape: Rounded Full (9999px pill)                           |
| Shadow: 0 4px 14px rgba(180, 83, 9, 0.25)                  |
+-------------------------------------------------------------+
| [.btn-secondary]                                            |
| Background: #FFFFFF, Border: 1.5px solid #d6d3d1            |
| Text: #1c1917, Font: 14px SemiBold                          |
| Shape: Rounded Full (9999px pill)                           |
+-------------------------------------------------------------+
| [.btn-ghost]                                                |
| Background: transparent, Text: #b45309                     |
| Hover: Text underline, #78350f                              |
+-------------------------------------------------------------+
```

### 4.2 Portfolio Grid & Photo Cards
- **Grid Structure:** 
  - Desktop (`lg:grid-cols-4`): 4 columns x 2 rows (8 visible photos on initial load).
  - Tablet (`sm:grid-cols-2`): 2 columns.
  - Mobile (`grid-cols-1`): 1 column.
- **Card Aspect Ratio:** Fixed `aspect-[4/3]` with `rounded-2xl` corners.
- **Card Hover Treatment:** Clean subtle scale (`group-hover:scale-105`) with 500ms cubic-bezier ease. **Zero overlay text, zero location badges, and zero icon clutter.**

### 4.3 Full-Screen Lightbox Experience
- **Overlay:** Deep cinematic backdrop `rgba(10, 10, 14, 0.94)` with `backdrop-blur-md`.
- **Top Utility Bar:**
  - Left: Gold badge `"Aura Cinematics Showcase"`.
  - Right: High-contrast counter `"Photo X of 20"` + White circular `✕` close button.
- **Navigation Controls:** Left/Right high-contrast floating circular arrow buttons (`w-11 h-11 bg-stone-900/90 text-white hover:text-amber-400`).
- **Thumbnail Ribbon:** Bottom horizontally scrollable strip of all 20 demo images. Active thumbnail highlighted with an amber border (`border-amber-400 ring-2 ring-amber-400/50`).

### 4.4 Packages & Investment Section
- **Card Layout:** Equal-height column container (`h-full flex flex-col justify-between`).
- **Title Block:** Fixed minimum height (`min-h-[96px]`) ensuring package name, badge, and tagline align across all 4 cards.
- **Price Block:** Distinct bold currency rendering (`₹1,25,000`) with clear advance deposit notice.
- **Baseline Alignment:** "Book This Package" button anchored to the card bottom via `mt-auto pt-6 border-t`.

### 4.5 Printable Reception Table Tent Cards (`@media print`)
- **Dimensions:** 4" x 6" portrait table card.
- **Border:** Dual luxury gold decorative border.
- **Elements:**
  1. Studio Crest and Couple Names ("Kabir & Mehr's Royal Celebration").
  2. Large, high-contrast QR Matrix pointing to client wedding gallery.
  3. Clear guest prompt: *"Scan with your phone camera to download instant high-res photos & wedding films"*.
  4. 6-digit access code fallback (`KM2026`).

---

## 5. Motion & Micro-Interactions

| Interaction | Duration | Easing | Behavior |
| :--- | :--- | :--- | :--- |
| **Hero Crossfade** | 800ms | `ease-in-out` | Smooth GPU opacity transition between slides. |
| **Button Hover** | 250ms | `ease` | `translateY(-2px)` with increased drop-shadow. |
| **Card Hover Elevation** | 300ms | `ease` | Border highlights to amber, shadow shifts from `shadow-sm` to `shadow-xl`. |
| **Lightbox Image Switch**| 120ms | `ease` | Quick opacity dip (0.3 -> 1.0) for seamless image swapping. |
| **Confetti Celebration** | 3000ms | Native Physics | 80 particle spread celebrating verified booking deposits. |
