import { toCanvas } from 'html-to-image'
import { ref } from 'vue'
import type { ScreenshotRect } from './useScreenshotRegion'

export function screenshotDownloadFilename(entryId: string): string {
  return `${entryId.replace(/--/g, '-')}.png`
}

export type CaptureScreenshotOptions = {
  pixelRatio?: number
}

function downloadDataUrl(dataUrl: string, filename: string) {
  const link = document.createElement('a')
  link.download = filename
  link.href = dataUrl
  link.click()
}

/** Crop selection (stage coords) from a captured element inside the same stage. */
export async function captureRegionAndDownload(
  element: HTMLElement,
  stage: HTMLElement,
  region: ScreenshotRect,
  filename: string,
  options: CaptureScreenshotOptions = {},
) {
  const pixelRatio = options.pixelRatio ?? 2
  const canvas = await toCanvas(element, {
    cacheBust: true,
    pixelRatio,
    backgroundColor: '#f1f5f9',
  })

  const elementRect = element.getBoundingClientRect()
  const stageRect = stage.getBoundingClientRect()
  const offsetX = elementRect.left - stageRect.left + stage.scrollLeft
  const offsetY = elementRect.top - stageRect.top + stage.scrollTop

  let sx = Math.round((region.x - offsetX) * pixelRatio)
  let sy = Math.round((region.y - offsetY) * pixelRatio)
  let sw = Math.round(region.width * pixelRatio)
  let sh = Math.round(region.height * pixelRatio)

  sx = Math.max(0, Math.min(sx, canvas.width - 1))
  sy = Math.max(0, Math.min(sy, canvas.height - 1))
  sw = Math.max(1, Math.min(sw, canvas.width - sx))
  sh = Math.max(1, Math.min(sh, canvas.height - sy))

  const cropped = document.createElement('canvas')
  cropped.width = sw
  cropped.height = sh
  const ctx = cropped.getContext('2d')
  if (!ctx) throw new Error('Could not create canvas')

  ctx.drawImage(canvas, sx, sy, sw, sh, 0, 0, sw, sh)
  downloadDataUrl(cropped.toDataURL('image/png'), filename)
}

export function useCaptureScreenshot() {
  const capturing = ref(false)
  const error = ref<string | null>(null)

  async function captureRegion(
    element: HTMLElement,
    stage: HTMLElement,
    region: ScreenshotRect,
    filename: string,
    options?: CaptureScreenshotOptions,
  ) {
    capturing.value = true
    error.value = null
    try {
      await captureRegionAndDownload(element, stage, region, filename, options)
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Could not capture screenshot'
      throw e
    } finally {
      capturing.value = false
    }
  }

  return { capturing, error, captureRegion }
}
