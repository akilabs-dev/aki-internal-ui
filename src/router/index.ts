import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/docs/components/accordion',
  },
  {
    path: '/docs',
    redirect: '/docs/components/accordion',
  },
  {
    path: '/docs/components',
    redirect: '/docs/components/accordion',
  },
  {
    path: '/docs/components/accordion',
    name: 'docs-components-accordion',
    component: () => import('@/pages/components/AccordionPage.vue'),
  },
  {
    path: '/docs/components/alert',
    name: 'docs-components-alert',
    component: () => import('@/pages/components/AlertPage.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

