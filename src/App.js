import logo from './logo.svg';
import './App.css';
import CreateTheater from './Components/CreateTheater';
import CreateShow from './Components/CreateShow';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import ShowTheaters from './Components/ShowTheaters';
import Shows from './Components/Shows';
import Seats from './Components/Seats';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Verification from './Components/Verification';
import { createContext, useState } from 'react';
import PasswordChange from './Components/PasswordChange';
import Forget from './Components/Forget';
import PaymentPage from './Components/PaymentPage';
import CheckoutForm from './Components/CheckoutForm';
import Success from './Components/Success';
export let contx = createContext()
function App() {

  const [prize, setPrize] = useState(0)



  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Signup />} />

        <Route path="/theaters" element={<Protectedroute><ShowTheaters /></Protectedroute>} />
        <Route path="/shows/:id" element={<Protectedroute><Shows /></Protectedroute>} />
        <Route path="/createshows/:id" element={<Protectedroute><CreateShow /></Protectedroute>} />
        <Route path="createtheater" element={<Protectedroute><CreateTheater /></Protectedroute>} />

        <Route path="/bookseat/:id" element={<contx.Provider value={{ prize, setPrize }} ><Protectedroute><Seats /></Protectedroute></contx.Provider>} />
        <Route path="/pay" element={<contx.Provider value={{ prize }} ><PaymentPage /></contx.Provider>} />

        <Route path="/payment-success" element={<Success />} />

        <Route path="/login" element={
          <Login />
        } />
        <Route path="/verification-link/:username/:id" element={<Verification />} />
        <Route path="/password-change/:username" element={<Protectedroute><PasswordChange /></Protectedroute>} />
        <Route path="/forgetpassword" element={<Forget />} />

        <Route path="/checkout" element={<CheckoutForm />} />

      </Routes>




    </div>
  );
}
function Protectedroute({ children }) {
  const navigate = useNavigate()
  const isAuth = localStorage.getItem('token')
  if (isAuth) {
    return (
      children
    )
  } else {
    navigate("/login")
  }

}




export default App;
