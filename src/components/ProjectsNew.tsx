'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: number
  name: string
  image: string
  code: string
  status: string
  link: string
}

const ProjectsData: Project[] = [
  {
    id: 1,
    name: 'Adifront',
    image: '/images/adi.png',
    code: 'React, Node.js, Express, MongoDB',
    status: 'Live',
    link: 'https://adifront.netlify.app/'
  },
  {
    id: 2,
    name: 'Pyvotale Hub',
    image: '/images/pyvotalehub.png',
    code: 'Python Django, PostgreSQL',
    status: 'Live',
    link: 'https://pyvotalehub.netlify.app/'
  },
  {
    id: 3,
    name: 'Lab Foundation',
    image: '/images/lab.png',
    code: 'React, Node.js, Express',
    status: 'Live',
    link: 'https://labfoundation.netlify.app/'
  }
]

export default function Projects() {
  return (
    <div className="px-4 md:py-24 pb-24 pt-12 text-center bg-white text-slate-800 md:mt-0" id="projects">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          initial={{opacity:0, y: -20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration: 0.5, delay: 0.5}} 
          className="md:text-5xl text-4xl mb-10 font-semibold"
        >
          Projects 
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols gap-20 mt-20">
          {ProjectsData.map((pro) => (
            <div className="space-y-3" key={pro.id}>
              <motion.div 
                initial={{opacity:0, y: -20}} 
                whileInView={{opacity:1, y:0}} 
                transition={{duration: 0.5, delay: 0.5}} 
                className="relative"
              >
                <Image 
                  src={pro.image} 
                  alt={pro.name} 
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>
              <motion.p 
                initial={{opacity:0, y: -10}} 
                whileInView={{opacity:1, y:0}} 
                transition={{duration: 0.5, delay: 0.5}} 
                className="font-semibold text-xl md:text-2xl"
              >
                {pro.name}
              </motion.p>
              <div className="flex justify-center items-center gap-4">
                <motion.p 
                  initial={{opacity:0, y: -10}} 
                  whileInView={{opacity:1, y:0}} 
                  transition={{duration: 0.5, delay: 0.5}} 
                  className="text-white py-3 px-5 rounded-xl bg-slate-800"
                >
                  {pro.code}
                </motion.p>
                <motion.div
                  initial={{opacity:0, y: -10}} 
                  whileInView={{opacity:1, y:0}} 
                  transition={{duration: 0.5, delay: 0.5}}
                >
                  <Link 
                    className="mt-5 font-semibold text-lg border-4 py-2 px-5 rounded-xl border-blue-300 cursor-pointer" 
                    href={pro.link}
                  >
                    {pro.status}
                  </Link>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
