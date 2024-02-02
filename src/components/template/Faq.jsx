"use client"

import clsx from "clsx"
import { XMarkIcon } from "@heroicons/react/24/outline"

import {
  SectionWrapperRounded,
  SectionBadge,
  SectionHeading,
  SectionTitle,
  SectionTitleFade,
  SectionDescription,
} from "./Section"

import { Details } from "./Details"

export function Faq() {
  const questions = [
    {
      title: "What is Recharger?",
      content:
        "Recharger is an innovative app that allows you to chat directly with your PDF documents to extract the information you need. It simplifies document understanding and helps you save valuable time.",
    },
    {
      title: "How does Recharger work?",
      content:
        "Recharger uses advanced AI tech to understand the content of your PDFs. Just upload your document, ask the app questions as if you were chatting with a person, and get accurate and instant answers.",
    },
    {
      title: "What types of documents can I use with Recharger?",
      content:
        "Recharger works with any PDF document, making it a versatile tool — whether you're reading complex contracts, lengthy reports, or detailed user manuals.",
    },
    {
      title: "Is there a limit to the number of documents I can upload?",
      content:
        "The number of documents you can upload depends on the type of account you have. For specific details, please refer to our Pricing section.",
    },
  ]

  return (
    <SectionWrapperRounded id="faq" className="scroll-mt-8">
      <SectionHeading>
        <SectionBadge>Questions?</SectionBadge>

        <SectionTitle>
          <span>Not so frequently </span>
          <SectionTitleFade>
            asked
            <br />
            questions
          </SectionTitleFade>
        </SectionTitle>

        <SectionDescription>
          Usually, these are made up as we have no users yet to ask any.
          <br className="hidden lg:block" />
          Anyway, you might learn something important here.
        </SectionDescription>
      </SectionHeading>

      <div className="mt-8 lg:mt-16">
        <Details className="mx-auto max-w-3xl">
          {questions.map((question, index) => (
            <Details.Item key={index} className="group border-b border-white/10">
              {(isActive, toggle) => (
                <>
                  <div onClick={toggle} className="flex cursor-pointer items-center py-6">
                    <div className="text-white/75 transition hover:text-white">{question.title}</div>

                    <div className="relative ml-auto">
                      <XMarkIcon
                        className={clsx(
                          "h-6 w-6 text-white/50 transition-transform duration-500",
                          isActive ? "rotate-180" : "rotate-45",
                        )}
                      />
                    </div>
                  </div>

                  <Details.Content className="overflow-hidden transition-all duration-500 will-change-[height]">
                    <div className="pb-6 font-light text-white/75">{question.content}</div>
                  </Details.Content>
                </>
              )}
            </Details.Item>
          ))}
        </Details>
      </div>
    </SectionWrapperRounded>
  )
}
