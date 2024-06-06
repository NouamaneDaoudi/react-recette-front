

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Careers from './page/careers';
import Accueil from './page/Accueil';
import AllRecipes from './page/AllRecipes';

export default function test() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      
        <Route path='/menu' element={<Careers />} />
        <Route path='/' element={<Accueil />} />
        <Route path='/receip/:slug' element={<AllRecipes /> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


