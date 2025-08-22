"use client"
import * as React from "react"
import clsx from "clsx"
import {ScrollReveal}  from "@/components/ui/ScrollReveal"
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
        image: "https://via.placeholder.com/500x300/0d9488/ffffff?text=AI+Calendar+Assistant",
        link: "#",
        technologies: ["React", "AI/ML", "Calendar APIs", "Node.js"]
      },
      {
        id: 5,
        title: "NBA World",
        description: "Complete NBA statistics and analytics platform. Real-time scores, player stats, team comparisons, and predictive analytics for basketball enthusiasts and fantasy players.",
        image: "https://via.placeholder.com/500x300/1e40af/ffffff?text=NBA+World",
        link: "#",
        technologies: ["React", "Sports APIs", "D3.js", "Express.js"]
      }
    ];
    
    return (
      <div className="flex w-full m-6 h-full/2" id="Projects">
        <ScrollReveal offset={200} trigger="middle" className="max-w-full mx-auto [--duration:500ms] ">
          {(isActive) => (
            <div className="flex flex-col items-center justify-between w-full">
  
              <h1
                className={clsx(
                  { "translate-y-8 opacity-0": !isActive },
                  "text-dark mt-6 text-center font-display text-xl font-medium transition-[transform,opacity] md:text-3xl",
                )}
              >
                My Work
              </h1>
  
            
              <div className="flex justify-center mt-6 transition-[transform,opacity] duration-[--duration] md:mt-12 w-4/5 items-center">
                <div 
                  className={clsx(
                    "w-full transition-all duration-[--duration]",
                    !isActive ? "translate-y-8 opacity-0" : "",
                  )}
                >
                  <DynamicPortfolioGrid 
                    projects={projects}
                    hoverSize={7}
                    gapSize={6}
                    showFrames={true}
                  />
                </div>
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    );
  }
