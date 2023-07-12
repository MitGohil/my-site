import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './CM-cmp/Header';
import Home from './Home';
import About from './About';
import Contactus from './Contactus';
import Product from './Product';
import Career from './Career';
import Category from './Category';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contactus' element={<Contactus />} />
            <Route path='product' element={<Product />} />
            <Route path='career' element={<Career />} />
            <Route path='category' element={<Category />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
