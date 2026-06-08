import {
  cloudEmpty,
  emptyFrameClass,
  emptySectionClass,
  notFoundEmpty,
  notificationsEmpty,
  offlineEmpty,
  projectsEmpty,
  teamEmpty,
} from '@/demos/empty/empty-demo.data'
import { figmaLinks } from '@/figma-links'
import { formatHtml } from '@/lib/format-html'

const FIGMA_BUTTON =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5'

const FIGMA_ICON_SVG = `<svg class="size-4" viewBox="0 0 24 24" role="img" aria-label="Figma" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><circle cx="9" cy="5" r="4" fill="#F24E1E"></circle><circle cx="15" cy="5" r="4" fill="#FF7262"></circle><circle cx="9" cy="12" r="4" fill="#A259FF"></circle><circle cx="15" cy="12" r="4" fill="#1ABCFE"></circle><circle cx="9" cy="19" r="4" fill="#0ACF83"></circle></svg>`

const EMPTY_ROOT =
  'flex min-w-0 flex-1 flex-col items-center justify-center gap-6 text-balance rounded-lg border-dashed p-6 text-center md:p-12'

const EMPTY_HEADER = 'flex max-w-sm flex-col items-center gap-2 text-center'

const EMPTY_MEDIA_ICON =
  'mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*=\'size-\'])]:size-6'

const EMPTY_MEDIA_DEFAULT =
  'mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent'

const EMPTY_TITLE = 'text-lg font-medium tracking-tight'

const EMPTY_DESCRIPTION =
  'text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4'

const EMPTY_CONTENT =
  'flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm'

const BUTTON_PRIMARY =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2'

const BUTTON_OUTLINE =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2'

const BUTTON_OUTLINE_SM =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5'

const BUTTON_PRIMARY_SM =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5'

const BUTTON_LINK_SM =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] text-primary underline-offset-4 hover:underline h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-muted-foreground'

const AVATAR_ROOT = 'relative flex shrink-0 overflow-hidden rounded-full'
const AVATAR_IMAGE = 'aspect-square size-full rounded-[inherit] object-cover'

const INPUT_GROUP =
  'group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none h-9 min-w-0 has-[>[data-align=inline-start]]:[&>input]:pl-2 has-[>[data-align=inline-end]]:[&>input]:pr-2'

const INPUT =
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-0 bg-transparent shadow-none focus-visible:ring-0'

const ADDON =
  'text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*=\'size-\'])]:size-4 order-first pl-3'

const ADDON_END =
  'text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*=\'size-\'])]:size-4 order-last pr-3'

const KBD =
  'bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none'

const FOLDER_CODE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-6"><path d="M10 12.5 8 15h8l-2-2.5"></path><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>`

const CLOUD_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-6"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`

const BELL_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-6"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>`

const REFRESH_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>`

const PLUS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>`

const ARROW_UP_RIGHT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>`

const SEARCH_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>`

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function buildFigmaLink(): string {
  return `<div class="flex flex-wrap items-center justify-end gap-2">
  <a
    href="${escapeAttr(figmaLinks.empty)}"
    target="_blank"
    rel="noreferrer"
    class="${FIGMA_BUTTON}"
  >
    ${FIGMA_ICON_SVG}
    Figma Link
  </a>
</div>`
}

function buildAvatar(
  src: string,
  alt: string,
  options: { sizePx?: number; grayscale?: boolean; ring?: boolean } = {},
): string {
  const sizePx = options.sizePx ?? 48
  const extraClass = [
    options.grayscale ? 'grayscale' : '',
    options.ring ? 'ring-2 ring-background' : '',
  ].filter(Boolean).join(' ')

  return `<span
    data-slot="avatar"
    class="${AVATAR_ROOT} size-12${extraClass ? ` ${extraClass}` : ''}"
    style="width:${sizePx}px;height:${sizePx}px"
  ><img
    data-slot="avatar-image"
    class="${AVATAR_IMAGE}${options.grayscale ? ' grayscale' : ''}"
    src="${escapeAttr(src)}"
    alt="${escapeAttr(alt)}"
    referrerpolicy="no-referrer"
  /></span>`
}

function wrapSection(content: string): string {
  return `<div class="${emptySectionClass}">${content}</div>`
}

function buildProjectsEmpty(): string {
  return wrapSection(`<div data-slot="empty" class="${EMPTY_ROOT}">
  <div data-slot="empty-header" class="${EMPTY_HEADER}">
    <div data-slot="empty-icon" data-variant="icon" class="${EMPTY_MEDIA_ICON}">${FOLDER_CODE_SVG}</div>
    <div data-slot="empty-title" class="${EMPTY_TITLE}">${escapeHtml(projectsEmpty.title)}</div>
    <p data-slot="empty-description" class="${EMPTY_DESCRIPTION}">${escapeHtml(projectsEmpty.description)}</p>
  </div>
  <div data-slot="empty-content" class="${EMPTY_CONTENT}">
    <div class="flex gap-2">
      <button type="button" class="${BUTTON_PRIMARY}">${escapeHtml(projectsEmpty.primaryAction)}</button>
      <button type="button" class="${BUTTON_OUTLINE}">${escapeHtml(projectsEmpty.secondaryAction)}</button>
    </div>
  </div>
  <a href="${escapeAttr(projectsEmpty.learnMoreHref)}" class="${BUTTON_LINK_SM}">
    ${escapeHtml(projectsEmpty.learnMoreLabel)} ${ARROW_UP_RIGHT_SVG}
  </a>
</div>`)
}

function buildCloudEmpty(): string {
  return wrapSection(`<div data-slot="empty" class="${EMPTY_ROOT} border border-dashed">
  <div data-slot="empty-header" class="${EMPTY_HEADER}">
    <div data-slot="empty-icon" data-variant="icon" class="${EMPTY_MEDIA_ICON}">${CLOUD_SVG}</div>
    <div data-slot="empty-title" class="${EMPTY_TITLE}">${escapeHtml(cloudEmpty.title)}</div>
    <p data-slot="empty-description" class="${EMPTY_DESCRIPTION}">${escapeHtml(cloudEmpty.description)}</p>
  </div>
  <div data-slot="empty-content" class="${EMPTY_CONTENT}">
    <button type="button" class="${BUTTON_OUTLINE_SM}">${escapeHtml(cloudEmpty.action)}</button>
  </div>
</div>`)
}

function buildNotificationsEmpty(): string {
  return wrapSection(`<div data-slot="empty" class="${EMPTY_ROOT} from-muted/50 to-background h-full bg-gradient-to-b from-30%">
  <div data-slot="empty-header" class="${EMPTY_HEADER}">
    <div data-slot="empty-icon" data-variant="icon" class="${EMPTY_MEDIA_ICON}">${BELL_SVG}</div>
    <div data-slot="empty-title" class="${EMPTY_TITLE}">${escapeHtml(notificationsEmpty.title)}</div>
    <p data-slot="empty-description" class="${EMPTY_DESCRIPTION}">${escapeHtml(notificationsEmpty.description)}</p>
  </div>
  <div data-slot="empty-content" class="${EMPTY_CONTENT}">
    <button type="button" class="${BUTTON_OUTLINE_SM}">${REFRESH_SVG} ${escapeHtml(notificationsEmpty.action)}</button>
  </div>
</div>`)
}

function buildOfflineEmpty(): string {
  return wrapSection(`<div data-slot="empty" class="${EMPTY_ROOT}">
  <div data-slot="empty-header" class="${EMPTY_HEADER}">
    <div data-slot="empty-icon" data-variant="default" class="${EMPTY_MEDIA_DEFAULT}">
      ${buildAvatar(offlineEmpty.avatarSrc, offlineEmpty.avatarFallback, { grayscale: true })}
    </div>
    <div data-slot="empty-title" class="${EMPTY_TITLE}">${escapeHtml(offlineEmpty.title)}</div>
    <p data-slot="empty-description" class="${EMPTY_DESCRIPTION}">${escapeHtml(offlineEmpty.description)}</p>
  </div>
  <div data-slot="empty-content" class="${EMPTY_CONTENT}">
    <button type="button" class="${BUTTON_PRIMARY_SM}">${escapeHtml(offlineEmpty.action)}</button>
  </div>
</div>`)
}

function buildTeamEmpty(): string {
  const avatars = teamEmpty.members
    .map((member) => buildAvatar(member.src, member.alt, { ring: true, grayscale: true }))
    .join('')

  return wrapSection(`<div data-slot="empty" class="${EMPTY_ROOT}">
  <div data-slot="empty-header" class="${EMPTY_HEADER}">
    <div data-slot="empty-icon" data-variant="default" class="${EMPTY_MEDIA_DEFAULT}">
      <div class="flex -space-x-2">${avatars}</div>
    </div>
    <div data-slot="empty-title" class="${EMPTY_TITLE}">${escapeHtml(teamEmpty.title)}</div>
    <p data-slot="empty-description" class="${EMPTY_DESCRIPTION}">${escapeHtml(teamEmpty.description)}</p>
  </div>
  <div data-slot="empty-content" class="${EMPTY_CONTENT}">
    <button type="button" class="${BUTTON_PRIMARY_SM}">${PLUS_SVG} ${escapeHtml(teamEmpty.action)}</button>
  </div>
</div>`)
}

function buildNotFoundEmpty(): string {
  return wrapSection(`<div data-slot="empty" class="${EMPTY_ROOT}">
  <div data-slot="empty-header" class="${EMPTY_HEADER}">
    <div data-slot="empty-title" class="${EMPTY_TITLE}">${escapeHtml(notFoundEmpty.title)}</div>
    <p data-slot="empty-description" class="${EMPTY_DESCRIPTION}">${escapeHtml(notFoundEmpty.description)}</p>
  </div>
  <div data-slot="empty-content" class="${EMPTY_CONTENT}">
    <div data-slot="input-group" role="group" class="${INPUT_GROUP} sm:w-3/4">
      <div data-slot="input-group-addon" data-align="inline-start" class="${ADDON}">${SEARCH_SVG}</div>
      <input data-slot="input-group-control" class="${INPUT}" placeholder="${escapeAttr(notFoundEmpty.searchPlaceholder)}" />
      <div data-slot="input-group-addon" data-align="inline-end" class="${ADDON_END}"><kbd class="${KBD}">/</kbd></div>
    </div>
    <p data-slot="empty-description" class="${EMPTY_DESCRIPTION}">
      ${escapeHtml(notFoundEmpty.supportText)} <a href="${escapeAttr(notFoundEmpty.supportHref)}">${escapeHtml(notFoundEmpty.supportLabel)}</a>
    </p>
  </div>
</div>`)
}

export function buildEmptyAlpineHtml(): string {
  return `<div class="space-y-4">
  ${buildFigmaLink()}
  <div class="${emptyFrameClass}">
    ${buildProjectsEmpty()}
    ${buildCloudEmpty()}
    ${buildNotificationsEmpty()}
    ${buildOfflineEmpty()}
    ${buildTeamEmpty()}
    ${buildNotFoundEmpty()}
  </div>
</div>`
}

export function extractEmptyToAlpine(_root: HTMLElement): string {
  return formatHtml(buildEmptyAlpineHtml())
}
