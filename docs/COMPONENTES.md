# Componentes reutilizables

Los componentes que se usan en varias páginas. Componentes específicos de una sola ruta no se listan aquí — revísalos en su archivo correspondiente.

---

## `<Hero>` — `src/components/Hero/Hero.tsx`

Hero flexible, estándar de toda la landing. Usado en **home, destinos, masters, bachelors, camps, services, instituciones, alianzas, programs, news**.

### Props

```ts
{
  title: string;                              // requerido
  titleType?: "gradient" | "white";           // default "gradient"
  subtitle?: string;
  subtitleColor?: string;                     // "white" | "black"
  imageUrl?: string;                          // requerido si backgroundType === "image"
  backgroundType?: "image" | "gradient" | "none";  // default "none"
  className?: string;
  showCTA?: boolean;                          // muestra CTAs "Explorar Programas" + "Agenda Asesoría"
  fullHeight?: boolean;                       // min-h-screen (para home)
}
```

### Reglas de render

- Si `fullHeight && backgroundType === "none"` → **modo home**: gradiente morado con polaroids flotantes de países + ola inferior + decoraciones (círculos, mapa, avión, puntos).
- Si `backgroundType === "gradient"` → gradiente naranja→rosa→morado (`#EDA74C → #D25C7A → #9747FF`).
- Si `backgroundType === "image"` → imagen de fondo con overlay negro 40% opacity.
- Si `backgroundType === "none"` → fondo blanco.

### Título auto-blanco

Si el fondo es colorido (`isHome || backgroundType === "gradient" || backgroundType === "image"`), el título fuerza `text-white` aunque pases `titleType="gradient"`. Esto evita títulos invisibles.

### Ejemplos

```tsx
// Home
<Hero
  title="Donde hay una puerta abierta, hay un mundo por descubrir"
  subtitle="Te acompañamos..."
  showCTA
  fullHeight
/>

// Página con imagen de fondo
<Hero
  title="Maestrías"
  backgroundType="image"
  imageUrl="https://..."
/>

// Página con gradiente
<Hero
  title="Camps"
  backgroundType="gradient"
/>
```

---

## `<Navbar>` — `src/components/Navbar/Navbar.tsx`

Navbar principal, fijo arriba en todas las páginas. Logo morado con pill blanco, links, CTA "Agenda Ahora".

- **Menú desktop**: links en pill blanco centrado (Programas, Destinos, Servicios, Alianzas, Contacto).
- **Menú móvil**: Radix dialog (hamburger abre un sheet).
- **Logo**: `<Logo>` en `src/components/Navbar/components/Logo.tsx` (imagen PNG desde S3).
- **CTA "Agenda Ahora"**: link a Calendly.

Navbar se auto-incluye desde `app/layout.tsx` → `app/provider.tsx`. No hace falta incluirlo en cada page.

---

## `<Footer>` — `src/components/Footer/Footer.tsx`

Footer global, incluido desde el layout. Contiene:

- Links de navegación secundaria.
- Información de contacto (oficinas).
- Redes sociales.
- **Badge de ICEF** — `<div id="iasBadge">` con script inyectado vía `useEffect` y cache-busted (ver [DATA.md § ICEF badge](./DATA.md#icef-badge)).
- Carrusel de aliados (`<Carousel>`).

### Client component porque:

- Necesita `useEffect` para re-inicializar el ICEF badge en navegación SPA.

---

## `<Carousel>` — `src/components/Footer/Carousel.tsx`

Carrusel infinito horizontal con los logos de aliados. Renderizado justo arriba del footer.

- **Fuente de logos**: `src/data/constantes.ts` → export `logos`.
- **Animación**: CSS `animate-infinite-scroll` (definida en `tailwind.config.ts`).
- **Mask**: `[mask-image: linear-gradient(...)]` para fade en los bordes.
- **Fondo**: blanco (antes era `#EDA74C`, cambió para que no se lea como franja).

---

## `<ProgramPage>` — `src/components/cale/ProgramPage.tsx`

Container principal para listados de programas (maestrías, licenciaturas, camps). Maneja:

- Fetch paginado vía React Query (`useInfiniteQuery`).
- Estado de filtros (país, área, edad según caso).
- Render de `<ProgramCardsPorArea>` o `<ProgramCardsPorEdades>` según el modo.
- Prop `skipHero` si la página ya tiene su propio Hero arriba.

Props principales: `fetchUrl`, `filters`, `cardComponent`, `skipHero`.

---

## `<ProgramCardsPorArea>` — `src/components/cale/ProgramCardsPorArea.tsx`

Renderiza una lista de programas agrupados por área de estudio. Cada card muestra institución, programa, ubicación, fechas, duración, costo, link.

Uso: cuando el filtro activo NO es por edad (maestrías, licenciaturas).

---

## `<ProgramCardsPorEdades>` — `src/components/cale/ProgramCardsPorEdades.tsx`

Similar a la versión por área, pero agrupa por rango de edad. Usada en camps.

Formato de cada card: nombre, edades, fechas, duración, ciudad, tipo de alojamiento, costo en MXN, proveedor, notas.

---

## `<SummerCampCards>` — `src/components/cale/SummerCampCards.tsx`

Grid top-level para `/programs/camps` con filtrado por edad. Consume `src/data/summerCampsData.ts`.

---

## `<ServiceCard>` — `src/components/estudiantes/ServiceCard.tsx`

Card usada en `/estudiante` para cada servicio. Tiene:

- Título, descripción, precio.
- Border color dinámico (prop `borderColor`).
- Checkbox para seleccionarlo / deseleccionarlo (toggle).
- `isSelected` controla estado visual; `onToggle(id)` se llama al click.

---

## `<SummaryCard>` — `src/components/estudiantes/SummaryCard.tsx`

Card sticky que muestra el total acumulado de los servicios seleccionados en `/estudiante`.

Props: `selectedServices: Service[]`.

---

## `<InfoCard>` — `src/components/instituciones/InfoCard.tsx`

Card simple para listar servicios a instituciones en `/instituciones`. Props: `title`, `borderColor`.

---

## `<CardCTA>` — `src/components/Services/CardCTA.tsx`

Card con CTA para la página `/services`. Gradiente + icono + botón.

---

## `<Destinations>` — `src/components/Homepage/Destinations/Destinations.tsx`

Grid de países en el home. Consume `src/data/destinations.ts`. Solo en el home.

---

## `<Programs>` — `src/components/Homepage/Programs/Programs.tsx`

Grid de categorías en el home. Solo en el home.

---

## `<Stadistics>` + `<Questions>` — `src/components/Homepage/Stadistics/`

Sección con los números (15+ países, 300+ instituciones, 98% aceptación) + sección de preguntas frecuentes. Solo en el home.

La animación de números la hace un componente custom (se quitó `react-countup` por un crash SSR — ver commit `9ff1574`).

---

## `<MeetTeam>` — `src/components/Homepage/MeetTeam/MeetTeam.tsx`

Sección del equipo en el home con Paulina y Alejandra. Datos **hardcoded en el propio archivo** — ver [DATA.md § Equipo](./DATA.md#equipo-ts-hardcoded-en-componente).

---

## `<MissionVision>` — `src/components/Homepage/MissionVision/missionvision.tsx`

Misión/visión en el home.

---

## `<CTASection>` — `src/components/Homepage/CTA/CTASection.tsx`

CTA final del home con gradiente morado, patrón de puntos y botón a Calendly.

---

## `<Form>` (Contact) — `src/components/ContactUs/Form.tsx`

Formulario de `/contact`. Campos: nombre, email, teléfono, país origen, país destino, programa, cómo nos conociste.

- Envía a `StudentsRecordsService.create()`.
- Muestra toasts con `react-toastify`.
- Valida campos requeridos antes de enviar.

---

## Convenciones

- **Client components**: marca con `"use client";` arriba. Solo cuando necesites hooks (`useState`, `useEffect`) o interactividad.
- **Server components** por default — la mayoría de páginas pueden serlo.
- **Metadata**: exportar `metadata` desde el page (solo en server components). Si el page es `"use client"`, la metadata va comentada y no aplica — usar un layout por carpeta para metadata SSR.
- **Imports**: usa aliases `@app/*` y `@src/*`, no rutas relativas.
- **Estilos**: Tailwind inline. Clases largas están ok — evita crear CSS custom salvo animaciones.
