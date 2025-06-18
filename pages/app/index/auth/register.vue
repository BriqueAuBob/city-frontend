<script setup lang="ts">
const auth = useAuthStore();
const router = useRouter();
const localeRoute = useLocaleRoute();

definePageMeta({
  name: "app.auth.register",
});

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const onRegisterButtonPressed = async () => {
  await auth.register(form);
  router.push(localeRoute({ name: "app.index" }) || "/");
};
</script>

<template>
  <form class="container grid grid-cols-1 gap-2">
    <div class="grid grid-cols-2 gap-2">
      <UIInput id="first_name" type="text" v-model="form.firstName" />
      <UIInput id="last_name" type="text" v-model="form.lastName" />
    </div>
    <UIInput id="email" type="text" v-model="form.email" />
    <UIInput id="password" type="password" v-model="form.password" />
    <UIInput
      id="confirm_password"
      type="password"
      v-model="form.confirmPassword"
    />
    <UIButton class="w-full mt-4" @click.prevent="onRegisterButtonPressed">
      Register
    </UIButton>
  </form>
</template>
