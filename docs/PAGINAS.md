# Páginas

Referencia de cada ruta del sitio: qué muestra, qué data consume, qué componentes usa. Archivos referenciados con ruta desde la raíz del repo.

---

## Home — `/`

**Archivo**: `app/page.tsx`

**Qué muestra**: landing principal. Hero fullscreen + secciones en scroll.

**Secciones** (en orden):

1. `<Hero fullHeight showCTA>` — gradiente morado, título "Donde hay una puerta abierta...", CTAs "Explorar Programas" + "Agenda tu Asesoría", polaroids flotantes de países, ola inferior.
2. `<Destinations>` — grid de tarjetas de países.
3. `<Programs>` — categorías de programas con descripción.
4. `<Stadistics>` — números (países, instituciones, aceptación) + sección de preguntas.
5. `<MeetTeam>` — Paulina y Alejandra con LinkedIn/email.
6. `<MissionVision>` — misión / visión.
7. `<CTASection>` — CTA final con gradiente morado.

**Data**:
- `src/data/destinations.ts` para `<Destinations>` y los polaroids del Hero.
- Miembros del equipo hardcoded en `src/components/Homepage/MeetTeam/MeetTeam.tsx`.
- Textos hardcoded en los componentes del home.

---

## `/programs` — Hub de programas

**Archivo**: `app/programs/page.tsx`

**Qué muestra**: listado de categorías de programas (maestrías, licenciaturas, camps, intercambios, idiomas, etc.) como cards. Cada card enlaza a la sub-ruta correspondiente.

**Data**: `src/data/constantes.ts` (categorías) + `src/data/categorias_texto.json` (textos descriptivos).

**Componentes**: Hero con style rich + grid de `<CategoryCard>`.

---

## `/programs/masters` — Catálogo de maestrías

**Archivo**: `app/programs/masters/page.tsx`

**Qué muestra**: listado paginado de maestrías con filtros por país y por área. Cada resultado muestra institución, programa, ubicación, fechas, duración, costo, link al programa oficial.

**Data**:
- Fuente principal: **Google Apps Script** publicado desde el Sheet "Listado Masters".
- API route: `app/api/programs/masters/route.ts` — intenta Apps Script primero, si falla usa CSV local `src/lib/Listado_Masters.csv`.
- Paginación: 30 items por página, cursor `nextKey`.
- Cache en memoria del servidor: 1 minuto (`CACHE_TTL_MS`).

**Componentes**:
- `<Hero>` con style rich.
- `<ProgramPage>` (container con filtros + infinite scroll vía React Query).
- `<ProgramCardsPorArea>` para renderizar cada card.

**Ver también**: [DATA.md § Maestrías](./DATA.md#maestrías-google-sheet-apps-script) + [TUTORIALES.md § Editar el Sheet de maestrías](./TUTORIALES.md#editar-el-google-sheet-de-maestrías-staff).

---

## `/programs/bachelors` — Licenciaturas

**Archivo**: `app/programs/bachelors/page.tsx`

**Qué muestra**: listado paginado de licenciaturas, filtrable por país/área.

**Data**:
- Fuente: CSV local `src/lib/Listado_Bachelors.csv` (si existe) o endpoint AWS Lambda, según la config actual.
- API route: `app/api/programs/csv/route.ts` — parser `src/lib/parseLicenciaturas.ts`, 50 items por página.
- **No** usa Google Sheet (hoy). Candidato para migrar — ver [DATA.md § Candidatos para migrar a Sheets](./DATA.md#candidatos-para-migrar-a-sheets).

**Componentes**: `<Hero>`, `<ProgramPage>`, `<ProgramCardsPorArea>`.

---

## `/programs/camps` — Summer camps

**Archivo**: `app/programs/camps/page.tsx`

**Qué muestra**: catálogo de campamentos de verano filtrable por edad.

**Data**: `src/data/summerCampsData.ts` (hardcoded).

**Componentes**: `<Hero>` + `<SummerCampCards>` + `<ProgramCardsPorEdades>`.

---

## `/destinos` — Países

**Archivo**: `app/destinos/page.tsx`

**Qué muestra**: Hero rich + grid de países con descripción educativa/económica + stats.

**Data**: `src/data/destinations.ts`. Cada país tiene:

```ts
{
  name: string;
  programs: string;       // "45+"
  flagImage: string;      // URL S3
  placeImage: string;     // URL S3, foto del lugar
  description: string;
  educationSystem: string;
  economy: string;
  position?: { top?: string; left?: string; right?: string; bottom?: string }; // solo los 6 primeros, para polaroids del Hero home
}
```

**Componentes**: `<Hero>`, cards custom inline en el page.

---

## `/services` — Servicios

**Archivo**: `app/services/page.tsx`

**Qué muestra**: servicios que ofrece The Gate (asesoría, revisiones, etc.) como cards con CTA.

**Data**: hardcoded en el page + `src/components/Services/CardCTA.tsx`.

---

## `/estudiante` — Tabla de servicios para estudiantes

**Archivo**: `app/estudiante/page.tsx`

**Qué muestra**: tabla interactiva de servicios con precios agrupados en "Gratuitos", "Servicios Completos", "Servicios por Separado". Checkbox en cada card para armar un carrito visual (SummaryCard).

**Data**: **hardcoded** en la const `allServices` del propio page. Cada servicio:

```ts
{
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;  // en USD, 0 = Gratis
  borderColor: string;
}
```

**Componentes**: `<Hero>`, `<ServiceCard>`, `<SummaryCard>`.

**Nota**: los precios están en código. Cualquier cambio requiere PR. Candidato para Sheets — ver [DATA.md § Candidatos para migrar a Sheets](./DATA.md#candidatos-para-migrar-a-sheets).

---

## `/alianzas` — Alianzas estratégicas

**Archivo**: `app/alianzas/page.tsx`

**Qué muestra**: Hero + explicación del programa de alianzas + beneficios.

**Data**: hardcoded en el page.

---

## `/instituciones` — Para instituciones

**Archivo**: `app/instituciones/page.tsx`

**Qué muestra**: Hero rich (fondo de campus) + lista de servicios que The Gate ofrece a instituciones educativas aliadas + CTA final.

**Data**: hardcoded en el page (array `servicesData` + `beneficios`).

---

## `/about` — Acerca de

**Archivo**: `app/about/page.tsx`

**Qué muestra**: información general sobre The Gate. Página sencilla.

---

## `/contact` — Contacto

**Archivo**: `app/contact/page.tsx`

**Qué muestra**: formulario de contacto grande con muchos campos (nombre, email, país origen/destino, programa, etc.).

**Data enviada a**: AWS Lambda vía `StudentsRecordsService.create()` → `POST ${THEGATE_EDUCATION_API_DOMAIN}/api-students`.

**Componentes**: `<ContactUs/Form>`.

**Feedback**: toasts (react-toastify) para éxito/error.

---

## `/news` — Noticias

**Archivo**: `app/news/page.tsx`

**Qué muestra**: placeholder "Próximamente aquí". No consume datos externos.

**Cuando se active**: requiere decidir CMS (Sheets, Sanity, Notion API, etc.) o hardcoded. Ver [TUTORIALES.md § Activar la sección de noticias](./TUTORIALES.md#activar-la-sección-de-noticias).

---

## `/aviso-de-privacidad` — Aviso legal

**Archivo**: `app/aviso-de-privacidad/page.tsx`

**Qué muestra**: texto legal estático.

**Data**: hardcoded.

---

## API routes

### `GET /api/programs/masters`

**Archivo**: `app/api/programs/masters/route.ts`

- Query params: `?nextKey=...&pageSize=30&country=...&area=...`.
- Respuesta: `{ items: Master[], nextKey?: string }`.
- Flujo: intenta Apps Script → si falla, parsea CSV fallback → cache en memoria 1 min.

### `GET /api/programs/csv`

**Archivo**: `app/api/programs/csv/route.ts`

- Query params: `?nextKey=...&pageSize=50&country=...&area=...`.
- Respuesta: `{ items: Bachelor[], nextKey?: string }`.
- Flujo: parsea `src/lib/Listado_Bachelors.csv` (o similar) vía `parseLicenciaturas.ts`.
