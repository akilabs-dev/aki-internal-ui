import { describe, expect, it } from 'vitest'
import {
  buildAccordionAlpineFromDemo,
  extractAccordionToAlpine,
} from '@/lib/extractors/accordion-to-alpine'

describe('accordion alpine extraction', () => {
  it('includes all panels with alpine helpers', () => {
    const html = buildAccordionAlpineFromDemo()

    expect(html).toContain('x-data="accordionDemo"')
    expect(html).toContain('data-default-open="item-1"')
    expect(html).toContain('toggle(')
    expect(html).toContain('@click="toggle(\'item-1\')"')
    expect(html).toContain('x-show="expanded(\'item-1\')"')
    expect(html).toContain('Product Information')
    expect(html).toContain('Shipping Details')
    expect(html).toContain('Return Policy')
    expect(html).toContain('Key features include')
    expect(html).toContain('Track your shipment')
    expect(html).toContain('x-collapse.duration.200ms')
    expect(html).toContain('alpine-accordion-content')
    expect(html).not.toContain('reka-accordion')
  })

  it('reads accordion class from preview root', () => {
    const root = document.createElement('div')
    root.innerHTML =
      '<div data-slot="accordion" class="w-full custom-class"></div>'

    const html = extractAccordionToAlpine(root)
    expect(html).toContain('class="w-full custom-class"')
    expect(html).toContain('Return Policy')
  })
})
