<script setup lang="ts">
// definePageMeta({ middleware: ["auth"] });
import BaseChart from "~/components/chart/BarChart.vue";
import BarChart from "~/components/chart/BarChart.vue";
</script>

<template>
  <NuxtLayout name="app-layout">
    <Head>
      <Title>POS - Dashboard</Title>
    </Head>

    <Card class="my-5 ml-20 mr-5">
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
    <BarChart />
  </NuxtLayout>
</template>
