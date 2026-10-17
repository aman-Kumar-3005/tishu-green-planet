# Tishu Green Planet website

## Overview

Static nursery and landscaping website with plant information, gallery filters and video modals. Contact details are assembled into a WhatsApp enquiry in the browser.

## System architecture and modules

- `plants-nursery.html` and `services.html`: nursery and service content.
- `gallery.html` and `videos.html`: media pages.
- `assets/js/validation.js`: contact validation and newsletter UI.
- `assets/js/main.js`: navigation and counters.
- `assets/js/animations.js`: gallery, lightbox and Bootstrap video-modal integration.

## Tech stack

HTML5, CSS3 and JavaScript. The application is static; there is no server API, database or dependency-install step.

## Local setup

Requires Python 3 for the local static server and a modern browser. No Node.js build step is required.

```sh
git clone https://github.com/shreyasingh3005/tishu-green-planet.git
cd tishu-green-planet
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/>. External fonts, icons, embeds and remote images still need Internet access where referenced by the HTML.

## Implementation notes

The WhatsApp number in the validation script is explicitly a placeholder and must be configured before use. Newsletter submission only displays an alert; it does not store a subscriber. There is no backend, inventory database or mailing-list integration.

## Manual checks

Check desktop and mobile navigation, page links, image loading and browser console errors. Use synthetic form values. Inspect the intended request or message before submitting; do not send test enquiries to the configured business contacts.
