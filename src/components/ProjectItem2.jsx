import * as React from "react"

import { Button } from "@/components/ui/button"
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
      <CardTitle>Redux Blog</CardTitle>
      <CardDescription className="text-xs">Effortlessly create and edit blogs with our full-stack React-Redux blog builder, utilizing TypeScript, Node.js, and MongoDB for a solid foundation.</CardDescription>
    </CardHeader>
    <CardContent>
  
    <Link href="https://www.bennetts-blog-builder.site/" target="_blank" passHref >

      <Image
        src={"/images/redux-blog.png"}
        alt="Redux Blog"
        width={500}
        height={500}
      />
    </Link>
     
    </CardContent>
    {/* <CardFooter className="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </CardFooter> */}
  </Card>
  )
}

