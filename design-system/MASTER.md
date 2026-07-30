# NewTalentt Design System

## Direction

NewTalentt is a premium, international, dark-first music-strategy boutique. The visual language is editorial, precise and technological without looking like a generic SaaS product or a traditional agency.

The system follows the `ui-ux-pro-max` rules directly because the installed search script is unavailable in this environment. This document is the visual source of truth.

## Principles

- Complex inside, simple outside.
- Typography, rhythm and evidence carry the experience.
- One brand accent, used with restraint.
- Music is expressed through pacing, repetition and data — not equalizer clichés.
- Motion must reveal hierarchy or response, never decorate empty space.
- Private, selective and confident; never loud, sales-heavy or inflated.

## Palette

| Token | Value | Role |
| --- | --- | --- |
| `ink` | `#0C0F18` | Primary dark background and dominant brand field |
| `ink-raised` | `#121A26` | Raised dark surface |
| `paper` | `#F2F0EA` | Primary text and light section |
| `paper-muted` | `#B8B8B2` | Secondary text |
| `line` | `rgba(242,240,234,.16)` | Dark-mode dividers |
| `coral` | `#FF5055` | Brand accent and action |
| `wine` | `#72133B` | Brand depth |
| `blue` | `#013650` | Structural brand blue for sections and editorial depth |
| `blue-raised` | `#06445D` | Interactive and layered blue surface |

Recommended visual allocation: approximately 65% `ink`, 25% `blue`, 10% coral/paper accents. The blue must appear as a meaningful structural field, not only as a decorative tint.

Normal text must meet WCAG AA 4.5:1. Decorative marks may use lower opacity only when they communicate no content.

## Typography

- Primary: Geist, modern neutral sans.
- Data / labels: Geist Mono.
- Editorial accent: system serif italic (`Georgia`, `Times New Roman`) only for short, high-impact phrases.
- Display scale: `clamp(3.25rem, 8.8vw, 8.5rem)`.
- Section title scale: `clamp(2.4rem, 5vw, 5.5rem)`.
- Body: minimum 1rem with 1.6 line height.
- Long-form measure: maximum 65–72 characters.

## Layout

- Mobile-first.
- Adaptive gutters: 20px at 375px, 32px at 768px, 48px at 1024px, 64px at 1440px.
- Content width: maximum 1440px.
- Section rhythm: 96px mobile, 144–192px desktop.
- Use strong ruled grids and asymmetry; avoid dense card dashboards.
- Touch targets: minimum 44 × 44px.

## Components

- Header: transparent-to-solid sticky rail, wordmark, restrained navigation, clear language switch.
- Buttons: pill or bordered text actions; visible focus ring; no layout shift on hover.
- Data: oversized tabular figures with explicit labels and context.
- Case study: split editorial composition, not boxed testimonial cards.
- Selected work: full-width ruled list with type labels.
- Footer: compact brand close, positioning line and external channels.

## Motion

- Reveal through opacity and y-axis translation only.
- Duration 200–500ms depending on hierarchy; stagger 40–70ms.
- Hover transitions 150–250ms.
- Respect `prefers-reduced-motion` in CSS and Motion for React via `useReducedMotion`.
- No autoplay video, parallax, infinite marquee or blocking entrance sequence.

## Responsive rules

- 375px: single-column flow, compact headline, collapsed navigation, no overflow.
- 768px: two-column proof and capability layouts where useful.
- 1024px: full editorial split layouts and visible desktop navigation.
- 1440px: expanded whitespace and maximum display typography without overlong text lines.

## Accessibility

- Semantic landmarks and sequential headings.
- Skip link, visible focus states and keyboard-operable menu.
- Descriptive labels for external links.
- Images declare dimensions and useful alt text, or empty alt when decorative.
- Color never carries meaning alone.
- Motion reduction preserves all content immediately.

## Anti-patterns

- No phone mockups, floating devices or glass-heavy SaaS UI.
- No waveforms, equalizers, headphones or music-note clichés.
- No emoji icons.
- No unverified claims, logos or artist imagery.
- No generic “360º marketing agency” language.
- No management or representation implication.
- No neon overload, excessive gradients or decorative particle fields.
