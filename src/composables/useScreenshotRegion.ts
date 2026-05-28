import { ref, type Ref } from 'vue'

export type ScreenshotRect = {
  x: number
  y: number
  width: number
  height: number
}

const MIN_SIZE = 48

type Handle = 'move' | 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw'

function clampRect(rect: ScreenshotRect, maxW: number, maxH: number): ScreenshotRect {
  const width = Math.max(MIN_SIZE, Math.min(rect.width, maxW))
  const height = Math.max(MIN_SIZE, Math.min(rect.height, maxH))
  const x = Math.max(0, Math.min(rect.x, maxW - width))
  const y = Math.max(0, Math.min(rect.y, maxH - height))
  return { x, y, width, height }
}

type RegionDragCallbacks = {
  onDragStart?: () => void
  onDragEnd?: () => void
}

export function useScreenshotRegion(
  rect: Ref<ScreenshotRect>,
  bounds: Ref<{ width: number; height: number }>,
  callbacks?: RegionDragCallbacks,
) {
  const activeHandle = ref<Handle | null>(null)

  let drag: {
    handle: Handle
    startX: number
    startY: number
    startRect: ScreenshotRect
  } | null = null
  let dragMoved = false

  const MOVE_THRESHOLD_PX = 4

  function onPointerDown(handle: Handle, e: PointerEvent) {
    e.preventDefault()
    e.stopPropagation()
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)

    dragMoved = false
    callbacks?.onDragStart?.()
    activeHandle.value = handle
    drag = {
      handle,
      startX: e.clientX,
      startY: e.clientY,
      startRect: { ...rect.value },
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerUp)
    window.addEventListener('lostpointercapture', onPointerUp)
  }

  function onPointerMove(e: PointerEvent) {
    if (!drag) return

    const dx = e.clientX - drag.startX
    const dy = e.clientY - drag.startY
    if (Math.abs(dx) > MOVE_THRESHOLD_PX || Math.abs(dy) > MOVE_THRESHOLD_PX) {
      dragMoved = true
    }
    const { width: maxW, height: maxH } = bounds.value
    let next = { ...drag.startRect }

    switch (drag.handle) {
      case 'move':
        next.x += dx
        next.y += dy
        break
      case 'e':
        next.width += dx
        break
      case 'w':
        next.x += dx
        next.width -= dx
        break
      case 's':
        next.height += dy
        break
      case 'n':
        next.y += dy
        next.height -= dy
        break
      case 'se':
        next.width += dx
        next.height += dy
        break
      case 'sw':
        next.x += dx
        next.width -= dx
        next.height += dy
        break
      case 'ne':
        next.y += dy
        next.width += dx
        next.height -= dy
        break
      case 'nw':
        next.x += dx
        next.y += dy
        next.width -= dx
        next.height -= dy
        break
    }

    rect.value = clampRect(next, maxW, maxH)
  }

  function removePointerListeners() {
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
    window.removeEventListener('pointercancel', onPointerUp)
    window.removeEventListener('lostpointercapture', onPointerUp)
  }

  function onPointerUp() {
    const wasDragging = drag !== null
    const moved = dragMoved
    drag = null
    activeHandle.value = null
    removePointerListeners()
    dragMoved = false
    if (wasDragging && moved) callbacks?.onDragEnd?.()
  }

  return { activeHandle, onPointerDown }
}
