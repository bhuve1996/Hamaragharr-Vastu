# Vastu Theme – Color Reference

Use these CSS variables everywhere for **black, white, and brand colors** so sections and pages stay consistent.

**Start here:** All text and UI colors should use the variables below. No hardcoded `#000`, `#fff`, `#473855`, or raw `rgb(...)` in section/page CSS.

---

## Primary text & backgrounds

| Use case | Variable | Usage | Fallback |
|----------|----------|--------|----------|
| **Primary text (black)** | `--color-foreground` | Theme-driven body/heading text | Set by Shopify theme |
| **Primary text (explicit black)** | `--color-text-primary` | `rgb(var(--color-text-primary))` | `0, 0, 0` |
| **White text** | `--color-secondary-button-text` | Text on dark/purple buttons and overlays | `255, 255, 255` |
| **White (hex)** | `--color-hex-white` | `var(--color-hex-white)` | `#fff` |
| **Black (hex)** | `--color-hex-black` | `var(--color-hex-black)` | `#000` |
| **Primary background (white)** | `--color-primary-bg` | `rgb(var(--color-primary-bg))` | `255, 255, 255` |

---

## Brand purple (secondary)

| Use case | Variable | Usage | Fallback |
|----------|----------|--------|----------|
| **Brand purple (solid)** | `--color-secondary-button` | Buttons, links, titles, accents | `71, 56, 85` |
| **Brand purple (hex)** | `--color-hex-secondary` | `var(--color-hex-secondary)` | `#473855` |
| **Brand purple (with opacity)** | Same | `rgb(var(--color-secondary-button) / 0.8)` | — |
| **Lighter purple (muted text)** | `--color-secondary-muted` | `rgb(var(--color-secondary-muted))` | `111, 87, 132` (#6f5784) |
| **Purple light (breadcrumb, etc.)** | `--color-purple-light` | `rgb(var(--color-purple-light))` | `186, 170, 200` |

---

## Buttons

| Use case | Variable | Usage |
|----------|----------|--------|
| **Secondary button bg** | `--color-secondary-button` | `rgb(var(--color-secondary-button))` |
| **Secondary button text** | `--color-secondary-button-text` | `rgb(var(--color-secondary-button-text))` |
| **Primary button bg** | `--color-button` | Theme-driven |
| **Primary button text** | `--color-button-text` | Theme-driven |

---

## Decorative / UI

| Use case | Variable | Usage |
|----------|----------|--------|
| **Star rating (filled)** | `--color-rating-active` | `rgb(var(--color-rating-active))` (#ffd700) |
| **Star rating (empty)** | `--color-rating-inactive` | `rgb(var(--color-rating-inactive))` (#e0e0e0) |

---

## Muted / opacity text

- **Muted primary text:** `rgba(var(--color-foreground), 0.75)` or `rgb(var(--color-text-primary) / 0.7)`
- **Do not use:** hardcoded `#000`, `#fff`, `#473855`, `rgb(0 0 0)`, `rgb(255 255 255)`, `rgb(71 56 85)` in section/page CSS.

---

## Quick reference – replace with

| Don’t use | Use instead |
|-----------|-------------|
| `#000` | `rgb(var(--color-text-primary))` or `var(--color-hex-black)` |
| `#fff` | `rgb(var(--color-secondary-button-text))` or `var(--color-hex-white)` |
| `#473855` | `rgb(var(--color-secondary-button))` or `var(--color-hex-secondary)` |
| `#6f5784` | `rgb(var(--color-secondary-muted))` or `var(--color-hex-secondary-muted)` |
| `rgb(0 0 0)` | `rgb(var(--color-foreground))` or `rgb(var(--color-text-primary))` |
| `rgb(255 255 255)` | `rgb(var(--color-secondary-button-text))` |
| `rgb(71 56 85)` | `rgb(var(--color-secondary-button))` |
| `rgb(186 170 200)` | `rgb(var(--color-purple-light))` |

All variables are defined in `assets/vastu-base.css` under `:root`.
