import React from 'react';
import Navbartop from './components/Navbar';
import Applogo from './components/Applogo';
import MainBody from './components/MainBody';
import {CartProvider} from './components/CartContext'

function App() {
  return  <CartProvider>
  <Navbartop/>
  <Applogo/>
  <MainBody/>
  <Applogo/>
  </CartProvider>
}

export default App;
