<template>
  <Card>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[250px]">
            Item
          </TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Qty</TableHead>
          <TableHead class="text-right">
            Amount
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="product in products" :key="product.item">
          <TableCell class="font-medium">{{ product.item }}</TableCell>
          <TableCell>{{ product.price }}</TableCell>
          <TableCell>{{ product.qty }}</TableCell>
          <TableCell class="text-right">{{ product.amount }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
</template>

<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
})
</script>
