import React from 'react';
import myImage from '../assets/58-CSAS5_Headshots_Aisha_Mashrah.jpg';
import myImage2 from '../assets/pexels-aleksandar-pasaric-2603464.jpg';
import Projects from './Projects';
import img from '../assets/images-3.jpeg'
import linkedin from '../assets/new-linkedin-logo-white-black-png.png';
import GitHub from '../assets/unnamed.png';
import { Link } from 'react-router-dom';

export default function About() {
  const backgroundStyle = {
    backgroundImage: `url(${myImage2})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100vh',
  };
  return (
    
    <div>
    <nav className="border border-black bg-black text-white">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center">
                <span class=" font-serif text-2xl p-2 ">Welcome to My Portfolio</span>
            </a>
            <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"> 
                
            </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#" class=" font-serif text-1xl  block">// Projects</a>
        </li>
        <li>
          <a href="#" class="font-serif text-1xl  block">// Contact</a>
        </li>
        <li>
          <a href="#" class=" font-serif text-1xl  block  ">// Resume</a>
        </li>
        <li>
          <a href="#" class=" font-serif text-1xl  block  ">// Linkedin</a>
        </li>
        <li>
          <a href="#" class=" font-serif text-1xl  block  ">// GitHub</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



      {/* <img src={img} className="h-96 w-screen" /> */}
      {/* <h1 className='absolute lg:mb-9   sm-mb-44 top-44 mt-32 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-4xl font-extrabold text-black text-center'>
        <span>SOFTWARE ENGINEER</span>
      </h1> */}
      <div style={backgroundStyle}>
<h2 className=' border-black border-4'></h2>
      <div className=" w-full h-full flex justify-center items-center n text-white">
      <div className="p-10">
        <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-center lg:justify-start w-97">
      <div className="animated-div">
          
            <img src={myImage} alt="My Image" className="imgh" />
            </div>
    </div>
            <div className="flex justify-center lg:justify-start w-96 ">
          <div className="">
            <div className="text-5xl text-white  pb-3 font-serif text-1xl   ">Aisha Mashrah</div>
            <p className="about text-sm text-justify font-serif">
              I'm a software developer  with a strong focus on continuous improvement. Skilled in
              HTML5, CSS, JavaScript, C#, and TypeScript, I specialize in frameworks like React and libraries like Tailwind
              and Bootstrap. I've developed a functional Weather App using JavaScript, React, and Bootstrap, incorporating
              local storage and RESTful APIs for data retrieval. Additionally, I have worked on various other projects that
              demonstrate my versatility and passion for coding. With experience in inventory management and collaboration as
              a Warehouse Associate at Kohls, I ensure accurate and timely task completion. I also enjoy giving back,
              volunteering at "Girls Who Can Code" to mentor and inspire young girls. CodeStack Academy has provided me with
              a solid educational foundation.
            </p>
            <div>
              <h5>
                <a href="https://docs.google.com/document/d/e/2PACX-1vTDcclWJbn9mBZPjkyQh1TCuNNHSaRpcyjftT-073n0GJ-d3NTNL87rJeqgedJN2jhampCnrEoOSnr9/pub">
                  <button className="mt-10 font-serif bg-white text-blsck p-2 rounded">Resume</button>
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
      
      </div>
      </div>
      </div>
      </div>
  );
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
