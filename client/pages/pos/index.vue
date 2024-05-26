<script setup lang="ts">
// definePageMeta({ middleware: ["auth"] });

import CartHeader from "~/components/pos/CartHeader.vue";
import CartTable from "~/components/pos/CartTable.vue";
import CartTotal from "~/components/pos/CartTotal.vue";
import CartAction from "~/components/pos/CartAction.vue";
import {Card} from "~/components/ui/card";
import CartTax from "~/components/pos/CartTax.vue";

const products = [
  {
    qty: 100,
    item: "Intel Core i9",
    amount: 2500,
    price: 250
  },
  {
    qty: 100,
    item: "Intel Core i7",
    amount: 1800,
    price: 180
  },
  {
    qty: 140,
    item: "Intel Core i5",
    amount: 1500,
    price: 150
  },
  {
    qty: 200,
    item: "AMD Ryzen 9",
    amount: 6000,
    price: 300
  },
  {
    qty: 150,
    item: "AMD Ryzen 7",
    amount: 3750,
    price: 250
  },
  {
    qty: 250,
    item: "AMD Ryzen 5",
    amount: 5000,
    price: 200
  },
  {
    qty: 300,
    item: "Intel Xeon",
    amount: 12000,
    price: 400
  },
  {
    qty: 50,
    item: "Intel Pentium",
    amount: 5000,
    price: 100
  },
  {
    qty: 120,
    item: "Intel Celeron",
    amount: 1080,
    price: 90
  },
  {
    qty: 180,
    item: "AMD Athlon",
    amount: 2160,
    price: 120
  }
]
</script>

<template>
  <NuxtLayout name="app-layout">
    <Head>
      <Title>Point of Sales</Title>
    </Head>

    <Card id="cart" class="min-w-96 max-w-2xl mx-auto border-gray-300 p-0.5">
      <CartHeader class="mb-0.5" />
      <CartTable class="mb-0.5" :products="products" />
      <CartTotal class="mb-0.5" />
      <CartTax class="mb-0.5" />
      <CartAction />
    </Card>
  </NuxtLayout>
</template>
