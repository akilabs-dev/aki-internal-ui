import { createCalendarDemoData } from '@/lib/alpine/calendar-demo'
import { createBreadcrumbDropdownDemoData } from '@/lib/alpine/breadcrumb-dropdown-demo'
import { createBreadcrumbEllipsisDemoData } from '@/lib/alpine/breadcrumb-ellipsis-demo'
import { createBreadcrumbResponsiveDemoData } from '@/lib/alpine/breadcrumb-responsive-demo'
import { createButtonGroupDemoData } from '@/lib/alpine/button-group-demo'
import { createButtonGroupMessageDemoData } from '@/lib/alpine/button-group-message-demo'
import { createButtonGroupPopoverDemoData } from '@/lib/alpine/button-group-popover-demo'
import { createCarouselDemoData } from '@/lib/alpine/carousel-demo'
import { createCheckboxDemoData } from '@/lib/alpine/checkbox-demo'
import { createCollapsibleDemoData } from '@/lib/alpine/collapsible-demo'
import {
  createComboboxDemoData,
  createStatusComboboxDemoData,
  createComboboxTaskDemoData,
  createStatusSearchPanelDemoData,
} from '@/lib/alpine/combobox-demo'
import { createCommandDemoData } from '@/lib/alpine/command-demo'
import { createContextMenuDemoData } from '@/lib/alpine/context-menu-demo'
import { createDataTableDemoData } from '@/lib/alpine/data-table-demo'
import {
  createDialogProfileDemoData,
  createDialogShareDemoData,
} from '@/lib/alpine/dialog-demo'
import {
  createDrawerProfileDemoData,
  createMoveGoalDrawerDemoData,
} from '@/lib/alpine/drawer-demo'
import {
  createDropdownMenuAccountDemoData,
  createDropdownMenuAppearanceDemoData,
  createDropdownMenuPositionDemoData,
} from '@/lib/alpine/dropdown-menu-demo'
import { createFieldDemoData } from '@/lib/alpine/field-demo'
import { createHoverCardDemoData } from '@/lib/alpine/hover-card-demo'
import { createInputDemoData } from '@/lib/alpine/input-demo'
import { createInputGroupDemoData } from '@/lib/alpine/input-group-demo'
import {
  createInputOtpAlphanumericPreviewFieldData,
  createInputOtpFieldData,
  createInputOtpFormDemoData,
  createInputOtpFormPreviewDemoData,
  createInputOtpHelperDemoData,
  createInputOtpHelperPreviewDemoData,
  createInputOtpPreviewFieldData,
} from '@/lib/alpine/input-otp-demo'
import {
  createItemActionsDemoData,
  createItemSelectDemoData,
} from '@/lib/alpine/item-demo'
import { createKbdTooltipDemoData } from '@/lib/alpine/kbd-demo'
import { createLabelDemoData } from '@/lib/alpine/label-demo'
import { createMenubarDemoData } from '@/lib/alpine/menubar-demo'
import { createNativeSelectDemoData } from '@/lib/alpine/native-select-demo'
import { createNavigationMenuDemoData } from '@/lib/alpine/navigation-menu-demo'
import { createPaginationDemoData } from '@/lib/alpine/pagination-demo'
import { createPopoverDemoData } from '@/lib/alpine/popover-demo'
import collapse from '@alpinejs/collapse'
import Alpine from 'alpinejs'

let started = false

export function registerAlpineData() {
  Alpine.data('alertDialogDemo', () => ({
    open: false,

    openDialog() {
      this.open = true
    },

    close() {
      this.open = false
    },
  }))

  Alpine.data('accordionDemo', () => ({
    open: 'item-1' as string | null,

    init() {
      const defaultOpen = ((this as any).$root as HTMLElement | undefined)?.dataset
        ?.defaultOpen
      if (defaultOpen) {
        this.open = defaultOpen
      }
    },

    toggle(id: string) {
      this.open = this.open === id ? null : id
    },

    expanded(id: string) {
      return this.open === id
    },
  }))

  Alpine.data('calendarDemo', createCalendarDemoData)
  Alpine.data('buttonGroupDemo', () => createButtonGroupDemoData('bottom'))
  Alpine.data('buttonGroupDemoTop', () => createButtonGroupDemoData('top'))
  Alpine.data('buttonGroupMessageDemo', createButtonGroupMessageDemoData)
  Alpine.data('buttonGroupPopoverDemo', createButtonGroupPopoverDemoData)
  Alpine.data('breadcrumbDropdownDemo', createBreadcrumbDropdownDemoData)
  Alpine.data('breadcrumbEllipsisDemo', createBreadcrumbEllipsisDemoData)
  Alpine.data('breadcrumbResponsiveDemo', createBreadcrumbResponsiveDemoData)
  Alpine.data('carouselDemo', createCarouselDemoData)
  Alpine.data('checkboxDemo', createCheckboxDemoData)
  Alpine.data('collapsibleDemoClosed', () => createCollapsibleDemoData(false))
  Alpine.data('collapsibleDemoOpen', () => createCollapsibleDemoData(true))
  Alpine.data('comboboxDemoClosed', () => createComboboxDemoData(false))
  Alpine.data('comboboxDemoOpen', () => createComboboxDemoData(true, 'next.js'))
  Alpine.data('comboboxStatusClosed', () => createStatusComboboxDemoData(false))
  Alpine.data('comboboxStatusClosed2', () => createStatusComboboxDemoData(false))
  Alpine.data('comboboxStatusOpen', createStatusSearchPanelDemoData)
  Alpine.data('comboboxStatusBtnClosed', () => createStatusComboboxDemoData(false))
  Alpine.data('comboboxStatusBtnOpen', () => createStatusComboboxDemoData(false))
  Alpine.data('comboboxTaskClosed', () => createComboboxTaskDemoData(false))
  Alpine.data('comboboxTaskOpen', () => createComboboxTaskDemoData(false))
  Alpine.data('commandDemo', createCommandDemoData)
  Alpine.data('contextMenuDemoClosed', createContextMenuDemoData)
  Alpine.data('contextMenuDemoClosed2', createContextMenuDemoData)
  Alpine.data('dataTableDemo', createDataTableDemoData)
  Alpine.data('dialogProfileDemo', () => createDialogProfileDemoData(false))
  Alpine.data('dialogShareDemo', () => createDialogShareDemoData(false))
  Alpine.data('moveGoalDrawerDemo', () => createMoveGoalDrawerDemoData(false))
  Alpine.data('drawerProfileDemo', () => createDrawerProfileDemoData(false))
  Alpine.data('dropdownMenuAccountDemo', createDropdownMenuAccountDemoData)
  Alpine.data('dropdownMenuAppearanceDemo', createDropdownMenuAppearanceDemoData)
  Alpine.data('dropdownMenuPositionDemo', createDropdownMenuPositionDemoData)
  Alpine.data('fieldDemo', createFieldDemoData)
  Alpine.data('hoverCardDemo', createHoverCardDemoData)
  Alpine.data('inputDemo', createInputDemoData)
  Alpine.data('inputGroupDemo', createInputGroupDemoData)
  Alpine.data('inputOtpField', createInputOtpFieldData)
  Alpine.data('inputOtpPreviewField', createInputOtpPreviewFieldData)
  Alpine.data('inputOtpAlphanumericField', () => createInputOtpFieldData({ alphanumeric: true }))
  Alpine.data('inputOtpAlphanumericPreviewField', createInputOtpAlphanumericPreviewFieldData)
  Alpine.data('inputOtpHelperDemo', createInputOtpHelperDemoData)
  Alpine.data('inputOtpHelperPreviewDemo', createInputOtpHelperPreviewDemoData)
  Alpine.data('inputOtpFormDemo', createInputOtpFormDemoData)
  Alpine.data('inputOtpFormPreviewDemo', createInputOtpFormPreviewDemoData)
  Alpine.data('itemActionsDemo', createItemActionsDemoData)
  Alpine.data('itemSelectDemo', createItemSelectDemoData)
  Alpine.data('kbdTooltipDemo', createKbdTooltipDemoData)
  Alpine.data('labelDemo', createLabelDemoData)
  Alpine.data('menubarDemo', createMenubarDemoData)
  Alpine.data('nativeSelectDemo', createNativeSelectDemoData)
  Alpine.data('navigationMenuDemo', () => createNavigationMenuDemoData())
  Alpine.data('navigationMenuDemoOpen', () => createNavigationMenuDemoData('components'))
  Alpine.data('paginationDemo', createPaginationDemoData)
  Alpine.data('popoverDemo', () => createPopoverDemoData(false))
}

export function ensureAlpine() {
  if (started) return
  Alpine.plugin(collapse)
  registerAlpineData()
  window.Alpine = Alpine
  Alpine.start()
  started = true
}

export function initAlpineOnElement(el: any) {
  ensureAlpine()
  ;(Alpine as any).initTree(el)
}

export function destroyAlpineOnElement(el: any) {
  const maybeDestroyTree = (Alpine as any).destroyTree as unknown
  if (typeof maybeDestroyTree === 'function') {
    maybeDestroyTree(el)
  }
}
