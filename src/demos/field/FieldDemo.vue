<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import FigmaIcon from '@/components/icons/FigmaIcon.vue'
import { figmaLinks } from '@/figma-links'
import {
  computeOptions,
  departmentOptions,
  desktopCheckboxItems,
  fieldFrameClass,
  fieldProfileWidthClass,
  fieldSectionClass,
  fieldSectionWidthClass,
  paymentMonths,
  paymentYears,
  subscriptionOptions,
} from './field-demo.data'

const sameAsShipping = ref(true)
const desktopChecks = reactive({
  hardDisks: true,
  externalDisks: false,
  cdsDvds: false,
  connectedServers: false,
})
const syncFolders = ref(true)
const subscription = ref('monthly')
const mfaEnabled = ref(false)
const computeEnv = ref('kubernetes')
const pushTasks = ref(false)
const emailTasks = ref(false)
const priceRange = ref([200, 800])

</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center justify-end gap-2">
      <Button
        as="a"
        :href="figmaLinks.field"
        target="_blank"
        rel="noreferrer"
        variant="outline"
        size="sm"
      >
        <FigmaIcon class="size-4" />
        Figma Link
      </Button>
    </div>

    <div :class="fieldFrameClass">
      <!-- Payment Method -->
      <div :class="fieldSectionClass">
        <div :class="fieldSectionWidthClass">
          <form>
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Payment Method</FieldLegend>
                <FieldDescription>
                  All transactions are secure and encrypted
                </FieldDescription>
                <FieldGroup>
                  <Field>
                    <FieldLabel for="field-card-name">Name on Card</FieldLabel>
                    <Input id="field-card-name" placeholder="Evil Rabbit" required />
                  </Field>
                  <Field>
                    <FieldLabel for="field-card-number">Card Number</FieldLabel>
                    <Input
                      id="field-card-number"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                    <FieldDescription>
                      Enter your 16-digit card number
                    </FieldDescription>
                  </Field>
                  <div class="grid grid-cols-3 gap-4">
                    <Field>
                      <FieldLabel for="field-exp-month">Month</FieldLabel>
                      <Select>
                        <SelectTrigger id="field-exp-month" class="w-full">
                          <SelectValue placeholder="MM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem
                            v-for="month in paymentMonths"
                            :key="month"
                            :value="month"
                          >
                            {{ month }}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field>
                      <FieldLabel for="field-exp-year">Year</FieldLabel>
                      <Select>
                        <SelectTrigger id="field-exp-year" class="w-full">
                          <SelectValue placeholder="YYYY" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem
                            v-for="year in paymentYears"
                            :key="year"
                            :value="year"
                          >
                            {{ year }}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field>
                      <FieldLabel for="field-cvv">CVV</FieldLabel>
                      <Input id="field-cvv" placeholder="123" required />
                    </Field>
                  </div>
                </FieldGroup>
              </FieldSet>
              <FieldSeparator />
              <FieldSet>
                <FieldLegend>Billing Address</FieldLegend>
                <FieldDescription>
                  The billing address associated with your payment method
                </FieldDescription>
                <FieldGroup>
                  <Field orientation="horizontal">
                    <Checkbox id="field-same-shipping" v-model="sameAsShipping" />
                    <FieldLabel for="field-same-shipping" class="font-normal">
                      Same as shipping address
                    </FieldLabel>
                  </Field>
                </FieldGroup>
              </FieldSet>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel for="field-comments">Comments</FieldLabel>
                    <Textarea
                      id="field-comments"
                      placeholder="Add any additional comments"
                      class="resize-none"
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field orientation="horizontal">
                <Button type="submit">Submit</Button>
                <Button variant="outline" type="button">Cancel</Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>

      <!-- Username / Password -->
      <div :class="fieldSectionClass">
        <div :class="fieldSectionWidthClass">
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel for="field-username">Username</FieldLabel>
                <Input id="field-username" type="text" placeholder="Max Leiter" />
                <FieldDescription>
                  Choose a unique username for your account.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel for="field-password">Password</FieldLabel>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
                <Input id="field-password" type="password" placeholder="********" />
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
      </div>

      <!-- Feedback -->
      <div :class="fieldSectionClass">
        <div :class="fieldSectionWidthClass">
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel for="field-feedback">Feedback</FieldLabel>
                <Textarea
                  id="field-feedback"
                  placeholder="Your feedback helps us improve..."
                  :rows="4"
                />
                <FieldDescription>
                  Share your thoughts about our service.
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
      </div>

      <!-- Department -->
      <div :class="fieldSectionClass">
        <div :class="fieldSectionWidthClass">
          <Field>
            <FieldLabel>Department</FieldLabel>
            <Select>
              <SelectTrigger class="w-full">
                <SelectValue placeholder="Choose department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  v-for="option in departmentOptions"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </SelectItem>
              </SelectContent>
            </Select>
            <FieldDescription>
              Select your department or area of work.
            </FieldDescription>
          </Field>
        </div>
      </div>

      <!-- Price Range -->
      <div :class="fieldSectionClass">
        <div :class="fieldSectionWidthClass">
          <Field>
            <FieldTitle>Price Range</FieldTitle>
            <FieldDescription>
              Set your budget range ($
              <span class="font-medium tabular-nums">{{ priceRange[0] }}</span> -
              <span class="font-medium tabular-nums">{{ priceRange[1] }}</span>).
            </FieldDescription>
            <Slider
              v-model="priceRange"
              :max="1000"
              :min="0"
              :step="10"
              class="mt-2 w-full"
              aria-label="Price Range"
            />
          </Field>
        </div>
      </div>

      <!-- Address -->
      <div :class="fieldSectionClass">
        <div :class="fieldSectionWidthClass">
          <FieldSet>
            <FieldLegend>Address Information</FieldLegend>
            <FieldDescription>
              We need your address to deliver your order.
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel for="field-street">Street Address</FieldLabel>
                <Input id="field-street" type="text" placeholder="123 Main St" />
              </Field>
              <div class="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel for="field-city">City</FieldLabel>
                  <Input id="field-city" type="text" placeholder="New York" />
                </Field>
                <Field>
                  <FieldLabel for="field-zip">Postal Code</FieldLabel>
                  <Input id="field-zip" type="text" placeholder="90502" />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
        </div>
      </div>

      <!-- Desktop checkboxes -->
      <div :class="fieldSectionClass">
        <div :class="fieldSectionWidthClass">
          <FieldGroup>
            <FieldSet>
              <FieldLegend variant="label">
                Show these items on the desktop
              </FieldLegend>
              <FieldDescription>
                Select the items you want to show on the desktop.
              </FieldDescription>
              <FieldGroup class="gap-3">
                <Field
                  v-for="item in desktopCheckboxItems"
                  :key="item.id"
                  orientation="horizontal"
                >
                  <Checkbox
                    :id="`field-${item.id}`"
                    v-model="desktopChecks[item.key]"
                  />
                  <FieldLabel :for="`field-${item.id}`" class="font-normal">
                    {{ item.label }}
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <Field orientation="horizontal">
              <Checkbox id="field-sync-folders" v-model="syncFolders" />
              <FieldContent>
                <FieldLabel for="field-sync-folders">
                  Sync Desktop &amp; Documents folders
                </FieldLabel>
                <FieldDescription>
                  Your Desktop &amp; Documents folders are being synced with iCloud
                  Drive. You can access them from other devices.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldGroup>
        </div>
      </div>

      <!-- Subscription -->
      <div :class="fieldSectionClass">
        <div :class="fieldSectionWidthClass">
          <FieldSet>
            <FieldLabel>Subscription Plan</FieldLabel>
            <FieldDescription>
              Yearly and lifetime plans offer significant savings.
            </FieldDescription>
            <RadioGroup v-model="subscription">
              <Field
                v-for="option in subscriptionOptions"
                :key="option.id"
                orientation="horizontal"
              >
                <RadioGroupItem :id="option.id" :value="option.value" />
                <FieldLabel :for="option.id" class="font-normal">
                  {{ option.label }}
                </FieldLabel>
              </Field>
            </RadioGroup>
          </FieldSet>
        </div>
      </div>

      <!-- MFA Switch -->
      <div :class="fieldSectionClass">
        <div :class="fieldSectionWidthClass">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel for="field-2fa">Multi-factor authentication</FieldLabel>
              <FieldDescription>
                Enable multi-factor authentication. If you do not have a two-factor
                device, you can use a one-time code sent to your email.
              </FieldDescription>
            </FieldContent>
            <Switch id="field-2fa" v-model="mfaEnabled" />
          </Field>
        </div>
      </div>

      <!-- Compute Environment -->
      <div :class="fieldSectionClass">
        <div :class="fieldSectionWidthClass">
          <FieldGroup>
            <FieldSet>
              <FieldLabel for="field-compute-env">Compute Environment</FieldLabel>
              <FieldDescription>
                Select the compute environment for your cluster.
              </FieldDescription>
              <RadioGroup v-model="computeEnv">
                <FieldLabel
                  v-for="option in computeOptions"
                  :key="option.id"
                  :for="option.id"
                >
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle>{{ option.title }}</FieldTitle>
                      <FieldDescription>{{ option.description }}</FieldDescription>
                    </FieldContent>
                    <RadioGroupItem :id="option.id" :value="option.value" />
                  </Field>
                </FieldLabel>
              </RadioGroup>
            </FieldSet>
          </FieldGroup>
        </div>
      </div>

      <!-- Notifications -->
      <div :class="fieldSectionClass">
        <div :class="fieldSectionWidthClass">
          <FieldGroup>
            <FieldSet>
              <FieldLabel>Responses</FieldLabel>
              <FieldDescription>
                Get notified when ChatGPT responds to requests that take time, like
                research or image generation.
              </FieldDescription>
              <FieldGroup data-slot="checkbox-group">
                <Field orientation="horizontal">
                  <Checkbox id="field-push-responses" :default-value="true" disabled />
                  <FieldLabel for="field-push-responses" class="font-normal">
                    Push notifications
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <FieldSet>
              <FieldLabel>Tasks</FieldLabel>
              <FieldDescription>
                Get notified when tasks you've created have updates.
                <a href="#">Manage tasks</a>
              </FieldDescription>
              <FieldGroup data-slot="checkbox-group">
                <Field orientation="horizontal">
                  <Checkbox id="field-push-tasks" v-model="pushTasks" />
                  <FieldLabel for="field-push-tasks" class="font-normal">
                    Push notifications
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox id="field-email-tasks" v-model="emailTasks" />
                  <FieldLabel for="field-email-tasks" class="font-normal">
                    Email notifications
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
          </FieldGroup>
        </div>
      </div>

      <!-- Profile responsive -->
      <div :class="fieldSectionClass">
        <div :class="fieldProfileWidthClass">
          <form>
            <FieldSet>
              <FieldLegend>Profile</FieldLegend>
              <FieldDescription>Fill in your profile information.</FieldDescription>
              <FieldSeparator />
              <FieldGroup>
                <Field orientation="responsive">
                  <FieldContent>
                    <FieldLabel for="field-profile-name">Name</FieldLabel>
                    <FieldDescription>
                      Provide your full name for identification
                    </FieldDescription>
                  </FieldContent>
                  <Input id="field-profile-name" placeholder="Evil Rabbit" required />
                </Field>
                <FieldSeparator />
                <Field orientation="responsive">
                  <FieldContent>
                    <FieldLabel for="field-profile-message">Message</FieldLabel>
                    <FieldDescription>
                      You can write your message here. Keep it short, preferably
                      under 100 characters.
                    </FieldDescription>
                  </FieldContent>
                  <Textarea
                    id="field-profile-message"
                    placeholder="Hello, world!"
                    required
                    class="min-h-[100px] resize-none sm:min-w-[300px]"
                  />
                </Field>
                <FieldSeparator />
                <Field orientation="responsive">
                  <Button type="submit">Submit</Button>
                  <Button type="button" variant="outline">Cancel</Button>
                </Field>
              </FieldGroup>
            </FieldSet>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
