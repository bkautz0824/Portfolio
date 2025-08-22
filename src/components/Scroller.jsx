"use client"
import * as React from "react"
import DynamicPortfolioGrid from "./DynamicPortfolioFrames"

export default function Scroller() {
    // Project data for the dynamic grid
    const projects = [
      {
        id: 1,
        title: "Gym Guardian",
        description: "Next.js v14 for fitness tracking, MongoDB for secure data storage, Shadcn-ui with Tailwind CSS for a sleek UI, and Next Auth Provider for seamless authentication with Google API.",
        image: "/images/gym-guardian.png",
        link: "https://www.gym-guardian.xyz/",
        technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Next Auth"]
      },
      {
        id: 2,
        title: "Redux Blog",
        description: "Effortlessly create and edit blogs with our full-stack React-Redux blog builder, utilizing TypeScript, Node.js, and MongoDB for a solid foundation.",
        image: "/images/redux-blog.png",
        link: "https://www.bennetts-blog-builder.site/",
        technologies: ["React", "Redux", "TypeScript", "Node.js", "MongoDB"]
      },
      {
        id: 3,
        title: "IMDb Clone",
        description: "Explore movies effortlessly with this Next.js app, styled with Tailwind CSS. It taps into the IMDb API for quick access to movie details, keeping the experience simple and enjoyable.",
        image: "/images/imdb.png",
        link: "https://www.imdb-nyc.xyz/",
        technologies: ["Next.js", "Tailwind CSS", "IMDb API"]
      },
      {
        id: 4,
        title: "AI Calendar Assistant",
        description: "Smart calendar management powered by AI. Automatically schedules meetings, suggests optimal time slots, and integrates with popular calendar applications for seamless productivity.",
        image: "/images/placeholder-ai-calendar.png",
        link: "#",
        technologies: ["React", "AI/ML", "Calendar APIs", "Node.js"]
      },
      {
        id: 5,
        title: "NBA World",
        description: "Complete NBA statistics and analytics platform. Real-time scores, player stats, team comparisons, and predictive analytics for basketball enthusiasts and fantasy players.",
        image: "/images/placeholder-nba-world.png",
        link: "#",
        technologies: ["React", "Sports APIs", "D3.js", "Express.js"]
      },
      {
        id: 6,
        title: "iBrainGlobal Landing",
        description: "Modern landing page for iBrainGlobal showcasing AI-powered business solutions. Clean design with interactive elements and responsive layouts for optimal user engagement.",
        image: "/images/placeholder-ibrain.png",
        link: "#",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]
      },
      {
        id: 7,
        title: "Knicks Tape",
        description: "New York Knicks blog featuring game analysis, player stats, trade rumors, and fan discussions. Built for the passionate Knicks community with real-time updates.",
        image: "/images/placeholder-knicks.png",
        link: "#",
        technologies: ["React", "Node.js", "MongoDB", "Sports APIs"]
      },
      {
        id: 8,
        title: "Next Project",
        description: "Coming soon... Exciting new project currently under construction. Stay tuned for innovative features and cutting-edge technology implementations.",
        image: "/images/placeholder-construction.png",
        link: "#",
        technologies: ["TBD", "Modern Stack", "Innovation"]
      }
    ];
    
    return (
      <div className="flex w-full m-6 h-full/2" id="Projects">
        <div className="max-w-full mx-auto">
          <div className="flex flex-col items-center justify-between w-full">

            <h1 className="text-dark mt-6 text-center font-display text-xl font-medium md:text-3xl">
              My Work
            </h1>

            <div className="flex justify-center mt-6 md:mt-12 w-full items-center px-4">
              <div className="w-full max-w-7xl">
                <DynamicPortfolioGrid 
                  projects={projects}
                  hoverSize={7}
                  gapSize={8}
                  showFrames={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
