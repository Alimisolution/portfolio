'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  User,
  Globe,
  Smartphone,
  Briefcase,
  CheckCircle2,
  Star,
  Zap,
  ExternalLink
} from 'lucide-react'

const whatsappNumber = '+2348080755931'
const emailAddress = 'alimirosheed5000@gmail.com'
const whatsappMessage = 'Hi Alimi! 👋 I found your portfolio and I\'m impressed with your work. I\'d like to discuss:\n\n💻 Web Development Project\n📱 Mobile App Development\n🎓 Training/Mentorship\n🤝 General Inquiry\n\nCould you share more about your services and availability? Looking forward to connecting!'
const emailSubject = 'Project Inquiry - Portfolio Contact'
const emailBody = 'Hello Alimi,\n\nI came across your portfolio and I am interested in discussing a potential project. I would like to:\n\n[ ] Build a Website or Mobile Application\n[ ] Learn web development skills\n[ ] Make an enquiry about your services\n[ ] Other: _______________\n\nPlease let me know your availability and next steps.\n\nLooking forward to hearing from you!\n\nBest regards,\n[Your Name]'

const contactMethods = [
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    description: 'Chat with me directly for quick responses and project discussions',
    action: 'Message on WhatsApp',
    color: 'from-green-500 to-emerald-500',
    href: `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`,
    delay: 0.1
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Send me a detailed email about your project requirements',
    action: 'Send Email',
    color: 'from-blue-500 to-cyan-500',
    href: `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`,
    delay: 0.2
  }
]

const services = [
  { icon: Globe, title: 'Web Development', description: 'Modern, responsive websites' },
  { icon: Smartphone, title: 'Mobile Apps', description: 'iOS & Android applications' },
  { icon: Briefcase, title: 'Training', description: 'Personal & group training' }
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

export default function Contact() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>, emailData?: { subject?: string; body?: string }) => {
    e.preventDefault()
    
    const email = 'alimirosheed5000@gmail.com'
    let mailtoLink = `mailto:${email}`
    
    if (emailData) {
      const params = new URLSearchParams()
      if (emailData.subject) params.append('subject', emailData.subject)
      if (emailData.body) params.append('body', emailData.body)
      mailtoLink += `?${params.toString()}`
    }
    
    // Try to open the email client
    window.location.href = mailtoLink
    
    // Fallback: copy email to clipboard
    setTimeout(() => {
      navigator.clipboard.writeText(email).then(() => {
        alert('Email address copied to clipboard: ' + email)
      }).catch(() => {
        alert('Please email: ' + email)
      })
    }, 1000)
  }

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
            <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Get In Touch
            </span>
          </motion.div>
          
          <h1 className="md:text-5xl text-4xl mb-6 font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project or advance your development skills? 
            I'm here to help bring your ideas to life and share my expertise.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 h-full border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                {/* Background decoration */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-5`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      {method.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {method.description}
                    </p>
                    
                    {/* Contact Info */}
                    {method.title === 'WhatsApp' && (
                      <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                        <Phone className="w-4 h-4" />
                        <span>{whatsappNumber}</span>
                      </div>
                    )}
                    
                    {method.title === 'Email' && (
                      <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                        <Mail className="w-4 h-4" />
                        <span>{emailAddress}</span>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={method.href}
                    onClick={(e) => method.title === 'Email' ? handleEmailClick(e, { subject: emailSubject, body: emailBody }) : undefined}
                    target={method.title === 'Email' ? '_self' : '_blank'}
                    rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className={`group inline-flex items-center space-x-3 bg-gradient-to-r ${method.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-6`}
                  >
                    <span>{method.action}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-900 dark:text-slate-100">
              What I Can Help You With
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center border border-slate-200 dark:border-slate-600"
                >
                  <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Response Time Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: Clock, title: 'Quick Response', description: 'Usually respond within 2-4 hours' },
            { icon: CheckCircle2, title: 'Free Consultation', description: '30-minute initial consultation' },
            { icon: Star, title: 'Satisfaction Guaranteed', description: '100% client satisfaction rate' }
          ].map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl text-center border border-blue-200 dark:border-blue-800"
            >
              <info.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {info.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {info.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Debug Test Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8 text-center"
        >
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
              Debug: Test email functionality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:alimirosheed5000@gmail.com"
                onClick={(e) => handleEmailClick(e)}
                className="inline-flex items-center space-x-2 bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Simple Email Test</span>
              </a>
              <a
                href={`mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                onClick={(e) => handleEmailClick(e, { subject: emailSubject, body: emailBody })}
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Template Email Test</span>
              </a>
            </div>
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
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Whether you need a stunning website, a mobile application, or want to learn 
                modern development skills, I'm here to help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Start on WhatsApp</span>
                </a>
                
                <a
                  href={`mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                  onClick={(e) => handleEmailClick(e, { subject: emailSubject, body: emailBody })}
                  className="group inline-flex items-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
