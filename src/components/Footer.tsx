'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code2,
  Heart,
  ArrowUp,
  Globe,
  Briefcase,
  User,
  MessageSquare
} from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/Alimisolution?tab=repositories', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/alimi-rosheed-271a5423a/', label: 'LinkedIn' }
]

const quickLinks = [
  { name: 'Home', href: '/', icon: Globe },
  { name: 'About', href: '/about', icon: User },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Contact', href: '/contact', icon: MessageSquare }
]

const services = [
  { name: 'Web Development', href: '/services' },
  { name: 'Mobile Apps', href: '/services' },
  { name: 'Technical Training', href: '/services' },
  { name: 'Consulting', href: '/services' }
]

const contactInfo = [
  { icon: Mail, text: 'alimirosheed5000@gmail.com', href: 'mailto:alimirosheed5000@gmail.com' },
  { icon: Phone, text: '+2348080755931', href: 'https://wa.me/+2348080755931' },
  { icon: MapPin, text: 'Available Worldwide', href: '#' }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/" className="group flex items-center space-x-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
                  >
                    <Code2 className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                    Alimisolution
                  </span>
                </Link>
                
                <p className="text-slate-300 mb-6 leading-relaxed max-w-sm">
                  Full Stack Developer & Technical Educator dedicated to building amazing digital experiences 
                  and empowering others through technology education.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 border border-slate-700 hover:border-blue-500"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors duration-300 group"
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-300 inline-block group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-blue-400">Get In Touch</h3>
              <ul className="space-y-4">
                {contactInfo.map((info) => (
                  <li key={info.text}>
                    <a
                      href={info.href}
                      className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors duration-300 group"
                    >
                      <info.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {info.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-slate-800"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowUp className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-2 text-slate-400"
              >
                <span>© {currentYear} Alimisolution.</span>
                <span>All rights reserved.</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-2 text-slate-400"
              >
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>using Next.js & TailwindCSS</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  )
}
