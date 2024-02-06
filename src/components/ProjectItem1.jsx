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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from 'next/link';



export default function ProjectItem1() {
  return (
    <Card className="w-[350px] hover:shadow-teal-500">
    <CardHeader>
      <CardTitle>Gym Guardian</CardTitle>
      <CardDescription className="text-xs">Next.js v14 for fitness tracking, MongoDB for secure data storage, Shadcn-ui with Tailwind CSS for a sleek UI, and Next Auth Provider for seamless authentication with Google API.</CardDescription>
    </CardHeader>
    <CardContent>
  
    <Link href="https://www.gym-guardian.xyz/builder" target="_blank" passHref >

      <Image
        src={"/images/gym-guardian.png"}
        alt="Gym Guardian"
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

