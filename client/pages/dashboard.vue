<template>
  <NuxtLayout name="app-layout">
    <Head>
      <Title>POS - Dashboard</Title>
    </Head>

    <main>
      <div>
        <p class="text-3xl font-bold">Dashboard</p>
      </div>
      <Card class="px-2 py-5 mt-6 w-sm">
        <div class="flex flex-col">
          <p>Total Sales</p>
          <div class="p-3">
            <Chart class="h-72"/>
          </div>
        </div>
      </Card>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
// definePageMeta({ middleware: ["auth"] });
const loading = ref(false)
</script>
