<script setup lang="ts">
const auth = useAuthStore();
const router = useRouter();
const localeRoute = useLocaleRoute();

definePageMeta({
  name: "app.auth.login",
});

const form = reactive({
  email: "",
  password: "",
});

const onLoginButtonPressed = async () => {
  await auth.login(form);
  router.push(localeRoute({ name: "app.index" }) || "/");
};
</script>

<template>
  <form class="container">
    <UIInput
      id="email"
      type="text"
      label="Email"
      placeholder="Email"
      v-model="form.email"
      required
    />
    <UIInput
      id="password"
      type="password"
      label="Password"
      placeholder="Password"
      v-model="form.password"
      required
    />
    <UIButton class="w-full mt-4" @click.prevent="onLoginButtonPressed">
      Login
    </UIButton>
  </form>
</template>
