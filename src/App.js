import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; import logo from './logo.svg';
import './App.css';
import CreateTheater from './Components/CreateTheater';
import CreateShow from './Components/CreateShow';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import ShowTheaters from './Components/ShowTheaters';
import Shows from './Components/Shows';
import Seats from './Components/Seats';
import Signup from './Components/authorization/Signup';
import Login from './Components/authorization/Login';
import Logout from './Components/authorization/Logout';
import Verification from './Components/Forget Password/Verification';
import { createContext, useState } from 'react';
import PasswordChange from './Components/Forget Password/PasswordChange';
import Forget from './Components/Forget Password/Forget';
import PaymentPage from './Components/PaymentPage';
import CheckoutForm from './Components/CheckoutForm';
import Success from './Components/Success';
export let contx = createContext()

export let userData = createContext()
function App() {

  const [prize, setPrize] = useState(0)
  const [useData, setUseData] = useState({})


  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<userData.Provider value={{ setUseData }}><Login /></userData.Provider>} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/theaters" element={<Protectedroute><ShowTheaters /></Protectedroute>} />
        <Route path="/shows/:id" element={<Protectedroute><Shows /></Protectedroute>} />
        <Route path="/createshows/:id" element={<Protectedroute><CreateShow /></Protectedroute>} />
        <Route path="createtheater" element={<Protectedroute><CreateTheater /></Protectedroute>} />

        <Route path="/bookseat/:id" element={<contx.Provider value={{ prize, setPrize }} ><Protectedroute><Seats /></Protectedroute></contx.Provider>} />
        <Route path="/pay" element={<contx.Provider value={{ prize }} ><Protectedroute><PaymentPage /></Protectedroute></contx.Provider>} />

        <Route path="/payment-success" element={<userData.Provider><Success value={{ useData }} /></userData.Provider>} />


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
