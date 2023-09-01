import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreNavBar from './components/StoreNavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <StoreNavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={""} />
          <Route path='/cart' element={""} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
