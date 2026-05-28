import type { Component } from 'vue'

export type LibraryCategory =
  | 'ui-examples'
  | 'brand-rules'
  | 'components'
  | 'form-rules'
  | 'code-locations'

/** Markup + styles (+ Vue SFC when the preview is a .vue file) */
export type CodeTab = 'html' | 'vue' | 'css'

/** How to install — depends on HTML vs Vue project */
export type UsageStack = 'html' | 'vue'

export interface LibraryUsage {
  html: string
  vue: string
}

export interface LibraryCode {
  html: string
  css: string
  /** Full .vue source — shown on the Vue tab when present */
  vue?: string
  usage: LibraryUsage
}

/** One version inside a menu item (e.g. Navbar 1, Navbar 2) */
export interface LibraryVariant {
  id: string
  label: string
  description?: string
  codeLocation?: string
  code: LibraryCode
  preview?: Component
  /** Static reference image under `public/screenshots/` (for docs / handoff) */
  screenshot?: string
  /** Link to this variant in Figma (opens in a new tab) */
  figmaUrl?: string
  /** `page` = full-width tall frame (dashboards, full layouts) */
  previewLayout?: 'compact' | 'page'
}

export interface LibraryEntry {
  id: string
  label: string
  icon: string
  section: string
  category: LibraryCategory
  title: string
  subtitle: string
  description: string
  tags: string[]
  codeLocation?: string
  /** Single-variant entry (omit when using variants) */
  code?: LibraryCode
  preview?: Component
  /** Static reference image under `public/screenshots/` */
  screenshot?: string
  /** Link to this component in Figma (opens in a new tab) */
  figmaUrl?: string
  previewLayout?: 'compact' | 'page'
  /** Multiple previews + code blocks under one sidebar item */
  variants?: LibraryVariant[]
  inCommandMenu?: boolean
  hideFromMenu?: boolean
}

export const categoryLabels: Record<LibraryCategory, string> = {
  'ui-examples': 'UI Examples',
  'brand-rules': 'Brand Rules',
  components: 'Components',
  'form-rules': 'Form Rules',
  'code-locations': 'Code Locations',
}
