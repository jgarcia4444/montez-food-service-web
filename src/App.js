import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import NavHeader from './components/NavHeader';
import Home from './pages/Home';
import Products from './pages/Products';
import OrderOnline from './pages/OrderOnline';
import CostOptimization from './pages/CostOptimization';
import Footer from './components/Footer';
import UserAuth from './pages/UserAuth';
import Account from './pages/Account';
import {store, persistor} from './redux/store';

const App = () => {

  return (
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className="App">
            <NavHeader />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/order-online" element={<OrderOnline />} />
              <Route path="/cost-optimization" element={<CostOptimization />} />
              <Route path="/users/account" element={<Account />} />
              <Route path="/user-auth" element={<UserAuth />} />
            </Routes>
            <Footer />
          </div>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
