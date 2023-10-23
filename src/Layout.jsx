import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Promotion from './components/Promotion'
import Featured from './components/Featured'

const Layout = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Promotion />
    <Featured />
    </>
  )
}

export default Layout