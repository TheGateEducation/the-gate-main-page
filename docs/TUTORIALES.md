# Tutoriales

Recetas paso-a-paso para tareas comunes. Las que dicen **(staff)** las puede hacer cualquiera con acceso al Sheet; las demás requieren dev con acceso al repo.

---

## Índice

### Para staff
- [Editar el Google Sheet de maestrías](#editar-el-google-sheet-de-maestrías-staff)

### Para developers — cambios de contenido
- [Cambiar el texto del Hero en el home](#cambiar-el-texto-del-hero-en-el-home)
- [Actualizar miembros del equipo](#actualizar-miembros-del-equipo)
- [Agregar o editar un destino](#agregar-o-editar-un-destino)
- [Cambiar un precio en /estudiante](#cambiar-un-precio-en-estudiante)
- [Agregar un logo nuevo al carrusel de aliados](#agregar-un-logo-nuevo-al-carrusel-de-aliados)
- [Actualizar el catálogo de licenciaturas](#actualizar-el-catálogo-de-licenciaturas)
- [Actualizar summer camps](#actualizar-summer-camps)
- [Activar la sección de noticias](#activar-la-sección-de-noticias)

### Para developers — infraestructura
- [Mover endpoints hardcoded a variables de entorno](#mover-endpoints-hardcoded-a-variables-de-entorno)
- [Rotar el URL del Apps Script de maestrías](#rotar-el-url-del-apps-script-de-maestrías)
- [Actualizar el CSV fallback de maestrías](#actualizar-el-csv-fallback-de-maestrías)
- [Migrar datos hardcoded a Google Sheets](#migrar-datos-hardcoded-a-google-sheets)
- [Subir una imagen nueva a S3](#subir-una-imagen-nueva-a-s3)
- [Deploy de emergencia / rollback](#deploy-de-emergencia--rollback)

---

## Editar el Google Sheet de maestrías (staff)

> Audiencia: **staff no-técnico**. Asume acceso de edición al Sheet.

1. Abre el Sheet compartido ("Listado Masters").
2. Ve a la hoja con los programas.
3. Agregar un programa → scroll al final, nueva fila con los 10 campos en orden:
   `pais, institucion, area, programa, ubicacion, fechas, duracion, costo, moneda, link`.
4. Editar un programa → buscar la fila (`Ctrl+F`), modificar celdas.
5. Borrar un programa → clic derecho en la fila → "Eliminar fila". **No dejes filas vacías en medio.**
6. Esperar ~1 minuto y refrescar `/programs/masters`.

Problemas comunes → ver [MANUAL_USUARIO.md § Si algo se rompe](./MANUAL_USUARIO.md#6-si-algo-se-rompe).

---

## Cambiar el texto del Hero en el home

1. Abre `app/page.tsx`.
2. Modifica los props del `<Hero>`:
   ```tsx
   <Hero
     title="Tu nuevo título aquí"
     subtitle="Tu nuevo subtítulo aquí"
     showCTA
     fullHeight
   />
   ```
3. Verifica el largo del título — si es demasiado largo rompe el layout móvil. Prueba en DevTools con viewport móvil.
4. Commit con mensaje `fix: update home hero copy` y PR a `development`.

---

## Actualizar miembros del equipo

1. Abre `src/components/Homepage/MeetTeam/MeetTeam.tsx`.
2. Busca el array de miembros (líneas ~17–43). Cada entrada:
   ```ts
   {
     name: "Nombre Apellido",
     role: "Cargo",
     image: "/images/foto.jpeg",    // o URL S3
     linkedin: "https://linkedin.com/in/...",
     email: "correo@thegateeducation.com",
     color: "#5F338B",              // acento
   }
   ```
3. Para una foto nueva:
   - Opción A (rápida): copiar la imagen a `public/images/nombre.jpeg` en el repo. Usar `/images/nombre.jpeg` como src.
   - Opción B (preferida): subirla a S3 (ver [Subir una imagen nueva a S3](#subir-una-imagen-nueva-a-s3)) y usar la URL completa.
4. Commit `feat: add {nombre} to team` y PR.

---

## Agregar o editar un destino

1. Abre `src/data/destinations.ts`.
2. Duplica un destino existente y ajusta:
   ```ts
   {
     name: "Nombre País",
     programs: "XX+",
     flagImage: "https://images-bucket.../public/flags/xx.png",
     placeImage: "https://images-bucket.../public/destinos/xx.jpg",
     description: "...",
     educationSystem: "...",
     economy: "...",
     // position: { ... }  ← solo si quieres que aparezca como polaroid en el Hero home
   }
   ```
3. Solo los primeros 6 destinos con `position` aparecen como polaroids flotantes en el Hero del home. `src/components/Hero/Hero.tsx` los toma con `.filter(d => d.position).slice(0, 6)`.
4. Commit y PR.

---

## Cambiar un precio en /estudiante

1. Abre `app/estudiante/page.tsx`.
2. Busca la const `allServices`.
3. Encuentra el servicio por `title` y cambia `price` (número, en USD; `0` = Gratis).
4. Commit `fix: update price for {servicio}`.

> Candidato fuerte para migrar a Sheets — ver [DATA.md § Candidatos para migrar a Sheets](./DATA.md#candidatos-para-migrar-a-sheets).

---

## Agregar un logo nuevo al carrusel de aliados

1. Sube el PNG (fondo transparente) al bucket S3 en `public/logos/` (ver [Subir una imagen nueva a S3](#subir-una-imagen-nueva-a-s3)).
2. Abre `src/data/constantes.ts`, busca el export `logos` (objeto).
3. Agrega una entrada:
   ```ts
   "Nombre Institución": "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/logos/nuevo.png",
   ```
4. Commit `feat: add {institución} logo to partners carousel` y PR.

---

## Actualizar el catálogo de licenciaturas

1. Abre el CSV en `src/lib/Listado_Bachelors.csv` (o el archivo que use `src/lib/parseLicenciaturas.ts`).
2. Agregar / editar filas manteniendo exactamente los headers.
3. Commit `chore: refresh bachelors catalog` y PR.

> Este es el flujo actual. Migrar a Sheet es un proyecto recomendado — ver [Migrar datos hardcoded a Google Sheets](#migrar-datos-hardcoded-a-google-sheets).

---

## Actualizar summer camps

1. Abre `src/data/summerCampsData.ts`.
2. Ajustar los camps existentes o agregar objetos nuevos manteniendo la shape.
3. Commit y PR.

> **Recomendación**: estos datos cambian por temporada. Migrar a Sheets beneficia mucho aquí.

---

## Activar la sección de noticias

Actualmente `/news` es un placeholder ("Próximamente aquí"). Opciones para activarlo:

### Opción A — Sheet + Apps Script (consistente con maestrías)

1. Crear Sheet "Noticias" con columnas `titulo | fecha | resumen | cuerpo | imagen_url | link`.
2. Publicar Apps Script como Web App.
3. Crear `app/api/news/route.ts` con la misma estructura de `masters/route.ts`.
4. Convertir `app/news/page.tsx` en server component que consuma la API.

### Opción B — MDX en el repo

Crear `content/news/*.mdx` con frontmatter. Instalar `@next/mdx`. Cada PR agrega una noticia nueva. Más limpio pero requiere dev para cada post.

### Opción C — CMS externo (Sanity, Notion, Contentful)

Overkill para The Gate hoy, a menos que se planee publicar semanalmente. No recomendado todavía.

**Recomendación**: Opción A si ya tenemos el patrón de Sheets andando.

---

## Mover endpoints hardcoded a variables de entorno

Varios endpoints están hardcoded en el código. Para rotarlos o usar una URL distinta en staging vs prod, conviene moverlos a env vars.

1. Crear `.env.local` en la raíz del repo (y agregarlo a `.gitignore` si no está ya):
   ```env
   GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/.../exec
   THEGATE_API_DOMAIN=https://mbhyn4didf.execute-api.us-east-2.amazonaws.com/stage
   ```
2. En `app/api/programs/masters/route.ts` reemplazar:
   ```ts
   const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL!;
   ```
3. En `src/config/env.ts` reemplazar el valor por:
   ```ts
   export const THEGATE_EDUCATION_API_DOMAIN =
     process.env.THEGATE_API_DOMAIN ?? "https://mbhyn4didf.execute-api.us-east-2.amazonaws.com/stage";
   ```
4. En **Vercel** (Project Settings → Environment Variables) agregar las mismas keys con sus valores tanto en Production como en Preview.
5. Commit y PR.

Beneficio: rotar la URL del Apps Script ya no requiere commit — se cambia en Vercel y redeploy.

---

## Rotar el URL del Apps Script de maestrías

Si Google invalida el deployment actual (o la cuenta cambia):

1. Abrir el Sheet → Extensiones → Apps Script.
2. En el editor: Deploy → **New deployment** → Type: Web app.
3. Settings:
   - Execute as: **Me** (o la cuenta service).
   - Who has access: **Anyone with the link**.
4. Deploy → copiar la nueva URL.
5. Si ya hiciste [Mover endpoints hardcoded a variables de entorno](#mover-endpoints-hardcoded-a-variables-de-entorno): actualizar `GOOGLE_APPS_SCRIPT_URL` en Vercel y redeploy. **Sin commit**.
6. Si sigue hardcoded: editar `app/api/programs/masters/route.ts` → `APPS_SCRIPT_URL` → commit + PR.

---

## Actualizar el CSV fallback de maestrías

El CSV `src/lib/Listado_Masters.csv` se usa automáticamente cuando el Apps Script falla. Se recomienda refrescarlo cada ~mes:

1. En el Sheet de maestrías: Archivo → Descargar → **Valores separados por comas (.csv)**.
2. Reemplazar `src/lib/Listado_Masters.csv` con el descargado (mismo nombre).
3. Commit `chore: refresh masters CSV fallback`.
4. PR y merge.

---

## Migrar datos hardcoded a Google Sheets

Patrón genérico para mover cualquier dataset hardcoded al flujo Sheet → Apps Script → API route. Referencia `app/api/programs/masters/route.ts` como plantilla.

### Paso 1 — Sheet

1. Crear Google Sheet nuevo con una hoja principal.
2. Fila 1: headers exactos que espera tu parser (ej. `id | categoria | titulo | descripcion | precio | color_borde`). **Sin espacios, sin mayúsculas mixtas inconsistentes**.
3. Llenar con los datos actuales del TS/JSON.

### Paso 2 — Apps Script

1. En el Sheet: Extensiones → Apps Script.
2. Reemplazar el contenido con:
   ```js
   function doGet(e) {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
     const [headers, ...rows] = sheet.getDataRange().getValues();
     const data = rows
       .filter(row => row[0] !== "")  // ignora filas vacías
       .map(row => Object.fromEntries(headers.map((h, i) => [h, row[i]])));
     return ContentService
       .createTextOutput(JSON.stringify(data))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```
3. Deploy → New deployment → Web app → Anyone with the link → Deploy.
4. Copiar URL.

### Paso 3 — API route en Next

Crear `app/api/{recurso}/route.ts`:

```ts
import { NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.RECURSO_APPS_SCRIPT_URL!;
const CACHE_TTL_MS = 60_000;

let cachedRows: MyItem[] | null = null;
let cachedAt = 0;

async function getRows(): Promise<MyItem[]> {
  if (cachedRows && Date.now() - cachedAt < CACHE_TTL_MS) return cachedRows;

  try {
    const res = await fetch(APPS_SCRIPT_URL, { cache: "no-store" });
    const data = await res.json();
    cachedRows = data as MyItem[];
    cachedAt = Date.now();
    return cachedRows;
  } catch (err) {
    console.error("Apps Script failed, using fallback", err);
    // opcional: leer CSV local
    return cachedRows ?? [];
  }
}

export async function GET() {
  const rows = await getRows();
  return NextResponse.json({ items: rows });
}
```

### Paso 4 — Frontend

Cambiar el componente que consume el TS/JSON hardcoded por un fetch al nuevo endpoint:

```tsx
"use client";
import { useQuery } from "@tanstack/react-query";

function MyList() {
  const { data, isLoading } = useQuery({
    queryKey: ["recurso"],
    queryFn: () => fetch("/api/recurso").then(r => r.json()),
  });

  if (isLoading) return <p>Cargando...</p>;
  return <ul>{data?.items.map(i => <li key={i.id}>{i.titulo}</li>)}</ul>;
}
```

### Paso 5 — Cleanup

1. Borra el TS/JSON hardcoded.
2. Actualiza `docs/DATA.md` para reflejar la nueva fuente.
3. Agrega una sección en `docs/MANUAL_USUARIO.md` explicando cómo editar el Sheet nuevo (copiando la estructura de la sección de maestrías).
4. Compartir el Sheet con el staff.

### Qué considerar

- **Rate limits**: Apps Script tiene límite de ejecuciones/día (~20,000 en cuenta gratuita). El caché de 1 min del API route es suficiente para el tráfico actual.
- **CSV fallback**: opcional pero recomendado para datos críticos. Mantenerlo actualizado manualmente o con un cron que descargue el Sheet.
- **Validación**: Apps Script no valida tipos — un precio mal escrito como `"tres mil"` llega como string. Agregar `Number(row.precio)` o similar en el API route.

---

## Subir una imagen nueva a S3

Requiere credenciales de AWS para el bucket `images-bucket-landing-page`.

1. Pedir a admin de AWS acceso al bucket (o que te suban la imagen).
2. Subir archivo al prefijo correspondiente: `public/destinos/`, `public/logos/`, `public/team/`, etc.
3. Configurar permisos del objeto: `s3:GetObject` público (o usar bucket policy).
4. URL resultante: `https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/{prefijo}/{archivo}.{ext}`.
5. Usar esa URL en código. Como el dominio está en `next.config.mjs → remotePatterns`, `<Image>` la acepta.

### Si quieres un CDN con caché mejor

Considerar CloudFront encima del bucket (no configurado actualmente). Precio bajo, beneficia carga global.

---

## Deploy de emergencia / rollback

### Rollback a una versión previa

1. En Vercel dashboard → Deployments.
2. Buscar un deployment previo que esté OK (hay un tag verde "Ready").
3. Click en el menú `⋯` → **Promote to Production**.
4. Confirmar. La promoción es instantánea (sin rebuild).

### Revertir un commit en `development`

Si un commit malo ya se mergeó:

```bash
git checkout development
git pull
git revert {sha_del_commit_malo}
git push
```

Vercel desplegará automáticamente el revert.

> **No uses `git reset --hard` en `development`** — es shared branch. Usa revert.

### Forzar redeploy sin cambios

Útil si Vercel se "pegó" o una env var se actualizó:

- Vercel dashboard → Deployments → Redeploy último deployment.
- O: un commit vacío: `git commit --allow-empty -m "chore: redeploy"` y push.
