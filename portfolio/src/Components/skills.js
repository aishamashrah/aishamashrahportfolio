import React, { useState } from 'react';
const Skill = () => {
  const data = [
  {
    id: 1,
    name: "Tom ",
    title: "Senior Developer",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    icon: "assets/twitter.png",
  },
  {
    id: 2,
    name: "Alex ",
    title: "Co-Founder of DELKA",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    icon: "assets/youtube.png",
  },
  {
    id: 3,
    name: "Martin ",
    title: "CEO of ALBI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    icon: "assets/linkedin.png",
  },
  {
    id: 4,
    name: "Martin ",
    title: "CEO of ALBI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    icon: "assets/linkedin.png",
  },
  {
    id: 5,
    name: "Martin ",
    title: "CEO of ALBI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    icon: "assets/linkedin.png",
  },
  {
    id: 6,
    name: "Martin ",
    title: "CEO of ALBI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    icon: "assets/linkedin.png",
  },
  {
    id: 7,
    name: "Martin ",
    title: "CEO of ALBI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    icon: "assets/linkedin.png",
  },
  {
    id: 8,
    name: "Mamnrtin ",
    title: "CEO of ALBI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    icon: "assets/linkedin.png",
  },
  {
    id: 9,
    name: "Martin ",
    title: "CEO of ALBI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg",
    icon: "assets/linkedin.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
  },
  {
    id: 10,
    name: "Martin ",
    title: "CEO of ALBI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    icon: "assets/linkedin.png",
  },
  {
    id: 11,
    name: "Martin ",
    title: "CEO of ALBI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    icon: "assets/linkedin.png",
  },
  {
    id: 12,
    
    name: "Martin",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",

  },
  {
    id: 10,
    name: "Martin ",
    title: "CEO of ALBI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    icon: "assets/linkedin.png",
  },
  {
    id: 11,
    name: "Martin ",
    title: "CEO of ALBI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    icon: "assets/linkedin.png",
  },
  {
    id: 12,
    name: "Martin ",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",

  },
  {
    id: 11,
    name: "Martin ",
    title: "CEO of ALBI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    icon: "assets/linkedin.png",
  },
  {
    id: 12,
    name: "Martin ",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",

  },
  {
    id: 3,
    name: "Martin ",
    title: "CEO of ALBI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    icon: "assets/linkedin.png",
  },
 

];



return (
  <div className="app-container " style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <h1 className=" text-5xl  pb-3 font-serif text-1xl  text-center">skills</h1>

<div className="grid grid-cols-1 pb-10 ">
  <div className="grid grid-cols-6 gap-5 w-8/12 justify-self-center">
        {data.map(member => (
          <div className="member" key={member.id}>
           <img src={member.img} alt={member.name} className="w-10" />
            <div className="member-details">
              <h3>{member.name}</h3>
            </div>
          </div>
        ))}
      </div>   
 
   
         
           </div>
           </div>
);
};

export default Skill;

// export default function Skill() {
//   const [hoveredSkill, setHoveredSkill] = useState(null);

//   const handleSkillHover = (id) => {
//     setHoveredSkill(id);
//   };

//   const handleSkillLeave = () => {
//     setHoveredSkill(null);
//   };

//   return (
//     <div className="n">
//       <h3 className="text-3xl text-center mt-10  text-white font-serif">Skills</h3>
//       <div className="grid grid-cols-6 gap-20">
//         {data.map((d) => (
//           <div
//             className={` ${d.featured ? "" : ""}`}
//             key={d.id}
//             onMouseEnter={() => handleSkillHover(d.id)}
//             onMouseLeave={handleSkillLeave}
//           >
//             <div className="flex justify-between mb-4">
//               <img src="assets/right-arrow.png" className="h-6" alt="" />
//               <div>
//                 <img
//                   className={`w-16 h-16   ${
//                     hoveredSkill === d.id
//                   }`}
//                   src={d.img}
//                   alt=""
//                 />
//               </div>
//               <img className="" src={d.icon} alt="" />
//             </div>
//             {hoveredSkill === d.id && (
//               <div className="text-center text-white">
//                 <h4 className="text-lg font-semibold">{d.name}</h4>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

