import {
  moveGoalChartData,
  moveGoalDefault,
  moveGoalMax,
  moveGoalMin,
  moveGoalStep,
  profileNameDefault,
  profileUsernameDefault,
} from '@/demos/drawer/drawer-demo.data'

export function createMoveGoalDrawerDemoData(initialOpen = false) {
  return {
    open: initialOpen,
    goal: moveGoalDefault,
    minGoal: moveGoalMin,
    maxGoal: moveGoalMax,
    step: moveGoalStep,
    chartData: moveGoalChartData.map((item) => ({ ...item })),

    openDrawer() {
      this.open = true
    },

    close() {
      this.open = false
    },

    decrease() {
      if (this.goal > this.minGoal) {
        this.goal -= this.step
      }
    },

    increase() {
      if (this.goal < this.maxGoal) {
        this.goal += this.step
      }
    },

    barHeight(value: number) {
      return `${(value / this.maxGoal) * 100}%`
    },
  }
}

export function createDrawerProfileDemoData(initialOpen = false) {
  return {
    open: initialOpen,
    name: profileNameDefault,
    username: profileUsernameDefault,

    openDrawer() {
      this.open = true
    },

    close() {
      this.open = false
    },
  }
}
