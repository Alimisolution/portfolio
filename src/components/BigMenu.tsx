'use client'

import Image from 'next/image'
import { Sun, Moon } from 'lucide-react'

interface BigMenuProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export default function BigMenu({ theme, toggleTheme }: BigMenuProps) {
  return (
    <nav className="px-6 md:px-24 text-slate-900 dark:text-slate-100 py-4 fixed top-0 right-0 left-0 z-10 shadow-lg flex justify-between items-center bg-white dark:bg-slate-900/80 backdrop-blur-md">
      <div className="flex gap-2 items-center">
        <Image 
          src="/images/logo.png" 
          alt="logo-img" 
          width={24}
          height={32}
          className="w-6 sm:w-8" 
        />
        <p className="text-xl tracking-widest font-bold">Alimisolution</p>
      </div>
      <div className="hidden md:flex gap-10 font-semibold">
        <a href="#home" className="hover:text-blue-500 transition">Home</a>
        <a href="#about" className="hover:text-blue-500 transition">About</a>
        <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
        <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
        <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={toggleTheme} 
          aria-label="Toggle dark mode" 
          className="rounded-full p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>
        <div className="space-y-1 border border-blue-500 dark:border-blue-300 py-2 sm:px-8 px-4 rounded-2xl">
          <a href="mailto:alimisolution1@gmail.com">Mail Me</a>
        </div>
      </div>
    </nav>
  )
}
