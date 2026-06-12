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
} from '@/demos/field/field-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const FIELD_GROUP =
  'group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4'

const FIELD_SET =
  'flex flex-col gap-6 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3'

const FIELD_LEGEND = 'mb-3 font-medium data-[variant=legend]:text-base'

const FIELD_LEGEND_LABEL = 'mb-3 text-sm font-medium data-[variant=label]:text-sm'

const FIELD_DESC =
  'text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance'

const FIELD_LABEL =
  'group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50'

const FIELD_TITLE =
  'flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50'

const FIELD_CONTENT = 'group/field-content flex flex-1 flex-col gap-1.5 leading-snug'

const FIELD_VERTICAL =
  'group/field flex w-full flex-col gap-3 data-[invalid=true]:text-destructive [&>*]:w-full'

const FIELD_HORIZONTAL =
  'group/field flex w-full flex-row items-center gap-3 data-[invalid=true]:text-destructive [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px'

const FIELD_RESPONSIVE =
  'group/field flex w-full flex-col gap-3 data-[invalid=true]:text-destructive [&>*]:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:items-start'

const FIELD_SEPARATOR =
  'relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2'

const INPUT =
  'border-input placeholder:text-muted-foreground dark:bg-input/30 h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

const TEXTAREA =
  'border-input placeholder:text-muted-foreground dark:bg-input/30 block min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] md:text-sm resize-none'

const SELECT_TRIGGER =
  'border-input data-[placeholder]:text-muted-foreground flex w-full items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs h-9'

const SELECT_CONTENT =
  'bg-popover text-popover-foreground z-50 max-h-60 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md'

const SELECT_ITEM =
  'focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none'

const SLIDER_ROOT =
  'relative flex min-h-4 w-full touch-none items-center select-none mt-2'

const SLIDER_TRACK =
  'bg-muted relative h-1.5 w-full grow overflow-hidden rounded-full'

const SLIDER_RANGE = 'bg-primary absolute h-full'

const SLIDER_THUMB =
  'bg-white border-primary ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm absolute top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-grab touch-none active:cursor-grabbing outline-none focus-visible:ring-4 focus-visible:outline-hidden'

const BUTTON_PRIMARY =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2'

const BUTTON_OUTLINE =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input h-9 px-4 py-2'

const CHECKBOX =
  'peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary size-4 shrink-0 rounded-[4px] border shadow-xs'

const CHECK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5"><path d="M20 6 9 17l-5-5"></path></svg>`

const RADIO =
  'border-input text-primary aspect-square size-4 shrink-0 rounded-full border shadow-xs'

const RADIO_DOT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"><circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"></circle></svg>`

const SWITCH =
  'peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs'

const SWITCH_THUMB =
  'bg-background pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'

const CHEVRON_DOWN = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4 opacity-50"><path d="m6 9 6 6 6-6"></path></svg>`

const SEPARATOR_LINE = 'bg-border shrink-0 h-px w-full absolute inset-0 top-1/2'

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function escapeAttr(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a href="${escapeAttr(figmaLinks.field)}" target="_blank" rel="noreferrer" class="${FIGMA_BUTTON}">${FIGMA_ICON_SVG} Figma Link</a>
</div>`
}

function wrapSection(content: string, widthClass = fieldSectionWidthClass): string {
  return `<div class="${fieldSectionClass}"><div class="${widthClass}">${content}</div></div>`
}

function fieldSeparator(): string {
  return `<div data-slot="field-separator" data-content="false" class="${FIELD_SEPARATOR}"><div role="none" class="${SEPARATOR_LINE}"></div></div>`
}

function buildCheckbox(key: string, id: string, options: { disabled?: boolean; checked?: boolean } = {}): string {
  if (options.disabled) {
    return `<button type="button" role="checkbox" aria-checked="true" data-state="checked" data-slot="checkbox" class="${CHECKBOX}" disabled id="${escapeHtml(id)}">
      <span data-slot="checkbox-indicator" class="grid place-content-center text-current">${CHECK_SVG}</span>
    </button>`
  }

  const initial = options.checked ? `data-state="checked" aria-checked="true"` : ''
  return `<button type="button" role="checkbox" :aria-checked="isChecked('${key}') ? 'true' : 'false'" :data-state="isChecked('${key}') ? 'checked' : 'unchecked'" data-slot="checkbox" class="${CHECKBOX}" @click.stop="toggleCheckbox('${key}')" id="${escapeHtml(id)}" ${initial}>
    <span data-slot="checkbox-indicator" class="grid place-content-center text-current" x-show="isChecked('${key}')" x-cloak>${CHECK_SVG}</span>
  </button>`
}

function buildRadio(value: string, id: string, groupVar: string): string {
  return `<button type="button" role="radio" :aria-checked="${groupVar} === '${value}' ? 'true' : 'false'" :data-state="${groupVar} === '${value}' ? 'checked' : 'unchecked'" data-slot="radio-group-item" class="${RADIO} relative flex items-center justify-center" @click.stop="${groupVar === 'subscription' ? `setSubscription('${value}')` : `setComputeEnv('${value}')`}" id="${escapeHtml(id)}">
    <span data-slot="radio-group-indicator" class="relative flex items-center justify-center">
      <span x-show="${groupVar} === '${value}'" x-cloak>${RADIO_DOT}</span>
    </span>
  </button>`
}

function buildSwitch(id: string): string {
  return `<button type="button" role="switch" :aria-checked="mfaEnabled ? 'true' : 'false'" :data-state="mfaEnabled ? 'checked' : 'unchecked'" data-slot="switch" class="${SWITCH}" @click="toggleMfa()" id="${escapeHtml(id)}">
    <span data-slot="switch-thumb" class="${SWITCH_THUMB}" :data-state="mfaEnabled ? 'checked' : 'unchecked'"></span>
  </button>`
}

function buildSelectField(
  key: 'month' | 'year' | 'department',
  triggerId: string,
  placeholder: string,
  options: readonly { value: string; label: string }[],
): string {
  const items = options
    .map(
      (option) => `<button
      type="button"
      data-slot="select-item"
      class="${SELECT_ITEM}"
      @click="setSelect('${key}', '${escapeAttr(option.value)}', '${escapeAttr(option.label)}')"
    >${escapeHtml(option.label)}</button>`,
    )
    .join('')

  return `<div class="relative w-full">
    <button
      type="button"
      x-ref="${key}Trigger"
      data-slot="select-trigger"
      data-size="default"
      class="${SELECT_TRIGGER}"
      id="${escapeHtml(triggerId)}"
      @click="toggleSelect('${key}')"
      :aria-expanded="${key}Open"
    >
      <span
        data-slot="select-value"
        :class="{ 'text-muted-foreground': !${key}Label }"
        x-text="selectDisplay('${key}', '${escapeAttr(placeholder)}')"
      ></span>
      ${CHEVRON_DOWN}
    </button>
    <div
      x-show="${key}Open"
      x-cloak
      x-ref="${key}Content"
      data-slot="select-content"
      class="${SELECT_CONTENT}"
      @click.outside="closeSelect('${key}')"
    >
      ${items}
    </div>
  </div>`
}

function buildDualRangeSlider(): string {
  return `<div
  data-slot="slider"
  class="${SLIDER_ROOT}"
  aria-label="Price Range"
  x-ref="priceSlider"
  @pointerdown="onPriceTrackPointerDown($event)"
>
  <div data-slot="slider-track" class="${SLIDER_TRACK}">
    <div
      data-slot="slider-range"
      class="${SLIDER_RANGE}"
      :style="\`left: \${priceRangeLeft()}%; width: \${priceRangeWidth()}%\`"
    ></div>
  </div>
  <span
    role="slider"
    tabindex="0"
    data-slot="slider-thumb"
    class="${SLIDER_THUMB}"
    :style="\`left: \${priceMinPercent()}%; z-index: \${priceThumbZIndex('min')}\`"
    @pointerdown.stop="startPriceDrag('min', $event)"
    :aria-valuenow="priceMin"
    aria-valuemin="0"
    aria-valuemax="1000"
    aria-label="Minimum price"
  ></span>
  <span
    role="slider"
    tabindex="0"
    data-slot="slider-thumb"
    class="${SLIDER_THUMB}"
    :style="\`left: \${priceMaxPercent()}%; z-index: \${priceThumbZIndex('max')}\`"
    @pointerdown.stop="startPriceDrag('max', $event)"
    :aria-valuenow="priceMax"
    aria-valuemin="0"
    aria-valuemax="1000"
    aria-label="Maximum price"
  ></span>
</div>`
}

function buildPaymentForm(): string {
  return wrapSection(`<form><div data-slot="field-group" class="${FIELD_GROUP}">
  <fieldset data-slot="field-set" class="${FIELD_SET}">
    <legend data-slot="field-legend" data-variant="legend" class="${FIELD_LEGEND}">Payment Method</legend>
    <p data-slot="field-description" class="${FIELD_DESC}">All transactions are secure and encrypted</p>
    <div data-slot="field-group" class="${FIELD_GROUP}">
      <div role="group" data-slot="field" data-orientation="vertical" class="${FIELD_VERTICAL}">
        <label data-slot="field-label" class="${FIELD_LABEL}" for="html-card-name">Name on Card</label>
        <input data-slot="input" id="html-card-name" class="${INPUT}" placeholder="Evil Rabbit" />
      </div>
      <div role="group" data-slot="field" data-orientation="vertical" class="${FIELD_VERTICAL}">
        <label data-slot="field-label" class="${FIELD_LABEL}" for="html-card-number">Card Number</label>
        <input data-slot="input" id="html-card-number" class="${INPUT}" placeholder="1234 5678 9012 3456" />
        <p data-slot="field-description" class="${FIELD_DESC}">Enter your 16-digit card number</p>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div role="group" data-slot="field" data-orientation="vertical" class="${FIELD_VERTICAL}">
          <label data-slot="field-label" class="${FIELD_LABEL}" for="html-exp-month">Month</label>
          ${buildSelectField('month', 'html-exp-month', 'MM', paymentMonths.map((value) => ({ value, label: value })))}
        </div>
        <div role="group" data-slot="field" data-orientation="vertical" class="${FIELD_VERTICAL}">
          <label data-slot="field-label" class="${FIELD_LABEL}" for="html-exp-year">Year</label>
          ${buildSelectField('year', 'html-exp-year', 'YYYY', paymentYears.map((value) => ({ value, label: value })))}
        </div>
        <div role="group" data-slot="field" data-orientation="vertical" class="${FIELD_VERTICAL}">
          <label data-slot="field-label" class="${FIELD_LABEL}" for="html-cvv">CVV</label>
          <input data-slot="input" id="html-cvv" class="${INPUT}" placeholder="123" />
        </div>
      </div>
    </div>
  </fieldset>
  ${fieldSeparator()}
  <fieldset data-slot="field-set" class="${FIELD_SET}">
    <legend data-slot="field-legend" data-variant="legend" class="${FIELD_LEGEND}">Billing Address</legend>
    <p data-slot="field-description" class="${FIELD_DESC}">The billing address associated with your payment method</p>
    <div data-slot="field-group" class="${FIELD_GROUP}">
      <div role="group" data-slot="field" data-orientation="horizontal" class="${FIELD_HORIZONTAL}">
        ${buildCheckbox('sameAsShipping', 'html-same-shipping', { checked: true })}
        <label data-slot="field-label" class="${FIELD_LABEL} font-normal" for="html-same-shipping">Same as shipping address</label>
      </div>
    </div>
  </fieldset>
  <fieldset data-slot="field-set" class="${FIELD_SET}">
    <div data-slot="field-group" class="${FIELD_GROUP}">
      <div role="group" data-slot="field" data-orientation="vertical" class="${FIELD_VERTICAL}">
        <label data-slot="field-label" class="${FIELD_LABEL}" for="html-comments">Comments</label>
        <textarea data-slot="textarea" id="html-comments" class="${TEXTAREA}" rows="3" placeholder="Add any additional comments" aria-label="Comments"></textarea>
      </div>
    </div>
  </fieldset>
  <div role="group" data-slot="field" data-orientation="horizontal" class="${FIELD_HORIZONTAL}">
    <button type="button" class="${BUTTON_PRIMARY}">Submit</button>
    <button type="button" class="${BUTTON_OUTLINE}">Cancel</button>
  </div>
</div></form>`)
}

function buildUsernamePassword(): string {
  return wrapSection(`<fieldset data-slot="field-set" class="${FIELD_SET}">
  <div data-slot="field-group" class="${FIELD_GROUP}">
    <div role="group" data-slot="field" data-orientation="vertical" class="${FIELD_VERTICAL}">
      <label data-slot="field-label" class="${FIELD_LABEL}" for="html-username">Username</label>
      <input data-slot="input" id="html-username" class="${INPUT}" placeholder="Max Leiter" />
      <p data-slot="field-description" class="${FIELD_DESC}">Choose a unique username for your account.</p>
    </div>
    <div role="group" data-slot="field" data-orientation="vertical" class="${FIELD_VERTICAL}">
      <label data-slot="field-label" class="${FIELD_LABEL}" for="html-password">Password</label>
      <p data-slot="field-description" class="${FIELD_DESC}">Must be at least 8 characters long.</p>
      <input data-slot="input" id="html-password" type="password" class="${INPUT}" placeholder="********" />
    </div>
  </div>
</fieldset>`)
}

function buildFeedback(): string {
  return wrapSection(`<fieldset data-slot="field-set" class="${FIELD_SET}">
  <div data-slot="field-group" class="${FIELD_GROUP}">
    <div role="group" data-slot="field" data-orientation="vertical" class="${FIELD_VERTICAL}">
      <label data-slot="field-label" class="${FIELD_LABEL}" for="html-feedback">Feedback</label>
      <textarea data-slot="textarea" id="html-feedback" class="${TEXTAREA}" rows="4" placeholder="Your feedback helps us improve..." aria-label="Feedback"></textarea>
      <p data-slot="field-description" class="${FIELD_DESC}">Share your thoughts about our service.</p>
    </div>
  </div>
</fieldset>`)
}

function buildDepartment(): string {
  return wrapSection(`<div role="group" data-slot="field" data-orientation="vertical" class="${FIELD_VERTICAL}">
  <label data-slot="field-label" class="${FIELD_LABEL}">Department</label>
  ${buildSelectField('department', 'html-department', 'Choose department', departmentOptions)}
  <p data-slot="field-description" class="${FIELD_DESC}">Select your department or area of work.</p>
</div>`)
}

function buildPriceRange(): string {
  return wrapSection(`<div role="group" data-slot="field" data-orientation="vertical" class="${FIELD_VERTICAL}">
  <div data-slot="field-label" class="${FIELD_TITLE}">Price Range</div>
  <p data-slot="field-description" class="${FIELD_DESC}">
    Set your budget range ($<span class="font-medium tabular-nums" x-text="priceMin"></span> - <span class="font-medium tabular-nums" x-text="priceMax"></span>).
  </p>
  ${buildDualRangeSlider()}
</div>`)
}

function buildAddress(): string {
  return wrapSection(`<fieldset data-slot="field-set" class="${FIELD_SET}">
  <legend data-slot="field-legend" data-variant="legend" class="${FIELD_LEGEND}">Address Information</legend>
  <p data-slot="field-description" class="${FIELD_DESC}">We need your address to deliver your order.</p>
  <div data-slot="field-group" class="${FIELD_GROUP}">
    <div role="group" data-slot="field" data-orientation="vertical" class="${FIELD_VERTICAL}">
      <label data-slot="field-label" class="${FIELD_LABEL}" for="html-street">Street Address</label>
      <input data-slot="input" id="html-street" class="${INPUT}" placeholder="123 Main St" />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div role="group" data-slot="field" data-orientation="vertical" class="${FIELD_VERTICAL}">
        <label data-slot="field-label" class="${FIELD_LABEL}" for="html-city">City</label>
        <input data-slot="input" id="html-city" class="${INPUT}" placeholder="New York" />
      </div>
      <div role="group" data-slot="field" data-orientation="vertical" class="${FIELD_VERTICAL}">
        <label data-slot="field-label" class="${FIELD_LABEL}" for="html-zip">Postal Code</label>
        <input data-slot="input" id="html-zip" class="${INPUT}" placeholder="90502" />
      </div>
    </div>
  </div>
</fieldset>`)
}

function buildDesktopCheckboxes(): string {
  const items = desktopCheckboxItems.map((item) => `
    <div role="group" data-slot="field" data-orientation="horizontal" class="${FIELD_HORIZONTAL}">
      ${buildCheckbox(item.key, `html-${item.id}`, { checked: 'defaultChecked' in item ? item.defaultChecked : false })}
      <label data-slot="field-label" class="${FIELD_LABEL} font-normal" for="html-${item.id}">${escapeHtml(item.label)}</label>
    </div>`).join('')

  return wrapSection(`<div data-slot="field-group" class="${FIELD_GROUP}">
  <fieldset data-slot="field-set" class="${FIELD_SET}">
    <legend data-slot="field-legend" data-variant="label" class="${FIELD_LEGEND_LABEL}">Show these items on the desktop</legend>
    <p data-slot="field-description" class="${FIELD_DESC}">Select the items you want to show on the desktop.</p>
    <div data-slot="field-group" class="${FIELD_GROUP} gap-3">${items}</div>
  </fieldset>
  ${fieldSeparator()}
  <div role="group" data-slot="field" data-orientation="horizontal" class="${FIELD_HORIZONTAL}">
    ${buildCheckbox('syncFolders', 'html-sync-folders', { checked: true })}
    <div data-slot="field-content" class="${FIELD_CONTENT}">
      <label data-slot="field-label" class="${FIELD_LABEL}" for="html-sync-folders">Sync Desktop &amp; Documents folders</label>
      <p data-slot="field-description" class="${FIELD_DESC}">Your Desktop &amp; Documents folders are being synced with iCloud Drive. You can access them from other devices.</p>
    </div>
  </div>
</div>`)
}

function buildSubscription(): string {
  const items = subscriptionOptions.map((o) => `
    <div role="group" data-slot="field" data-orientation="horizontal" class="${FIELD_HORIZONTAL}">
      ${buildRadio(o.value, o.id, 'subscription')}
      <label data-slot="field-label" class="${FIELD_LABEL} font-normal" for="${o.id}">${escapeHtml(o.label)}</label>
    </div>`).join('')

  return wrapSection(`<fieldset data-slot="field-set" class="${FIELD_SET}">
  <label data-slot="field-label" class="${FIELD_LABEL}">Subscription Plan</label>
  <p data-slot="field-description" class="${FIELD_DESC}">Yearly and lifetime plans offer significant savings.</p>
  <div data-slot="radio-group" role="radiogroup">${items}</div>
</fieldset>`)
}

function buildMfaSwitch(): string {
  return wrapSection(`<div role="group" data-slot="field" data-orientation="horizontal" class="${FIELD_HORIZONTAL}">
  <div data-slot="field-content" class="${FIELD_CONTENT}">
    <label data-slot="field-label" class="${FIELD_LABEL}" for="html-2fa">Multi-factor authentication</label>
    <p data-slot="field-description" class="${FIELD_DESC}">Enable multi-factor authentication. If you do not have a two-factor device, you can use a one-time code sent to your email.</p>
  </div>
  ${buildSwitch('html-2fa')}
</div>`)
}

function buildComputeEnv(): string {
  const cards = computeOptions.map((o) => `
    <label data-slot="field-label" class="${FIELD_LABEL} has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4" for="${o.id}">
      <div role="group" data-slot="field" data-orientation="horizontal" class="${FIELD_HORIZONTAL} p-4">
        <div data-slot="field-content" class="${FIELD_CONTENT}">
          <div data-slot="field-label" class="${FIELD_TITLE}">${escapeHtml(o.title)}</div>
          <p data-slot="field-description" class="${FIELD_DESC}">${escapeHtml(o.description)}</p>
        </div>
        ${buildRadio(o.value, o.id, 'computeEnv')}
      </div>
    </label>`).join('')

  return wrapSection(`<div data-slot="field-group" class="${FIELD_GROUP}">
  <fieldset data-slot="field-set" class="${FIELD_SET}">
    <label data-slot="field-label" class="${FIELD_LABEL}" for="html-compute-env">Compute Environment</label>
    <p data-slot="field-description" class="${FIELD_DESC}">Select the compute environment for your cluster.</p>
    <div data-slot="radio-group" role="radiogroup" class="flex flex-col gap-2">${cards}</div>
  </fieldset>
</div>`)
}

function buildNotifications(): string {
  return wrapSection(`<div data-slot="field-group" class="${FIELD_GROUP}">
  <fieldset data-slot="field-set" class="${FIELD_SET}">
    <label data-slot="field-label" class="${FIELD_LABEL}">Responses</label>
    <p data-slot="field-description" class="${FIELD_DESC}">Get notified when ChatGPT responds to requests that take time, like research or image generation.</p>
    <div data-slot="field-group" data-slot="checkbox-group" class="${FIELD_GROUP}">
      <div role="group" data-slot="field" data-orientation="horizontal" class="${FIELD_HORIZONTAL}">
        ${buildCheckbox('pushResponses', 'html-push-responses', { disabled: true })}
        <label data-slot="field-label" class="${FIELD_LABEL} font-normal" for="html-push-responses">Push notifications</label>
      </div>
    </div>
  </fieldset>
  ${fieldSeparator()}
  <fieldset data-slot="field-set" class="${FIELD_SET}">
    <label data-slot="field-label" class="${FIELD_LABEL}">Tasks</label>
    <p data-slot="field-description" class="${FIELD_DESC}">Get notified when tasks you've created have updates. <a href="#">Manage tasks</a></p>
    <div data-slot="field-group" data-slot="checkbox-group" class="${FIELD_GROUP}">
      <div role="group" data-slot="field" data-orientation="horizontal" class="${FIELD_HORIZONTAL}">
        ${buildCheckbox('pushTasks', 'html-push-tasks')}
        <label data-slot="field-label" class="${FIELD_LABEL} font-normal" for="html-push-tasks">Push notifications</label>
      </div>
      <div role="group" data-slot="field" data-orientation="horizontal" class="${FIELD_HORIZONTAL}">
        ${buildCheckbox('emailTasks', 'html-email-tasks')}
        <label data-slot="field-label" class="${FIELD_LABEL} font-normal" for="html-email-tasks">Email notifications</label>
      </div>
    </div>
  </fieldset>
</div>`)
}

function buildProfile(): string {
  return wrapSection(`<form>
  <fieldset data-slot="field-set" class="${FIELD_SET}">
    <legend data-slot="field-legend" data-variant="legend" class="${FIELD_LEGEND}">Profile</legend>
    <p data-slot="field-description" class="${FIELD_DESC}">Fill in your profile information.</p>
    ${fieldSeparator()}
    <div data-slot="field-group" class="${FIELD_GROUP}">
      <div role="group" data-slot="field" data-orientation="responsive" class="${FIELD_RESPONSIVE}">
        <div data-slot="field-content" class="${FIELD_CONTENT}">
          <label data-slot="field-label" class="${FIELD_LABEL}" for="html-profile-name">Name</label>
          <p data-slot="field-description" class="${FIELD_DESC}">Provide your full name for identification</p>
        </div>
        <input data-slot="input" id="html-profile-name" class="${INPUT}" placeholder="Evil Rabbit" />
      </div>
      ${fieldSeparator()}
      <div role="group" data-slot="field" data-orientation="responsive" class="${FIELD_RESPONSIVE}">
        <div data-slot="field-content" class="${FIELD_CONTENT}">
          <label data-slot="field-label" class="${FIELD_LABEL}" for="html-profile-message">Message</label>
          <p data-slot="field-description" class="${FIELD_DESC}">You can write your message here. Keep it short, preferably under 100 characters.</p>
        </div>
        <textarea data-slot="textarea" id="html-profile-message" class="${TEXTAREA} min-h-[100px] sm:min-w-[300px]" placeholder="Hello, world!"></textarea>
      </div>
      ${fieldSeparator()}
      <div role="group" data-slot="field" data-orientation="responsive" class="${FIELD_RESPONSIVE}">
        <button type="button" class="${BUTTON_PRIMARY}">Submit</button>
        <button type="button" class="${BUTTON_OUTLINE}">Cancel</button>
      </div>
    </div>
  </fieldset>
</form>`, fieldProfileWidthClass)
}

export function buildFieldAlpineHtml(): string {
  return `<div x-data="fieldDemo" class="space-y-4">
  ${buildFigmaLink()}
  <div class="${fieldFrameClass}">
    ${buildPaymentForm()}
    ${buildUsernamePassword()}
    ${buildFeedback()}
    ${buildDepartment()}
    ${buildPriceRange()}
    ${buildAddress()}
    ${buildDesktopCheckboxes()}
    ${buildSubscription()}
    ${buildMfaSwitch()}
    ${buildComputeEnv()}
    ${buildNotifications()}
    ${buildProfile()}
  </div>
</div>`
}

export function extractFieldToAlpine(_root: HTMLElement): string {
  return formatHtml(buildFieldAlpineHtml())
}
