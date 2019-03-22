import React from 'react';
import { withNamespaces } from 'react-i18next';

const Home = React.memo(props => {
  const { t, i18n } = props;
  const data = i18n.getDataByLanguage(i18n.language);
  return (
    <section className={`Home page ${data ? 'ready' : ''}`}>
      <h1>{t('homePage.title')}</h1>
    </section>
  );
});

export default withNamespaces('common')(Home);
