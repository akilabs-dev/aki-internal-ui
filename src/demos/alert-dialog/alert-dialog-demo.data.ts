export type AlertDialogDemoContent = {
  triggerLabel: string
  title: string
  description: string
  cancelLabel: string
  actionLabel: string
}

export const alertDialogDemoContent: AlertDialogDemoContent = {
  triggerLabel: 'Show Dialog',
  title: 'Are you absolutely sure?',
  description:
    'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
  cancelLabel: 'Cancel',
  actionLabel: 'Continue',
}
