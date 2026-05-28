import {
  accordionDemoSections,
  type AccordionDemoSection,
} from '@/demos/accordion-demo.data'

const CHEVRON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" :class="expanded('{{id}}') ? 'rotate-180' : ''"><path d="m6 9 6 6 6-6"></path></svg>`

const TRIGGER_CLASSES =
  'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50'

interface AccordionSection {
  id: string
  title: string
  content: string
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function sectionContentHtml(section: AccordionDemoSection): string {
  return section.paragraphs
    .map((text, index) => {
      const classAttr = index > 0 ? ' class="mt-2"' : ''
      return `        <p${classAttr}>${escapeHtml(text)}</p>`
    })
    .join('\n')
}

function demoSectionsToAccordionSections(
  sections: AccordionDemoSection[],
): AccordionSection[] {
  return sections.map((section) => ({
    id: section.value,
    title: section.title,
    content: sectionContentHtml(section),
  }))
}

function buildItem(section: AccordionSection): string {
  const chevron = CHEVRON_SVG.replaceAll('{{id}}', section.id)

  return `  <div data-slot="accordion-item" class="border-b last:border-b-0">
    <h3 class="flex">
      <button
        type="button"
        data-slot="accordion-trigger"
        class="${TRIGGER_CLASSES}"
        @click="toggle('${section.id}')"
        :aria-expanded="expanded('${section.id}')"
      >
        ${escapeHtml(section.title)}
        ${chevron}
      </button>
    </h3>
    <div
      x-show="expanded('${section.id}')"
      x-collapse.duration.200ms
      :data-state="expanded('${section.id}') ? 'open' : 'closed'"
      data-slot="accordion-content"
      class="alpine-accordion-content overflow-hidden text-sm"
    >
      <div class="pt-0 pb-4">
${section.content}
      </div>
    </div>
  </div>`
}

export function buildAccordionAlpineHtml(
  sections: AccordionSection[],
  options: { defaultOpen?: string; className?: string } = {},
): string {
  const defaultOpen = options.defaultOpen ?? sections[0]?.id ?? ''
  const className = options.className ?? 'w-full'
  const items = sections.map((s) => buildItem(s)).join('\n')

  return `<div
  x-data="accordionDemo"
  data-default-open="${defaultOpen}"
  data-slot="accordion"
  class="${className}"
>
${items}
</div>`
}

function findAccordionRoot(root: HTMLElement): HTMLElement | null {
  if (root.matches('[data-slot="accordion"]')) {
    return root
  }
  return root.querySelector<HTMLElement>('[data-slot="accordion"]')
}

/** Stable Alpine HTML from demo data (no DOM clicking). */
export function buildAccordionAlpineFromDemo(
  className = 'w-full',
): string {
  const sections = demoSectionsToAccordionSections(accordionDemoSections)
  return buildAccordionAlpineHtml(sections, {
    defaultOpen: 'item-1',
    className,
  })
}

/** Reads wrapper class from live preview; content always comes from demo data. */
export function extractAccordionToAlpine(root: HTMLElement): string {
  const accordion = findAccordionRoot(root)
  const className = accordion?.className.replace(/\s+/g, ' ').trim() || 'w-full'
  return buildAccordionAlpineFromDemo(className)
}
