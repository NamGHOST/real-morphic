import React from 'react'
import Link from 'next/link'
import { SiDiscord, SiGithub, SiX, } from 'react-icons/si'
import { FaSquareThreads } from "react-icons/fa6"
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <div className="flex justify-end">
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://discord.gg/gxTXDeeTXD" target="_blank">
            <SiDiscord size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://www.threads.net/@imogenai.app" target="_blank">
            <FaSquareThreads size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >

        </Button>
      </div>
    </footer>
  )
}

export default Footer
