import './App.css'
import { Route, Routes } from 'react-router-dom';

import Login from './views/Auth/Login'
import Signup from './views/Auth/Signup';
import Dashboard from './views/Dashboard/Dashboard';
import RequireAuth from './compoents/RequiredAuth';
import useAuthCheck from './hooks/useAuthCheck';
import Home from './views/Home/Home';
import Layout from './compoents/LandignLayout/Layout';
import Product from './views/Product/Product';
import ProductDetails from './views/Product/ProductDetails';

function App() {

  // authentication checking
  const authChecked = useAuthCheck();

  // checking authentication
  if (!authChecked) return <div style={{ textAlign: 'center' }}>Checking authentication....</div>

  return (
    <>
      <Routes>

        <Route path="/" element={<Layout>
          <Home />
        </Layout>} />

        <Route path="/product" element={<Layout>
          <Product />
        </Layout>} />

        <Route path="/product/:productId" element={<Layout>
          <ProductDetails />
        </Layout>} />


        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>
        } />

      </Routes>
    </>
  )
}

export default App
