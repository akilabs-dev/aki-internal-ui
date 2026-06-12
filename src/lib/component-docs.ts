/** Component catalog — single source of truth (matches left sidebar order). */
export type ComponentCatalogEntry = {
  id: string
  label: string
  path?: string
  disabled?: boolean
}

export const componentCatalog: ComponentCatalogEntry[] = [
  { id: 'accordion', label: 'Accordion', path: '/docs/components/accordion' },
  { id: 'alert', label: 'Alert', path: '/docs/components/alert' },
  { id: 'alert-dialog', label: 'Alert Dialog', path: '/docs/components/alert-dialog' },
  { id: 'aspect-ratio', label: 'Aspect Ratio', path: '/docs/components/aspect-ratio' },
  { id: 'avatar', label: 'Avatar', path: '/docs/components/avatar' },
  { id: 'badge', label: 'Badge', path: '/docs/components/badge' },
  { id: 'breadcrumb', label: 'Breadcrumb', path: '/docs/components/breadcrumb' },
  { id: 'button', label: 'Button', path: '/docs/components/button' },
  { id: 'button-group', label: 'Button Group', path: '/docs/components/button-group' },
  { id: 'calendar', label: 'Calendar', path: '/docs/components/calendar' },
  { id: 'card', label: 'Card', path: '/docs/components/card' },
  { id: 'carousel', label: 'Carousel', path: '/docs/components/carousel' },
  { id: 'checkbox', label: 'Checkbox', path: '/docs/components/checkbox' },
  { id: 'collapsible', label: 'Collapsible', path: '/docs/components/collapsible' },
  { id: 'combobox', label: 'Combobox', path: '/docs/components/combobox' },
  { id: 'command', label: 'Command', path: '/docs/components/command' },
  { id: 'context-menu', label: 'Context Menu', path: '/docs/components/context-menu' },
  { id: 'data-table', label: 'Data Table', path: '/docs/components/data-table' },
  { id: 'date-picker', label: 'Date Picker', disabled: true },
  { id: 'dialog', label: 'Dialog', path: '/docs/components/dialog' },
  { id: 'drawer', label: 'Drawer', path: '/docs/components/drawer' },
  { id: 'dropdown-menu', label: 'Dropdown Menu', path: '/docs/components/dropdown-menu' },
  { id: 'empty', label: 'Empty', path: '/docs/components/empty' },
  { id: 'field', label: 'Field', path: '/docs/components/field' },
  { id: 'hover-card', label: 'Hover Card', disabled: true },
  { id: 'input', label: 'Input', disabled: true }, // path: '/docs/components/input'
  { id: 'input-group', label: 'Input Group', disabled: true },
  { id: 'kbd', label: 'Kbd', disabled: true },
  { id: 'label', label: 'Label', disabled: true }, // path: '/docs/components/label'
  { id: 'link', label: 'Link', disabled: true }, // path: '/docs/components/link'
  { id: 'listbox', label: 'Listbox', disabled: true },
  { id: 'menubar', label: 'Menubar', disabled: true },
  { id: 'navigation-menu', label: 'Navigation Menu', disabled: true },
  { id: 'number-input', label: 'Number Input', disabled: true },
  { id: 'pagination', label: 'Pagination', disabled: true },
  { id: 'popover', label: 'Popover', disabled: true }, // path: '/docs/components/popover'
  { id: 'progress', label: 'Progress', disabled: true },
  { id: 'radio-group', label: 'Radio Group', disabled: true },
  { id: 'scroll-area', label: 'Scroll Area', disabled: true },
  { id: 'select', label: 'Select', disabled: true }, // path: '/docs/components/select'
  { id: 'separator', label: 'Separator',disabled: true }, //  path: '/docs/components/separator'
  { id: 'sheet', label: 'Sheet', disabled: true },
  { id: 'sidebar', label: 'Sidebar', disabled: true },
  { id: 'slider', label: 'Slider', disabled: true },
  { id: 'sonner', label: 'Sonner', disabled: true },
  { id: 'spinner', label: 'Spinner', disabled: true },
  { id: 'switch', label: 'Switch', disabled: true },
  { id: 'tabs', label: 'Tabs', disabled: true },
  { id: 'textarea', label: 'Textarea', disabled: true }, //path: '/docs/components/textarea'
  { id: 'toast', label: 'Toast', disabled: true },
  { id: 'toggle', label: 'Toggle', disabled: true },
  { id: 'toggle-group', label: 'Toggle Group', disabled: true },
  { id: 'tooltip', label: 'Tooltip', disabled: true }, //path: '/docs/components/tooltip'
]

export type NavigableComponent = ComponentCatalogEntry & { path: string }

function isNavigable(entry: ComponentCatalogEntry): entry is NavigableComponent {
  return !entry.disabled && typeof entry.path === 'string'
}

export function componentCatalogSidebarItems() {
  return componentCatalog.map(({ id, label, disabled }) => ({
    id,
    label,
    disabled,
  }))
}

export function getComponentPath(id: string): string | undefined {
  return componentCatalog.find((entry) => entry.id === id)?.path
}

/** Resolve current component from route; longest path wins (alert vs alert-dialog). */
export function resolveComponentIdFromPath(path: string): string | null {
  const navigable = componentCatalog.filter(isNavigable)
  const sorted = [...navigable].sort((a, b) => b.path.length - a.path.length)

  for (const item of sorted) {
    if (path === item.path || path.startsWith(`${item.path}/`)) {
      return item.id
    }
  }

  return null
}

/** Previous/next documented components in sidebar order (skips disabled entries). */
export function getComponentDocNeighbors(path: string) {
  const currentId = resolveComponentIdFromPath(path)
  if (!currentId) {
    return { prev: null as NavigableComponent | null, next: null as NavigableComponent | null }
  }

  const currentIndex = componentCatalog.findIndex((entry) => entry.id === currentId)
  if (currentIndex === -1) {
    return { prev: null, next: null }
  }

  let prev: NavigableComponent | null = null
  for (let i = currentIndex - 1; i >= 0; i--) {
    const entry = componentCatalog[i]!
    if (isNavigable(entry)) {
      prev = entry
      break
    }
  }

  let next: NavigableComponent | null = null
  for (let i = currentIndex + 1; i < componentCatalog.length; i++) {
    const entry = componentCatalog[i]!
    if (isNavigable(entry)) {
      next = entry
      break
    }
  }

  return { prev, next }
}
