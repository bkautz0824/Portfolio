"use client"

import clsx from "clsx"
import {
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  DocumentIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/outline"

import {
  SectionWrapper,
  SectionBadge,
  SectionHeading,
  SectionTitle,
  SectionTitleFade,
  SectionDescription,
} from "./Section"
import { ScrollReveal } from "../ui/ScrollReveal"
import { SpotlightCard } from "./SpotlightCard"

function FeatureCard({ children, className }) {
  return <SpotlightCard className={clsx("p-8", className)}>{children}</SpotlightCard>
}

function FeatureCardThumbnail({ children }) {
  return <div className="flex items-center justify-center gap-4 py-6">{children}</div>
}

function FeatureCardBody({ children }) {
  return <div className="mt-4">{children}</div>
}

function FeatureCardTitle({ children }) {
  return <div className="text-lg text-white">{children}</div>
}

function FeatureCardDescription({ children }) {
  return <p className="mt-4 text-sm font-light leading-relaxed text-white/75">{children}</p>
}

function DocumentsFeature({ className }) {
  const dots = new Array(9)

  return (
    <FeatureCard className={className}>
      <FeatureCardThumbnail>
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <DocumentIcon className="relative h-8 w-8 fill-white/10 stroke-[1] text-white" />
        </div>

        <div className="w-[6.5rem] overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:6s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <ChatBubbleLeftRightIcon className="relative h-8 w-8 fill-cyan-400/10 stroke-[1] text-cyan-400" />
        </div>
      </FeatureCardThumbnail>

      <FeatureCardBody>
        <FeatureCardTitle>Upload documents</FeatureCardTitle>
        <FeatureCardDescription>
          Effortlessly upload the PDFs you want to chat with. Get things started with just a few clicks and your
          documents are ready for a chat.
        </FeatureCardDescription>
      </FeatureCardBody>
    </FeatureCard>
  )
}

function ResponsesFeature({ className }) {
  const dots = new Array(3)

  return (
    <FeatureCard className={className}>
      <FeatureCardThumbnail>
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <UserIcon className="relative h-8 w-8 fill-white/10 stroke-[1] text-white" />
        </div>

        <div className="w-9 overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <ChatBubbleLeftRightIcon className="relative h-8 w-8 fill-cyan-400/10 stroke-[1] text-cyan-400" />
        </div>

        <div className="w-9 overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <DocumentTextIcon className="relative h-8 w-8 fill-teal-400/10 stroke-[1] text-teal-400" />
        </div>
      </FeatureCardThumbnail>

      <FeatureCardBody>
        <FeatureCardTitle>Real-time responses</FeatureCardTitle>
        <FeatureCardDescription>
          Pop the questions, pull out information, or get a quick summary of your documents using our smart AI.
          It&apos;s all instant and tailored for you.
        </FeatureCardDescription>
      </FeatureCardBody>
    </FeatureCard>
  )
}

function ReferencesFeature({ className }) {
  const dots = new Array(3)

  return (
    <FeatureCard className={className}>
      <FeatureCardThumbnail>
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <DocumentIcon className="relative h-8 w-8 fill-white/10 stroke-[1] text-white" />
        </div>

        <div className="w-9 overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <DocumentTextIcon className="relative h-8 w-8 fill-green-400/10 stroke-[1] text-green-400" />
        </div>

        <div className="w-9 overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <ClipboardDocumentCheckIcon className="relative h-8 w-8 fill-violet-400/10 stroke-[1] text-violet-400" />
        </div>
      </FeatureCardThumbnail>

      <FeatureCardBody>
        <FeatureCardTitle>References included</FeatureCardTitle>
        <FeatureCardDescription>
          Every answer you receive comes directly from your uploaded documents – we always include the source for full
          transparency.
        </FeatureCardDescription>
      </FeatureCardBody>
    </FeatureCard>
  )
}

export function PrimaryFeatures() {
  return (
    <div id="overview" className="scroll-mt-8 py-8 lg:py-16">
      <ScrollReveal once={true} trigger="middle" className="[--duration:500ms]">
        {(isActive) => (
          <SectionWrapper>
            <SectionHeading>
              <SectionBadge>Overview {isActive ? "true" : "false"}</SectionBadge>

              <SectionTitle>
                Revolutionizing the way
                <SectionTitleFade>
                  you
                  <br />
                  understand documents
                </SectionTitleFade>
              </SectionTitle>

              <SectionDescription>
                Recharger lets you have a conversation with your documents.
                <br className="hidden lg:block" />
                Just ask and retrieve the information you need, all in a simple chat.
              </SectionDescription>
            </SectionHeading>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
              <DocumentsFeature
                className={clsx(
                  " transition-all delay-150 duration-[--duration]",
                  !isActive ? "translate-y-8 opacity-0" : "",
                )}
              />
              <ResponsesFeature
                className={clsx(
                  " transition-all delay-300 duration-[--duration]",
                  !isActive ? "translate-y-8 opacity-0" : "",
                )}
              />
              <ReferencesFeature
                className={clsx(
                  " transition-all delay-[450ms] duration-[--duration]",
                  !isActive ? "translate-y-8 opacity-0" : "",
                )}
              />
            </div>
          </SectionWrapper>
        )}
      </ScrollReveal>
    </div>
  )
}
