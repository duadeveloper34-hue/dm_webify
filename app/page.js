import React from 'react';
// import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';
import Hero from  '@/components/Hero/Hero';

const page = () => {
  return (
    <div className='hero-bg  flex flex-col items-center min-h-screen'>
      <Navbar />
      <Hero />
      {/* <h1 className='text-3xl font-bold text-cream'>Welcome to Next.js!</h1> */}
    </div>
  )
}

export default page
