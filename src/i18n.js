import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // add backend
  .use(initReactI18next)
  .init({
    // lng: 'ru', // defoult language
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'en', 'fi', 'et'],
    backend: {
      // loadPath: '${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json', // path to API
      //  loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`, // path to API
       loadPath: `public/locales/{{lng}}/{{ns}}.json`, // path to API
    },
    ns: ['translation'], // naming
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;