import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import Image from "next/image"
import Link from 'next/link';



export default function ProjectItem1() {
  return (
    <Card className="w-[350px] hover:shadow-teal-500">
    <CardHeader>
      <CardTitle>IMDb site</CardTitle>
      <CardDescription className="text-xs">Explore movies effortlessly with this Next.js app, styled with Tailwind CSS. It taps into the IMDb API for quick access to movie details, keeping the experience simple and enjoyable.</CardDescription>
    </CardHeader>
    <CardContent>
  
    <Link href="https://www.bennetts-blog-builder.site/" target="_blank" passHref >

      <Image
        src={"/images/imdb.png"}
        alt="IMDB"
        width={500}
        height={500}
      />
    </Link>
     
    </CardContent>
  </Card>
  )
}

