import React from 'react';
import './app.i18n';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [t] = useTranslation();

  return (
    <div>
      <Routes>
        <Route path={'/'} element={<h1>{t('hello-world')}</h1>}/>
        <Route path={'*'} element={<h1>{t('Page Does Not Exist')}</h1>}/>
      </Routes>
    </div>
  );
};

export default App;
