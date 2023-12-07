import React from 'react';

import img1 from '../../assets/email.avif'
import img2 from '../../assets/number.jpg'


function ContactPage() {
  return (
    <div className="contact-section text-center mt-8">
      <h3 className="text-5xl  pb-3 font-serif text-1xl">
        Get in Touch
      </h3>
      <div className="contact-info">
        <div className="contact-item">
          <h5 className="text-lg text-gray-500 mb-2">Phone</h5>
          <p className="font-bold">(123) 456-7890</p>
        </div>
        <div className="contact-item">
          <h5 className="text-lg text-gray-500 mb-2">Email</h5>
          <p className="font-bold">
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
        </div>
      </div>

      

      <div className="mt-6">
        <p className="text-gray-500">
          Connect with me on social media or use the form below to send a message.
        </p>
        
      </div>
    </div>
  );
}

export default ContactPage;

