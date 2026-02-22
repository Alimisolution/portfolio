'use client'

import Link from 'next/link'
import { Home, User, Award, MessageSquare } from 'lucide-react'

export default function MobileMneu() {
  return (
    <nav className="bg-slate-900 py-6 px-2 flex items-center justify-center md:hidden text-sm font-bold text-white fixed bottom-0 z-20 left-0 right-0">
      <div className="flex gap-8 items-center">
        <Link href="#home" className='font-bold text-sm flex flex-col items-center gap-1'>
          <Home className="w-4 h-4" />
          <small className='text-xs'>Home</small>
        </Link>
        <Link href="#about" className='font-bold text-sm flex flex-col items-center gap-1'>
          <User className="w-4 h-4" />
          <small className='text-xs'>About</small>
        </Link>
        <Link href="#skills" className='font-bold text-sm flex flex-col items-center gap-1'>
          <Award className="w-4 h-4" />
          <small className='text-xs'>Skills</small>
        </Link>
        <Link href="#projects" className='font-bold text-sm flex flex-col items-center gap-1'>
          <MessageSquare className="w-4 h-4" />
          <small className='text-xs'>Projects</small>
        </Link>
        <Link href="#contact" className='font-bold text-sm flex flex-col items-center gap-1'>
          <MessageSquare className="w-4 h-4" />
          <small className='text-xs'>Contact</small>
        </Link>
      </div>
    </nav>
  )
}
