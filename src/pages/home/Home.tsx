import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/Home/HeroSection'
import LatestNews from '../../components/Home/LatestNews'

const Home :React.FC= () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <LatestNews/>
    </>
  )
}

export default Home
