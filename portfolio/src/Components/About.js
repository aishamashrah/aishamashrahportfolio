import React from 'react';
import myImage from '../assets/58-CSAS5_Headshots_Aisha_Mashrah.jpg';
import myImage2 from '../assets/georgios-kaleadis-aBTfTMsOCOI-unsplash.jpg';
import Projects from './Projects';

import linkedin from '../assets/new-linkedin-logo-white-black-png.png';
import GitHub from '../assets/unnamed.png';

export default function About() {
  return (
    <div className='relative'>
      <img src={myImage2} className="hihh w-screen" />
  
      <div className=" flex absolute top-0 left-0 right-0 bottom-45  justify-center items-center">
        <div className="flex">
          <button className=" btn text-white font-bold py-2 px-4 mr-2 rounded font-serif text-l pt-10">
            Projects
            <span className="btn-before"></span>
          </button>
          <button className=" btn text-white font-bold py-2 px-4 mr-2 rounded font-serif text-l pt-10">
            Contact
          </button>
          <button className="btn text-white font-bold py-2 px-4 mr-2 rounded font-serif text-l pt-10">
            Resume
          </button>
          <button className="btn text-white font-bold py-2 px-4 mr-2 rounded font-serif text-l pt-10">
            Linkedin
          </button>
          <button className="btn text-white font-bold py-2 px-4 mr-2 rounded font-serif text-l pt-10">
            GitHub
          </button>

          {/* <button>
            <img src={linkedin} alt="My Image" className="w-14" />
          </button>
          <button>
            <img src={GitHub} alt="My Image" className="w-14" />
          </button> */}
        </div>
      </div>
  
      <h1 className='absolute top-44 mt-10 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-4xl font-extrabold text-white text-center'>
        <span>I</span>M<span>POSSIBLE</span>
      </h1>
  
      <div className='absolute top-96 left-64 w-full h-full'>
        <div className='aboutme p-20'>
          <div class="grid grid-cols-2 gap-4">
            <div className='w-48'>
              <img src={myImage} alt="My Image" />
            </div>
  
            <div>
              <h1 className='text-2xl font-serif'>Aisha Mashrah</h1>
              <lorem>orem ipsum dolor sitorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero e amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora tororem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora tor</lorem>
              <div>
                <h5>
                  <span>
                <button className='mt-10 font-serif bg-gray-400 p-2 rounded'>Resume</button>
                </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )

  
}
{/* <div className='relative'>
  <img src={myImage2} className="hihh w-screen" />

  <div className="absolute top-0 left-0 right-0 sm:bottom-45 justify-center items-center">
    <div className="flex">
      <button className="btn text-white font-bold py-2 px-4 mr-2 rounded font-serif text-l pt-10">
        Projects
        <span className="btn-before"></span>
      </button>
      <button className="btn text-white font-bold py-2 px-4 mr-2 rounded font-serif text-l pt-10">
        Contact
      </button>
      <button className="btn text-white font-bold py-2 px-4 mr-2 rounded font-serif text-l pt-10">
        Resume
      </button>
      <button className="btn text-white font-bold py-2 px-4 mr-2 rounded font-serif text-l pt-10">
        Linkedin
      </button>
      <button className="btn text-white font-bold py-2 px-4 mr-2 rounded font-serif text-l pt-10">
        GitHub
      </button>
    </div>
  </div>

  <h1 className='absolute top-44 mt-10 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-4xl font-extrabold text-white text-center'>
    <span>I</span>M<span>POSSIBLE</span>
  </h1>

  <div className='absolute top-96 left-0 sm:left-64 w-full sm:w-auto h-full'>
    <div className='aboutme p-20'>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className='w-48'>
          <img src={myImage} alt="My Image" className="myimg" />
        </div>

        <div>
          <h1 className='text-2xl font-serif'>Aisha Mashrah</h1>
          <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <div>
            <h5>
              <button className='mt-10 font-serif bg-gray-400 p-2 rounded'>Resume</button>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
