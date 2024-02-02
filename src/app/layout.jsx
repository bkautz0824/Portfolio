import { Inter } from 'next/font/google'
import './global.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/ModeToggle'
import Marquee from '@/components/ui/Marquee'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Bennett's Portfolio",
  description: 'Welcome to my portfolio. Take a look at my work and feel free to reach out with any relevant opportunities.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            // disableTransitionOnChange
          >
            <header className='flex justify-center my-3 w-7/8'>
              {/* <span className='m-4'>
                 <ModeToggle/>
              </span> */}
             
              <NavBar />
            </header>
            {children}
            <footer >
              <Marquee />
            </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
