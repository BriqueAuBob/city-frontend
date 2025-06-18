import { formatDate } from "#imports";

const useDate = () => {
  const { locale } = useI18n();

  const format = (date: Date): string => {
    return formatDate(date, locale.value);
  };

  return { format };
};

export default useDate;
