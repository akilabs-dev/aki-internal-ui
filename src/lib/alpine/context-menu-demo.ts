import {
  contextMenuDefaults,
  type ContextMenuDemoState,
} from '@/demos/context-menu/context-menu-demo.data'

export function createContextMenuDemoData() {
  const defaults = contextMenuDefaults

  return {
    open: false,
    x: 0,
    y: 0,
    submenuOpen: false,
    /** Prevent @click.outside from immediately closing right after opening via click. */
    ignoreOutsideOnce: false,

    showBookmarks: defaults.showBookmarks,
    showFullUrls: defaults.showFullUrls,
    person: defaults.person as ContextMenuDemoState['person'],

    openAt(event: MouseEvent) {
      event.preventDefault()
      this.open = true
      this.submenuOpen = false
      this.x = event.clientX
      this.y = event.clientY
      this.ignoreOutsideOnce = true
      setTimeout(() => {
        this.ignoreOutsideOnce = false
      }, 0)
    },

    close() {
      this.open = false
      this.submenuOpen = false
    },

    toggleSubmenu(force?: boolean) {
      this.submenuOpen = typeof force === 'boolean' ? force : !this.submenuOpen
    },

    toggleCheckbox(key: 'showBookmarks' | 'showFullUrls') {
      this[key] = !this[key]
    },

    setPerson(value: ContextMenuDemoState['person']) {
      this.person = value
    },
  }
}
