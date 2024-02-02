import { SectionWrapper } from "./Section"
import { Logo } from "./Logo"
import { YouTubeIcon, XIcon, TikTokIcon } from "./Icons"

const sections = [
  {
    title: "Products",
    items: [
      {
        title: "Getting started",
        url: "#",
      },
      {
        title: "Use cases",
        url: "#",
      },
      {
        title: "API reference",
        url: "#",
      },
      {
        title: "Examples",
        url: "#",
      },
      {
        title: "FAQ",
        url: "#",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        title: "Invoice AI Scanner",
        url: "#",
      },
      {
        title: "Bank statement analyzer",
        url: "#",
      },
      {
        title: "Merge PDFs",
        url: "#",
      },
      {
        title: "PDF to HTML",
        url: "#",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Affiliate program",
        url: "#",
      },
      {
        title: "Privacy policy",
        url: "#",
      },
      {
        title: "Company",
        url: "#",
      },
      {
        title: "Terms of service",
        url: "#",
      },
    ],
  },
]

const icons = [
  {
    component: YouTubeIcon,
    name: "YouTube",
    url: "#",
  },
  {
    component: XIcon,
    name: "X / Twitter",
    url: "#",
  },
  {
    component: TikTokIcon,
    name: "TikTok",
    url: "#",
  },
]

export function Footer() {
  return (
    <div className="pt-8 lg:pt-16">
      <div className="relative bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)] py-32 lg:px-24 lg:py-32">
        <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950 p-1.5">
          <div className="h-1.5 w-8 rounded-lg bg-white"></div>
        </div>

        <SectionWrapper>
          <div className="flex w-full flex-col gap-8 sm:flex-row">
            <div className="grid w-full grid-cols-2 flex-row gap-8 sm:w-1/3 sm:flex-col sm:gap-7 lg:flex">
              <Logo className="text-lg font-semibold" />

              <div className="flex gap-3 lg:items-center">
                {icons.map((icon, index) => (
                  <a key={index} href={icon.url}>
                    <span className="sr-only">{icon.name}</span>
                    <icon.component className="h-6 w-6 text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid w-full grid-cols-2 gap-8 sm:w-2/3 lg:grid-cols-3">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="flex flex-col gap-4">
                  <p className="text-sm text-white">{section.title}</p>

                  <ul className="mt-3 space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a className="text-sm font-light text-white/75 transition hover:text-white" href={item.url}>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  )
}
