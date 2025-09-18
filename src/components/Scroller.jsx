"use client"
import * as React from "react"
import DynamicPortfolioGrid from "./DynamicPortfolioFrames"

export default function Scroller() {
    // Project data for the dynamic grid
    const projects = [
      {
        id: 1,
        title: "iBRAINGlobal",
        description: "AI-powered business solutions platform featuring intelligent automation, data analytics, and machine learning capabilities. Primary contributor to full-stack development and system architecture.",
        image: "/images/ibrain.png",
        link: "https://www.ibrainglobal.org/",
        technologies: ["React", "Node.js", "AI/ML", "AWS", "MongoDB"]
      },
      {
        id: 2,
        title: "Gym Guardian",
        description: "Next.js v14 for fitness tracking, MongoDB for secure data storage, Shadcn-ui with Tailwind CSS for a sleek UI, and Next Auth Provider for seamless authentication with Google API.",
        image: "/images/gym-guardian.png",
        link: "https://www.gym-guardian.xyz/",
        technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Next Auth"]
      },
      {
        id: 3,
        title: "NBA World",
        description: "Complete NBA statistics and analytics platform. Real-time scores, player stats, team comparisons, and predictive analytics for basketball enthusiasts and fantasy players.",
        image: "/images/nba-wrld.png",
        link: "https://v0-new-york-knicks-analysis.vercel.app/",
        technologies: ["React", "Sports APIs", "Next.js", "Vercel"]
      },
      {
        id: 4,
        title: "Knicks Analysis",
        description: "New York Knicks blog featuring game analysis, player stats, trade rumors, and fan discussions. Built for the passionate Knicks community with real-time updates.",
        image: "/images/knicks.png",
        link: "https://v0-new-york-knicks-analysis.vercel.app/knicks",
        technologies: ["React", "Node.js", "Sports APIs", "Next.js"]
      },
      {
        id: 5,
        title: "HoopMetrics",
        description: "Advanced basketball analytics platform built with React and AI insights. Track performance, analyze wearable data, and get personalized training recommendations.",
        image: "/images/hoopmetrics.png",
        link: "https://hoop-king-BennettKautz.replit.app",
        technologies: ["React", "AI/ML", "Wearable APIs", "Analytics", "Replit"]
      },
      {
        id: 6,
        title: "Snapsheet",
        description: "Dynamic landing page application with modern design and interactive features. Built as a demonstration of frontend capabilities and responsive design principles.",
        image: "/images/snapsheet.png",
        link: "https://claude.ai/public/artifacts/0aa16899-f1fe-40b2-a973-bfa25f952b26",
        technologies: ["React", "Modern UI", "Responsive Design", "TypeScript"]
      },
      {
        id: 7,
        title: "Malazan Guide",
        description: "Interactive character map and guide for the Malazan Book of the Fallen series. Explore characters, locations, and storylines with spoiler-free navigation.",
        image: "/images/malazan.png",
        link: "https://bridgeburners-map-guide.vercel.app/",
        technologies: ["React", "Next.js", "Interactive Maps", "Vercel"]
      },
      {
        id: 8,
        title: "Redux Blog",
        description: "Effortlessly create and edit blogs with our full-stack React-Redux blog builder, utilizing TypeScript, Node.js, and MongoDB for a solid foundation. New version coming soon!",
        image: "/images/redux-blog.png",
        link: "https://www.bennetts-blog-builder.site/",
        technologies: ["React", "Redux", "TypeScript", "Node.js", "MongoDB"]
      }
    ];
    
    return (
      <div className="w-full min-h-screen flex flex-col items-center py-8" id="Projects">
        <h1 className="text-dark text-center font-display text-xl font-medium md:text-3xl mb-8">
          My Work
        </h1>

        <div className="w-full px-4">
          <DynamicPortfolioGrid 
            projects={projects}
            hoverSize={7}
            gapSize={8}
            showFrames={true}
          />
        </div>
      </div>
    );
  }
