import React from 'react';
import './app.i18n';
import { useTranslation } from 'react-i18next';

const App = () => {
  const [t] = useTranslation();

  return (
    <h1>{t('hello-world')}</h1>
  );
};

export default App;
