export const useTranslation = () => {
  return [
    (key: string) => {
      return `t(${key})`;
    },
    {
      changeLanguage: () => new Promise(() => {})
    }
  ];
};

