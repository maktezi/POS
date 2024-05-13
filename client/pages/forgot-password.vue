<script setup lang="ts">
import {Card} from "~/components/ui/card";
import {Button} from "~/components/ui/button";
import {Label} from "~/components/ui/label";
import {Input} from "~/components/ui/input";

definePageMeta({ middleware: ["guest"] });

const { forgotPassword } = useAuth();

const email = ref("");
const resetEmailSent = ref(false);
const status = ref("");

const {
  submit,
  inProgress,
  validationErrors: errors,
} = useSubmit(
  () => {
    status.value = "";
    return forgotPassword(email.value);
  },
  {
    onSuccess: (result) => {
      status.value = result?.status ?? "";
      resetEmailSent.value = true;
    },
  }
);
</script>

<template>
    <Head>
        <Title>POS - Forgot Password</Title>
    </Head>
  <div class="p-10 sm:w-auto max-w-xl m-auto">
      <Card class="w-full p-10 mt-40">
          <NuxtLink to="/">
              <Button variant="destructive">Back</Button>
          </NuxtLink>
          <p class="text-3xl font-bold text-center pb-8">Reset Password</p>
          <div class="mb-4 text-sm text-gray-600">
              Forgot your password? No problem. Just let us know your email address and
              we will email you a password reset link that will allow you to choose a
              new one.
          </div>

          <!-- Session Status -->
          <AuthSessionStatus class="mb-4" :status="status" />

          <form @submit.prevent="submit">
              <!-- Email Address -->
              <div>
                  <Label for="email">Email</Label>
                  <Input
                      id="email"
                      type="email"
                      class="block mt-1 w-full"
                      v-model="email"
                      :errors="errors.email"
                      :disabled="resetEmailSent"
                      required
                      autoFocus
                  />
              </div>

              <div class="flex items-center justify-end mt-4">
                  <Button class="ml-3" :disabled="inProgress || resetEmailSent">
                      Send Reset Link
                  </Button>
              </div>
          </form>
      </Card>
  </div>
</template>
