<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { alertDialogDemoContent } from './alert-dialog-demo.data'
</script>

<template>
  <div class="flex w-full justify-center">
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <Button variant="outline">
        {{ alertDialogDemoContent.triggerLabel }}
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          {{ alertDialogDemoContent.title }}
        </AlertDialogTitle>
        <AlertDialogDescription>
          {{ alertDialogDemoContent.description }}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>
          {{ alertDialogDemoContent.cancelLabel }}
        </AlertDialogCancel>
        <AlertDialogAction>
          {{ alertDialogDemoContent.actionLabel }}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  </div>
</template>
