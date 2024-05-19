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
        'fixed top-0 left-0 z-50 flex h-full flex-col rounded-r-2xl border bg-background items-center',
        'drawer-enter-active',
        props.class,
      )"
    >
      <!--      <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />-->
      <slot />
    </DrawerContent>
  </DrawerPortal>
</template>


<style scoped>
@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.drawer-enter-active {
  animation: slide-in-left 0.5s forwards;
}
</style>
