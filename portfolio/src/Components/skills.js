import React, { useState } from 'react';

export default function Skill() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillHover = (id) => {
    setHoveredSkill(id);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };
  
    const data = [
        
        {
            id: 1,
            name: "Tom Durden",
            title: "Senior Developer",
            img:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                percentage: "75%",
            icon: "assets/twitter.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
            id: 2,
            name: "Alex Kalinski",
            title: "Co-Founder of DELKA",
            img:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                percentage: "75%",
            icon: "assets/youtube.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            featured: true,
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" ,
                percentage: "75%",
            icon: "assets/linkedin.png",
            desc:
           
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 4,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"  ,
                percentage: "75%", 
            icon: "assets/linkedin.png",
            desc:
           
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 4,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" ,
            percentage: "75%", 
            icon: "assets/linkedin.png",
            desc:
           
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
     
        {
            id: 4,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" ,
            percentage: "75%", 
            icon: "assets/linkedin.png",
            desc:
           
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
      
        {
            id: 4,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" ,
            percentage: "75%", 
            icon: "assets/linkedin.png",
            desc:
           
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 4,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" ,
            percentage: "75%", 
            icon: "assets/linkedin.png",
            desc:
           
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 4,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg" ,
            percentage: "75%",
            icon: "assets/linkedin.png",
            desc:
           
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 4,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
            ,
            percentage: "75%",
            icon: "assets/linkedin.png",
            desc:
           
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        {
            id: 4,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" ,
              
            icon: "assets/linkedin.png",
             percentage: "75%",
            desc:
           
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
        
        
       
           
        

    ];
    return (
        <div className='bgskill grid grid-cols-1 '>
              <h3 className="text-3xl text-center mt-10 text-white font-serif">skills</h3>
        <div className="skill">

          <div className="grid md:grid-cols-2 gap-20 p-3 lg:grid-cols-6">
            
            {data.map((d) => (
              <div
                className={d.featured ? "card featured" : "card"}
                key={d.id}
                onMouseEnter={() => handleSkillHover(d.id)}
                onMouseLeave={handleSkillLeave}
              >
                <div className="flex items-center justify-between mb-2">
                  <img src="assets/right-arrow.png" className="h-6 mr-2" alt="" />
                  <div className="relative">
                    <img
                      className={`w-20 h-20 object-cover -mt-20 ${
                        hoveredSkill === d.id ? "opacity-0" : "opacity-100"
                      }`}
                      src={d.img}
                      alt=""
                    />
                    {hoveredSkill === d.id && (
                      <div className="h-20 w-20 rounded-full bg-cover bg-center flex items-center justify-center">
                        <span className="text-3xl text-white">{d.percentage}</span>
                      </div>
                    )}
                  </div>
                  <img className="h-6" src={d.icon} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }