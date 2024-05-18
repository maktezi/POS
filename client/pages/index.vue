<script setup lang="ts">
import {Button} from "~/components/ui/button";

const { isLoggedIn } = useAuth();

definePageMeta({
    layout: false,
});
</script>

<template>
    <Head>
        <Title>POS</Title>
    </Head>
    <div class="items-center justify-center p-6">
        <!-- Logo  -->
        <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/">
                <Logo />
            </NuxtLink>
            <DisplayMode />
        </div>
        <p class="text-2xl pb-2">POS</p>
        <p class="text-xl pb-2">Under Construction</p>
        <template v-if="isLoggedIn">
            <NuxtLink to="/dashboard" class="ml-4 text-sm text-gray-700 underline">
                <Button>DASHBOARD</Button>
            </NuxtLink>
        </template>
        <template v-else>
            <NuxtLink to="/login" class="text-sm text-gray-700 underline">
                <Button>Login</Button>
            </NuxtLink>
            <NuxtLink to="/register" class="ml-4 text-sm text-gray-700 underline">
                <Button variant="secondary" >Register</Button>
            </NuxtLink>
        </template>
    </div>
    <div class="flex m-auto justify-center">
        <img alt="img" src="../assets/working.gif"/>
    </div>
</template>
