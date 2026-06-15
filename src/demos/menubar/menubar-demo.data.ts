export const menubarFrameClass = 'mx-auto flex w-full max-w-4xl flex-col gap-6'

export const menubarBlockClass =
  'flex w-full flex-col items-center rounded-md border border-border bg-background p-4 shadow-xs'

export type MenubarProfile = 'andy' | 'benoit' | 'Luis'

export const menubarDefaults = {
  bookmarksBar: false,
  fullUrls: true,
  profile: 'benoit' as MenubarProfile,
}
