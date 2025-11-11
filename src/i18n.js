import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(LanguageDetector)
  .use(Backend) // add backend
  .use(initReactI18next)
  .init({
    lng: 'ru', // defoult language
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'en', 'fi', 'et'],
    backend: {
      // loadPath: '/Printer/locales/{{lng}}/{{ns}}.json' // path to API
      // loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json` 
      loadPath: `public/locales/{{lng}}/{{ns}}.json`, // path to API
    },
    ns: ['translation'], // naming
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;