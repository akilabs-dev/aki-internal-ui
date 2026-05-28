import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AccordionDemo from '@/demos/AccordionDemo.vue'

describe('accordion raw html', () => {
  it('prints rendered markup', async () => {
    const wrapper = mount(AccordionDemo)
    const html = wrapper.html()

    if (process.env.DUMP_HTML === '1') {
      await import('node:fs/promises').then((fs) =>
        fs.writeFile('scripts/accordion-output.html', html, 'utf8'),
      )
    }

    expect(html).toContain('Product Information')
    expect(html).toContain('data-slot="accordion"')
  })
})
