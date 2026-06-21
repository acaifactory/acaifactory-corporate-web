# AGENTS.md — Açaí Factory Corporate Web

Handoff para Codex (y cualquier agente). **Lee este archivo primero** antes de tocar el proyecto.

## Proyecto

| | |
|---|---|
| **Nombre** | Açaí Factory — sitio corporativo |
| **Ruta local** | `C:\Users\onixo\acaifactory-corporate-web` |
| **Repo** | https://github.com/acaifactory/acaifactory-corporate-web |
| **Producción** | https://acaifactory-corporate-web.vercel.app |
| **Stack** | Next.js 16, React 19, Tailwind CSS 4, TypeScript |

**No tocar:** ordering app, inventario-app, Stripe ni otros repos del cliente.

## Comandos

```powershell
Set-Location "C:\Users\onixo\acaifactory-corporate-web"
npm run dev
npm run build
npx vercel deploy --prod --yes
```

Los cambios **no están en producción** hasta deploy. Tras deploy: pedir al cliente **Ctrl+Shift+R**.

---

## Regla #1 — Tamaños por página y por elemento (CRÍTICO)

- Las instrucciones de tamaño son **locales**, no globales del proyecto.
- Cada botón y cada formulario es un caso aparte.
- Solo aplicar la spec que el cliente dé **para ese elemento en ese mensaje**.
- **No** arrastrar tamaños de otras páginas ni del historial del chat (390 px, 300 px, 7″, “no compactar”, etc.) salvo que el cliente lo repita para **ese** elemento.
- Si hay conflicto, gana la instrucción **más reciente y específica** del elemento nombrado.

---

## Regla #2 — Sistema “Art-Anchored” (páginas con PNG HQ)

Para catering, empleos y futuras páginas con arte de fondo:

1. **Una sola fuente de verdad:** `src/lib/<pagina>-assets.ts`
2. **Posición:** `formSlot` o `applyButtonSlot` en % del PNG (confirmado con cliente; no adivinar).
3. **Pulgadas → % del arte:** usar `src/lib/art-scale.ts`
   - `inchesToArtWidthPercent(inches, artWidthPx, dpi)`
   - `inchesToArtHeightPercent(inches, artHeightPx, dpi)`
4. **Componentes solo leen assets** — no duplicar Tailwind + CSS + inline para lo mismo.
5. **Referencia que funciona:** catering (ver abajo).

---

## Mapa de archivos importantes

### Global

| Archivo | Para qué |
|---------|----------|
| `src/lib/site.ts` | Nav oficial, rutas, config del sitio |
| `src/lib/pages.ts` | Metadatos de páginas |
| `src/app/layout.tsx` | Layout, header, footer |
| `src/app/globals.css` | Estilos globales + import careers CSS |
| `src/components/layout/SiteHeader.tsx` | Header oficial |

### Catering (patrón de referencia)

| Archivo | Para qué |
|---------|----------|
| `src/lib/catering-assets.ts` | Hero, `formSlot`, `formSpec` (pulgadas) |
| `src/lib/art-scale.ts` | Helper pulgadas → % del arte |
| `src/components/catering/CateringHero.tsx` | Imagen + slot absoluto |
| `src/components/catering/CateringInlineForm.tsx` | Formulario incrustado, grilla por pulgadas |
| `src/app/catering/page.tsx` | Página catering |
| `public/marketing/catering/catering-hero.png` | Arte HQ |

### Empleos / Careers (estado acordado con cliente)

| Archivo | Para qué |
|---------|----------|
| **`src/lib/careers-assets.ts`** | **ÚNICA config de tamaños y posición empleos** |
| `src/lib/art-scale.ts` | Conversión 4″×2″ etc. a % del póster |
| `src/components/careers/CareersHero.tsx` | Póster + botón en slot |
| `src/components/careers/CareersApplicationForm.tsx` | Modal al clic |
| `src/components/careers/careers-accessible.css` | Estilos modal (variables CSS) |
| `src/lib/careers-form.ts` | Validación / API payload |
| `src/app/api/careers/route.ts` | POST solicitudes empleo |
| `src/app/careers/page.tsx` | Página `/careers` |
| `public/marketing/careers/careers-hero.jpg` | Arte HQ **3072×2048** (horizontal) |

### Verificación en producción (empleos)

Inspeccionar DOM en `/careers`:

- Botón: `data-careers-ui="apply-art-anchored"`
- Modal: `data-careers-ui="form-art-anchored"`

Si no aparecen, el cliente no tiene el deploy actual.

---

## Spec actual empleos (`/careers`) — no cambiar sin instrucción del cliente

| Elemento | Spec |
|----------|------|
| Botón **Aplicar ahora** | 4″×2″, texto **14 pt** |
| Posición botón | Arriba-derecha del póster: `top: 2%`, `right: 2%` |
| Formulario | **Modal al clic** (no incrustado) |
| Modal | 4″×9″, texto **14 pt** |

Todo vive en `careers-assets.ts`. Editar solo ahí para cambiar medidas.

---

## Flujo para un cambio de tamaño

1. Confirmar: página, elemento exacto, medidas, posición (si aplica).
2. Editar solo el `*-assets.ts` de esa página.
3. Build + deploy.
4. Verificar URL de producción + atributos `data-careers-ui` o inspección DOM.
5. No propagar a otras páginas.

---

## Errores que NO repetir

- Mezclar specs contradictorias en el mismo elemento.
- Botón `position: fixed` en esquina del navegador (desconectado del póster).
- Hero empleos con dimensiones invertidas (correcto: **3072×2048**).
- Tres fuentes de verdad (Tailwind + CSS + inline) para el mismo control.
- Mover botones/formularios sin instrucción del cliente.
- Asumir que compilar = desplegado = visible para el cliente.

---

## Git y commits

- Hay cambios locales extensos; **`origin/master` puede no reflejar producción**.
- Deploy reciente: Vercel CLI desde disco local.
- **Solo commitear cuando el cliente lo pida explícitamente.**

---

## Rutas del sitio

`/`, `/menu`, `/offers`, `/rewards`, `/delivery`, `/locations`, `/catering`, `/franchise`, `/careers`, `/contact`, `/app`, `/account`, `/faq`, `/privacy-policy`, `/terms-and-conditions`, `/promotion-disclaimer`, `/about`

Redirects en `next.config.ts` (ej. `/franchises` → `/franchise`).
