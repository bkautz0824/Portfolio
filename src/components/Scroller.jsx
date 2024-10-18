"use client"
import * as React from "react"
import clsx from "clsx"
import {ScrollReveal}  from "@/components/ui/ScrollReveal"
import ProjectItem1 from "./ProjectItem1"
import ProjectItem2 from "./ProjectItem2"
import ProjectItem3 from "./ProjectItem3"
import ProjectItem4 from "./ProjectItem4"
// user-defined partials
// import HumReduction from "@/components/HumReduction"
// import LoudnessCorrection from "@/components/LoudnessCorrection"
// import NoiseReduction from "@/components/NoiseReduction"
// import SpeechIsolation from "@/components/SpeechIsolation"
import CardExample from '@/components/CardExample'

export default function Scroller() {
    const items = [ProjectItem1, ProjectItem2, ProjectItem3];
    
  
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
  
            
              <div className="flex justify-center mt-6 transition-[transform,opacity] duration-[--duration] md:mt-12 w-3/5 items-center ">
                <div className="flex flex-wrap justify-center w-full gap-x-20 gap-y-8 md:gap-y-8">
                  {items.map((Item, index) => (
                    <div
                      key={index}
                      style={{ "--delay": `${index * 150}ms` }}
                      className={clsx(
                        "transition-all delay-[--delay] duration-[--duration]",
                        !isActive ? "translate-y-8 opacity-0" : "",
                      )}
                    >
                      <Item />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    );
  }
