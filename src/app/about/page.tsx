'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function About() {
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
      
      <section className="max-w-4xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-4 md:p-8 flex flex-col md:flex-row items-center gap-8"
        >
          <img 
            src="/images/me-2.png" 
            alt="Alimi AbdulRosheed" 
            className="w-32 h-32 rounded-full object-cover ring-4 ring-blue-400 dark:ring-blue-600 shadow-xl" 
          />
          <div className="flex-1 text-left">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:text-4xl text-3xl mb-6 font-bold gradient-text"
            >
              About Me
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="sm:text-lg text-base text-slate-700 dark:text-slate-200 mb-6 leading-relaxed"
            >
              My name is <span className='font-semibold text-blue-600 dark:text-blue-300'>Alimi AbdulRosheed</span> (Alimisolution). 
              I am a dedicated Software Engineer with 5 years of front-end and 3 years of back-end experience, 
              specializing in Full-Stack and MERN-Stack development. I have a proven track record of building 
              high-quality, responsive web and mobile applications using modern technologies. I am passionate about 
              solving real-world problems through code, continuously learning, and delivering impactful digital solutions. 
              I am actively seeking new opportunities to contribute my skills and grow with forward-thinking teams.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Technical Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Frontend</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">React, Next.js, TypeScript, TailwindCSS</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Backend</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Node.js, Express, Python Django</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg">
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Mobile</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">React Native, Expo</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-2 justify-start"
            >
              {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'React-Native', 'Python'].map((skill) => (
                <span 
                  key={skill}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 dark:from-blue-900 dark:to-purple-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
