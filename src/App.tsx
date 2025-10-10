import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import AdmRoutes from './adm/routes';
import SiteRoutes from './site/routes';
import { FormProvider } from 'antd/es/form/context';
import { AuthProvider } from './contexts/auth/provider';
const App: React.FC = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <FormProvider>
          <Routes>
            <Route index path='*' element={<Navigate to={'/site/noticias'} />} />
            <Route path='/site/*' element={<SiteRoutes />} />
            <Route path='/adm/*' element={<AdmRoutes />} />
          </Routes>
        </FormProvider>
      </AuthProvider>

    </BrowserRouter >
  )
}

export default App;
