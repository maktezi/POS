<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
</script>

<template>
    <AppHeader />
    <FlashMessages />
    <div class="grid items-start">
      <div class="p-2">
        <slot />
      </div>
  </div>
</template>
