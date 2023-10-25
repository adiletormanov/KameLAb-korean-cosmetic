import { Route, Routes } from 'react-router-dom';
import {Suspense } from 'react';

import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Contacts from './pages/Contacts/Contacts';
import Catalog from './pages/Catalog/Catalog';
import CartItem from './pages/CartItem/CartItem';
import Certificate from './pages/Certificate/Certificate';
import Delivery from './pages/Delivery/Delivery';
import Favorites from './pages/Favorites/Favorites';
import Faq from './pages/Faq/Faq';
import Order from './pages/Order/Order';
import MyOrders from './pages/NotFound/NotFound';
import './i18n'
import NotFound from './pages/NotFound/NotFound';




function App() {
  return (
    <Suspense fallback={"...loading"}>
      <Routes>




        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/cartItem/:id" element={<CartItem/> } />
          <Route path="/certificate" element={<Certificate/>} />
          <Route path="/delivery" element={<Delivery/>} />
					<Route path='/favorites' element={<Favorites/>}/>
					<Route path="/faq" element={<Faq/>} />
					<Route path='/order' element={<Order/>}/>
					<Route path='/notfound' element={<NotFound/>}/>

        </Route>


      </Routes>
    </Suspense>
  );
}

export default App;
