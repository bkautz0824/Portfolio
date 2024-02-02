"use client"

import clsx from "clsx"

import { Navigation } from "@/components/ui/Navigation"

export default function NavBar() {
  const items = ["About", "Projects",]

  function navigate(id) {
    const element = document.getElementById(id)
    element.scrollIntoView({
      behavior: 'smooth'
    })
    // the callback is fired once the animation is completed
    // to allow smooth transition
  }

  return (
    <div className="fixed flex items-center">
      <Navigation as="nav" fluid duration={350} className="relative p-4 mx-auto bg-black rounded-2xl">
        {({ ready, size, position, duration }) => (
          <div className="relative">
            <div
              style={{
                "--size": size,
                "--position": position,
                "--duration": duration,
              }}
              className={clsx(
                { hidden: !ready },
                "absolute inset-y-0 left-0 h-full w-[--size] translate-x-[--position] rounded-lg bg-teal-700 transition-[width,transform] duration-[--duration]",
              )}
            />

            <Navigation.List as="ul" className="relative flex items-center gap-3">
              {items.map((item, index) => (
                <Navigation.Item key={index} as="li" onActivated={() => navigate(item)}>
                  {({ setActive, isActive }) => (
                    <a
                      onClick={setActive}
                      href="#"
                      className={clsx(
                        isActive ? "text-white" : "text-white/60 hover:text-white",
                        "inline-block px-4 py-1 text-sm transition",
                      )}>
                      {item}
                    </a>
                  )}
                </Navigation.Item>
              ))}
            </Navigation.List>
          </div>
        )}
      </Navigation>
    </div>
  )
}
