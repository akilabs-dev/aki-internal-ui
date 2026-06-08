export const emptyFrameClass =
  'grid w-full grid-cols-1 gap-6'

export const emptySectionClass = 'flex min-h-[280px] items-center justify-center p-4'

export const projectsEmpty = {
  title: 'No Projects Yet',
  description:
    'You haven\'t created any projects yet. Get started by creating your first project.',
  primaryAction: 'Create Project',
  secondaryAction: 'Import Project',
  learnMoreLabel: 'Learn More',
  learnMoreHref: '#',
} as const

export const cloudEmpty = {
  title: 'Cloud Storage Empty',
  description: 'Upload files to your cloud storage to access them anywhere.',
  action: 'Upload Files',
} as const

export const notificationsEmpty = {
  title: 'No Notifications',
  description: 'You\'re all caught up. New notifications will appear here.',
  action: 'Refresh',
} as const

export const offlineEmpty = {
  title: 'User Offline',
  description:
    'This user is currently offline. You can leave a message to notify them or try again later.',
  avatarSrc: 'https://github.com/zernonia.png',
  avatarFallback: 'ZN',
  action: 'Leave Message',
} as const

export const teamEmpty = {
  title: 'No Team Members',
  description: 'Invite your team to collaborate on this project.',
  action: 'Invite Members',
  members: [
    {
      src: 'https://github.com/ace-of-aces.png',
      alt: '@ace-of-aces',
      fallback: 'AA',
    },
    {
      src: 'https://github.com/sadeghbarati.png',
      alt: '@sadeghbarati',
      fallback: 'SB',
    },
    {
      src: 'https://github.com/zernonia.png',
      alt: '@zernonia',
      fallback: 'ZN',
    },
  ],
} as const

export const notFoundEmpty = {
  title: '404 - Not Found',
  description:
    'The page you\'re looking for doesn\'t exist. Try searching for what you need below.',
  searchPlaceholder: 'Try searching for pages...',
  supportText: 'Need help?',
  supportHref: '#',
  supportLabel: 'Contact support',
} as const
