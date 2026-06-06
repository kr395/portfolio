---
name: Lumina Creative Suite
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb2b7'
  on-tertiary: '#67001b'
  tertiary-container: '#ff516a'
  on-tertiary-container: '#5b0017'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
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
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  title-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.5'
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
  mono-xs:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '400'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  toolbar-height: 48px
  sidebar-width: 280px
  gutter: 16px
  margin-page: 32px
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system blends the precision of a professional UI design tool with the expressive elegance of a high-end creative portfolio. The brand personality is dual-natured: technical and disciplined in its "Chrome" (the app interface), yet vibrant and atmospheric in its "Canvas" (the portfolio content). 

The aesthetic is **Modern Glassmorphism** meets **High-Contrast Editorial**. It utilizes a "Dark Mode" application shell to keep the focus on creative work, while the work itself oscillates between a "Midnight Neon" aesthetic and a "Gallery White" minimalist style. The UI should evoke a sense of professional mastery, utilizing translucent layers and subtle glowing accents to guide the user's eye toward primary actions and active states.

## Colors

The palette is anchored by a deep charcoal-slate neutral for the application chrome, ensuring the UI recedes while the work pops. 

- **Primary & Secondary:** A vibrant Electric Violet and Cyber Cyan are used for active tool states, selection highlights, and "light tube" effects.
- **Accents:** High-saturation tones are reserved for interactive triggers and status indicators.
- **Canvas Modes:**
    - **Dark Theme:** Utilizes deep charcoal backgrounds (`#020617`) with gradients that mimic physical light tubes using the primary and secondary colors.
    - **Light Theme:** Transitions to a clinical, high-contrast white environment (`#FFFFFF`) with pure black typography for a traditional portfolio feel.

## Typography

The system utilizes **Inter** for its incredible legibility in complex UI layouts and its clean, Swiss-inspired character in portfolio displays. For the technical aspects—such as the inspector panels and layer lists—the design system introduces **Geist** to provide a distinct, developer-centric aesthetic that feels precise and modern.

Large headlines in the portfolio sections use tight tracking and heavy weights. In contrast, the application chrome uses smaller, medium-weight labels for efficiency and clarity.

## Layout & Spacing

This design system follows a **Fixed-Panel Layout** typical of professional creative tools. The "Chrome" consists of a top toolbar, a left layers/assets sidebar, and a right inspector panel. The central area is a fluid "Canvas" that houses the portfolio content.

The spacing rhythm is based on a **4px baseline grid**. 
- **Toolbars & Sidebars:** Use dense 8px and 12px internal padding to maximize screen real estate.
- **Canvas Content:** Uses a more generous, fluid layout with 32px to 64px margins to allow the work to "breathe."
- **Breakpoints:** On tablet and mobile, sidebars collapse into drawers, and the toolbar condenses into a bottom-anchored action bar.

## Elevation & Depth

Depth is established through **Backdrop Blurs** and **Tonal Layering** rather than traditional shadows.

1.  **Level 0 (Canvas):** The base layer where the content resides.
2.  **Level 1 (Panels):** Sidebars and toolbars use a semi-transparent background (60-80% opacity) with a 20px backdrop blur and a 1px inner border to simulate glass.
3.  **Level 2 (Popovers/Modals):** These use a higher opacity and a subtle "glow" shadow tinted with the primary color to indicate they are "floating" above the interface.
4.  **Light Tube Effects:** In the dark theme, decorative elements use a multi-layered outer glow (5px, 15px, and 30px blurs) to create the neon tube aesthetic.

## Shapes

The shape language is **Technical-Soft**. While the general application uses 0.25rem (4px) radii for a sharp, professional look, interactive elements like project cards and primary buttons use 0.5rem (8px) to feel more approachable. 

The "KR" logo and high-end portfolio tags use "Super-ellipses" (continuous curvature) rather than standard border-radii where possible to convey luxury and bespoke craft.

## Components

- **Buttons:** Primary buttons use a subtle gradient of Primary to Secondary colors. Ghost buttons utilize the 1px glass border with a backdrop blur.
- **Layers & Tree View:** Use high-contrast selection states (Electric Violet background) with white text. Hover states use a low-opacity white overlay.
- **Inspector Inputs:** Stepper inputs and dropdowns are "Alt-Dark" (darker than the panel background) to create an inset, tactile feel.
- **Project Cards:** Feature a "Glass-to-Fill" transition on hover. Tags on cards are rendered in a monospaced font (Geist) with a semi-transparent pill background.
- **Light Tubes:** Decorative separators in the dark theme that utilize a 1px height line with a horizontal linear gradient and a 4px blur glow.
- **Checkboxes/Radios:** Small, precise 12px components with a neon-active state.