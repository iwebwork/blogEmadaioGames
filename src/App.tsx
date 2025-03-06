import React from 'react';
import './App.css';
import LayoutViewUi from './ui/layout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import NoticiasView from './noticias/index';

const Home: React.FC = () => {
  return <Navigate to='/noticias' />
}

const App: React.FC = () => {
  return (
    <LayoutViewUi>
      <BrowserRouter>
        <Routes>
          <Route path='/noticias' element={<NoticiasView />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LayoutViewUi>
  )
}

export default App;
