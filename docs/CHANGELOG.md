# Changelog

Todos los cambios relevantes de NewTalentt Website se documentan aquí siguiendo Semantic Versioning y Conventional Commits.

## [Unreleased]

### Changed

- Se reforzó la identidad cromática oficial: `#0C0F18` pasa a ser el fondo principal y `#013650` adquiere presencia estructural en Proof, Capabilities, Insights, la pieza institucional y el Footer.
- El coral queda reservado como acento de acción y contraste.

## [1.0.0] - 2026-07-30

### Added

- Landing premium bilingüe con rutas English `/` y Español `/es`.
- Hero oficial y posicionamiento Music Strategy, Growth & Technology.
- Resultados de BeFocus Music y lanzamiento RIAA-certified Las Ganas.
- Philosophy, How We Work, Selected Work, Capabilities, credenciales, Insights y Work With Us.
- Navegación responsive con selector de idioma y menú móvil accesible.
- Motion sutil con soporte para `prefers-reduced-motion`.
- Metadata, OpenGraph, Twitter card, JSON-LD, manifest, robots y sitemap localizado.
- Assets oficiales de marca optimizados a WebP.
- Cabeceras de seguridad y arquitectura sin backend.
- Design System persistido en `design-system/MASTER.md`.
- Documentación técnica y guía de Deploy.

### Validated

- TypeScript sin errores.
- ESLint sin errores.
- Build de producción correcto.
- Layout revisado en 375, 768, 1024 y 1440 px.
- Navegación y contenido comprobados en English y Español.
- Lighthouse: Performance 96, Accessibility 100, Best Practices 100 y SEO 100.
- Core Web Vitals de laboratorio: CLS 0, TBT 10 ms y LCP 2.8 s.

### Security

- Sin formularios, Base de Datos, cookies, tracking ni secretos.
- Política CSP, anti-framing, `nosniff`, Referrer Policy y Permissions Policy.
- HTTPS requerido para producción.
