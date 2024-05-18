<script lang="ts" setup>
import { DrawerContent, DrawerPortal } from 'vaul-vue'
import type { DialogContentEmits, DialogContentProps } from 'radix-vue'
import { useForwardPropsEmits } from 'radix-vue'
import type { HtmlHTMLAttributes } from 'vue'
import DrawerOverlay from './DrawerOverlay.vue'
import { cn } from '@/lib/utils'

const props = defineProps<DialogContentProps & { class?: HtmlHTMLAttributes['class'] }>()
const emits = defineEmits<DialogContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContent
      v-bind="forwarded" :class="cn(
        'fixed top-0 left-0 z-50 flex h-full flex-col rounded-xl border bg-background items-center',
        props.class,
      )"
    >
<!--      <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />-->
      <slot />
    </DrawerContent>
  </DrawerPortal>
</template>
