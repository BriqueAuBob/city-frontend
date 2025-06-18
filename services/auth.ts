import type { User, Token } from "~/types/user";

export default class AuthService {
  public static async login(email: string, password: string) {
    return await $fetchApi<{ user: User; token: Token }>("/auth/login", {
      method: "POST",
      body: { email, password },
    });
  }

  public static async register(form: Partial<User>): Promise<User> {
    return await $fetchApi("/auth/register", {
      method: "POST",
      body: form,
    });
  }

  public static async getCurrentUser(token: string): Promise<{ user: User }> {
    return await $fetchApi("/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}
