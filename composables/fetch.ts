import { useAuthStore } from "~/stores/auth";

const setHeaders = (options: any) => {
  options.headers ??= {};
  if (options.body instanceof FormData) {
    return;
  }
  options.headers["Content-Type"] = "application/json";
  options.headers["Accept"] = "application/json";
};

export const useFetchApi = async <T>(
  url: string,
  options: Parameters<typeof useFetch<T>>[1] = {}
) => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();
  const { $toast } = useNuxtApp();

  if (authStore.token) {
    options = options || {};
    options.headers = {
      ...options?.headers,
      Authorization: "Bearer " + authStore.token,
    };
  }

  setHeaders(options);

  try {
    return await useFetch<T>(url, {
      baseURL: config.public.base_url,
      ...options,
    });
  } catch (err: any) {
    // $toast?.danger?.(
    //   err?.response?._data?.violations?.[0]?.message ??
    //     "Une erreur est survenue..."
    // );
    throw err;
  }
};

export const $fetchApi = async <T>(
  url: string,
  options: Parameters<typeof $fetch>[1] = {}
) => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();
  const { $toast } = useNuxtApp();

  if (authStore.token) {
    options = options || {};
    options.headers = {
      ...options?.headers,
      Authorization: "Bearer " + authStore.token,
    };
  }

  setHeaders(options);

  try {
    return await $fetch<T>(url, {
      baseURL: config.public.base_url,
      ...options,
    });
  } catch (err: any) {
    // $toast?.danger?.(
    //   err?.response?._data?.violations?.[0]?.message ??
    //     "Une erreur est survenue..."
    // );
    throw err;
  }
};
