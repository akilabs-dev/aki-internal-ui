import {
  dialogProfileNameDefault,
  dialogProfileUsernameDefault,
  dialogShareLink,
} from '@/demos/dialog/dialog-demo.data'

export function createDialogProfileDemoData(initialOpen = false) {
  return {
    open: initialOpen,
    name: dialogProfileNameDefault,
    username: dialogProfileUsernameDefault,

    openDialog() {
      this.open = true
    },

    close() {
      this.open = false
    },
  }
}

export function createDialogShareDemoData(initialOpen = false) {
  return {
    open: initialOpen,
    link: dialogShareLink,

    openDialog() {
      this.open = true
    },

    close() {
      this.open = false
    },
  }
}
