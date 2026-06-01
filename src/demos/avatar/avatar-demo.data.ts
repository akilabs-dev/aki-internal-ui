export const avatarSizePx = 32
export const avatarRoundedLgRadiusPx = 10

export type AvatarShape = 'circle' | 'rounded-lg'

export type AvatarDemoItem = {
  id: string
  src: string
  alt: string
  fallback: string
  shape?: AvatarShape
}

export const avatarCircularItem: AvatarDemoItem = {
  id: 'shadcn',
  src: 'https://github.com/shadcn.png',
  alt: '@shadcn',
  fallback: 'CN',
  shape: 'circle',
}

export const avatarSquareItem: AvatarDemoItem = {
  id: 'evilrabbit',
  src: 'https://github.com/evilrabbit.png',
  alt: '@evilrabbit',
  fallback: 'ER',
  shape: 'rounded-lg',
}

export const avatarGroupItems: AvatarDemoItem[] = [
  {
    id: 'shadcn',
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallback: 'CN',
  },
  {
    id: 'leerob',
    src: 'https://github.com/leerob.png',
    alt: '@leerob',
    fallback: 'LR',
  },
  {
    id: 'evilrabbit',
    src: 'https://github.com/evilrabbit.png',
    alt: '@evilrabbit',
    fallback: 'ER',
  },
]
