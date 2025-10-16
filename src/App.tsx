import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import AdmRoutes from './adm/routes';
import SiteRoutes from './site/routes';
import { FormProvider } from 'antd/es/form/context';
import { AuthProvider } from './contexts/auth/provider';
import hooksApi from './hooks/api';

const App: React.FC = () => {
  const { post } = hooksApi();
  const [urlIndex, setUrlIndex] = useState<string>("");

  const goToIndex = async () => {
    const response = (await post({ url: `api/menu/getMenuIndex`, body: {} }));

    if (!response.isValid) {
      return;
    }

    setUrlIndex(`${response.data.url}?tipoPostId=${response.data.tipoPostId}`)
  }

  React.useEffect(() => {
    goToIndex();
  }, []);

  React.useEffect(() => {
  }, [urlIndex]);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <FormProvider>
          <AuthProvider>
            <Routes>
              {urlIndex !== "" &&
                <Route index path='*' element={<Navigate to={urlIndex} />} />
              }
              <Route path='/site/*' element={<SiteRoutes />} />
              <Route path='/adm/*' element={<AdmRoutes />} />
            </Routes>
          </AuthProvider>
        </FormProvider>
      </BrowserRouter >
    </React.StrictMode>
  )
}

export default App;
