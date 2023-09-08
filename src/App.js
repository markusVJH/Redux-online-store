import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreNavBar from './components/StoreNavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/List';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <StoreNavBar />
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
