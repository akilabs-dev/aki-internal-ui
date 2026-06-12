import {
  inputOtpHelperEmptyText,
  inputOtpPreviewValue,
} from '@/demos/input-otp/input-otp-demo.data'

type InputOtpFieldOptions = {
  alphanumeric?: boolean
  initialOtp?: string
  maxLength?: number
}

export function createInputOtpFieldData(options: InputOtpFieldOptions = {}) {
  const maxLength = options.maxLength ?? 6
  const alphanumeric = options.alphanumeric ?? false

  return {
    otp: options.initialOtp ?? '',
    focused: false,
    maxLength,

    charAt(index: number) {
      return this.otp[index] ?? ''
    },

    isActive(index: number) {
      if (!this.focused) return false
      const position = Math.min(this.otp.length, this.maxLength - 1)
      return index === position
    },

    sanitize(value: string) {
      const cleaned = alphanumeric
        ? value.replace(/[^a-zA-Z0-9]/g, '')
        : value.replace(/\D/g, '')
      return cleaned.slice(0, this.maxLength)
    },

    onInput(event: Event) {
      const input = event.target as HTMLInputElement
      this.otp = this.sanitize(input.value)
      input.value = this.otp
    },

    onFocus() {
      this.focused = true
    },

    onBlur() {
      this.focused = false
    },

    focusInput() {
      const input = (this as unknown as { $refs: { input?: HTMLInputElement } }).$refs.input
      input?.focus()
    },
  }
}

export function createInputOtpPreviewFieldData() {
  return createInputOtpFieldData({ initialOtp: inputOtpPreviewValue })
}

export function createInputOtpAlphanumericPreviewFieldData() {
  return createInputOtpFieldData({ alphanumeric: true, initialOtp: inputOtpPreviewValue })
}

export function createInputOtpHelperDemoData() {
  return {
    ...createInputOtpFieldData(),

    helperMessage() {
      return this.otp === ''
        ? inputOtpHelperEmptyText
        : `You entered: ${this.otp}`
    },
  }
}

export function createInputOtpHelperPreviewDemoData() {
  return {
    ...createInputOtpFieldData({ initialOtp: inputOtpPreviewValue }),

    helperMessage() {
      return `You entered: ${this.otp}`
    },
  }
}

export function createInputOtpFormPreviewDemoData() {
  return {
    ...createInputOtpFieldData({ initialOtp: inputOtpPreviewValue }),

    onSubmit(event: Event) {
      event.preventDefault()
    },
  }
}

export function createInputOtpFormDemoData() {
  return {
    ...createInputOtpFieldData(),

    onSubmit(event: Event) {
      event.preventDefault()
    },
  }
}
