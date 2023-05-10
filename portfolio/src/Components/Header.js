import React from 'react';
import Projects from './Projects';
import About from './About';
export default function Header() {
  return (
    <>
      
      <About/>
      <div className='color'></div>
      <div className='mt-96'>
   ,    <Projects/>
   </div>
    </>
  );
}
