import {
  calendarDemoMaxYear,
  calendarDemoMinYear,
} from '@/demos/calendar/calendar-demo.data'

const CHEVRON_LEFT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m15 18-6-6 6-6"></path></svg>`

const CHEVRON_RIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m9 18 6-6-6-6"></path></svg>`

const CHEVRON_DOWN = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 opacity-50 select-none" aria-hidden="true" data-slot="native-select-icon"><path d="m6 9 6 6 6-6"></path></svg>`

const PREV_BUTTON_CLASS =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-7 bg-transparent p-0 opacity-50 hover:opacity-100'

const SELECT_WRAPPER_CLASS = 'group/native-select relative w-fit has-[select:disabled]:opacity-50'

const SELECT_CLASS =
  'border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 h-8 w-full min-w-0 appearance-none rounded-md border bg-transparent px-3 py-2 pr-9 text-xs shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]'

export function buildCalendarAlpineHtml(options: {
  minYear?: number
  maxYear?: number
} = {}): string {
  const minYear = options.minYear ?? calendarDemoMinYear
  const maxYear = options.maxYear ?? calendarDemoMaxYear

  return `<div class="flex min-h-[216px] w-full items-center justify-center">
<div
  x-data="calendarDemo"
  data-slot="calendar"
  class="p-3 rounded-md border shadow-sm w-auto"
  data-min-year="${minYear}"
  data-max-year="${maxYear}"
>
  <div data-slot="calendar-header" class="flex justify-center pt-1 relative items-center w-full px-8">
    <nav class="flex items-center gap-1 absolute top-0 inset-x-0 justify-between">
      <button
        type="button"
        data-slot="calendar-prev-button"
        class="${PREV_BUTTON_CLASS}"
        aria-label="Previous month"
        @click="prevMonth()"
      >
        ${CHEVRON_LEFT}
      </button>
      <button
        type="button"
        data-slot="calendar-next-button"
        class="${PREV_BUTTON_CLASS}"
        aria-label="Next month"
        @click="nextMonth()"
      >
        ${CHEVRON_RIGHT}
      </button>
    </nav>
    <div class="flex items-center justify-center gap-1">
      <div class="${SELECT_WRAPPER_CLASS}" data-slot="native-select-wrapper">
        <select
          data-slot="native-select"
          class="${SELECT_CLASS}"
          x-model.number="viewMonth"
          @change="onViewChange()"
        >
          <template x-for="month in months" :key="month">
            <option :value="month" x-text="monthLabel(month)"></option>
          </template>
        </select>
        ${CHEVRON_DOWN}
      </div>
      <div class="${SELECT_WRAPPER_CLASS}" data-slot="native-select-wrapper">
        <select
          data-slot="native-select"
          class="${SELECT_CLASS}"
          x-model.number="viewYear"
          @change="onViewChange()"
        >
          <template x-for="year in years" :key="year">
            <option :value="year" x-text="year"></option>
          </template>
        </select>
        ${CHEVRON_DOWN}
      </div>
    </div>
  </div>

  <div class="flex flex-col gap-y-4 mt-4">
    <div data-slot="calendar-grid" class="w-full border-collapse space-x-1">
      <div data-slot="calendar-grid-head">
        <div data-slot="calendar-grid-row" class="flex">
          <template x-for="label in weekDays" :key="label">
            <div
              data-slot="calendar-head-cell"
              class="text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] text-center"
              x-text="label"
            ></div>
          </template>
        </div>
      </div>
      <div data-slot="calendar-grid-body">
        <template x-for="(week, weekIndex) in weeks" :key="weekIndex">
          <div data-slot="calendar-grid-row" class="flex mt-2 w-full">
            <template x-for="cell in week" :key="cell.key">
              <div data-slot="calendar-cell" class="relative flex-1 text-center text-sm p-0">
                <button
                  type="button"
                  data-slot="calendar-cell-trigger"
                  :class="cellClass(cell)"
                  :disabled="cell.disabled"
                  :data-selected="isSelected(cell) ? '' : undefined"
                  :data-today="isToday(cell) && !isSelected(cell) ? '' : undefined"
                  :data-outside-view="cell.outside ? '' : undefined"
                  :data-disabled="cell.disabled ? '' : undefined"
                  @click="selectDay(cell)"
                  x-text="cell.day"
                ></button>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</div>
</div>`
}

export function extractCalendarToAlpine(_root: HTMLElement): string {
  return buildCalendarAlpineHtml()
}
