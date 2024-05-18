<template>
  <div>
    <div class='px-4 grow mt-5'>
      <div class='grid gap-2'>
        <NuxtLink :href="link.path" v-for='(link, index) in links' :key='index' class='flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-gray-800'>
          <Icon size='30' :name='link.icon' />
          <span>{{ link.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const links = ref([
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'hugeicons:dashboard-square-setting'
  },
  {
    title: 'Point of Sales',
    path: '/pos/pos',
    icon: 'hugeicons:cashier'
  },
  {
    title: 'Products',
    path: '/pos/products',
    icon: 'gridicons:product'
  },
  {
    title: 'Customers',
    path: '/pos/customers',
    icon: 'carbon:customer'
  }
])
</script>
