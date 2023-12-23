import './App.css'
import { Route, Routes } from 'react-router-dom';

import Login from './views/Auth/Login'
import Signup from './views/Auth/Signup';
import Dashboard from './views/Dashboard/Dashboard';
import RequireAuth from './compoents/RequiredAuth';
import useAuthCheck from './hooks/useAuthCheck';

function App() {

  // authentication checking
  const authChecked = useAuthCheck();

  // checking authentication
  if (!authChecked) return <div style={{ textAlign: 'center' }}>Checking authentication....</div>

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}


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
