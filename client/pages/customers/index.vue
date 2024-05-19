<template>
    <NuxtLayout name="app-layout">
        <Head>
            <Title>POS - Customers</Title>
        </Head>
      <main class="max-w-screen-lg mx-auto">
        <div class="flex m-auto items-center justify-between bg-gray-200 dark:bg-gray-800 px-5 rounded">
          <p class="text-black dark:text-gray-300 text-2xl font-bold">Customers</p>
          <div>
            <Button variant="secondary" size="icon" class="rounded-full hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-green-800">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
              </svg>
            </Button>
          </div>
        </div>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="w-[100px]">
                  Code
                </TableHead>
                <TableHead>Customer</TableHead>
                <TableHead class="text-center">Points</TableHead>
                <TableHead class="text-center">Active</TableHead>
                <TableHead class="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="customer in customers" :key="customer.customer_code">
                <TableCell class="font-medium">
                  {{ customer.customer_code }}
                </TableCell>
                <TableCell>{{ customer.name }}</TableCell>
                <TableCell class="text-center">{{ customer.points }}</TableCell>
                <TableCell class="text-center">
                  <p :class="{ 'text-green-700': customer.is_active, 'text-red-700': !customer.is_active }">
                    {{ customer.is_active ? 'Active' : 'Inactive' }}
                  </p>
                </TableCell>
                <TableCell class="text-right">
                  <Button class="mx-0.5 bg-green-700 rounded-full" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                  </Button>
                  <Button class="mx-0.5 rounded-full bg-red-700" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                      <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                    </svg>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </main>
    </NuxtLayout>
</template>

<script setup lang="ts">
// definePageMeta({ middleware: ["auth"] });

import { Button } from '~/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'

const customers = [
  {
    customer_code: '120391201',
    name: 'Yow Wan Zow',
    points: 100,
    is_active: false,
  },
  {
    customer_code: '120112231',
    name: 'Zuan Merks',
    points: 100,
    is_active: true,
  },
  {
    customer_code: '120451261',
    name: 'Juan Walow',
    points: 100,
    is_active: true,
  }
]
</script>
