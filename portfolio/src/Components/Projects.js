
import img1 from '../../src/assets/img1.png'
import img2 from '../../src/assets/img2.png'
import img3 from '../../src/assets/img3.png'

import React from 'react';
import { Card, Button } from 'react-bootstrap';




const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center justify-items-center cardsec text-black  n">
      <div>
        <Card className="hover:border-blue-500 card3">
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title className="text-white font-serif text-2xl p-2">
              Weather app
            </Card.Title>
            <Card.Text className="text-white">
              I developed a functional program using JavaScript, React, and
              Bootstrap. The program efficiently handles user input and
              utilizes local storage to store and retrieve data within the
              application. Click on the image above the text view.
            </Card.Text>
            <a href="https://aishaweatherapp.azurewebsites.net">
              <Button className="button111  text-pink-300 ">LIVE</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h3 className="text-5xl text-white  pb-3 font-serif text-1xl text-center">Projects</h3>
        <Card className="card2">
          <Card.Img src={img3} />
          <Card.Body>
            <Card.Title className=" font-serif text-2xl p-2">
              Business Redevelopment
            </Card.Title>
            <Card.Text className="">
              In this assignment, we transformed our business redevelopment
              prototype into a fully functional website, ensuring responsiveness
              across web, tablet, and mobile devices. Click on the image above
              the text view.
            </Card.Text>
            <a href="https://businessredevelopment.azurewebsites.net">
              <Button className="button1111">LIVE</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card className="card3">
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title className=" font-serif text-2xl p-2">
              Cook Ease
            </Card.Title>
            <Card.Text className="">Teamed up with three colleagues to develop a dynamic full-stack web app using React, Tailwind CSS, and TypeScript. Created a responsive and user-friendly interface, showcasing skills in both frontend and backend development. Maintained high coding standards throughout the project.</Card.Text>
            <a href="https://cookease.azurewebsites.net">
              <Button className="button1111 text-rose-300 ">LIVE</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};



export default Projects;
