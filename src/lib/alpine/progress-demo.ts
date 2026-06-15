import { progressDefaults } from '@/demos/progress/progress-demo.data'

export function createProgressDemoData() {
  return {
    progress: progressDefaults.initialValue as number,
    timer: null as ReturnType<typeof setTimeout> | null,

    init() {
      this.timer = setTimeout(() => {
        this.progress = progressDefaults.animatedValue
      }, progressDefaults.animationDelayMs)
    },

    destroy() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
  }
}
