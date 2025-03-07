import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Hero from "./components/section1/hero";
import Items from './components/section2/toplist';
import Bgimage from "./assets/2.png";
import Banner from "./components/banner/banner";
import Categories from "./components/listitems/categories";
import Reservation from "./components/reservation/index";

import Loginsignup from "./components/loginsignup/signup";
import AboutPage from './components/about/aboutus';
import ContactPage from './components/contact/contactus';
import UserProfile from './components/profile/profile';
import Cart from "./components/listitems/carttable";
import { CartProvider } from "./components/contextapi/cartcontext"; // Import CartProvider
import PageNotFound from "./components/pagenotfound/pagenotfound"

const bgStyle = {
  backgroundImage: `url(${Bgimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: "no-repeat"
};

const App = () => {
  const [isLogin, setIsLogin] = useState(false); 

  return (
    <CartProvider>
      <Router>
        <div style={bgStyle} className='overflow-x-hidden'>
          <div className='min-h-screen bg-white/50 backdrop-blur-3xl'>
            <Navbar />
            <Routes>
              <Route path='/signup' element={<Loginsignup isLogin={isLogin} setIsLogin={setIsLogin} />} />
              <Route path='/' element={<Hero />} />
              <Route path='/home' element={<Hero isLogin={isLogin} />} />
              <Route path='/toplist' element={<Items />} />
              <Route path='/banner' element={<Banner />} />
              <Route path='/categories' element={<Categories />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path='/*' element={
                <>
                <PageNotFound/>
                </>
               
              } />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
