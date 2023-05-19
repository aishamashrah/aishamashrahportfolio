import React from 'react';
import Projects from './Projects';
import About from './About';
import Skill from './skills'
import Contact from './Contact/contact';
import ContactPage from '../Components/Contact/contact'
import Education from './Education';
export default function Header() {
  return (
    <>
      
 
      <div className=''>
      <About/>
      </div>

      
      <div className=''>
      <Skill/>
   </div>
   
      <div className=''>
      <Projects/>
   </div>
   <section id='skills'>
   <div className=''>
   <ContactPage/>
   </div>
   </section>
    </>
  );
}
