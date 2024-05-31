import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/herosection/herosection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productcard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
import Track from '../../components/track/track'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart} from '../../redux/cartSlice'
import Hero from '../../components/herosection/hero'


function Home() {
//   const dispatch = useDispatch();
// const cartItem =useSelector((state)=>state.cart)

// console.log(cartItem)
// const addCart =()=>{
//   dispatch(addToCart("shirt"));
// }

// const deleteCart = () => {
//   dispatch(deleteFromCart("shirt"));
// }

  return (
    <Layout>
      {/* <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button>
      </div> */}
      <HeroSection/>
      {/* <Hero/> */}
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>
      
    </Layout>
  )
}

export default Home