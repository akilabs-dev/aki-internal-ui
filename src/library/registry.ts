import type { LibraryEntry } from './types'
import { akilabsBrand } from './brand'
import { brandColorsEntry } from './entries/brand-colors'
import { contactFormEntry } from './entries/contact-form'
import { heroSectionEntry } from './entries/hero-section/index'
import { navbarEntry } from './entries/navbar/index'
import { cardEntry } from './entries/card/index'
import { dashboardEntry } from './entries/dashboard/index'
import { errorPageEntry } from './entries/error-page/index'
import { aboutUsEntry } from './entries/about-us/index'
import { carouselEntry } from './entries/carousel/index'
import { skeletonEntry } from './entries/skeleton/index'
import { formEntry } from './entries/form/index'

export const libraryEntries: LibraryEntry[] = [
  navbarEntry,
  heroSectionEntry,
  dashboardEntry,
  cardEntry,
  errorPageEntry,
  contactFormEntry,
  formEntry,
  brandColorsEntry,
  aboutUsEntry,
  carouselEntry,
  skeletonEntry,
]

export function getEntryById(id: string): LibraryEntry | undefined {
  return libraryEntries.find((e) => e.id === id)
}

function toNavItem(entry: LibraryEntry) {
  return { id: entry.id, label: entry.label, icon: entry.icon }
}

export function getMenuEntries(): LibraryEntry[] {
  return libraryEntries.filter((e) => !e.hideFromMenu)
}

/** Quick-access items for Ctrl+K (must not be hideFromMenu) */
export function getCommandMenuItems(): { id: string; label: string; icon: string }[] {
  return getMenuEntries().filter((e) => e.inCommandMenu).map(toNavItem)
}

export function getNavSections(): { label: string; items: { id: string; label: string; icon: string }[] }[] {
  const sections: { label: string; items: { id: string; label: string; icon: string }[] }[] = []

  const commandItems = getCommandMenuItems()
  if (commandItems.length > 0) {
    sections.push({ label: 'Command', items: commandItems })
  }

  const sectionOrder: string[] = []
  const map = new Map<string, { id: string; label: string; icon: string }[]>()

  for (const entry of getMenuEntries()) {
    if (!map.has(entry.section)) {
      map.set(entry.section, [])
      sectionOrder.push(entry.section)
    }
    map.get(entry.section)!.push(toNavItem(entry))
  }

  for (const label of sectionOrder) {
    sections.push({ label, items: map.get(label)! })
  }

  return sections
}

export function getPageMeta(id: string): { title: string; subtitle: string } {
  const entry = getEntryById(id)
  if (!entry) {
    return { title: akilabsBrand.name, subtitle: akilabsBrand.tagline }
  }
  return { title: entry.title, subtitle: entry.subtitle }
}
