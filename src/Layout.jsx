import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Promotion from './components/Promotion'
import Featured from './components/Featured'
import Application from './components/Application'
import Rating from './components/Rating'
import Partners from './components/Partners'
import Operators from './components/Operators'
import FAQ from './components/FAQ'

const Layout = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Promotion />
    <Featured />
    <Application />
    <Rating />
    <Partners />
    <Operators />
    <FAQ />
    </>
  )
}

export default Layout