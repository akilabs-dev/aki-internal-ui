/**
 * Static reference screenshots live under `public/screenshots/`.
 * Convention: `{componentId}/{variantId}.png` or `{componentId}/preview.png` for single entries.
 */
export function defaultScreenshotPath(componentId: string, variantId?: string): string {
  if (variantId) return `/screenshots/${componentId}/${variantId}.png`
  return `/screenshots/${componentId}/preview.png`
}
