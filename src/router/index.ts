import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { formatPageTitle, SITE_NAME } from '@/lib/site'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    eyebrow?: string
    /** Main heading when different from sidebar / document title */
    headline?: string
    description?: string
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/docs/introduction',
  },
  {
    path: '/docs',
    redirect: '/docs/introduction',
  },
  {
    path: '/docs/introduction',
    name: 'docs-introduction',
    component: () => import('@/pages/docs/IntroductionPage.vue'),
    meta: {
      title: 'Introduction',
      eyebrow: 'Docs',
      headline: 'Japanese Style — shadcn-vue samples',
      description:
        'Browse component examples, preview them live, and copy the sample code into your own Vue + Tailwind + shadcn-vue project.',
    },
  },
  {
    path: '/docs/installation',
    name: 'docs-installation',
    component: () => import('@/pages/docs/InstallationPage.vue'),
    meta: {
      title: 'Installation',
      eyebrow: 'Docs',
      headline: 'Install and run the playground',
      description: 'Use any package manager. Pick one tab and run the commands.',
    },
  },
  {
    path: '/docs/copy-guide',
    name: 'docs-copy-guide',
    component: () => import('@/pages/docs/CopyGuidePage.vue'),
    meta: {
      title: 'Usage in your project',
      eyebrow: 'Docs',
      headline: 'Copy the sample into your app',
      description:
        'Each component page is designed to be copy/paste-friendly. This guide explains what you typically need to move over.',
    },
  },
  {
    path: '/docs/styling',
    name: 'docs-styling',
    component: () => import('@/pages/docs/StylingPage.vue'),
    meta: {
      title: 'Styling',
      eyebrow: 'Docs',
      headline: 'Tailwind + shadcn tokens',
      description:
        'These samples assume a shadcn-style token system (CSS variables) and Tailwind configured to scan your component files.',
    },
  },
  {
    path: '/docs/theme-configuration',
    name: 'docs-theme-configuration',
    component: () => import('@/pages/docs/ThemeConfigurationPage.vue'),
    meta: {
      title: 'Theme configuration',
      eyebrow: 'Docs',
      description:
        'Copy CSS variable tokens for the selected theme style into your own project.',
    },
  },
  {
    path: '/docs/faq',
    name: 'docs-faq',
    component: () => import('@/pages/docs/FaqPage.vue'),
    meta: {
      title: 'FAQ',
      eyebrow: 'Docs',
      headline: 'Troubleshooting',
      description: 'Common issues when copying samples into your own project.',
    },
  },
  {
    path: '/docs/components',
    redirect: '/docs/components/accordion',
  },
  {
    path: '/docs/components/accordion',
    name: 'docs-components-accordion',
    component: () => import('@/pages/components/AccordionPage.vue'),
    meta: {
      title: 'Accordion',
      eyebrow: 'Components',
      description: 'Collapsible sections built with reka-ui and shadcn-vue.',
    },
  },
  {
    path: '/docs/components/alert',
    name: 'docs-components-alert',
    component: () => import('@/pages/components/AlertPage.vue'),
    meta: {
      title: 'Alert',
      eyebrow: 'Components',
      description: 'Displays important messages and statuses.',
    },
  },
  {
    path: '/docs/components/alert-dialog',
    name: 'docs-components-alert-dialog',
    component: () => import('@/pages/components/AlertDialogPage.vue'),
    meta: {
      title: 'Alert Dialog',
      eyebrow: 'Components',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.',
    },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta.title
  if (typeof title === 'string' && title.length > 0) {
    document.title = formatPageTitle(title, to.meta.eyebrow as string | undefined)
  } else {
    document.title = SITE_NAME
  }
})
