<template>
  <NuxtLayout name="app-layout">
    <Head>
      <Title>Point of Sales</Title>
    </Head>
    <Card id="cart" class="min-w-96 max-w-xl mx-auto border-gray-300 p-0.5">
      <CartHeader class="mb-0.5" />
      <CartTable class="mb-0.5" :products="products" />
      <CartTotal class="mb-1" />
      <CartAction />
    </Card>
  </NuxtLayout>
</template>

<script setup lang="ts">
// definePageMeta({ middleware: ["auth"] });

import CartHeader from "~/components/pos/CartHeader.vue";
import CartTable from "~/components/pos/CartTable.vue";
import CartTotal from "~/components/pos/CartTotal.vue";
import CartAction from "~/components/pos/CartAction.vue";

const products = [
  {
    qty: 100,
    item: "Intel Core i9",
    amount: 25000,
    price: "₱250.00"
  },
  {
    qty: 100,
    item: "Intel Core i7",
    amount: 18000,
    price: "₱180.00"
  },
  {
    qty: 100,
    item: "Intel Core i5",
    amount: 15000,
    price: "₱150.00"
  },
  {
    qty: 200,
    item: "AMD Ryzen 9",
    amount: 60000,
    price: "₱300.00"
  },
  {
    qty: 150,
    item: "AMD Ryzen 7",
    amount: 37500,
    price: "₱250.00"
  },
  {
    qty: 250,
    item: "AMD Ryzen 5",
    amount: 50000,
    price: "₱200.00"
  },
  {
    qty: 300,
    item: "Intel Xeon",
    amount: 120000,
    price: "₱400.00"
  },
  {
    qty: 50,
    item: "Intel Pentium",
    amount: 5000,
    price: "₱100.00"
  },
  {
    qty: 120,
    item: "Intel Celeron",
    amount: 10800,
    price: "₱90.00"
  },
  {
    qty: 180,
    item: "AMD Athlon",
    amount: 21600,
    price: "₱120.00"
  }
]
</script>
