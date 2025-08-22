
import {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import SpotLightUse from '@/components/SpotLightUse'
import MagneticTextUse from '@/components/MagneticTextUse'
import { CardExample } from '@/components/CardExample'
import Scroller from '@/components/Scroller'
import { ExtraFeatures } from '@/components/template/ExtraFeatures'
import Resume from '@/components/Resume'

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <Card className='w-4/5 p-4 mt-14 h-screen/4 '>
          <SpotLightUse />
        </Card>

        <Resume />
      </div>

      <Scroller />
      {/* <ExtraFeatures /> */}

    </div>
  )
}
