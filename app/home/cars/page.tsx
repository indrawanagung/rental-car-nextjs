import HomeComponent from '@/components/Main/home'
import Navbar from '@/components/Navbar/page'
import CarComponent from '@/components/Shop/page'
import React from 'react'
import NextNProgress from 'nextjs-progressbar';

const Car = () => {
  return (

    <div className='bg-color-secondary'>
        <Navbar/>
       <CarComponent/>
    </div>
  )
}

export default Car