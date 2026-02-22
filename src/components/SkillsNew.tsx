'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Skill {
  id: number
  name: string
  image: string
}

const skills: Skill[] = [
  { id: 1, name: 'HTML', image: '/images/html.png' },
  { id: 2, name: 'CSS', image: '/images/css.png' },
  { id: 3, name: 'JavaScript', image: '/images/javascript.png' },
  { id: 4, name: 'React', image: '/images/react.png' },
  { id: 5, name: 'Node.js', image: '/images/nodejs.png' },
  { id: 6, name: 'Express', image: '/images/express.png' },
  { id: 7, name: 'MongoDB', image: '/images/mongodb.png' },
  { id: 8, name: 'Tailwind', image: '/images/tailwind.png' },
  { id: 9, name: 'React-Native', image: '/images/react-native.png' },
  { id: 10, name: 'C#/Asp.Net', image: '/images/csharp.png' }
]

export default function Skills() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8" id="skills">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          initial={{opacity:0, y: -20}} 
          whileInView={{opacity:1, y:0}} 
          transition={{duration: 0.5, delay: 0.5}} 
          className="md:text-5xl text-4xl mb-8 font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg text-center"
        >
          Skills
        </motion.h1>
        <div className="grid xl:grid-cols-6 md:grid-cols-5 grid-cols-3 items-center justify-center gap-10 md:mt-12 mt-8 px-4">
          {skills.map((skill) => (
            <div key={skill.id}>
              <motion.div 
                initial={{opacity:0, y: -20}} 
                whileInView={{opacity:1, y:0}} 
                transition={{duration: 0.5, delay: 0.5}} 
                className="relative"
              >
                <Image 
                  src={skill.image} 
                  alt={skill.name} 
                  width={56}
                  height={56}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain mx-auto" 
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
