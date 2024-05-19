<template>
    <Head>
        <Title>POS - Create Account</Title>
    </Head>
  <div class="p-5 sm:w-auto max-w-xl m-auto">
      <Card class="w-full p-10 mt-40">
          <NuxtLink to="/">
              <Button variant="destructive">Back</Button>
          </NuxtLink>
          <p class="text-3xl font-bold text-center pb-8">Create Account</p>
          <form @submit.prevent="submit">
              <!-- Name -->
              <div>
                  <Label class="text-gray-500" for="name">Name</Label>
                  <Input
                      id="name"
                      type="text"
                      class="block mt-1 w-full"
                      v-model="data.name"
                      :errors="errors.name"
                      required
                      autoFocus
                  />
              </div>

              <!-- Email Address -->
              <div class="mt-4">
                  <Label class="text-gray-500" for="email">Email</Label>
                  <Input
                      id="email"
                      type="email"
                      class="block mt-1 w-full"
                      v-model="data.email"
                      :errors="errors.email"
                      required
                  />
              </div>

              <!-- Password -->
              <div class="mt-4">
                  <Label class="text-gray-500" for="password">Password</Label>
                  <Input
                      id="password"
                      type="password"
                      class="block mt-1 w-full"
                      v-model="data.password"
                      :errors="errors.password"
                      required
                      autoComplete="new-password"
                  />
              </div>

              <!-- Confirm Password -->
              <div class="mt-4">
                  <Label class="text-gray-500" for="password_confirmation">Confirm Password</Label>
                  <Input
                      id="password_confirmation"
                      type="password"
                      class="block mt-1 w-full"
                      v-model="data.password_confirmation"
                      :errors="errors.password_confirmation"
                      required
                  />
              </div>

              <div class="flex items-center justify-end mt-4">
                  <NuxtLink
                      href="/login"
                      class="underline text-sm text-gray-600 hover:text-gray-900"
                  >
                      Already registered?
                  </NuxtLink>

                  <Button class="ml-3" :disabled="inProgress">Register</Button>
              </div>
          </form>
      </Card>
  </div>
</template>

<script setup lang="ts">
import {Button} from "~/components/ui/button";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";

definePageMeta({ middleware: ["guest"] });

const router = useRouter();
const { register } = useAuth();

const data = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const {
  submit,
  inProgress,
  validationErrors: errors,
} = useSubmit(() => register(data), {
  onSuccess: () => router.push("/dashboard"),
});
</script>
