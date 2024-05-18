<template>
<div class="relative">
  <!-- Mobile Sidebar -->
  <div class="z-50 flex lg:hidden">
    <aside class="fixed overflow-hidden left-0 top-0 z-10 h-screen w-[calc(3.73rem)] border-r border-gray-500 dark:border-gray-800 rounded-r-3xl bg-red-950">
      <div class="h-full flex flex-col justify-between">
        <div>
          <div class="h-14 flex items-center justify-center">
            <NuxtLink class="justify-center flex mt-3" to="/">
              <Logo />
            </NuxtLink>
          </div>
          <div class="mt-6 flex justify-center">
            <ul class="px-1 -ml-px space-y-4 font-medium tracking-wide">
              <li class="w-max space-y-4 group-hover:w-full">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <NuxtLink to="/dashboard" class="py-3 block w-[-52px] rounded-full bg-gray-300 dark:bg-gray-800 hover:bg-red-500 duration-500 dark:hover:bg-red-700">
                        <div class="w-max flex items-center px-3 gap-4">
                          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                          </svg>
                        </div>
                      </NuxtLink>
                    </TooltipTrigger>
                    <TooltipContent align="end">
                      <p>Dashboard</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li class="w-max space-y-4 group-hover:w-full">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <NuxtLink to="/pos/pos" class="hover:bg-red-500 duration-500 py-3 block w-[-52px] rounded-full bg-gray-300 dark:bg-gray-800 dark:hover:bg-red-700">
                        <div class="w-max flex items-center px-3 gap-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M6.32 1.827a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V4.757c0-1.47 1.073-2.756 2.57-2.93ZM7.5 11.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H8.25Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75H8.25Zm1.748-6a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.007Zm-.75 3a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.007Zm1.754-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.008Zm1.748-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-8.25-6A.75.75 0 0 1 8.25 6h7.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-.75Zm9 9a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-2.25Z" clip-rule="evenodd" />
                          </svg>
                        </div>
                      </NuxtLink>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Point of Sales</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li class="w-max space-y-4 group-hover:w-full">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <NuxtLink to="/pos/products" class="hover:bg-red-500 duration-500 py-3 block w-[-52px] rounded-full bg-gray-300 dark:bg-gray-800 dark:hover:bg-red-700">
                        <div class="w-max flex items-center px-3 gap-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                            <path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                          </svg>
                        </div>
                      </NuxtLink>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Products</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li class="w-max space-y-4 group-hover:w-full">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <NuxtLink to="/pos/customers" class="hover:bg-red-500 duration-500 py-3 block w-[-52px] rounded-full bg-gray-300 dark:bg-gray-800 dark:hover:bg-red-700">
                        <div class="w-max flex items-center px-3 gap-4">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                          </svg>
                        </div>
                      </NuxtLink>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Customers</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  </div>

  <!-- Desktop Sidebar -->
  <div class="hidden lg:flex w-[250px] h-screen flex flex-col justify-between border-r">
    <SidebarMenu />
  </div>
</div>
</template>

<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '~/components/ui/tooltip'

const open = ref(true)
</script>
