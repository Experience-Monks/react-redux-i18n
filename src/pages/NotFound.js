import React from 'react';
import { withNamespaces } from 'react-i18next';

const NotFound = React.memo(props => {
  const { t, i18n } = props;
  const data = i18n.getDataByLanguage(i18n.language);
  return (
    <section className={`NotFound page ${data ? 'ready' : ''}`}>
      <h1>{t('notFoundPage.title')}</h1>
    </section>
  );
});

export default withNamespaces('common')(NotFound);
