import './App.css';
import { Nav } from './components/topbottom/Nav';
import { Home } from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './bootstrap.css'
import About from './components/pages/About';
import Footer from './components/topbottom/Footer';
import ScrollToTop from './Scrolltotop';
import ConatctUs from './components/pages/ContactUs';
import OurProducts from './components/pages/OurProducts';
import Services from './components/pages/Services';
import OurProductsDetails from './components/pages/ProductComp/ProductDetails';

function App() {
  return (
    <>
    <BrowserRouter basename='/perfect5'>
    <ScrollToTop/>
    <div className='d-flex flex-column justify-content-between'>
        <Nav/>
        <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<About/>}/>
          <Route path='/ContactUs' element={<ConatctUs/>}/>
          {/* <Route path='/OurProducts' element={<OurProducts/>}/> */}
          <Route path='/services' element={<Services/>}/>
          <Route path='/OurProductsDet' element={<OurProductsDetails/>}/>
        </Routes>
        </div>
        <Footer/>
    </div>
    </BrowserRouter>
        
    </>
  );
}

export default App;
   