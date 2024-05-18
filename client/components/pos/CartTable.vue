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
        <TableRow v-for="p in products" :key="p.item">
          <TableCell class="font-medium">{{ p.item }}</TableCell>
          <TableCell>{{ p.price }}</TableCell>
          <TableCell>{{ p.qty }}</TableCell>
          <TableCell class="text-right">{{ p.amount }}</TableCell>
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
