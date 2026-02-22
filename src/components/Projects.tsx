'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Code, 
  Smartphone, 
  Database,
  Zap,
  Star,
  TrendingUp
} from 'lucide-react'

interface Project {
  title: string
  description: string
  image: string
  url: string
  tech: string[]
  category: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Adifront',
    description: 'Modern web application with cutting-edge frontend technologies, delivering exceptional user experience and performance.',
    image: '/images/adi.png',
    url: 'https://adifront.netlify.app/',
    tech: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    category: 'Web Development',
    featured: true
  },
  {
    title: 'Pyvotale Hub',
    description: 'Educational platform for Python learning and development, featuring interactive courses and real-time coding environment.',
    image: '/images/pyvotalehub.png',
    url: 'https://pyvotalehub.netlify.app/',
    tech: ['Python', 'Django', 'PostgreSQL', 'React'],
    category: 'Education',
    featured: true
  },
  {
    title: 'Lab Foundation',
    description: 'Research and laboratory management system designed to streamline operations and enhance productivity.',
    image: '/images/lab.png',
    url: 'https://labfoundation.netlify.app/',
    tech: ['Node.js', 'Express', 'MongoDB', 'React'],
    category: 'Management System',
    featured: false
  }
]

const categoryIcons: { [key: string]: React.ElementType } = {
  'Web Development': Globe,
  'Education': Code,
  'Management System': Database
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export default function Projects() {
  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 rounded-3xl" />
      
      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 mb-6"
          >
            <Star className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Featured Projects
            </span>
          </motion.div>
          
          <h2 className="md:text-5xl text-4xl mb-6 font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Recent Work
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects showcasing expertise in modern web technologies, 
            innovative solutions, and attention to detail.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category] || Globe
            
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                  >
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  </motion.div>
                )}

                {/* Project Card */}
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center space-x-2">
                      <CategoryIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        {project.category}
                      </span>
                    </div>

                    {/* Quick Actions */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute bottom-4 right-4 flex space-x-2"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors duration-200"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  </a>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-all duration-300"
                  >
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </motion.div>

    {/* Stats Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {[
        { icon: Globe, label: 'Live Projects', value: '3+' },
        { icon: Code, label: 'Technologies', value: '10+' },
        { icon: TrendingUp, label: 'Growth Rate', value: '98%' },
        { icon: Zap, label: 'Performance', value: 'A+' }
      ].map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl text-center border border-blue-200 dark:border-blue-800"
        >
          <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-slate-600 dark:text-slate-400">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* CTA Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-16 text-center"
    >
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Start a Project</span>
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</div>
)
}
