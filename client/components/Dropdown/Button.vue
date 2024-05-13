<script setup lang="ts">
import { MenuItem } from "@headlessui/vue";

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <MenuItem v-slot="{ active }">
    <button
      class="w-full text-right block px-3 py-1 text-sm text-gray-700 transition duration-1000 ease-in-out"
      :class="[active && 'bg-gray-100']"
      v-bind="$attrs"
    >
      <slot />
    </button>
  </MenuItem>
</template>
