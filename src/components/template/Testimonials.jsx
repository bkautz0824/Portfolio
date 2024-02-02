import Image from "next/image"

import {
  SectionWrapper,
  SectionBadge,
  SectionHeadingHighlighted,
  SectionTitle,
  SectionTitleFade,
  SectionDescription,
} from "./Section"
import { SpotlightCard } from "./SpotlightCard"

const testimonials = [
  {
    name: "Sophia Martinez",
    title: "Lead writer, Avalon",
    image:
      "https://images.generated.photos/TdA_3xKb49DtgqfPPu5REnQFiALErCu6i3M2I_1AqIA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwNTU5LmpwZw.jpg",
    body: "Absolutely a game changer! Recharger completely revolutionized how I extract data from my documents. It's like having an intelligent conversation with my PDFs!",
  },
  {
    name: "Caroline Lee",
    title: "Project manager, Echo",
    image:
      "https://images.generated.photos/mp3gkB9z2wwhyySWzQJMegNbvvLV6HbKQX1_h6BEYAc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwOTI5LmpwZw.jpg",
    body: "Recharger is a lifesaver. It's impressive how it understands my questions and presents information from a dense hundred-page report.",
  },
  {
    name: "Tyler Thompson",
    title: "Legal Advisor, DEF Law",
    image:
      "https://images.generated.photos/vOkveSlBohR880A8z67aLHImhPr7UHdnXg06pifYvZ4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyNjg4LmpwZw.jpg",
    body: "I use Recharger daily. Uploading my contracts, asking directly what I need to know, and getting an instant response - it doesn't get more convenient!",
  },
  {
    name: "Jake Harris",
    title: "Researcher, GHI University",
    image:
      "https://images.generated.photos/d_r3VzW3lO5ZsdaHhoVX7msWku7YIrqP4Qn1yozJU54/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyMTQ4LmpwZw.jpg",
    body: "Recharger's simplicity in understanding complex data is stunning. It has saved me hours of work and made my data analysis tremendously efficient.",
  },
]

export function Testimonials() {
  return (
    <div className="overflow-hidden py-8 lg:py-16">
      <SectionWrapper>
        <SectionHeadingHighlighted>
          <SectionBadge>What others say</SectionBadge>

          <SectionTitle>
            Trusted by the experts,
            <br />
            <SectionTitleFade>used by the leaders</SectionTitleFade>
          </SectionTitle>

          <SectionDescription>
            Don&apos;t just take our word for it. Read what others say about Recharger.
          </SectionDescription>
        </SectionHeadingHighlighted>

        <div className="mt-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] lg:mt-32">
          <div className="flex w-max animate-marquee items-stretch [--duration:50s] hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="px-2.5">
                <SpotlightCard className="relative h-full w-[28rem] p-8">
                  <div className="pb-8 font-light text-white/75">{testimonial.body}</div>

                  <div className="mt-auto flex items-center gap-4">
                    <Image
                      alt={testimonial.name}
                      src={testimonial.image}
                      width="40"
                      height="40"
                      className="h-10 w-10 rounded-full"
                    />

                    <div className="flex flex-col">
                      <div className="text-white">{testimonial.name}</div>

                      <div className="text-sm text-white/50">{testimonial.title}</div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
