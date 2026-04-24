# Manual de Usuario — Staff de The Gate

Guía para quien administra contenido del sitio **sin necesidad de programar**. Si eres developer, ve a [ARQUITECTURA.md](./ARQUITECTURA.md).

---

## Índice

1. [Qué puedes editar tú directamente](#qué-puedes-editar-tú-directamente)
2. [Editar el catálogo de maestrías (Google Sheet)](#editar-el-catálogo-de-maestrías-google-sheet)
3. [Pedir cambios al equipo de desarrollo](#pedir-cambios-al-equipo-de-desarrollo)
4. [Revisar que el sitio funcione bien](#revisar-que-el-sitio-funcione-bien)
5. [Formulario de contacto: dónde llegan los mensajes](#formulario-de-contacto-dónde-llegan-los-mensajes)
6. [Preguntas frecuentes](#preguntas-frecuentes)

---

## Qué puedes editar tú directamente

Hoy puedes modificar **sin ayuda de un developer**:

| Qué | Dónde | Se refleja en el sitio en... |
|-----|-------|-----------------------------|
| Catálogo de maestrías (países, programas, precios, duración, link) | Google Sheet compartido | ~1 minuto (caché del servidor) |

**Todo lo demás** (textos del hero, miembros del equipo, destinos, precios de servicios, noticias, logos de aliados) **requiere pedírselo al developer**. Esa lista puede crecer — ve [Candidatos para migrar a Sheets](./DATA.md#candidatos-para-migrar-a-sheets) para saber qué se podría hacer auto-editable en el futuro.

---

## Editar el catálogo de maestrías (Google Sheet)

Esta es la única parte del sitio que puedes cambiar tú sin tocar código. El sitio lee directamente el Google Sheet cada vez que alguien visita `/programs/masters`.

### 1. Abrir el Sheet

El Sheet está enlazado al Apps Script que consume el sitio. Pídele al owner del proyecto (Paulina o el developer principal) que te comparta acceso de **edición** al spreadsheet de "Listado Masters".

### 2. Estructura de columnas

El Sheet **debe** tener exactamente estas columnas, en este orden, en la fila 1:

| Columna | Ejemplo | Notas |
|---------|---------|-------|
| `pais` | `Australia` | Nombre del país, primera letra en mayúscula |
| `institucion` | `University of Sydney` | Nombre oficial de la institución |
| `area` | `Business` | Área de estudio (Business, Engineering, Health, Arts, Sciences, etc.) |
| `programa` | `Master of Business Administration` | Nombre del programa en el idioma original |
| `ubicacion` | `Sydney, NSW` | Ciudad / estado |
| `fechas` | `Feb / Jul` | Meses de inicio. Usa `/` para separar |
| `duracion` | `1 año` o `18 meses` | Duración total |
| `costo` | `48000` | Solo el número, sin símbolos. Si no hay info, deja vacío |
| `moneda` | `AUD` | Código ISO de 3 letras (USD, GBP, EUR, AUD, CAD...) |
| `link` | `https://www.sydney.edu.au/...` | URL directa al programa en el sitio de la institución |

> **No cambies los nombres de las columnas.** Si los cambias, el sitio deja de leer los datos.

### 3. Agregar una maestría nueva

1. Ve a la última fila con contenido.
2. Agrega una nueva fila con todos los datos. No dejes filas vacías en medio (el parser se puede confundir).
3. Guarda — Google Sheets guarda automático.
4. Espera ~1 minuto y refresca `/programs/masters` en el sitio. Deberías ver el nuevo programa.

### 4. Modificar un programa existente

1. Encuentra la fila del programa (puedes usar `Ctrl+F` en Google Sheets).
2. Edita las celdas que necesites.
3. Espera ~1 minuto, refresca `/programs/masters`.

### 5. Eliminar un programa

1. Selecciona la fila completa.
2. Clic derecho → "Eliminar fila".
3. **No dejes la fila vacía** — borra la fila entera, no solo el contenido.

### 6. Si algo se rompe

Si después de tus cambios la página `/programs/masters` muestra menos programas o un error:

- Revisa que los **nombres de las columnas** en la fila 1 no hayan cambiado.
- Revisa que no haya **filas vacías entre datos**.
- Revisa que la columna `costo` tenga solo números (sin comas, sin `$`, sin texto).
- Si todo se ve bien pero sigue fallando, el sitio automáticamente usa una copia de respaldo (CSV) que el developer mantiene — contáctalo para que actualice el respaldo o investigue.

---

## Pedir cambios al equipo de desarrollo

Para cualquier cosa que no sea el Sheet de maestrías, escribe un mensaje claro al developer. Un buen ticket lleva:

1. **Qué quieres cambiar**: ej. "El precio del servicio 'Revisión de CV' en la página /estudiante".
2. **Valor actual**: ej. "$5 USD".
3. **Valor nuevo**: ej. "$8 USD".
4. **Ejemplo / referencia** si aplica: screenshot del lugar, link al documento de marca, etc.

**Ejemplos de cambios comunes que requieren developer:**

- Cambiar un miembro del equipo (foto, nombre, cargo, LinkedIn).
- Modificar el texto principal del home ("Donde hay una puerta abierta...").
- Agregar o quitar un país de la página de destinos.
- Cambiar el precio de un servicio en `/estudiante`.
- Actualizar un logo de aliado en el carrusel.
- Agregar una noticia o actualización.
- Cambiar el link de Calendly (actualmente `calendly.com/thegateeducation/30min`).

**Tiempo esperado**: un cambio de texto/precio típico toma menos de 1 día. Un cambio grande (rediseño de sección) puede tomar una semana.

---

## Revisar que el sitio funcione bien

Cada vez que el developer suba un cambio importante, revisa:

### Checklist rápido (5 min)

1. Abre [the-gate-main-page.vercel.app](https://the-gate-main-page.vercel.app) (o el dominio actual de producción).
2. Verifica el **home**: se ve el hero con el texto correcto, los países flotantes, los CTAs funcionan (click en "Explorar Programas" → te lleva a `/programs`).
3. Verifica **`/programs/masters`**: se ven maestrías, puedes filtrar por país/área, los links de "Ver programa" abren la página de la institución.
4. Verifica el **footer**: aparece el **badge de ICEF** (QR verde/azul abajo a la derecha). Si no aparece, avisa al dev — es tema técnico del script externo.
5. Llena y envía el **formulario de contacto** con datos de prueba. Debe salir un toast verde de "Mensaje enviado".
6. Revisa en **móvil** (o en DevTools con `F12` → modo móvil): el navbar se convierte en menú hamburguesa, las cards se apilan bien.

### Cosas que son **normales** y no hace falta reportar

- La primera vez que cargas una página grande (maestrías), tarda un par de segundos — es Next.js cargando la data.
- El carrusel de aliados se detiene si pasas el mouse encima.

### Cosas que **sí** hace falta reportar

- Texto cortado o tapado por otro elemento.
- Imágenes rotas (aparece un ícono gris).
- Links que dan error 404.
- El formulario de contacto no responde al enviar.
- El badge de ICEF del footer no aparece en alguna página.

---

## Formulario de contacto: dónde llegan los mensajes

El formulario de `/contact` envía los datos a un servicio externo (AWS Lambda). No llegan a un correo directo — se guardan en una base de datos que revisa el equipo de desarrollo / admin.

**Para recibir notificaciones por correo** de nuevos contactos, pídeselo al developer — requiere configurar un webhook adicional.

**Campos que captura el formulario**:
- Nombre, email, teléfono
- País de origen / país de destino
- Programa de interés (maestría, licenciatura, camp, etc.)
- Cómo nos conociste

---

## Preguntas frecuentes

### ¿Puedo tener acceso al código?

No necesitas. El acceso al Google Sheet es suficiente para el 99% de tus tareas de contenido. El resto pásaselo al developer.

### ¿Qué hago si el sitio está caído?

Revisa en orden:
1. ¿Tienes internet? (Suena obvio, pasa seguido).
2. ¿Está caído solo para ti o también para otros? Pregunta a un compañero.
3. Si está caído para todos, escríbele al developer — probablemente es un issue de Vercel o del DNS.

### ¿Puedo agregar una página nueva sola?

No — agregar una página nueva requiere código. Pide al developer.

### ¿Quién actualiza el badge de ICEF?

El badge se renueva automático desde el servidor de ICEF. **No requiere mantenimiento**. Si desaparece o expira, contacta al developer — puede ser que la membresía de ICEF haya vencido y hay que renovarla con ICEF directamente.

### ¿Dónde están guardadas las imágenes?

En un bucket de AWS S3 (`images-bucket-landing-page`). Para subir una imagen nueva necesitas al developer. Cuando entregues imágenes:

- Formato: **JPG** para fotos, **PNG** con fondo transparente para logos.
- Tamaño máximo recomendado: **500 KB** por imagen.
- Dimensiones: dile al dev qué sección es y él/ella ajusta.

### ¿Con quién contacto para presupuesto o cambios grandes?

Con el owner del proyecto (Paulina Valdés / Alejandra Hernández), no con el developer directo.
