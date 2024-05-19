<template>
  <Drawer>
    <DrawerTrigger>
      <MenuLogo />
    </DrawerTrigger>

    <DrawerContent>
      <DrawerHeader class="border-b-2 w-full">
        <div class="flex m-auto justify-center items-center">
          <Logo />
          <p class="pl-3 font-bold">POS</p>
        </div>
      </DrawerHeader>
      <div class='px-4 grow mt-5'>
        <div class='grid gap-2'>
          <NuxtLink :to="link.path" v-for='(link, index) in links' :key='index' class='flex w-full items-center gap-2 px-12 py-2 transition rounded-2xl bg-gray-200 dark:bg-gray-800 cursor-pointer hover:bg-red-500 dark:hover:bg-red-950'>
            <Icon size='25' :name='link.icon' />
            <span>{{ link.title }}</span>
          </NuxtLink>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'

const links = ref([
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'material-symbols:dashboard-rounded'
  },
  {
    title: 'POS',
    path: '/pos',
    icon: 'mdi:monitor-dashboard'
  },
  {
    title: 'Products',
    path: '/products',
    icon: 'ic:baseline-inventory'
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: 'fluent:people-team-24-filled'
  }
])
</script>
