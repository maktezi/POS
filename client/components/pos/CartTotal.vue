<script setup lang="ts">
import { Button } from '@/components/ui/button'
import TrashBin from "~/components/pos/icons/TrashBinIcon.vue";
import { cartClear } from "~/composables/usePos"
import { currencyFormat } from '~/utils/pos'

const totalAmount = ref(10120321)
</script>

<template>
  <div class="flex m-auto items-center justify-between bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
    <div>
      <Button type="button" v-on:click="cartClear" class="rounded hover:bg-red-900 dark:hover:bg-red-700 bg-red-700 dark:bg-red-900">
        <TrashBin />
        <p class="ml-1 text-white">Cart</p>
      </Button>
    </div>
    <p class="text-black dark:text-gray-300 text-md font-medium">Total Amount: <strong>₱ {{ currencyFormat(totalAmount) }}</strong></p>
  </div>
</template>
