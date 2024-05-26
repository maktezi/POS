<script setup lang="ts">
import { currencyFormat } from '~/utils/pos'
const totalTax = ref(500000)
const promoCode = ref("POTATO101")
const discount = ref(20)
</script>

<template>
  <div class="flex flex-col m-auto items-end bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
    <p class="text-black dark:text-gray-300 text-sm font-medium">Taxable Amount: <strong>₱ {{ currencyFormat(totalTax) }}</strong></p>
    <p class="text-black dark:text-gray-300 text-sm font-medium">Promo Code: <strong>{{ promoCode }}</strong></p>
    <p class="text-black dark:text-gray-300 text-sm font-medium">Discount: <strong>{{ discount }}%</strong></p>
  </div>
</template>
