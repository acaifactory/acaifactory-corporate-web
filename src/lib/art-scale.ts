/** Convert design inches to % of HQ artwork width/height (72 DPI reference). */
export function inchesToArtWidthPercent(
  inches: number,
  artWidthPx: number,
  dpi = 72
): number {
  return (inches / (artWidthPx / dpi)) * 100;
}

export function inchesToArtHeightPercent(
  inches: number,
  artHeightPx: number,
  dpi = 72
): number {
  return (inches / (artHeightPx / dpi)) * 100;
}
