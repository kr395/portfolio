---
name: Lumina Creative Light
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#494454'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#7b7486'
  outline-variant: '#cbc3d7'
  surface-tint: '#6d3bd7'
  primary: '#6b38d4'
  on-primary: '#ffffff'
  primary-container: '#8455ef'
  on-primary-container: '#fffbff'
  inverse-primary: '#d0bcff'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#57dffe'
  on-secondary-container: '#006172'
  tertiary: '#b90538'
  on-tertiary: '#ffffff'
  tertiary-container: '#dc2c4f'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b7'
  on-tertiary-fixed: '#40000d'
  on-tertiary-fixed-variant: '#92002a'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system emphasizes a high-clarity, professional creative environment. It shifts from a high-energy dark aesthetic to a refined, airy, and precision-focused light mode. The brand personality is sophisticated yet approachable, evoking an emotional response of focus, organization, and creative potential.

The style is a hybrid of **Minimalism** and **Glassmorphism**. It utilizes expansive white space and high-contrast typography to define the workspace, while employing subtle translucent layers and soft background blurs for non-modal overlays and secondary navigation. This approach maintains the technical "suite" feel while ensuring the interface feels lightweight and unobtrusive.

## Colors
The palette is anchored by a vibrant violet primary, optimized for visibility against pure white. 

- **Primary (#8b5cf6):** Used for primary actions, active states, and focus indicators. On light surfaces, it is paired with white text for maximum legibility.
- **Surface:** The foundational background is `#ffffff`. Surface containers use `#f8fafc` and `#f1f5f9` to create subtle hierarchical depth without heavy shadows.
- **Accents:** Neon influences are refined into polished glass accents. Secondary Cyan and Tertiary Rose are used sparingly for status indicators and data visualization.
- **Typography:** Headlines utilize the neutral slate (`#0f172a`) for "ink-heavy" contrast, while body text uses a softened grey (`#475569`) to reduce eye strain during long creative sessions.

## Typography
This design system relies exclusively on **Inter** to maintain a systematic, utilitarian aesthetic. 

- **Headlines:** Use tight tracking and heavy weights (Bold/ExtraBold) to create a strong visual anchor.
- **Body:** Standardized at 16px for optimal readability. Line heights are generous (1.5 - 1.6) to ensure the interface feels open and breathable.
- **Labels:** Small caps or uppercase transformations are used for utility labels and category headers to differentiate them from interactive body text.

## Layout & Spacing
The design system utilizes a **Fluid Grid** model based on an 8px stepping system.

- **Desktop:** 12-column grid with 24px gutters. Content is typically contained within a 1440px max-width container, centered on the viewport.
- **Tablet:** 8-column grid with 16px gutters and 24px side margins.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.
- **Spacing Logic:** Padding and margins should always be multiples of the 4px base unit, favoring `16px (sm)` and `24px (md)` for standard component grouping.

## Elevation & Depth
In this light mode configuration, depth is communicated through **Tonal Layers** and **Glassmorphism** rather than traditional heavy shadows.

- **Low Elevation:** Defined by 1px solid borders (`#e2e8f0`) and subtle background shifts.
- **Mid Elevation (Cards/Dropdowns):** Uses a soft, multi-layered shadow: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`.
- **High Elevation (Modals):** Employs a backdrop blur (12px) with a semi-transparent white surface (`rgba(255, 255, 255, 0.8)`) and a delicate 1px border.
- **Shadow Tinting:** Shadows are neutral but very low opacity to maintain the clean, "surgical" feel of the creative suite.

## Shapes
The shape language is overtly **Rounded**, providing a friendly and modern counterpoint to the technical nature of a creative suite.

- **Standard Elements:** Buttons, input fields, and small chips use a 1rem radius.
- **Containers:** Cards and large sections use `rounded-lg` (2rem) or `rounded-xl` (3rem) to create a soft, nested appearance.
- **Interactive States:** When hovered, elements do not change their radius, but rather their background saturation or border intensity.

## Components
- **Buttons:** Primary buttons are solid `#8b5cf6` with white text. Secondary buttons use a light violet wash (`#f5f3ff`) with primary-colored text. All buttons feature a 1rem radius (Pill-shaped).
- **Glass Chips:** Use for tags or status. Background: `rgba(255, 255, 255, 0.5)` with a 1px border of `rgba(0, 0, 0, 0.05)` and a 4px backdrop blur.
- **Input Fields:** High-contrast white backgrounds with a 1px `#cbd5e1` border. On focus, the border transitions to the primary violet with a subtle 3px outer glow.
- **Lists:** Clean rows with 1px bottom dividers (`#f1f5f9`). Active list items use a left-edge 4px primary-colored accent bar and a light grey background.
- **Cards:** Defined by a 2rem radius, a 1px border, and a soft mid-elevation shadow. Avoid "heavy" card headers; use typography and spacing to create internal hierarchy.
- **Floating Toolbars:** These should utilize the glassmorphic style—fully rounded, semi-transparent backgrounds with a 16px blur to separate them from the canvas.