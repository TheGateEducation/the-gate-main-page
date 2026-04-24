# Arquitectura

Documentación técnica para developers. Si eres staff, ve a [MANUAL_USUARIO.md](./MANUAL_USUARIO.md).

---

## Stack

- **Framework**: Next.js 16 (App Router).
- **Runtime**: Node 20.x (ver `"engines"` en `package.json`).
- **UI**: React 18.3, TypeScript 5.9.
- **Estilos**: Tailwind CSS 3.4 + `tailwindcss-animate`. Paleta en `tailwind.config.ts`.
- **Componentes accesibles**: Radix UI (dialog, dropdown, accordion, navigation menu).
- **Animaciones**: Framer Motion.
- **Data fetching**: TanStack React Query 5 (paginación infinita en listados de programas).
- **Formularios / toasts**: react-toastify.
- **Iconos**: lucide-react + react-icons.
- **Imágenes**: next/image con dominios remotos permitidos (ver `next.config.mjs`).
- **Imágenes (optimización)**: sharp.
- **Hosting**: Vercel (inferido — no hay `vercel.json`, Vercel usa defaults de Next.js).

---

## Estructura de carpetas

```
the-gate-main-page/
├── app/                         Rutas del App Router (Next.js 13+)
│   ├── layout.tsx               Root layout, metadata, fonts
│   ├── page.tsx                 Home (/)
│   ├── provider.tsx             React Query provider + Toastify
│   ├── template.tsx             Template re-render entre rutas
│   ├── globals.css              Tailwind + animaciones custom
│   ├── about/                   /about
│   ├── alianzas/                /alianzas
│   ├── aviso-de-privacidad/     /aviso-de-privacidad
│   ├── contact/                 /contact
│   ├── destinos/                /destinos
│   ├── estudiante/              /estudiante (tabla de servicios)
│   ├── instituciones/           /instituciones
│   ├── news/                    /news (placeholder)
│   ├── programs/
│   │   ├── page.tsx             /programs (hub)
│   │   ├── masters/             /programs/masters (desde Google Sheet)
│   │   ├── bachelors/           /programs/bachelors (desde CSV)
│   │   └── camps/               /programs/camps
│   ├── services/                /services
│   └── api/                     API routes
│       └── programs/
│           ├── masters/route.ts   Fetch Apps Script + fallback CSV
│           └── csv/route.ts       Fetch licenciaturas CSV
│
├── src/
│   ├── components/              Componentes React organizados por feature
│   │   ├── Hero/                Hero reutilizable (home + páginas internas)
│   │   ├── Navbar/              Navbar con dropdowns + mobile sheet
│   │   ├── Footer/              Footer + ICEF badge + carrusel aliados
│   │   ├── Homepage/            Secciones exclusivas del home
│   │   ├── cale/                Componentes de programas (ProgramPage, Cards)
│   │   ├── estudiantes/         ServiceCard, SummaryCard
│   │   ├── instituciones/       InfoCard
│   │   ├── ContactUs/           Formulario de contacto
│   │   └── ...
│   ├── data/                    Datos hardcodeados (JSON / TS)
│   │   ├── destinations.ts      Países del sitio
│   │   ├── constantes.ts        Logos de aliados, endpoints, categorías
│   │   ├── summerCampsData.ts   Camps por edad
│   │   ├── categorias_texto.json Textos de categorías de programas
│   │   └── ...
│   ├── lib/                     Parsers y utilidades
│   │   ├── parseLicenciaturas.ts  Parser de CSV
│   │   └── Listado_Masters.csv    Fallback cuando Apps Script falla
│   ├── services/                Clientes HTTP
│   │   └── studentsRecords.service.ts   POST del formulario
│   ├── config/
│   │   └── env.ts               Endpoints hardcoded (AWS Lambda)
│   └── builder-registry.ts      Integración Builder.io (opcional)
│
├── public/                      Assets estáticos (favicons, imágenes locales)
├── docs/                        ← Estás aquí
├── tailwind.config.ts           Paleta, fonts, animaciones, plugins
├── next.config.mjs              Dominios de imágenes permitidos
├── tsconfig.json                Paths (@app, @src, etc.)
└── package.json                 Scripts + deps
```

### Aliases de import (`tsconfig.json`)

- `@app/*` → `app/*`
- `@src/*` → `src/*`

Úsalos siempre en vez de rutas relativas profundas (`../../../`).

---

## Setup local

### Requisitos

- **Node 20.x** (definido en `engines`). Usa `nvm use 20` o instala con `fnm`.
- **npm** (el repo usa `package-lock.json` implícito; puedes usar `bun` si prefieres, pero verifica que `bun install` no cambie el lockfile).

### Comandos

```bash
# Clonar
git clone https://github.com/TheGateEducation/the-gate-main-page.git
cd the-gate-main-page

# Instalar deps
npm install

# Dev server con Turbopack
npm run dev            # http://localhost:3000

# Build de producción
npm run build

# Correr el build
npm run start

# Linter
npm run lint
```

### Variables de entorno

El repo **no usa `.env.local`** por defecto, excepto para una integración opcional:

| Variable | Dónde se usa | Requerido | Descripción |
|----------|--------------|-----------|-------------|
| `NEXT_PUBLIC_BUILDER_API_KEY` | `src/builder-registry.ts` | No | Solo si se activa Builder.io para edición visual. Actualmente no está en uso en producción. |

Los **endpoints externos** (AWS Lambda, Apps Script, S3, ICEF) están **hardcoded** en el código en vez de env vars. Esto es frágil — si se rota alguna URL hay que cambiar código. Candidato para refactor (ver TUTORIALES.md).

Referencias hardcoded:

- **AWS Lambda (formulario de contacto)** → `src/config/env.ts`:
  ```ts
  THEGATE_EDUCATION_API_DOMAIN = "https://mbhyn4didf.execute-api.us-east-2.amazonaws.com/stage"
  ```
- **Google Apps Script (maestrías)** → `app/api/programs/masters/route.ts`:
  ```ts
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx-zfQQASyz.../exec"
  ```
- **S3 bucket de imágenes** → URLs directas en `src/data/constantes.ts` y otros archivos.

---

## Deploy

El sitio se despliega en **Vercel** automáticamente desde GitHub:

- **Producción**: push / merge a `development` → deploy automático al dominio de prod.
- **Preview**: cada PR genera un deploy de preview en un subdominio temporal (`*.vercel.app`). Vercel comenta el link en el PR.

### Configuración Vercel

- **Framework preset**: Next.js (auto-detectado).
- **Build command**: `npm run build` (default).
- **Install command**: `npm install` (default).
- **Output directory**: `.next` (default).
- **Node version**: 20.x (ver `engines` en `package.json`).

No hay `vercel.json` — todo usa defaults.

### Dominios de imágenes permitidos

`next.config.mjs` define qué hosts puede usar `<Image>`:

```js
remotePatterns: [
  { hostname: "images-bucket-landing-page.s3.us-east-2.amazonaws.com" },
  { hostname: "images.pexels.com" },
  { hostname: "www-cdn.icef.com" },
]
```

Si agregas imágenes de un nuevo CDN, añádelo aquí o `<Image>` dará error de dominio no permitido.

---

## Ramas y flujo de trabajo

- Rama default: **`development`**. El remoto `origin/HEAD` apunta aquí.
- **No hay `main` remoto** — todo se mergea a `development`.
- Flujo: `development` → rama feature (`feat/...`, `fix/...`, `docs/...`) → PR → review → merge a `development`.
- **No hacer force-push a `development`** salvo emergencias (limpieza de commits con autores no deseados, etc.) — y siempre con `--force-with-lease`.

### Convenciones de commits

Basado en los commits existentes (`git log`):

- `feat: ...` — feature nueva.
- `fix: ...` — arreglo de bug o de visual.
- `docs: ...` — cambios en documentación.
- `refactor: ...` — cambios internos sin afectar comportamiento.
- `chore: ...` — dependencias, config, CI.

Todos en español o inglés, el repo no es estricto pero la mayoría están en inglés.

---

## Paleta de colores

Definida en `tailwind.config.ts`:

| Token | Hex | Uso típico |
|-------|-----|-----------|
| `customPurple` | `#5F338B` | Color primario de marca, títulos, CTAs secundarios |
| `customOrange` | `#EDA74C` | CTA principal, accentos |
| `customOrangeHover` | `#d99530` | Hover del CTA naranja |
| `customMint` | `#699984` | Acento, summer camps |
| `whiteNotWhite` | `#FCFBF8` | Background suave |

Algunos componentes todavía usan los hex directos (`bg-[#5F338B]`). Cuando modifiques uno, **prefiere el token** — así un cambio de paleta solo toca `tailwind.config.ts`.

### Fuentes

- **Poppins**: primaria (cuerpo y títulos).
- **Montserrat**: secundaria, en algunos titulares.

Cargadas vía `next/font/google` en `app/layout.tsx`.

---

## Integraciones externas

| Servicio | Qué hace | Archivo(s) clave |
|----------|----------|------------------|
| **Google Apps Script** | Fuente del catálogo de maestrías | `app/api/programs/masters/route.ts` |
| **AWS Lambda (stage)** | Recibe envíos del formulario de `/contact` | `src/services/studentsRecords.service.ts`, `src/config/env.ts` |
| **AWS S3** | Almacena imágenes y logos | URLs en `src/data/constantes.ts`, `app/layout.tsx` |
| **ICEF** | Badge de certificación en el footer | `src/components/Footer/Footer.tsx` |
| **Calendly** | Booking de asesorías (`calendly.com/thegateeducation/30min`) | `src/components/Navbar/Navbar.tsx`, `src/components/Hero/Hero.tsx`, varias páginas |
| **Pexels** | Algunas imágenes stock | URLs en código |
| **Builder.io** | CMS visual (opcional, no activo en prod) | `src/builder-registry.ts` |

Ver [DATA.md](./DATA.md) para el detalle.
