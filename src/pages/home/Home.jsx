import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/herosection/herosection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productcard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
import Track from '../../components/track/track'

function Home() {
  return (
   
    <Layout>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonial/>
      
    </Layout>
  )
}

export default Home