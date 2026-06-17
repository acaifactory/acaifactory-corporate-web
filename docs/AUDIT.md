# Açaí Factory — Auditoría de Sistemas Existentes

**Fecha:** Junio 2026  
**Proyecto nuevo:** `acaifactory-corporate-web` (independiente)  
**Regla:** Ningún archivo de sistemas existentes fue modificado.

## Sistemas auditados (solo lectura)

| Sistema | Ruta | Rol |
|---------|------|-----|
| Inventario | `C:\Users\onixo\inventario-app` | Back-office, Prisma, PostgreSQL |
| Ordering + Rewards | `C:\Users\onixo\Documents\Codex\2026-05-27\te-voy-dar-unos-file-para` | Pedidos, rewards, admin |
| TV Menu | `C:\Users\onixo\Documents\Codex\2026-05-20\create-a-premium-digital-tv-menu` | Menú digital in-store |

## Datos reutilizados (exportación segura)

- **Menú:** 45 ítems exportados desde `app.js` → `src/data/menu.json` vía `scripts/sync-content.mjs`
- **Add-ons:** 8 extras incluidos en menu.json
- **Categorías:** 9 categorías de menú
- **Locations:** Bayamón, Corozal, Cataño — direcciones/teléfonos son **placeholders** hasta actualización
- **Logos:** Referenciados en OneDrive/Downloads; copiar manualmente a `public/brand/`
- **Fotos producto:** Referenciadas en menú como `/images/products/*.webp` — **no disponibles localmente**; se usan placeholders premium con gradientes de marca

## Paleta de marca

- Magenta: `#ec008c`, `#ff1493`
- Amarillo: `#ffcf00`, `#f5b700`
- Púrpura: `#6a1fb8`

## Comando de re-sincronización

```bash
node scripts/sync-content.mjs
```

Este script **solo lee** el ordering app. Nunca escribe fuera de `acaifactory-corporate-web`.
