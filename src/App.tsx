import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import './App.css';
import SiteView from './site';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/site/*' element={<SiteView />} />
        <Route path='/*' element={<Navigate to={'/site'} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
