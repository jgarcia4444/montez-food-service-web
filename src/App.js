import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import NavHeader from './components/NavHeader';
import Home from './pages/Home';
import Products from './pages/Products';
import OrderOnline from './pages/OrderOnline';
import CostOptimization from './pages/CostOptimization';

const App = () => {

  return (
    <Router>
      <div className="App">
        <NavHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/cost-optimization" element={<CostOptimization />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
