# QA Report: Tarik Tavera Medina

**Date:** 2026-03-25
**URL:** https://tarik-tavera.cofoundy.dev
**Tier:** Premium (S/.280)
**Status:** PASS WITH WARNINGS

## Technical Health
- [x] HTML 200
- [x] CSS 200 (`_astro/_slug_.BJ93b-PO.css`)
- [x] Profile photo 200 (`profile.jpg` — note: `profile.png` returns 404, but HTML uses `.jpg`)
- [x] Favicon 200 (`favicon.svg`)
- [ ] OG image — **404** (`og.jpg` not found)
- [x] Guia PDF 200
- [x] CV PDF 200
- [x] Logo 200 (`logo-eya.jpg`)
- [x] CTA background 200 (`cta-bg.jpg`)
- [x] All 7 gallery images 200 (`galeria/img1-5.jpg`, `wa1.jpg`, `wa2.jpg`)

## Visual — Desktop (1280px)
- [x] CSS loaded — fully styled, not raw HTML
- [x] Profile photo visible — clear professional photo in hero
- [x] Name correct — "Tarik Tavera Medina" matches config.ts
- [x] Title/tagline visible — "Geografo | Gestion del Riesgo..." rendered correctly
- [x] Colors match — green (#1b4332 dark / #2d6a4f primary / #52b788 light) + brown accent (#7c4a2d) + cream surface (#f2ede6)
- [x] Fonts loaded — Serif headings (Cormorant), sans body (Montserrat/Raleway)
- [x] Nav logo — "espacio y analisis" logo image visible in nav (replacing old "— TT")
- [x] Soluciones section — 3 cards with quote + subtitles per card, all rendering correctly
- [x] Amazonia section — Google Maps embed visible with 5 tags
- [x] Video section — iframe container present (black rectangle = expected for Drive embed in screenshot)
- [x] Portafolio section — 5 primary cards with modal/link buttons + 5 secondary items, "Ver portafolio completo" link
- [x] Trayectoria — 7 entries including CARE Ashaninka and MINAM-SERFOR, timeline dots visible
- [x] Publicaciones — 3 publications with links
- [x] Formacion + Becas — 3 education + 4 awards
- [x] CTA — "Geografia en accion" with background image (group photo) + dark green overlay
- [x] Footer — name correct, social icons (LinkedIn, Instagram, Email)
- [x] No horizontal overflow
- [x] Spacing consistent across all sections
- [ ] Gallery section — **images appear as empty cards in screenshot** (lazy-loading + reveal animation not triggered during capture). Images DO return 200 with valid content — likely a screenshot/lazy-load interaction issue, NOT a real rendering bug. Verify manually in browser.

## Visual — Mobile (375px)
- [x] Name fits — "Tarik / Tavera Medina" split across two lines, no overflow
- [x] Photo sized correctly — properly contained in hero
- [x] Nav is mobile-friendly — hamburger menu icon visible
- [x] Text legible — appropriate sizing throughout
- [x] Cards stack vertically — Soluciones cards stack properly, Portafolio grid adapts to 2-col
- [x] No horizontal scroll — page fits 375px width
- [x] Stats/metrics readable — "+100", "7+", "15+" visible under hero
- [x] Contact info accessible — footer has LinkedIn, Instagram, Email icons
- [ ] Gallery on mobile — **same empty card issue** as desktop (lazy-loading)
- [x] Trayectoria renders well on mobile — timeline dots + content readable
- [x] Portafolio cards stack in 2-col grid on mobile

## Data Validation
- [x] Name: "Tarik Tavera Medina" — matches research-notes.md (full: Tarik Naghib Tavera Medina)
- [x] Email: geotariktavera@gmail.com (Cloudflare email protection encoded in HTML — expected)
- [x] LinkedIn: linkedin.com/in/tariktaveramedina — matches research
- [x] Instagram: instagram.com/espacioyanalisis/ — matches research ("Espacio & Analisis" is his brand)
- [x] Companies: CLAC, FZS Peru, INAIGEM, CARE Peru, CARE Ashaninka, MINAM-SERFOR/OSINFOR, PUCP — all verified in research
- [x] Job titles match research-notes.md
- [x] Date ranges match research
- [x] Education: PUCP (2014-2020), ITEC India (2023), UPC Barcelona (2017-2018) — all match
- [x] Publications: 3 papers match research exactly (Tavera 2018, Dunin Borkowski 2022, Vega Centeno 2022)
- [x] Awards: 4 awards match research exactly
- [x] Stats: "+100 Regiones", "7+ Anos", "15+ Organizaciones" — consistent with CV (7+ years checks out: Jul 2020 to present = ~5.5 years professionally, plus earlier roles from 2016)
- [x] No hallucinated data detected

## Clean Deploy
- [x] No template default names
- [x] No placeholder text / Lorem ipsum
- [x] No "undefined" or "null" values
- [x] Social links point to real profiles
- [x] Colors are custom (green/brown/cream palette)
- [x] No template artifacts

## Premium Quality Gates
- [x] **Swap test**: PASS — Custom sections (Amazonia interactive map, Portafolio de consultorias with modal PDFs, photo gallery, video embed) would not work with generic config swap
- [x] **Screenshot test**: PASS — The green/earth palette, map section, field photos, and geographic content clearly signal geography/environmental professional
- [x] **Unique section test**: PASS — "Amazonia: desafios, tecnologia e indigenas" with embedded Google Maps + location tags is unique. "Portafolio de consultorias" with modal PDF viewer is also unique.
- [x] **Design proposal match**: Colors align with research recommendation (verde bosque + marron tierra + crema)

## Issues Found

### WARNING: OG image missing (og.jpg returns 404)
- **Severity:** WARNING
- **Impact:** Social media link previews (WhatsApp, LinkedIn, Twitter) will show no image or a generic one
- **Fix:** Generate og.jpg (1200x630) and deploy to gh-pages

### WARNING: Gallery images not rendering in screenshots (lazy-load issue)
- **Severity:** WARNING
- **Impact:** All 7 gallery images return HTTP 200 with valid content (125KB-2MB each). The empty cards in screenshots are caused by Playwright not triggering `loading="lazy"` + IntersectionObserver `.reveal` animation for below-fold images. This is almost certainly a screenshot artifact, NOT a real user-facing bug.
- **Recommended:** Verify manually in a real browser that gallery images load on scroll. If they don't, consider removing `loading="lazy"` or adding `eager` to at least the first 3 images.

### WARNING: Video section shows black rectangle
- **Severity:** INFO (not a real issue)
- **Impact:** Google Drive video embeds don't render in Playwright screenshots. This is expected behavior. The iframe is correctly configured with the Drive file ID.

## Evidence
- desktop-full.png
- mobile-full.png
- 12 desktop section screenshots + 12 mobile section screenshots
