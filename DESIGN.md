---
name: Obsidian Kinetic
colors:
  surface: '#0e131e'
  surface-dim: '#0e131e'
  surface-bright: '#343945'
  surface-container-lowest: '#090e19'
  surface-container-low: '#171c27'
  surface-container: '#1b202b'
  surface-container-high: '#252a35'
  surface-container-highest: '#303541'
  on-surface: '#dee2f2'
  on-surface-variant: '#b9cac4'
  inverse-surface: '#dee2f2'
  inverse-on-surface: '#2b303c'
  outline: '#83948f'
  outline-variant: '#3a4a46'
  surface-tint: '#00dfc1'
  primary: '#d7fff3'
  on-primary: '#00382f'
  primary-container: '#00f5d4'
  on-primary-container: '#006c5c'
  inverse-primary: '#006b5b'
  secondary: '#deb7ff'
  on-secondary: '#4a007f'
  secondary-container: '#6b13af'
  on-secondary-container: '#d4a5ff'
  tertiary: '#f4f6f8'
  on-tertiary: '#2d3133'
  tertiary-container: '#d8dadc'
  on-tertiary-container: '#5c5f61'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#26fedc'
  primary-fixed-dim: '#00dfc1'
  on-primary-fixed: '#00201a'
  on-primary-fixed-variant: '#005144'
  secondary-fixed: '#f1dbff'
  secondary-fixed-dim: '#deb7ff'
  on-secondary-fixed: '#2d0050'
  on-secondary-fixed-variant: '#680eac'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#0e131e'
  on-background: '#dee2f2'
  surface-variant: '#303541'
typography:
  display:
    fontFamily: Syne
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.15em
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
  container-max: 1440px
---

## Brand & Style
The design system establishes a high-end, "Cyber Cyberpunk" aesthetic—a sophisticated evolution of neon tropes tailored for a luxury 3D portfolio. It prioritizes a deep obsidian canvas to allow 3D renders to achieve maximum "pop" and perceived luminosity. 

The style combines **Minimalism** (expansive whitespace, lean UI) with **Glassmorphism** and **High-Contrast Bold** accents. The emotional response is one of precision, technological mastery, and avant-garde fashion. UI elements should feel like high-performance hardware interfaces: sharp, reactive, and physically illuminated from within.

## Colors
The palette is rooted in an ultra-dark navy-black (#0B0F19) to provide depth beyond pure black. 

- **Primary (Electric Cyan):** Used for critical actions, active states, and "power-on" indicators.
- **Secondary (Neon Purple):** Used for depth, secondary interactive elements, and gradients.
- **Surface:** A slightly lifted grey-blue (#161B26) used for cards and containers to create a sense of layering.
- **Text:** Primary text is near-white (#F8FAFC) for extreme legibility against the dark void, while muted text (#94A3B8) handles metadata and non-essential labels.

## Typography
Typography is a clash between structural utility and expressive tech-fashion. 

**Syne** is reserved for headlines and hero moments. It should be used with tight letter-spacing to emphasize its "Extra Bold" character. For the largest display sizes, consider "widened" or "stretched" variations if the variable font is available.

**Plus Jakarta Sans** provides a clean, geometric counterpoint for body copy and UI labels. Use `label-caps` for navigation and category tags to reinforce the systematic, technical feel.

## Layout & Spacing
The layout uses a **Fluid Grid** model with high internal padding to allow 3D assets room to breathe.

- **Desktop:** 12-column grid, 24px gutters, 64px outer margins.
- **Tablet:** 8-column grid, 16px gutters, 40px outer margins.
- **Mobile:** 4-column grid, 16px gutters, 24px outer margins.

Spacing follows an 8px base unit. Section vertical spacing should be aggressive (128px+) to maintain the "high-end gallery" feel. Elements should often be center-aligned or use asymmetric staggering to mimic experimental editorial layouts.

## Elevation & Depth
This design system rejects traditional shadows in favor of **Luminous Depth**.

1.  **Level 0 (Base):** The Primary Background (#0B0F19).
2.  **Level 1 (Surface):** Surface color (#161B26) with a subtle 1px inner border of #F8FAFC at 5% opacity.
3.  **Level 2 (Glass):** Semi-transparent surfaces (20-40% opacity) with a `backdrop-filter: blur-12px`.
4.  **Level 3 (Glow):** Interactive elements do not cast shadows; they emit light. Use `box-shadow` with the Primary Cyan or Secondary Purple at low opacity and high spread (e.g., `0 0 30px rgba(0, 245, 212, 0.2)`).

## Shapes
The shape language is strictly **Sharp (0px)**. 

To maintain the high-tech architectural feel, avoid all rounding on primary UI elements (buttons, cards, inputs). For specific decorative elements, use 45-degree "clipped corners" (chamfers) rather than curves to reinforce the cyberpunk hardware aesthetic.

## Components
- **Buttons:** Primary buttons use a solid Electric Cyan background with black text. On hover, they trigger a "glitch" color shift or a wide cyan outer glow. Secondary buttons use a 1px Cyan border with no fill.
- **Cards:** Background uses the Surface color or Glassmorphism. Borders are mandatory—1px width, using a gradient from Cyan to Purple.
- **Inputs:** Underline-only or full-border sharp rectangles. Focus state triggers a vibrant Cyan border and a subtle scanline pattern animation in the background.
- **Chips/Tags:** Small, sharp-edged boxes with `label-caps` typography. Use Secondary Purple for category tags.
- **Status Indicators:** Small, vibrating circular pulses in Electric Cyan to indicate "Live" or "Active" 3D viewports.
- **Cursors:** Custom circular crosshair cursor that reacts/expands when hovering over interactive 3D elements.