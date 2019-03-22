import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';
import { languageChange } from 'i18next-redux-languagedetector';

import configureStore, { history } from './redux';
import configureI18n from './i18n';

import App from './app';

import './styles.scss';

const i18nextConfig = {
  language: null,
  whitelist: ['en', 'ru'],
  ns: ['common'],
  defaultNS: 'common'
};

const store = configureStore({
  i18next: i18nextConfig
});

const i18n = configureI18n({
  i18nextConfig,
  redux: {
    lookupRedux: function() {
      return store.getState().i18next;
    },
    cacheUserLanguageRedux: function(language) {
      store.dispatch(languageChange(language));
    }
  }
});

const root = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ConnectedRouter>
  </Provider>,
  root
);
