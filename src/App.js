import React from 'react'
import CollageSection from './Components/CollageSection'
import Footer from './Components/Footer'
import Header from './Components/Header'
import MainBanner from './Components/MainBanner'
import Trial from './Components/Trial'

export default function App() {
  return (
    <>
    <Header/>
    <MainBanner />
    <CollageSection />
    {/* <Trial/> */}
    <Footer/>
    </>
  )
}
