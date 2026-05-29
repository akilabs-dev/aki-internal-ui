<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  cardDemoDescription,
  cardDemoFields,
  cardDemoForgotPasswordLabel,
  cardDemoPrimaryActionLabel,
  cardDemoSecondaryActionLabel,
  cardDemoSignUpLabel,
  cardDemoTitle,
} from './card-demo.data'
</script>

<template>
  <div class="flex min-h-[216px] w-full items-center justify-center">
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{{ cardDemoTitle }}</CardTitle>
        <CardDescription>
          {{ cardDemoDescription }}
        </CardDescription>
        <CardAction>
          <Button variant="link">
            {{ cardDemoSignUpLabel }}
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid w-full items-center gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label :for="cardDemoFields.email.id">
                {{ cardDemoFields.email.label }}
              </Label>
              <Input
                :id="cardDemoFields.email.id"
                :type="cardDemoFields.email.type"
                :placeholder="cardDemoFields.email.placeholder"
              />
            </div>
            <div class="flex flex-col space-y-1.5">
              <div class="flex items-center">
                <Label :for="cardDemoFields.password.id">
                  {{ cardDemoFields.password.label }}
                </Label>
                <a
                  href="#"
                  class="ml-auto inline-block text-sm underline"
                >
                  {{ cardDemoForgotPasswordLabel }}
                </a>
              </div>
              <Input
                :id="cardDemoFields.password.id"
                :type="cardDemoFields.password.type"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex flex-col gap-2">
        <Button class="w-full">
          {{ cardDemoPrimaryActionLabel }}
        </Button>
        <Button variant="outline" class="w-full">
          {{ cardDemoSecondaryActionLabel }}
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
