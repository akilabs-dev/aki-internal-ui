<script setup lang="ts">
import { ref } from 'vue'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'vue-input-otp'
import { Button } from '@/components/ui/button'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'
import { figmaLinks } from '@/figma-links'
import {
  inputOtpBlockClass,
  inputOtpFormDescription,
  inputOtpFormTitle,
  inputOtpFrameClass,
  inputOtpHelperEmptyText,
  inputOtpPreviewValue,
} from './input-otp-demo.data'

const helperValue = ref('')
const helperPreviewValue = ref(inputOtpPreviewValue)
const formValue = ref('')
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.inputOtp"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="inputOtpFrameClass">
      <div :class="inputOtpBlockClass">
        <InputOTP :maxlength="6">
          <InputOTPGroup>
            <InputOTPSlot :index="0" />
            <InputOTPSlot :index="1" />
            <InputOTPSlot :index="2" />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot :index="3" />
            <InputOTPSlot :index="4" />
            <InputOTPSlot :index="5" />
          </InputOTPGroup>
        </InputOTP>

        <InputOTP :maxlength="6" :default-value="inputOtpPreviewValue">
          <InputOTPGroup>
            <InputOTPSlot :index="0" />
            <InputOTPSlot :index="1" />
            <InputOTPSlot :index="2" />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot :index="3" />
            <InputOTPSlot :index="4" />
            <InputOTPSlot :index="5" />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div :class="inputOtpBlockClass">
        <InputOTP :maxlength="6" :pattern="REGEXP_ONLY_DIGITS_AND_CHARS">
          <InputOTPGroup>
            <InputOTPSlot :index="0" />
            <InputOTPSlot :index="1" />
            <InputOTPSlot :index="2" />
            <InputOTPSlot :index="3" />
            <InputOTPSlot :index="4" />
            <InputOTPSlot :index="5" />
          </InputOTPGroup>
        </InputOTP>

        <InputOTP
          :maxlength="6"
          :pattern="REGEXP_ONLY_DIGITS_AND_CHARS"
          :default-value="inputOtpPreviewValue"
        >
          <InputOTPGroup>
            <InputOTPSlot :index="0" />
            <InputOTPSlot :index="1" />
            <InputOTPSlot :index="2" />
            <InputOTPSlot :index="3" />
            <InputOTPSlot :index="4" />
            <InputOTPSlot :index="5" />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div :class="inputOtpBlockClass">
        <InputOTP :maxlength="6">
          <InputOTPGroup>
            <InputOTPSlot :index="0" />
            <InputOTPSlot :index="1" />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot :index="2" />
            <InputOTPSlot :index="3" />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot :index="4" />
            <InputOTPSlot :index="5" />
          </InputOTPGroup>
        </InputOTP>

        <InputOTP :maxlength="6" :default-value="inputOtpPreviewValue">
          <InputOTPGroup>
            <InputOTPSlot :index="0" />
            <InputOTPSlot :index="1" />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot :index="2" />
            <InputOTPSlot :index="3" />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot :index="4" />
            <InputOTPSlot :index="5" />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div :class="inputOtpBlockClass">
        <div >
          <InputOTP
            v-model="helperValue"
            :maxlength="6"
          >
            <InputOTPGroup>
              <InputOTPSlot :index="0" />
              <InputOTPSlot :index="1" />
              <InputOTPSlot :index="2" />
              <InputOTPSlot :index="3" />
              <InputOTPSlot :index="4" />
              <InputOTPSlot :index="5" />
            </InputOTPGroup>
          </InputOTP>
          <div >
            <template v-if="helperValue === ''">
              {{ inputOtpHelperEmptyText }}
            </template>
            <template v-else>
              You entered: {{ helperValue }}
            </template>
          </div>
        </div>

        <div >
          <InputOTP
            v-model="helperPreviewValue"
            :maxlength="6"
          >
            <InputOTPGroup>
              <InputOTPSlot :index="0" />
              <InputOTPSlot :index="1" />
              <InputOTPSlot :index="2" />
              <InputOTPSlot :index="3" />
              <InputOTPSlot :index="4" />
              <InputOTPSlot :index="5" />
            </InputOTPGroup>
          </InputOTP>
          <div >
            <template v-if="helperValue === ''">
              {{ inputOtpHelperEmptyText }}
            </template>
            <template v-else>
              You entered: {{ helperValue }}
            </template>
          </div>
        </div>
      </div>

      <div :class="inputOtpBlockClass">
        <form
          
          @submit.prevent
        >
          <Label class="text-base font-semibold">{{ inputOtpFormTitle }}</Label>
          <InputOTP
            v-model="formValue"
            :maxlength="6"
          >
            <InputOTPGroup>
              <InputOTPSlot :index="0" />
              <InputOTPSlot :index="1" />
              <InputOTPSlot :index="2" />
              <InputOTPSlot :index="3" />
              <InputOTPSlot :index="4" />
              <InputOTPSlot :index="5" />
            </InputOTPGroup>
          </InputOTP>
          <p class="text-sm text-muted-foreground">
            {{ inputOtpFormDescription }}
          </p>
          <Button type="submit">
            Submit
          </Button>
        </form>

        <form
          @submit.prevent
        >
          <Label class="text-base font-semibold">{{ inputOtpFormTitle }}</Label>
          <InputOTP
            :maxlength="6"
            :default-value="inputOtpPreviewValue"
          >
            <InputOTPGroup>
              <InputOTPSlot :index="0" />
              <InputOTPSlot :index="1" />
              <InputOTPSlot :index="2" />
              <InputOTPSlot :index="3" />
              <InputOTPSlot :index="4" />
              <InputOTPSlot :index="5" />
            </InputOTPGroup>
          </InputOTP>
          <p class="text-sm text-muted-foreground">
            {{ inputOtpFormDescription }}
          </p>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>
