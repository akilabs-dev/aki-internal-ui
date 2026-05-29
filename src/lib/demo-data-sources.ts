/** Demo data file shown as an extra tab in the Vue code panel. */
export type DemoDataSource = {
  /** Tab label — typically the filename, e.g. alert-demo.data.ts */
  label: string
  code: string
}

/** Tab label shown in the code panel header */
export const DEMO_DATA_TAB_LABEL = 'Demo data'

export function demoDataTabId(label: string) {
  return `demo-data-${label.replace(/[^\w.-]+/g, '-').toLowerCase()}`
}
