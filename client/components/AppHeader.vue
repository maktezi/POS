<template>
  <nav class="bg-red-950 m-0">
    <!-- Primary Navigation Menu  -->
    <div class="max-w-full mx-auto">
      <div class="flex justify-between h-14">
        <div class="flex ml-5">
          <AppSidebar />
        </div>
<!--        <div class="flex mt-auto mb-auto ml-20 text-white font-bold text-2xl">-->
<!--          <p class="hidden lg:flex w-[250px]">-->
<!--            Point of Sales-->
<!--          </p>-->
<!--          <p class="lg:hidden sm:flex w-[100px]">-->
<!--            POS-->
<!--          </p>-->
<!--        </div>-->
        <!-- Settings Dropdown  -->
        <div class="flex items-center bg-red-900 pl-10 pr-6 rounded-l-full">
          <Dropdown class="mr-3" align="right">
            <template #trigger>
              <button
                class="flex items-center text-sm font-medium text-white hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out"
              >
                <!-- <div>{{ user?.name }}</div> -->
                <div>admin</div>

                <div class="ml-1">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </template>
            <!-- Authentication  -->
<!--            <DropdownButton @click="logout">-->
<!--              Logout-->
<!--            </DropdownButton>-->
            <DropdownButton>
              <NuxtLink to="/">Logout</NuxtLink>
            </DropdownButton>
          </Dropdown>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <DisplayMode />
              </TooltipTrigger>
              <TooltipContent>
                <p>Display Mode</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

const { user, logout } = useAuth();
const open = ref(false);
</script>
