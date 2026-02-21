'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Server, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud,
  Palette,
  Terminal,
  GitBranch,
  Zap,
  Award,
  TrendingUp,
  CheckCircle2,
  Star
} from 'lucide-react'

interface Skill {
  name: string
  icon: React.ElementType
  color: string
  description?: string
}

interface SkillsCategory {
  title: string
  icon: React.ElementType
  color: string
  skills: Skill[]
}

const skillsData: SkillsCategory[] = [
  {
    title: 'Frontend',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', icon: Code, color: 'text-blue-600', description: 'Advanced component architecture' },
      { name: 'Next.js', icon: Globe, color: 'text-gray-600', description: 'SSR, SSG, and API routes' },
      { name: 'TypeScript', icon: Terminal, color: 'text-blue-500', description: 'Type-safe development' },
      { name: 'TailwindCSS', icon: Palette, color: 'text-cyan-600', description: 'Modern CSS framework' }
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', icon: Server, color: 'text-green-600', description: 'JavaScript runtime' },
      { name: 'Express', icon: Zap, color: 'text-gray-600', description: 'Web framework' },
      { name: 'Python Django', icon: Server, color: 'text-green-500', description: 'Python web framework' }
    ]
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'MongoDB', icon: Database, color: 'text-green-600', description: 'NoSQL database' },
      { name: 'MySQL', icon: Database, color: 'text-blue-600', description: 'Relational database' }
    ]
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React Native', icon: Smartphone, color: 'text-purple-600', description: 'Cross-platform mobile' },
      { name: 'Expo', icon: Smartphone, color: 'text-purple-500', description: 'Mobile development platform' }
    ]
  }
]

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

export default function Skills() {
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
            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Technical Expertise
            </span>
          </motion.div>
          
          <h2 className="md:text-5xl text-4xl mb-6 font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise spanning modern web development technologies, 
            from frontend frameworks to backend systems and mobile applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 h-full border border-slate-200 dark:border-slate-700">
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {category.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-sm text-slate-500 dark:text-slate-400">
                      <Star className="w-3 h-3" />
                      <span>{category.skills.length} technologies</span>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            transition={{ duration: 0.2 }}
                            className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center"
                          >
                            <skill.icon className={`w-4 h-4 ${skill.color}`} />
                          </motion.div>
                          <div>
                            <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                              {skill.name}
                            </h4>
                            {skill.description && (
                              <p className="text-xs text-slate-500 dark:text-slate-400">
                                {skill.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold">
                  Additional Technologies & Tools
                </h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Git', 'VS Code', 'npm', 'Webpack', 'REST APIs', 'GraphQL', 
                  'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'CI/CD', 'Agile'
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-all duration-300 border border-white/20"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Code, label: 'Years Coding', value: '5+' },
            { icon: Globe, label: 'Projects Built', value: '50+' },
            { icon: Award, label: 'Certifications', value: '10+' },
            { icon: TrendingUp, label: 'Learning Hours', value: '1000+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-xl text-center border border-slate-200 dark:border-slate-600"
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
      </div>
    </div>
  )
}
