"use client"

import clsx from "clsx"

import { Navigation } from "@/components/ui/Navigation"

export default function NavBar() {
  const items = ["About", "Resume", "Projects"]

  function navigate(item) {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // Centers the element vertically
        inline: 'nearest', // Optional: centers horizontally if needed
      });
    }
    // the callback is fired once the animation is completed
    // to allow smooth transition
  }

  return (
    <div className="fixed z-50 flex items-center">
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
                <Navigation.Item key={index} as="li">
                  {({ setActive, isActive }) => (
                    <button
                      onClick={() => {
                        setActive();
                        navigate(item);
                      }}
                      className={clsx(
                        isActive ? "text-white" : "text-white/60 hover:text-white",
                        "inline-block px-4 py-1 text-sm transition",
                      )}
                    >
                      {item}
                    </button>
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
