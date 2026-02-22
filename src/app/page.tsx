'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] max-w-6xl mx-auto px-4 pt-32 md:pt-40 gap-10">
        <Hero />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <Projects />
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <Skills />
      </section>

      <Footer />
    </main>
  )
}
