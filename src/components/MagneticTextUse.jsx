"use client"

import { MagneticText } from "@/components/ui/MagneticText"

export default function MagneticTextUse({label}) {
  const text = label

  return (
    <div className="flex items-start justify-center w-full max-w-xl mx-auto">
      <div>
        <MagneticText body={text} as="div" className="w-full max-w-2xl text-4xl text-center font-var md:text-6xl">
          {(tokens) =>
            tokens.map((token, index) => (
              <MagneticText.Token key={index} body={token} className="inline-block whitespace-pre cursor-default" />
            ))
          }
        </MagneticText>
      </div>
    </div>
  )
}
