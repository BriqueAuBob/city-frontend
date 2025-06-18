type Violation = {
  propertyPath: string;
  message: string;
};

const useHttpErrors = () => {
  const violations = ref<Violation[]>([]);
  const hasErrors = computed(() => violations.value.length > 0);

  const handle = (res: any) => {
    if (res?.response?.status === 422) {
      violations.value = res.response._data.violations;
    }
    if (res?.response?.status === 401) {
      violations.value = [
        { propertyPath: "email", message: "Invalid credentials" },
      ];
    }
  };

  const getField = (field: string) => {
    const v = violations.value
      .filter((v) => v.propertyPath === field)
      .map((v) => v.message);
    return v;
  };

  const clear = () => {
    violations.value = [];
  };

  return {
    hasErrors,
    violations,
    clear,
    handle,
    getField,
  };
};

export default useHttpErrors;
