"use client"

import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { MagneticText } from "@/components/ui/MagneticText"
import Image from "next/image"
import Bennett from '../../public/images/bennett.jpg'

import MagneticTextUse from '@/components/MagneticTextUse'

export default function SpotLightUse() {
const text1 = `
Web developer interested in biosciences, cryptocurrency, and decentralization.`
const text2 = `I am a Full Stack Developer certified from hands-on experience with BloomTech. I am excited to apply my unique skill set of data-driven research, interpersonal communication, and software development to my next role. My main focus is building multi-page web apps with Next.js.`
const text3 = `I am interested in gaining professional experience of any form, but I hope to eventually work with tech companies where my past research experiences are relevant.  Being able to combine my creativity with web design and my expertise in human behavior would be an ideal role.`   
const label = 'Current Tech Stack:'
const frontend = 'Front End:'
const backend = 'Back End:'
const text4= `React.js, Shadcn-ui, Material-UI,  Context API, Jest, Cypress, Yup, Axios, JavaScript, Tailwind, HTML, CSS, Ant  Design, Typescript, React Native`
const text5 = ` Node.js, Next Auth, Express, SQL, PostgreSQL, Laravel,  Docker, Python, Vercel, Heroku, Netlify,  PHP, MongoDB, Ruby on Rails, Firebase`


  return (
    <div className="flex items-start w-full min-h-screen gap-8 p-8 justify-evenly md:flex-row" id="About">

      {/* {items.map((item, index) => ( */}
        <SpotlightCard

          mode="after"
          from="rgba(255,255,255,0.20)"
          size={400}
          className="p-2 pb-4 border w-80 group rounded-2xl border-white/10 bg-white/5">
          <div className="relative">
            <Image
              className="absolute inset-0 h-96 w-96 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0"
              src={Bennett}
            />

            <Image
              className="relative object-cover transition-all duration-300 w-96 h-96 rounded-xl grayscale group-hover:grayscale-0"
              src={Bennett}
            />

            <div className="px-2 mt-4">
              <div className="text-white/75">Bennett Kautz</div>
              <div className="text-white/75">Full Stack Developer</div>
            </div>
          </div>
        </SpotlightCard>

      <div className="flex flex-col w-1/2 h-full p-3 shadow-lg shadow-teal-500 justify-evenly rounded-2xl">
        <p className="text-2xl text-teal-500">{text1}</p>
        <br></br>
        <p>{text2}</p>
        <br></br>
        <p>{text3}</p>
        <br></br>
        <p className="text-2xl text-teal-500">{label}</p>
        <br/>
        <p className="text-lg text-teal-500">{frontend}</p><p>{text4}</p>
        <br></br>
        <p className="text-lg text-teal-500">{backend}</p><p>{text5}</p>
        <br/>
         {/* <MagneticText body={text1} as="div" className="w-full text-center text-md font-var md:text-lg">
          {(tokens) =>
            tokens.map((token, index) => (
              <MagneticText.Token key={index} body={token} className="inline-block whitespace-pre cursor-default" />
            ))
          }
        </MagneticText>
        <MagneticText body={text2} as="div" className="w-full text-left text-md font-var md:text-lg">
          {(tokens) =>
            tokens.map((token, index) => (
              <MagneticText.Token key={index} body={token} className="inline-block whitespace-pre cursor-default" />
            ))
          }
        </MagneticText>
        <MagneticText body={text3} as="div" className="w-full text-left text-md font-var md:text-lg">
          {(tokens) =>
            tokens.map((token, index) => (
              <MagneticText.Token key={index} body={token} className="inline-block whitespace-pre cursor-default" />
            ))
          }
        </MagneticText>
        <MagneticText body={text4} as="div" className="w-full text-left text-md font-var md:text-lg">
          {(tokens) =>
            tokens.map((token, index) => (
              <MagneticText.Token key={index} body={token} className="inline-block whitespace-pre cursor-default" />
            ))
          }
        </MagneticText> */}
      </div>
       
    
    </div>
  )
}
