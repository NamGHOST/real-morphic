import React, { Suspense } from 'react'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'
import HistoryContainer from './history-container'

export const Header: React.FC = () => {
  return (
    <header className="fixed w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div>
        <a href="/">
          <IconLogo className={cn('w-100 h-100')} />
          <span className="sr-only">Imogen Search</span>
        </a>
      </div>
      <div className="flex gap-0.5">
        <ModeToggle />
        <Suspense>
          <HistoryContainer location="header" />
        </Suspense>
      </div>
    </header>
  )
}

export default Header
