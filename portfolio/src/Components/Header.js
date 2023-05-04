import React from 'react';
import myImage from '../assets/a53535a6b8af3020d971606df2a0459b.jpg';
import myImage2 from '../assets/a53535a6b8af3020d971606df2a0459b.jpg';
import linkedin from '../assets/new-linkedin-logo-white-black-png.png';
import GitHub from '../assets/unnamed.png';

export default function Header() {
  return (
    <>
      <div className='Headerbg'>
        <div className="flex items-center justify-between">
          <img src={myImage} alt="My Image" className="w-20" />
          <div className="flex">
            <button className="text-white font-bold py-2 px-4 mr-2 rounded">
              projects 
            </button>
            <button className="text-white font-bold py-2 px-4 mr-2 rounded">
              contact 
            </button>
            <button className="text-white font-bold py-2 px-4 mr-2 rounded">
              Resume 
            </button>
            <button>
              <img src={linkedin} alt="My Image" className="w-14" />
            </button>
            <button>
              <img src={GitHub} alt="My Image" className="w-14" />
            </button>
          </div>
        </div>
      </div>
      <img src={myImage2} className="h-screen w-screen object-cover" />

      <div className='color'></div>
      
    </>
  );
}
