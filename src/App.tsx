import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import AdmRoutes from './adm/routes';
import SiteRoutes from './site/routes';
import { FormProvider } from 'antd/es/form/context';
import { AuthProvider } from './contexts/auth/provider';
import hooksApi from './hooks/api';
import { MessageProvider } from './contexts/messages/provider';

const App: React.FC = () => {


  return (
    <React.StrictMode>
      <BrowserRouter>
        <MessageProvider>
          <FormProvider>
            <AuthProvider>
              <Routes>
                <Route path='/site/*' element={<SiteRoutes />} />
                <Route path='/adm/*' element={<AdmRoutes />} />
              </Routes>
            </AuthProvider>
          </FormProvider>
        </MessageProvider>
      </BrowserRouter >
    </React.StrictMode>
  )
}

export default App;
