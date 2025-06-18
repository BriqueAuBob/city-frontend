import { useAuthStore } from "~/stores/auth";
import { useNuxtApp } from "#app";
import { $fetchApi } from "~/composables/fetch";
import AuthService from "~/services/auth";

export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore();
  const cookie = useCookie("token", {
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  if (!authStore.isAuthenticated) {
    const token = cookie.value;
    if (token) {
      try {
        const user = await AuthService.getCurrentUser(token);
        authStore.user = user;
      } catch (e) {
        cookie.value = null;
      }
    }
  }
});
