export type BreadcrumbDemoLink = {
  id: string
  label: string
  href: string
}

export type BreadcrumbDemoPage = {
  id: string
  label: string
}

export type BreadcrumbDropdownMenuItem = {
  label: string
  href?: string
}

/** Simple breadcrumb: Home → Components (link) → current page */
export const breadcrumbDemoLinks: BreadcrumbDemoLink[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'components', label: 'Components', href: '/docs/components' },
]

export const breadcrumbDemoPage: BreadcrumbDemoPage = {
  id: 'current',
  label: 'Breadcrumb',
}

/** Dropdown breadcrumb: Home → Components (menu) → current page */
export const breadcrumbDropdownHome: BreadcrumbDemoLink = {
  id: 'home',
  label: 'Home',
  href: '/',
}

export const breadcrumbDropdownTriggerLabel = 'Components'

export const breadcrumbDropdownMenuItems: BreadcrumbDropdownMenuItem[] = [
  { label: 'Documentation' },
  { label: 'Themes' },
  { label: 'GitHub' },
]

export const breadcrumbDropdownPage: BreadcrumbDemoPage = breadcrumbDemoPage

/** Ellipsis breadcrumb: Home > … > Components > current page */
export const breadcrumbEllipsisHome: BreadcrumbDemoLink = {
  id: 'home',
  label: 'Home',
  href: '/',
}

export const breadcrumbEllipsisComponentsLink: BreadcrumbDemoLink = {
  id: 'components',
  label: 'Components',
  href: '/docs/components',
}

export const breadcrumbEllipsisMenuItems: BreadcrumbDropdownMenuItem[] =
  breadcrumbDropdownMenuItems

export const breadcrumbEllipsisPage: BreadcrumbDemoPage = breadcrumbDemoPage

/** Router / Nuxt breadcrumb: Home > Components > current page */
export const breadcrumbRouterLinks: BreadcrumbDemoLink[] = breadcrumbDemoLinks

export const breadcrumbRouterPage: BreadcrumbDemoPage = breadcrumbDemoPage

export type BreadcrumbResponsiveItem = {
  href?: string
  label: string
}

/** Collapsed breadcrumb: Home > … > Data Fetching > Caching and Revalidating */
export const breadcrumbResponsiveItems: BreadcrumbResponsiveItem[] = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'Documentation' },
  { href: '#', label: 'Building Your Application' },
  { href: '#', label: 'Data Fetching' },
  { label: 'Caching and Revalidating' },
]

export const breadcrumbResponsiveItemsToDisplay = 3
