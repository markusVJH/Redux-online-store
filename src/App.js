import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import StoreNavBar from './components/StoreNavBar';

function App() {
  return (
    <div className="App">
      <StoreNavBar></StoreNavBar>
    </div>
  );
}

export default App;
