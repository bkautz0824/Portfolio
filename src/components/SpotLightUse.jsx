"use client"

import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { MagneticText } from "@/components/ui/MagneticText"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image"
import Bennett from '../../public/images/bennett.jpg'

import MagneticTextUse from '@/components/MagneticTextUse'

export default function SpotLightUse() {
const text1 = `
Full Stack developer interested in biosciences, cryptocurrency, and decentralization.`
const text2 = `I've worked extensively with React, Next.js, jQuery, WordPress, RESTful APIs, microservices architecture, and design tools like Figma, accumulating experience in both frontend and backend development.`   
const label = 'Current Tech Stack:'
const frontend = 'Front End:'
const backend = 'Back End:'
const text4= `React.js, Shadcn-ui, Material-UI,  Context API, Jest, Cypress, Yup, Axios, JavaScript, Tailwind, HTML, CSS, Ant  Design, Typescript, React Native`
const text5 = ` Node.js, Next Auth, Express, SQL, PostgreSQL, Laravel,  Docker, Python, Vercel, Heroku, Netlify,  PHP, MongoDB, Ruby on Rails, Firebase`


  return (
    <div className="flex flex-col items-start w-full gap-8 p-8 min-h-4/5 justify-evenly md:flex-row" id="About">
        <SpotlightCard
          mode="after"
          from="rgba(255,255,255,0.20)"
          size={400}
          className="w-full h-96 md:h-[32rem] p-4 pb-4 border md:p-2 md:w-80 group rounded-2xl border-white/10 bg-white/5"
        >
          <div className="relative flex flex-col h-full">
            <Image
              className="absolute inset-0 h-[70%] w-full scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0"
              src={Bennett}
            />

            <Image
              className="relative object-cover w-full h-[70%] transition-all duration-300 rounded-xl grayscale group-hover:grayscale-0"
              src={Bennett}
            />

            <div className="px-2 mt-4">
              <div className="text-md text-white/75 md:text-xl">Bennett Kautz</div> {/* Adjusted text size */}
              <div className="text-xs text-white/75 md:text-base">Full Stack Developer</div> {/* Adjusted text size */}
              
              {/* Contact Section */}
              <div className="flex flex-col items-center mt-4 space-x-0 md:flex-row md:space-x-4">
                <div className="text-xs text-teal-500 md:text-base">Contact me</div>
                <div className="flex flex-row space-x-2 md:mt-0"> {/* Added flex-row for mobile */}
                  <a href="mailto:bennettkautz@gmail.com" 
                     target="_blank" 
                     className="relative z-10 p-2 text-sm text-white/75 hover:text-teal-500 md:text-base">
                    <FontAwesomeIcon icon={faEnvelope} className="relative z-10" /> {/* Email Icon */}
                  </a>
                  <a href="https://www.linkedin.com/in/bennett-kautz-187241158/" 
                     target="_blank" 
                     className="relative z-10 p-2 text-sm text-white/75 hover:text-teal-500 md:text-base">
                    <FontAwesomeIcon icon={faLinkedin} className="relative z-10" /> {/* LinkedIn Icon */}
                  </a>
                  <a href="https://github.com/bkautz0824" 
                     target="_blank" 
                     className="relative z-10 p-2 text-sm text-white/75 hover:text-teal-500 md:text-base">
                    <FontAwesomeIcon icon={faGithub} className="relative z-10" /> {/* GitHub Icon */}
                  </a>
                </div>
              </div>
              {/* End of Contact Section */}
            </div>
          </div>
        </SpotlightCard>

      <div className="flex flex-col w-full h-full p-3 shadow-lg md:w-1/2 shadow-teal-500 justify-evenly rounded-2xl">
        <p className="mb-2 text-xl text-teal-500 md:text-2xl">{text1}</p> {/* Adjusted text size */}
        <p className="mb-2 text-sm md:text-base">{text2}</p> {/* Adjusted text size */}
        <p className="mb-2 text-xl text-teal-500 md:text-2xl">{label}</p> {/* Adjusted text size */}
        <p className="mb-2 text-lg text-teal-500 md:text-xl">{frontend}</p> {/* Adjusted text size */}
        <p className="mb-2 text-sm md:text-base">{text4}</p> {/* Adjusted text size */}
        <p className="mb-2 text-lg text-teal-500 md:text-xl">{backend}</p> {/* Adjusted text size */}
        <p className="mb-2 text-sm md:text-base">{text5}</p> {/* Adjusted text size */}
      </div>
       
    
    </div>
  )
}
