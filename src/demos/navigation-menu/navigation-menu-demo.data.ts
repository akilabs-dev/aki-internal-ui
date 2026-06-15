/** Figma main frame — vertical stack */
export const navigationMenuFrameMaxWidthPx = 752

export const navigationMenuFrameClass =
  'mx-auto flex w-full flex-col rounded-3xl border border-[#E5E5E5] bg-white p-10 gap-y-6'

export function navigationMenuFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${navigationMenuFrameMaxWidthPx}px` }
}

export const navigationMenuSectionClass =
  'relative isolate flex w-full flex-col items-start overflow-visible [&_[data-slot=navigation-menu]]:flex-none [&_[data-slot=navigation-menu]]:self-start'

/** Horizontal rule between navigation menu examples (Figma) */
export const navigationMenuSeparatorClass = 'shrink-0 h-px w-full bg-[#E5E5E5]'

export const navigationMenuSeparatorHtml =
  `<div data-slot="separator" class="${navigationMenuSeparatorClass}" role="none"></div>`

/** Static closed-state preview — non-interactive so it cannot overlap the section below */
export const navigationMenuClosedPreviewClass = 'pointer-events-none select-none'

export type NavigationMenuComponentItem = {
  title: string
  href: string
  description: string
}

export const navigationMenuComponents: NavigationMenuComponentItem[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

export const navigationMenuHomeLinks = [
  {
    title: 'Introduction',
    href: '/docs',
    description: 'Re-usable components built using Radix UI and Tailwind CSS.',
  },
  {
    title: 'Installation',
    href: '/docs/installation',
    description: 'How to install dependencies and structure your app.',
  },
  {
    title: 'Typography',
    href: '/docs/primitives/typography',
    description: 'Styles for headings, paragraphs, lists...etc',
  },
] as const

export const navigationMenuListLinks = [
  {
    title: 'Components',
    description: 'Browse all components in the library.',
  },
  {
    title: 'Documentation',
    description: 'Learn how to use the library.',
  },
  {
    title: 'Blog',
    description: 'Read our latest blog posts.',
  },
] as const

export const navigationMenuSimpleLinks = ['Components', 'Documentation', 'Blocks'] as const

export const navigationMenuIconLinks = [
  { label: 'Backlog', icon: 'help' as const },
  { label: 'To Do', icon: 'circle' as const },
  { label: 'Done', icon: 'check' as const },
] as const

export type NavigationMenuKey = 'home' | 'components' | 'list' | 'simple' | 'withIcon'
