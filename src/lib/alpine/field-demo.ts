import {
  departmentOptions,
  paymentMonths,
  paymentYears,
} from '@/demos/field/field-demo.data'

type SelectKey = 'month' | 'year' | 'department'

const selectKeys: SelectKey[] = ['month', 'year', 'department']

export function createFieldDemoData() {
  return {
    sameAsShipping: true,
    hardDisks: true,
    externalDisks: false,
    cdsDvds: false,
    connectedServers: false,
    syncFolders: true,
    subscription: 'monthly',
    mfaEnabled: false,
    computeEnv: 'kubernetes',
    pushTasks: false,
    emailTasks: false,
    priceMin: 200,
    priceMax: 800,
    activePriceThumb: null as 'min' | 'max' | null,
    month: '',
    monthLabel: '',
    monthOpen: false,
    year: '',
    yearLabel: '',
    yearOpen: false,
    department: '',
    departmentLabel: '',
    departmentOpen: false,
    monthOptions: paymentMonths.map((value) => ({ value, label: value })),
    yearOptions: paymentYears.map((value) => ({ value, label: value })),
    departmentOptions: departmentOptions.map(({ value, label }) => ({ value, label })),

    init() {
      selectKeys.forEach((key) => {
        ;(this as any).$watch(`${key}Open`, (open: boolean) => {
          if (!open) return
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.positionSelect(key)
            })
          })
        })
      })
    },

    isChecked(key: string) {
      return Boolean((this as any)[key])
    },

    toggleCheckbox(key: string) {
      ;(this as any)[key] = !(this as any)[key]
    },

    setSubscription(value: string) {
      this.subscription = value
    },

    setComputeEnv(value: string) {
      this.computeEnv = value
    },

    toggleMfa() {
      this.mfaEnabled = !this.mfaEnabled
    },

    toggleSelect(key: SelectKey) {
      const openKey = `${key}Open` as const
      const wasOpen = (this as any)[openKey] as boolean
      this.monthOpen = false
      this.yearOpen = false
      this.departmentOpen = false
      ;(this as any)[openKey] = !wasOpen
    },

    closeSelect(key: SelectKey) {
      ;(this as any)[`${key}Open`] = false
    },

    setSelect(key: SelectKey, value: string, label: string) {
      ;(this as any)[key] = value
      ;(this as any)[`${key}Label`] = label
      ;(this as any)[`${key}Open`] = false
    },

    selectDisplay(key: SelectKey, placeholder: string) {
      const label = (this as any)[`${key}Label`] as string
      return label || placeholder
    },

    positionSelect(key: SelectKey) {
      const trigger = (this as any).$refs[`${key}Trigger`] as HTMLElement | undefined
      const content = (this as any).$refs[`${key}Content`] as HTMLElement | undefined
      if (!trigger || !content) return

      const rect = trigger.getBoundingClientRect()
      const offset = 4
      content.style.position = 'fixed'
      content.style.top = `${rect.bottom + offset}px`
      content.style.left = `${rect.left}px`
      content.style.minWidth = `${rect.width}px`
      content.style.zIndex = '50'
    },

    priceMinPercent() {
      return (this.priceMin / 1000) * 100
    },

    priceMaxPercent() {
      return (this.priceMax / 1000) * 100
    },

    priceRangeLeft() {
      return this.priceMinPercent()
    },

    priceRangeWidth() {
      return this.priceMaxPercent() - this.priceMinPercent()
    },

    priceThumbZIndex(which: 'min' | 'max') {
      if (this.activePriceThumb === which) return 3
      if (which === 'max' && this.priceMin > 1000 - 100) return 3
      return which === 'min' ? 2 : 1
    },

    snapPrice(value: number) {
      return Math.round(value / 10) * 10
    },

    priceFromPointer(event: PointerEvent) {
      const slider = (this as any).$refs.priceSlider as HTMLElement | undefined
      if (!slider) return 0
      const rect = slider.getBoundingClientRect()
      const percent = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width))
      return this.snapPrice(percent * 1000)
    },

    setPriceValue(which: 'min' | 'max', value: number) {
      if (which === 'min') {
        this.priceMin = Math.min(value, this.priceMax - 10)
        return
      }
      this.priceMax = Math.max(value, this.priceMin + 10)
    },

    startPriceDrag(which: 'min' | 'max', event: PointerEvent) {
      event.preventDefault()
      this.activePriceThumb = which
      const target = event.currentTarget as HTMLElement | null
      target?.setPointerCapture?.(event.pointerId)

      const move = (moveEvent: PointerEvent) => {
        this.setPriceValue(which, this.priceFromPointer(moveEvent))
      }

      const end = (endEvent: PointerEvent) => {
        target?.releasePointerCapture?.(endEvent.pointerId)
        window.removeEventListener('pointermove', move)
        window.removeEventListener('pointerup', end)
        window.removeEventListener('pointercancel', end)
        this.activePriceThumb = null
      }

      this.setPriceValue(which, this.priceFromPointer(event))
      window.addEventListener('pointermove', move)
      window.addEventListener('pointerup', end)
      window.addEventListener('pointercancel', end)
    },

    onPriceTrackPointerDown(event: PointerEvent) {
      if ((event.target as HTMLElement).closest('[data-slot="slider-thumb"]')) return
      const value = this.priceFromPointer(event)
      const distanceToMin = Math.abs(value - this.priceMin)
      const distanceToMax = Math.abs(value - this.priceMax)
      this.startPriceDrag(distanceToMin <= distanceToMax ? 'min' : 'max', event)
    },
  }
}
