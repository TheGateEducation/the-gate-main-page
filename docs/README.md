# Documentación — The Gate Education

Esta carpeta contiene toda la documentación del sitio web. Cada archivo tiene una audiencia específica — empieza por el que corresponde a tu rol.

## Si eres **staff no técnico** (ej. editas contenido, respondes correos)

Lee esto:

- **[MANUAL_USUARIO.md](./MANUAL_USUARIO.md)** — cómo editar maestrías vía Google Sheets, cómo pedir cambios al equipo de desarrollo, flujo del formulario de contacto, qué hacer si algo se ve mal.
- **[TUTORIALES.md](./TUTORIALES.md)** — secciones marcadas "(para staff)" con pasos ilustrados.

## Si eres **developer** (mantienes o extiendes el código)

Empieza aquí y sigue el orden:

1. **[ARQUITECTURA.md](./ARQUITECTURA.md)** — stack, estructura de carpetas, setup local, deploy en Vercel, convenciones.
2. **[PAGINAS.md](./PAGINAS.md)** — qué hace cada ruta del sitio.
3. **[DATA.md](./DATA.md)** — de dónde vienen los datos (JSON, Google Sheets, AWS, S3).
4. **[COMPONENTES.md](./COMPONENTES.md)** — componentes reutilizables y sus props.
5. **[TUTORIALES.md](./TUTORIALES.md)** — recetas para tareas comunes: agregar destino, migrar un dato hardcoded a Sheets, etc.

## Convenciones de este repo

- Rama default: **`development`**. No hay `main` remoto — todo se mergea a `development` y de ahí Vercel despliega a producción.
- Los PRs van de una rama feature hacia `development`.
- Paleta: morado `#5F338B`, naranja `#EDA74C`. Definidos también como `customPurple` y `customOrange` en `tailwind.config.ts`.
- Idioma del sitio y de la documentación: español.

## Mantener esta documentación

Cuando cambies algo no-trivial (una ruta nueva, una fuente de datos nueva, un env var nuevo), abre un commit en el mismo PR que toque el archivo correspondiente aquí. La documentación desactualizada engaña más de lo que ayuda.
