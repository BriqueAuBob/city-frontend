export const formatDate = (date: Date, locale: string): string => {
  switch (locale) {
    case "en":
      return date.toLocaleDateString("en-US");
    case "fr":
      return date.toLocaleDateString("fr-FR");
    default:
      return date.toLocaleDateString();
  }
};

export const formatDateTime = (date: Date, locale: string): string => {
  switch (locale) {
    case "en":
      return (
        date.toLocaleDateString("en-US") +
        " at " +
        date.toLocaleTimeString("en-US")
      );
    case "fr":
      return (
        date.toLocaleDateString("fr-FR") +
        " à " +
        date.toLocaleTimeString("fr-FR")
      );
    default:
      return date.toLocaleDateString() + " à " + date.toLocaleTimeString();
  }
};
