# NewTalentt Website

V1 oficial de NewTalentt: una landing premium bilingüe para una boutique internacional de Music Strategy, Growth & Technology enfocada en artistas, sellos y proyectos musicales.

## Estado

- V1 implementada y preparada para CI/CD.
- Rutas disponibles: English `/` y Español `/es`.
- Sin backend ni Base de Datos.
- El Deploy requiere `SITE_URL` y todos los quality gates verdes.

## Stack

- Next.js 16 con App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Motion for React

## Desarrollo local

1. Instala Node.js 24.
2. Instala dependencias con `npm ci`.
3. Duplica `.env.example` como `.env.local`.
4. Ejecuta `npm run dev`.
5. Abre la dirección local mostrada en la terminal.

## Validación

- `npm run quality`
- `npm run security:audit`

## Documentación

- [Especificación técnica](docs/TECH_SPEC.md)
- [Guía de Deploy](docs/DEPLOY_GUIDE.md)
- [Changelog](docs/CHANGELOG.md)
- [Design System](design-system/MASTER.md)

## Fuentes oficiales

La identidad visual utilizada procede de las carpetas oficiales de Google Drive proporcionadas por NewTalentt. Las copias maestras se conservan en `assets/brand-source/` y las versiones web optimizadas se sirven desde `public/brand/`.

Instagram oficial: [@newtalent.t](https://www.instagram.com/newtalent.t/)

BeFocus Music: [YouTube](https://www.youtube.com/@befocusmusic)
