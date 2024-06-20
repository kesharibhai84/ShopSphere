import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { ProtectedRoutesAdmin } from './ProtectedRoutesAdmin';
import Allproducts from './pages/allproducts/Allproducts';
import Marq from './components/marq/Marq';
import ForgotPassword from './pages/registration/ForgotPassword';
import Hero from './components/herosection/hero';
import UserDetails from './components/userdetails/UserDetails';
import Slider from './components/herosection/slider';
function App() {
  return (
    <MyState>
        <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={
          <ProtectedRoutesAdmin>
            <Dashboard/>
          </ProtectedRoutesAdmin>
        } />
        <Route path="/*" element={<NoPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/productInfo/:id" element={<ProductInfo/>} />
        <Route path="/addProduct" element={<AddProduct/>} />
        <Route path="/updateProduct/:id" element={<UpdateProduct/>} />
        <Route path="/allproducts" element={<Allproducts/>} />
        <Route path="/marq" element={<Marq/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/hero" element={<Hero/>}/>
        <Route path="/user-details" element={<UserDetails/>}/>
        <Route path="/slider" element={<Slider/>}/>
      </Routes>
      <ToastContainer/>
    </Router>
    </MyState>
    
  )
}

export default App


//user proteted route

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

//admin

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'vishalkeshari2004@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' replace />
  }
  
}