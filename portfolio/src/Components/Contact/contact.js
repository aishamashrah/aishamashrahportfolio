import React from 'react';

import img1 from '../../assets/email.avif'
import img2 from '../../assets/number.jpg'


function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-center w-full mb-6 text-white h-44 p-20 bgc">Contact</h1>
      <div className="flex flex-col items-center space-y-8 mt-20">
        <div className="flex items-center">
          <img src={img2} alt="Phone Icon" className="w-6 h-6 mr-2" />
          <h3 className="number">209-450-6879</h3>
        </div>
        <div className="flex items-center">
          <img src={img1} alt="Email Icon" className="w-6 h-6 mr-2" />
          <h3 className="number">aishamashrah@gmail.com</h3>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
