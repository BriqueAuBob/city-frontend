<script setup lang="ts">
const auth = useAuthStore();
const router = useRouter();
const localeRoute = useLocaleRoute();

definePageMeta({
  name: "app.auth.login",
  layout: "auth",
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
  <form class="container py-24">
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
    <div class="py-2">
      {{ $t("auth.no_account") }}
      <NuxtLinkLocale
        :to="{ name: 'app.auth.register' }"
        class="text-secondary-500"
      >
        {{ $t("auth.register") }}
      </NuxtLinkLocale>
    </div>
    <UIButton class="w-full mt-4" @click.prevent="onLoginButtonPressed">
      Login
    </UIButton>
  </form>
</template>
