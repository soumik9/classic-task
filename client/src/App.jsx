import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './views/Auth/Login';

function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}


        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/login" element={<Login />} />


      </Routes>
    </>
  )
}

export default App
