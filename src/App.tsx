import { Routes, Route, BrowserRouter } from 'react-router';
import './reset.scss';
import './App.scss';
import React from 'react';
import { Navigation, Header, Footer } from './components';
import { Home, About, Contact } from './pages';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
