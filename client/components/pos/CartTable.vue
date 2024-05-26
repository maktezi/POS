<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {Card} from "~/components/ui/card";
import TrashBinIcon from "~/components/pos/icons/TrashBinIcon.vue";
import {currencyFormat, qtyFormat} from "~/utils/pos"
import { deleteCartItem, addProductToCart, removeProductToCart } from "~/composables/usePos"
import AddIcon from "~/components/pos/icons/AddIcon.vue";
import RemoveIcon from "~/components/pos/icons/RemoveIcon.vue";

const props = defineProps({
  products: Object
})
</script>

<template>
  <Card>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="min-w-40">
            <strong>ITEM</strong>
          </TableHead>
          <TableHead><strong>Price</strong></TableHead>
          <TableHead class="w-[80px] text-center"><strong>QTY</strong></TableHead>
          <TableHead class="text-right"><strong>AMOUNT</strong></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="product in products" :key="product.item">
          <TableCell class="font-bold">
            <div class="flex items-center">
              <button v-on:click=deleteCartItem()><TrashBinIcon /></button>
              {{ product.item }}
            </div>
          </TableCell>
          <TableCell>₱ {{ currencyFormat(product.price) }}</TableCell>
          <TableCell>
            <div class="flex items-center justify-between">
              <button v-on:click=removeProductToCart()><RemoveIcon /></button>
              {{ qtyFormat(product.qty) }}
              <button v-on:click=addProductToCart()><AddIcon /></button>
            </div>
          </TableCell>
          <TableCell class="text-right">₱ {{ currencyFormat(product.amount) }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
</template>
