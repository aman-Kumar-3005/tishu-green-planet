# Tishu Green Planet - Official Business Website

Welcome to the production-ready website source code for **Tishu Green Planet** — a hybrid brand combining environmental activism, plant care education, and nursery showcases with professional real estate consultancy (buildings, plots, flats) and interior & exterior green design.

---

## 📁 File Structure

```text
tishu-green-planet/
├── index.html                  # Homepage (Hero, Stats, Pillars, Showcases, Video Highlights)
├── about.html                  # About Us (Story, Mission, 1500+ Free Plant Drive, Vision)
├── services.html               # Real Estate & Interior/Exterior Green Design Services
├── plants-nursery.html         # Plant Care Hub & Featured Nursery Tours (Aastha, Harsh Nursery)
├── gallery.html                # Filterable Photography Gallery with Lightbox
├── videos.html                 # Curated YouTube Showcase (850+ Videos, 7.8M+ Views)
├── testimonials.html           # Genuine Community Feedback & Reviews
├── faq.html                    # Frequently Asked Questions Accordion
├── contact.html                # Contact Page with Validation, WhatsApp Routing & Map
├── privacy-policy.html         # Compliant Privacy Policy
├── terms-and-conditions.html   # Terms & Conditions
├── 404.html                    # Custom 404 Error Page
├── sitemap.xml                 # Search Engine Sitemap
├── robots.txt                  # Search Engine Directives
├── README.md                   # Project Documentation & Hostinger Guide
└── assets/
    ├── css/
    │   ├── style.css           # Core Design Tokens, Typography, Layout & Components
    │   └── responsive.css      # Granular Media Queries (320px to 4K)
    ├── js/
    │   ├── main.js             # Sticky Nav, Counters, Back to Top, Active Nav
    │   ├── animations.js       # Scroll Reveals, Gallery Filtering, Lightbox, Video Modal
    │   └── validation.js       # Contact Form Validation & WhatsApp Composer
    ├── images/
    │   └── logo.svg            # Scalable Vector Brand Logo
    ├── icons/
    │   └── favicon.svg         # Favicon Icon
    └── fonts/
```

---

## 🚀 Hostinger Deployment Instructions (`public_html`)

This project is built using standard **HTML5, CSS3, and Vanilla JavaScript** with **zero build steps** (no npm, Node.js, Webpack, or Vite required). It is 100% static and directly deployable to any standard web hosting service.

### Method 1: Hostinger File Manager (Quickest)
1. Log into your **Hostinger hPanel**.
2. Navigate to **Websites** &rarr; click **Manage** on your domain.
3. Open **File Manager** and enter the **`public_html`** folder.
4. If there is a default `default.php` file, delete or archive it.
5. Upload all the files and folders from this project (`index.html`, `about.html`, `assets/`, etc.) directly into `public_html`.
6. Ensure that `index.html` resides directly inside `public_html` (not nested in an extra subfolder).
7. Visit your domain in the browser (`https://yourdomain.com`).

### Method 2: FTP / FileZilla
1. In Hostinger hPanel, find your **FTP Accounts** credentials (FTP Host, Username, Password, Port `21`).
2. Open **FileZilla** or your preferred FTP client and connect.
3. In the remote pane, open `/public_html/`.
4. Upload all files from your local project directory into `/public_html/`.

---

## ⚙️ Updating Client Information

When final client details are confirmed, update the following placeholders:

| Placeholder | Location(s) | Description |
|---|---|---|
| `919876543210` | `assets/js/validation.js`, HTML pages | WhatsApp phone number in `wa.me/91...` links |
| `contact@tishugreenplanet.com` | HTML Footers & `contact.html` | Official support email |
| `Delhi NCR, India` | Topbar & Footer | Office street address / city |
| `@tishugreenplanet` | Social links | Instagram, YouTube, Threads, Facebook profiles |

---

## 🌿 Technical Features Included

- **Verified Stats Grounding**: 34.6K+ Instagram followers, 35.4K+ YouTube subscribers, 852+ videos, 7.8M+ views with animated counters.
- **Dual Brand Architecture**: Separate, distinct presentation for Green Activism/Plants and Real Estate/Design.
- **High-Resolution Photography**: Curated real images for nurseries, foliage, modern architecture, and biophilic interiors.
- **Interactive Lightbox & Video Modal**: Fullscreen previews without leaving the site.
- **Instant WhatsApp Lead Routing**: Submitting the contact form automatically composes and launches a pre-filled WhatsApp message.
- **Full SEO & Schema.org**: Meta tags, OpenGraph tags, and JSON-LD structured data for Google search indexing.
- **Fully Responsive**: Optimized for screens from 320px smartphones up to ultra-wide displays.
