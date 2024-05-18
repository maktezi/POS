<template>
  <NuxtLayout name="app-layout">
    <Head>
      <Title>POS - Dashboard</Title>
    </Head>

    <Card>
      <div class="max-w-full mx-auto sm:px-3 lg:px-8">
        <div class="overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-3">
              <p class="text-black dark:text-gray-300 text-2xl font-bold">
                  Charts
              </p>
          </div>
        </div>
      </div>
    </Card>
  </NuxtLayout>
</template>

<script setup lang="ts">
// definePageMeta({ middleware: ["auth"] });
const loading = ref(false)
</script>
