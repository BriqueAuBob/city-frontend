import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  if (!auth.isAuthenticated && !to.path.includes("/app/auth")) {
    return navigateTo("/app/auth/login");
  }
});
