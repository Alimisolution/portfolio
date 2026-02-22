'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8" id="contact">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          initial={{opacity:0, x: -10}} 
          whileInView={{opacity:1, x:0}} 
          transition={{duration: 0.5, delay: 0.5}} 
          className="md:text-5xl text-4xl mb-10 font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg text-center"
        >
          Contact Me
        </motion.h1>
        <div className="flex justify-center items-center gap-10 mb-6">
          <Link 
            href="https://github.com/Alimisolution?tab=repositories" 
            target='_blank'
            className="font-bold md:text-5xl text-3xl rounded-full ring-2 ring-blue-400 dark:ring-blue-500 p-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-lg hover:scale-110 transition"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link 
            href="https://twitter.com/alimi_rosh55817" 
            target='_blank'
            className="font-bold md:text-5xl text-3xl rounded-full ring-2 ring-blue-400 dark:ring-blue-500 p-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-lg hover:scale-110 transition"
          >
            <Twitter className="w-6 h-6" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/alimi-rosheed-271a5423a/" 
            target='_blank'
            className="font-bold md:text-5xl text-3xl rounded-full ring-2 ring-blue-400 dark:ring-blue-500 p-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-lg hover:scale-110 transition"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
