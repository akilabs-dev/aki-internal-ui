export type BreadcrumbEllipsisMenuItem = {
  label: string
  href?: string
}

export type BreadcrumbDemoSegment =
  | { type: 'link'; id: string; label: string; href: string }
  | { type: 'page'; id: string; label: string }
  | { type: 'ellipsis'; id: string; menuItems: BreadcrumbEllipsisMenuItem[] }

export const breadcrumbDemoSegments: BreadcrumbDemoSegment[] = [
  { type: 'link', id: 'home', label: 'Home', href: '/' },
  {
    type: 'ellipsis',
    id: 'more',
    menuItems: [
      { label: 'Documentation', href: '#' },
      { label: 'Themes', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  { type: 'link', id: 'components', label: 'Components', href: '/docs/components' },
  { type: 'page', id: 'current', label: 'Breadcrumb' },
]
