import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// English
import en from '../Assets/locales/en.json';

/**
 * @todo Implement i18next support features
 * @body Check out the tools [here](https://www.i18next.com/overview/plugins-and-utils)
 */

export enum Language {
  English = 'en'
}

const resources = {
  [Language.English]: {
    translation: en
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: resources,
    lng: Language.English, // Change current language on the end of this file
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;

export const getCurrentLanguage = (): string => {
  return i18n.language;
};

export type LanguageReturnType = string[];

export const getLanguagesList = (): LanguageReturnType[] => [
  ['English', Language.English]
];

export const changeCurrentLanguage = (language: Language): void => {
  i18n.changeLanguage(language);
};

export const existsLanguageByCode = (code: string): boolean => {
  const languages: LanguageReturnType[] = getLanguagesList();
  let exists = false;

  languages.forEach((lang) => {
    if (lang[0].toLowerCase() === code.toLowerCase()) {
      exists = true;
      return;
    }
  });

  return exists;
};
