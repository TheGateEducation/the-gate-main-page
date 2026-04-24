# Fuentes de datos

Todo lo que se muestra en el sitio viene de una de estas fuentes. Esta guía explica dónde vive cada dato, cómo se lee, y qué otros datos hardcodeados podrían migrarse a Google Sheets para que el staff pueda editarlos sin developer.

---

## Índice

1. [Overview de fuentes](#overview-de-fuentes)
2. [Maestrías (Google Sheet + Apps Script)](#maestrías-google-sheet-apps-script)
3. [Licenciaturas (CSV local)](#licenciaturas-csv-local)
4. [Destinos (TS hardcoded)](#destinos-ts-hardcoded)
5. [Summer camps (TS hardcoded)](#summer-camps-ts-hardcoded)
6. [Servicios de estudiante con precios (TS hardcoded en page)](#servicios-de-estudiante-con-precios-ts-hardcoded-en-page)
7. [Equipo (TS hardcoded en componente)](#equipo-ts-hardcoded-en-componente)
8. [Textos de categorías (JSON)](#textos-de-categorías-json)
9. [Logos de aliados (TS hardcoded)](#logos-de-aliados-ts-hardcoded)
10. [AWS S3: imágenes y assets](#aws-s3-imágenes-y-assets)
11. [ICEF badge](#icef-badge)
12. [Formulario de contacto (AWS Lambda)](#formulario-de-contacto-aws-lambda)
13. [Candidatos para migrar a Sheets](#candidatos-para-migrar-a-sheets)

---

## Overview de fuentes

| Dato | Fuente | Editable por staff | Tiempo hasta verse reflejado |
|------|--------|--------------------|-----------------------------|
| Maestrías | Google Sheet vía Apps Script | **Sí** | ~1 min (caché) |
| Licenciaturas | CSV local (`src/lib/`) | No (requiere PR) | Instantáneo tras deploy |
| Destinos | `src/data/destinations.ts` | No | Instantáneo tras deploy |
| Camps | `src/data/summerCampsData.ts` | No | Instantáneo tras deploy |
| Servicios y precios | `app/estudiante/page.tsx` | No | Instantáneo tras deploy |
| Equipo | `src/components/Homepage/MeetTeam/MeetTeam.tsx` | No | Instantáneo tras deploy |
| Texto de categorías | `src/data/categorias_texto.json` | No | Instantáneo tras deploy |
| Logos aliados | `src/data/constantes.ts` | No | Instantáneo tras deploy |
| Imágenes | AWS S3 | Indirecto (dev sube archivo, staff manda imagen) | Instantáneo (si URL ya referenciada) |
| Envíos de contacto | AWS Lambda | Lectura de DB | En vivo |

---

## Maestrías (Google Sheet + Apps Script)

### Flujo

```
Staff edita Sheet
      ↓
Apps Script publicado expone JSON
      ↓
Next API route (/api/programs/masters) hace fetch, cachea 1 min
      ↓
/programs/masters usa TanStack Query para paginar
```

### Archivos involucrados

- **`app/api/programs/masters/route.ts`** — API route. Define:
  - `APPS_SCRIPT_URL` (hardcoded).
  - `PAGE_SIZE = 30`.
  - `CACHE_TTL_MS = 60_000`.
  - Cache en memoria: `cachedRows`.
  - Fallback: si fetch falla o responde vacío, lee `src/lib/Listado_Masters.csv`.
- **`src/lib/Listado_Masters.csv`** — copia de respaldo. **Mantenla actualizada** cada cierto tiempo (ver tutorial).
- **`app/programs/masters/page.tsx`** — consume la API vía `useInfiniteQuery`.

### Formato del Sheet

Headers exactos en la fila 1 (orden importa):

```
pais | institucion | area | programa | ubicacion | fechas | duracion | costo | moneda | link
```

### Cómo rotar el URL del Apps Script

Si hay que publicar un nuevo Apps Script (ej. cuenta de Google nueva):

1. En Google Sheets, abre **Extensiones → Apps Script**.
2. Deploy → New deployment → Web app → "Anyone with the link" → Deploy.
3. Copia la nueva URL.
4. En `app/api/programs/masters/route.ts` reemplaza la constante `APPS_SCRIPT_URL`.
5. Commit + PR.

**Mejor aún**: mover a env var `GOOGLE_APPS_SCRIPT_URL` y leer de `process.env` (ver [TUTORIALES.md](./TUTORIALES.md)).

---

## Licenciaturas (CSV local)

- **Archivo**: `src/lib/Listado_Bachelors.csv` (o el que use `parseLicenciaturas.ts`).
- **Parser**: `src/lib/parseLicenciaturas.ts`.
- **API**: `app/api/programs/csv/route.ts`, paginación de 50 por página.
- **Consumidor**: `app/programs/bachelors/page.tsx`.

Para agregar licenciaturas se edita el CSV en el repo y se hace PR. No es editable por staff. **Candidato** para migrar a Google Sheet (mismo patrón que maestrías).

---

## Destinos (TS hardcoded)

- **Archivo**: `src/data/destinations.ts`.
- **Forma**:
  ```ts
  {
    name: string;
    programs: string;        // "45+"
    flagImage: string;       // URL S3
    placeImage: string;      // URL S3
    description: string;
    educationSystem: string;
    economy: string;
    position?: CSSProperties; // para polaroids del Hero home
  }
  ```
- **Consumidores**: `/destinos`, polaroids del Hero del home, dropdowns en el formulario de contacto.

Para agregar/editar un país se hace PR. **Candidato** para Sheet.

---

## Summer camps (TS hardcoded)

- **Archivo**: `src/data/summerCampsData.ts`.
- **Consumidores**: `/programs/camps`.

Cada camp tiene campos como nombre, edades, fechas, ubicación, duración, costo, proveedor, etc.

**Candidato fuerte** para Sheet — los camps cambian por temporada y el staff los actualiza seguido.

---

## Servicios de estudiante con precios (TS hardcoded en page)

- **Archivo**: `app/estudiante/page.tsx`, const `allServices`.
- **Forma**:
  ```ts
  { id, category, title, description, price, borderColor }
  ```

Cambios de precio = PR. **Candidato** para Sheet.

---

## Equipo (TS hardcoded en componente)

- **Archivo**: `src/components/Homepage/MeetTeam/MeetTeam.tsx`.
- **Actualmente**: Paulina Valdés (Founder) y Alejandra Hernández (Co-Founder).
- **Datos**: nombre, cargo, foto (`/images/*.jpeg` en `public/`), LinkedIn, email, color de acento.

Candidato para Sheet si el equipo va a crecer. Mientras sean 2-3 personas, hardcoded está bien.

---

## Textos de categorías (JSON)

- **Archivo**: `src/data/categorias_texto.json`.
- **Forma**: mapping `{ "Nombre Categoría": "Descripción completa..." }`.
- **Consumidor**: página de categoría (ej. Study Tours, Gap Year, etc.).

Fácil de migrar a Sheet (tabla plana `categoria | descripcion`).

---

## Logos de aliados (TS hardcoded)

- **Archivo**: `src/data/constantes.ts`, export `logos`.
- **Forma**: `{ "University Name": "https://images-bucket.../logo.png" }`.
- **Consumidor**: `src/components/Footer/Carousel.tsx` (carrusel infinito bajo el footer).

Agregar un logo nuevo = subir PNG a S3 + agregar entrada al TS + PR.

**Candidato** para Sheet con dos columnas (`nombre | url_s3`).

---

## AWS S3: imágenes y assets

- **Bucket**: `images-bucket-landing-page.s3.us-east-2.amazonaws.com`.
- **Patrón de URL**: `https://{bucket}/public/{categoria}/{nombre}.{ext}`.
- **Dónde se usan URLs**:
  - `app/layout.tsx` (OG image del metadata)
  - `src/components/Navbar/components/Logo.tsx` (logo brand)
  - `src/data/constantes.ts` (~50+ logos de universidades)
  - `src/data/destinations.ts` (fotos de países)
  - Otros componentes según necesidad.

### Cómo subir una imagen nueva

Requiere acceso al bucket S3 (pedir a admin de AWS):

1. Subir el archivo al bucket en el prefijo adecuado (`public/destinos/`, `public/logos/`, etc.).
2. Hacer el objeto **público** (o usar un bucket policy que los exponga).
3. Copiar la URL y usarla en código.

Permisos que requiere el objeto: `s3:GetObject` para `*`.

---

## ICEF badge

- **Script externo**: `https://www-cdn.icef.com/scripts/iasbadgeid.js`.
- **Dónde se inicializa**: `src/components/Footer/Footer.tsx` con `useEffect` que:
  1. Limpia el contenedor.
  2. Elimina el `<script>` previo si existe.
  3. Inyecta el script con query param de cache-bust (`?v=${Date.now()}`) para re-ejecutar el script en cada navegación SPA.
- **Div anchor**: `<div id="ias_badge" ref={badgeRef} />`.

Si el badge desaparece:

- Verifica que `script` se inyectó inspeccionando `<head>` en DevTools.
- Verifica que la membresía de ICEF sigue activa (contactar ICEF).
- Verifica que `www-cdn.icef.com` esté en `next.config.mjs` → `images.remotePatterns` (si sirve imágenes).

---

## Formulario de contacto (AWS Lambda)

- **Endpoint**: `${THEGATE_EDUCATION_API_DOMAIN}/api-students` = `https://mbhyn4didf.execute-api.us-east-2.amazonaws.com/stage/api-students`.
- **Método**: POST, JSON body.
- **Archivo cliente**: `src/services/studentsRecords.service.ts`.
- **Consumidor**: `src/components/ContactUs/Form.tsx`.

Los envíos van a una tabla DynamoDB (inferido por la presencia de `@aws-sdk/client-dynamodb` en deps). Para revisar envíos hay que usar la AWS Console o añadir un dashboard.

---

## Candidatos para migrar a Sheets

El patrón de "Google Sheet → Apps Script → API route → React Query" funciona bien para maestrías. Se puede replicar para cualquier otro dato tabular hardcodeado. Priorizado por impacto:

### 1. **Licenciaturas** — impacto alto, esfuerzo bajo

Ya existe un CSV (`src/lib/Listado_Bachelors.csv`) y un parser. Migrar a Sheet sería prácticamente copiar la estructura de maestrías. El staff podría actualizar licenciaturas igual que maestrías, sin PR. **Recomendado primero.**

### 2. **Summer camps** — impacto alto, esfuerzo medio

Los camps cambian cada temporada. Staff terminó editando el TS con ayuda de dev. Una tabla con columnas `nombre | edades | fechas | ciudad | duracion | costo | proveedor | extras | link` es directa. **Recomendado segundo.**

### 3. **Servicios de estudiante / precios** — impacto medio, esfuerzo bajo

Tabla muy plana: `id | categoria | titulo | descripcion | precio | color_borde`. Marketing puede querer ajustar precios por temporada o campaña sin esperar un PR.

### 4. **Destinos** — impacto medio, esfuerzo medio

Más complejo porque tiene campos largos (descripción, sistema educativo, economía) y campos visuales (`position` CSS para polaroids). Migrar solo los campos textuales es factible; mantener los CSS positions en código.

### 5. **Logos de aliados** — impacto bajo, esfuerzo bajo

Tabla `nombre | url_imagen`. Fácil, pero el flujo de subir el archivo a S3 sigue requiriendo dev.

### 6. **Textos de categorías** — impacto bajo

`src/data/categorias_texto.json` se toca pocas veces. No es urgente migrar.

### 7. **Equipo** — bajo

Si el equipo se queda en 2-3 personas, no vale la pena.

---

### Receta genérica para migrar X a Sheets

Paso a paso, tomando maestrías como plantilla:

1. **Crear Sheet** con headers en fila 1. Los nombres deben coincidir con los que espera el parser.
2. **Crear Apps Script** (Extensiones → Apps Script) que expone el Sheet como JSON. Ejemplo mínimo:
   ```js
   function doGet() {
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Hoja1");
     const [headers, ...rows] = sheet.getDataRange().getValues();
     const data = rows.map(row =>
       Object.fromEntries(headers.map((h, i) => [h, row[i]]))
     );
     return ContentService.createTextOutput(JSON.stringify(data))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```
3. **Deploy** el Apps Script como Web App ("Anyone with the link").
4. **Crear API route** `app/api/programs/{recurso}/route.ts` copiando la estructura de `masters/route.ts`. Cambia: URL, tipo del item, headers esperados, CSV fallback opcional.
5. **Actualizar página** `app/programs/{recurso}/page.tsx` o equivalente para consumir la nueva API con React Query.
6. **Borrar el TS/JSON hardcoded** cuando la migración esté verificada en producción.
7. **Documentar** en este archivo cómo editar el Sheet nuevo.

Paso detallado en [TUTORIALES.md § Migrar datos hardcoded a Google Sheets](./TUTORIALES.md#migrar-datos-hardcoded-a-google-sheets).
