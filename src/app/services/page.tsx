'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Globe, 
  Smartphone, 
  GraduationCap, 
  Home, 
  Laptop, 
  Code, 
  Users, 
  Clock, 
  Star,
  CheckCircle2,
  ArrowRight,
  Zap,
  Award,
  TrendingUp,
  BookOpen,
  Video,
  Target,
  Rocket,
  Lightbulb,
  Shield,
  Heart
} from 'lucide-react'

interface Service {
  title: string
  description: string
  icon: React.ElementType
  features: string[]
  color: string
  popular?: boolean
}

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Building modern, responsive, and high-performance web applications using cutting-edge technologies like React, Next.js, and TypeScript.',
    icon: Globe,
    features: [
      'Responsive Design',
      'Progressive Web Apps', 
      'E-commerce Solutions',
      'Custom Web Applications',
      'SEO Optimization',
      'Performance Optimization'
    ],
    color: 'from-blue-500 to-cyan-500',
    popular: true
  },
  {
    title: 'Mobile App Development',
    description: 'Creating native and cross-platform mobile applications using React Native and Expo for iOS and Android platforms.',
    icon: Smartphone,
    features: [
      'iOS & Android Apps',
      'Cross-platform Development',
      'App Store Deployment',
      'UI/UX Design',
      'Push Notifications',
      'Offline Functionality'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Training & Mentorship',
    description: 'Comprehensive training programs for individuals and teams looking to learn modern web development technologies.',
    icon: GraduationCap,
    features: [
      'One-on-one Mentorship',
      'Group Training',
      'Corporate Training',
      'Career Guidance',
      'Code Reviews',
      'Portfolio Development'
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Home Training',
    description: 'Personalized in-home training sessions for individuals who prefer face-to-face learning in a comfortable environment.',
    icon: Home,
    features: [
      'Personalized Curriculum',
      'Flexible Scheduling',
      'Hands-on Projects',
      'Real-world Applications',
      'Progress Tracking',
      'Certification'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Online Training',
    description: 'Interactive online training sessions with live coding, screen sharing, and real-time collaboration tools.',
    icon: Laptop,
    features: [
      'Live Video Sessions',
      'Screen Sharing',
      'Recorded Sessions',
      'Online Resources',
      'Community Support',
      '24/7 Access'
    ],
    color: 'from-indigo-500 to-blue-500'
  }
]

const benefits = [
  { icon: Shield, title: 'Quality Assurance', description: 'High-quality code and best practices' },
  { icon: Clock, title: 'On-Time Delivery', description: 'Projects delivered on schedule' },
  { icon: Heart, title: 'Client Satisfaction', description: '100% satisfaction guarantee' },
  { icon: TrendingUp, title: 'Growth Focused', description: 'Solutions that scale with your business' }
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

export default function Services() {
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
    <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 mb-6"
          >
            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              My Services
            </span>
          </motion.div>
          
          <h1 className="md:text-5xl text-4xl mb-6 font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Services & Solutions
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive software development and training services to help individuals and businesses 
            achieve their digital goals with cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Popular Badge */}
              {service.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  className="absolute -top-3 -right-3 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                >
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Popular</span>
                  </div>
                </motion.div>
              )}

              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 h-full border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                {/* Background decoration */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-6 space-y-3">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="group inline-flex items-center space-x-2 mt-6 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-900 dark:text-slate-100">
              Why Choose My Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center border border-slate-200 dark:border-slate-600"
                >
                  <benefit.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: 'Consultation', description: 'Discuss your requirements' },
              { icon: Code, title: 'Development', description: 'Build your solution' },
              { icon: Target, title: 'Testing', description: 'Ensure quality delivery' },
              { icon: Rocket, title: 'Deployment', description: 'Launch your project' }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <Zap className="w-12 h-12 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Let's discuss how I can help bring your ideas to life or advance your development skills.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  href="/projects"
                  className="group inline-flex items-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <span>View Projects</span>
                  <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
