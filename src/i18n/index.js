import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ReduxDetector from 'i18next-redux-languagedetector';
import Backend from 'i18next-chained-backend';
import Fetch from 'i18next-fetch-backend';

const Detector = new LanguageDetector();
Detector.addDetector(ReduxDetector);

export default function configureI18n({ i18nextConfig, redux }) {
  i18n
    .use(Backend)
    .use(Detector)
    .use(reactI18nextModule)
    .init({
      backend: {
        backends: [Fetch],
        backendOptions: [
          {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
          }
        ]
      },
      detection: {
        order: ['navigator'],
        lookupRedux: redux.lookupRedux,
        cacheUserLanguageRedux: redux.cacheUserLanguageRedux,
        caches: ['redux'],
        excludeCacheFor: ['cimode']
      },
      whitelist: i18nextConfig.whitelist,
      fallbackLng: i18nextConfig.fallbackLng,
      ns: i18nextConfig.ns,
      defaultNS: i18nextConfig.defaultNS,
      debug: process.env.NODE_ENV !== 'production',
      interpolation: {
        escapeValue: false
      },
      react: {
        wait: false
      },
      nonExplicitWhitelist: true,
      load: 'currentOnly'
    });

  return i18n;
}
