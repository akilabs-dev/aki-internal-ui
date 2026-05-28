import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

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
    meta: { title: 'Introduction', eyebrow: 'Docs' },
  },
  {
    path: '/docs/installation',
    name: 'docs-installation',
    component: () => import('@/pages/docs/InstallationPage.vue'),
    meta: { title: 'Installation', eyebrow: 'Docs' },
  },
  {
    path: '/docs/copy-guide',
    name: 'docs-copy-guide',
    component: () => import('@/pages/docs/CopyGuidePage.vue'),
    meta: { title: 'Usage in your project', eyebrow: 'Docs' },
  },
  {
    path: '/docs/styling',
    name: 'docs-styling',
    component: () => import('@/pages/docs/StylingPage.vue'),
    meta: { title: 'Styling', eyebrow: 'Docs' },
  },
  {
    path: '/docs/theme-configuration',
    name: 'docs-theme-configuration',
    component: () => import('@/pages/docs/ThemeConfigurationPage.vue'),
    meta: { title: 'Theme configuration', eyebrow: 'Docs' },
  },
  {
    path: '/docs/faq',
    name: 'docs-faq',
    component: () => import('@/pages/docs/FaqPage.vue'),
    meta: { title: 'FAQ', eyebrow: 'Docs' },
  },
  {
    path: '/docs/components',
    redirect: '/docs/components/accordion',
  },
  {
    path: '/docs/components/accordion',
    name: 'docs-components-accordion',
    component: () => import('@/pages/components/AccordionPage.vue'),
    meta: { title: 'Accordion', eyebrow: 'Components' },
  },
  {
    path: '/docs/components/alert',
    name: 'docs-components-alert',
    component: () => import('@/pages/components/AlertPage.vue'),
    meta: { title: 'Alert', eyebrow: 'Components' },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

