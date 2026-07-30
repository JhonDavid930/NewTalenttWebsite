# Guía de Deploy

Esta guía explica el Deploy de NewTalentt en Vercel paso a paso y sin asumir experiencia previa.

## Antes de empezar

Necesitas:

1. Una cuenta de Vercel.
2. El proyecto en un repositorio Git autorizado por el propietario.
3. La URL pública definitiva de NewTalentt.

No hagas Commit, Push ni Deploy hasta recibir autorización explícita.

## 1. Validar localmente

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
npm run typecheck
npm run lint
npm run build
```

Los tres últimos comandos deben terminar sin errores.

## 2. Preparar la URL pública

En Vercel, abre:

`Project Settings` → `Environment Variables`

Crea:

```text
NEXT_PUBLIC_SITE_URL=https://tu-dominio-real.com
```

Usa la URL completa con `https://` y sin barra final.

Esta variable no es un secreto. Sirve para canonical, sitemap, robots y Schema.org.

## 3. Importar el proyecto

1. Pulsa `Add New` → `Project`.
2. Selecciona el repositorio autorizado.
3. Vercel detectará Next.js automáticamente.
4. No cambies Build Command ni Output Directory.
5. Añade la variable del paso anterior.
6. Pulsa `Deploy`.

## 4. Conectar el dominio

1. Abre `Project Settings` → `Domains`.
2. Añade el dominio definitivo.
3. Sigue las instrucciones DNS de Vercel.
4. Espera a que aparezca como válido.
5. Confirma que la web abre con `https://`.

Vercel gestiona el certificado HTTPS automáticamente.

## 5. Revisar después del Deploy

Comprueba:

- `/` abre la versión English.
- `/es` abre la versión Español.
- El selector EN/ES cambia de ruta.
- `/robots.txt` responde.
- `/sitemap.xml` usa el dominio real.
- La imagen social aparece al compartir la URL.
- Instagram y BeFocus abren en una pestaña nueva.
- No existe scroll horizontal en móvil.

## 6. Separar Preview y Production

- Preview: cada Pull Request crea una URL temporal para revisar.
- Production: solo la rama aprobada publica el dominio real.

No pruebes cambios directamente sobre Production. Revísalos primero en Preview.

## 7. Cómo volver atrás

Si un Deploy nuevo tiene un problema:

1. Abre el proyecto en Vercel.
2. Entra en `Deployments`.
3. Busca el último Deploy correcto.
4. Abre su menú.
5. Selecciona `Promote to Production`.

Esto recupera una versión anterior sin borrar el historial.

## 8. Checklist final

- Build verde.
- Dominio con HTTPS.
- Variable `NEXT_PUBLIC_SITE_URL` correcta.
- English y Español revisados.
- OpenGraph comprobado.
- Responsive revisado en móvil y escritorio.
- Sin secretos en el repositorio.
- Sin Commit, Push o Deploy no autorizados.
