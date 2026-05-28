import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { buildAccordionAlpineFromDemo } from '@/lib/extractors/accordion-to-alpine'
import {
  destroyAlpineOnElement,
  ensureAlpine,
  initAlpineOnElement,
} from '@/lib/alpine/init-alpine'

type AlpineRoot = HTMLElement & {
  _x_dataStack?: Array<{ open: string | null }>
}

describe('alpine html preview mount', () => {
  let host: HTMLDivElement

  beforeEach(() => {
    ensureAlpine()
    host = document.createElement('div')
    document.body.appendChild(host)
  })

  afterEach(() => {
    destroyAlpineOnElement(host)
    host.remove()
  })

  it('initializes alpine and toggles accordion panels', async () => {
    host.innerHTML = buildAccordionAlpineFromDemo()
    initAlpineOnElement(host)

    const root = host.querySelector('[data-slot="accordion"]') as AlpineRoot
    expect(root?._x_dataStack?.length).toBeGreaterThan(0)
    expect(root?._x_dataStack?.[0]?.open).toBe('item-1')

    const triggers = host.querySelectorAll<HTMLButtonElement>(
      '[data-slot="accordion-trigger"]',
    )
    expect(triggers[0]?.getAttribute('aria-expanded')).toBe('true')
    expect(triggers[1]?.getAttribute('aria-expanded')).toBe('false')

    triggers[1]?.click()
    await new Promise((r) => setTimeout(r, 0))

    expect(root?._x_dataStack?.[0]?.open).toBe('item-2')
    expect(triggers[0]?.getAttribute('aria-expanded')).toBe('false')
    expect(triggers[1]?.getAttribute('aria-expanded')).toBe('true')
  })
})
