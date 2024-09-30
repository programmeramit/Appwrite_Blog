import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
function HomePage() {
  return (
    <div className='bg-gray-600  w-full'>
        <Header/>
        <Outlet/>
        <Footer/>



    </div>
  )
}

export default HomePage