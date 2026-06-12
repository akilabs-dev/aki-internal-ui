export const fieldFrameClass = 'grid w-full grid-cols-1 gap-8'

export const fieldSectionClass = 'flex w-full justify-center p-4'

export const fieldSectionWidthClass = 'w-full max-w-md'

export const fieldProfileWidthClass = 'w-full max-w-4xl'

export const paymentMonths = [
  '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
] as const

export const paymentYears = ['2024', '2025', '2026', '2027', '2028', '2029'] as const

export const departmentOptions = [
  { value: 'engineering', label: 'Engineering' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
  { value: 'support', label: 'Customer Support' },
  { value: 'hr', label: 'Human Resources' },
  { value: 'finance', label: 'Finance' },
  { value: 'operations', label: 'Operations' },
] as const

export const desktopCheckboxItems = [
  { id: 'hard-disks', key: 'hardDisks' as const, label: 'Hard disks', defaultChecked: true },
  { id: 'external-disks', key: 'externalDisks' as const, label: 'External disks' },
  { id: 'cds-dvds', key: 'cdsDvds' as const, label: 'CDs, DVDs, and iPods' },
  { id: 'connected-servers', key: 'connectedServers' as const, label: 'Connected servers' },
] as const

export const subscriptionOptions = [
  { id: 'plan-monthly', value: 'monthly', label: 'Monthly ($9.99/month)' },
  { id: 'plan-yearly', value: 'yearly', label: 'Yearly ($99.99/year)' },
  { id: 'plan-lifetime', value: 'lifetime', label: 'Lifetime ($299.99)' },
] as const

export const computeOptions = [
  {
    id: 'kubernetes-r2h',
    value: 'kubernetes',
    title: 'Kubernetes',
    description: 'Run GPU workloads on a K8s configured cluster.',
  },
  {
    id: 'vm-z4k',
    value: 'vm',
    title: 'Virtual Machine',
    description: 'Access a VM configured cluster to run GPU workloads.',
  },
] as const
