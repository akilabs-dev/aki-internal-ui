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
  { id: 'aspect-ratio', label: 'Aspect Ratio', disabled: true },
  { id: 'avatar', label: 'Avatar', disabled: true },
  { id: 'badge', label: 'Badge', disabled: true },
  { id: 'breadcrumb', label: 'Breadcrumb', disabled: true },
  { id: 'button', label: 'Button', disabled: true },
  { id: 'button-group', label: 'Button Group', disabled: true },
  { id: 'calendar', label: 'Calendar', disabled: true },
  { id: 'card', label: 'Card', disabled: true },
  { id: 'carousel', label: 'Carousel', disabled: true },
  { id: 'chart', label: 'Chart', disabled: true },
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
