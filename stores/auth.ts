import { defineStore } from "pinia";
import AuthService from "~/services/auth";
import type { User } from "~/types/user";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const token = useCookie("token", {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  const user = ref<any>(null);
  const localeRoute = useLocaleRoute();

  const isAuthenticated = computed(() => !!user.value);

  const register = async (form: Partial<User>) => {
    await AuthService.register(form);
    await login({
      email: form.email!,
      password: form.password!,
    });
  };

  const login = async (form: { email: string; password: string }) => {
    const { user: userData, token: tokenData } = await AuthService.login(
      form.email,
      form.password
    );
    user.value = userData;
    token.value = tokenData.token;
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    router.push(localeRoute({ name: "app.auth.login" }) ?? "/");
  };

  return {
    token,
    user,
    isAuthenticated,

    register,
    login,
    logout,
  };
});
