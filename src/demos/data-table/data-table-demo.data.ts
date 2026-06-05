export type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const dataTablePayments: Payment[] = [
  { id: 'm5gr84i9', amount: 316, status: 'success', email: 'ken99@yahoo.com' },
  { id: '3u1reuv4', amount: 242, status: 'success', email: 'abe45@gmail.com' },
  { id: 'derv1ws0', amount: 837, status: 'processing', email: 'monserrat44@gmail.com' },
  { id: '5kma53ae', amount: 874, status: 'success', email: 'silas22@gmail.com' },
  { id: 'bhqecj4p', amount: 721, status: 'failed', email: 'carmella@hotmail.com' },
]

export const dataTablePageSize = 5
export const dataTableFilterPlaceholder = 'Filter emails...'
export const dataTableEmptyLabel = 'No results.'

export const dataTableFrameMaxWidthPx = 960
export const dataTableFrameClass =
  'flex w-full flex-col gap-3 rounded-xl border border-border p-5'

export function dataTableFrameStyle(): { maxWidth: string } {
  return { maxWidth: `${dataTableFrameMaxWidthPx}px` }
}

export const dataTableRootClass = 'w-full'
