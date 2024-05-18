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
          <NuxtLink :href="link.path" v-for='(link, index) in links' :key='index' class='flex w-full items-center gap-2 px-14 py-2 transition rounded-xl cursor-pointer hover:bg-red-800 dark:hover:bg-red-950'>
            <Icon size='30' :name='link.icon' />
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
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'
import Button from '@/components/Button.vue'

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
