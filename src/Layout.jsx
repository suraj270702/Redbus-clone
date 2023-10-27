import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Promotion from './components/Promotion'
import Featured from './components/Featured'
import Application from './components/Application'

const Layout = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Promotion />
    <Featured />
    <Application />
    </>
  )
}

export default Layout