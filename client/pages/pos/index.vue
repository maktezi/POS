<template>
  <NuxtLayout name="app-layout">
    <Head>
      <Title>Point of Sales</Title>
    </Head>
    <CartHeader />
    <CartTable :products="products" />
  </NuxtLayout>
</template>

<script setup lang="ts">

import CartHeader from "~/components/pos/CartHeader.vue";
import CartTable from "~/components/pos/CartTable.vue";

const products = [
  {
    qty: '100',
    item: 'Intel Core i9',
    amount: 1034000,
    price: '$250.00',
  },
  {
    qty: '100',
    item: 'Intel Core i7',
    amount: 1212130,
    price: '$180.00',
  },
  {
    qty: '100',
    item: 'Intel Core i5',
    amount: 1230120,
    price: '$150.00',
  }
]
</script>
