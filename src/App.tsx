import { FormProvider } from 'antd/es/form/context';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import AdmRoutes from './adm/routes';
import { AuthProvider } from './contexts/auth/provider';
import { MessageProvider } from './contexts/messages/provider';
import SiteRoutes from './site/routes';

const App: React.FC = () => {


  return (
    <React.StrictMode>
      <BrowserRouter>
        <MessageProvider>
          <FormProvider>
            <AuthProvider>
              <Routes>
                <Route index path='/site/*' element={<SiteRoutes />} />
                <Route path='/adm/*' element={<AdmRoutes />} />
                <Route path='*' element={<Navigate to='/site' />} />
              </Routes>
            </AuthProvider>
          </FormProvider>
        </MessageProvider>
      </BrowserRouter >
    </React.StrictMode>
  )
}

export default App;
