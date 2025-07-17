import { motion } from "motion/react"
import Typing from './Typing'

function Hero() {
    const text2 = Typing('Software Engineer')
    const text3 = Typing("Full-Stack and Mern-Stack Developer")
    return (
        <div id="home" className="w-full flex flex-col md:flex-row items-center justify-center gap-10 relative">
            {/* Decorative gradient background shape */}
            <div className="absolute -z-10 left-0 top-0 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-400/20 rounded-full blur-3xl opacity-70 dark:from-blue-700/40 dark:to-purple-700/30" />
            {/* Image */}
            <motion.div className="flex-shrink-0" initial={{scale:0}} whileInView={{scale:1}} transition={{duration:1, type: "spring", stiffness: 100}} viewport={{ once: true }}>
                <img src="/img/me-2.png" alt="me" className="h-[200px] w-[200px] sm:h-[220px] sm:w-[220px] rounded-full object-cover ring-4 ring-blue-400 dark:ring-blue-600 shadow-2xl transition"/>
            </motion.div>
            {/* Text */}
            <div className="flex-1 text-center md:text-left space-y-4">
                <motion.p initial={{opacity:0, y: -20}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5, delay: 0.4}} viewport={{ once: true }} className="md:text-xl text-lg font-medium text-slate-700 dark:text-slate-200">I'm <span className="font-bold text-blue-600 dark:text-blue-400">Alimi AbdulRosheed</span> (Alimisolution)</motion.p>
                <h1 className="font-extrabold text-4xl md:text-6xl leading-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">{text2}</h1>
                <h2 className="font-semibold text-lg md:text-2xl mb-8 mt-2 text-slate-600 dark:text-slate-300">{text3}</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <motion.a initial={{opacity:0, x: -10}} whileInView={{opacity:1, x:0}} transition={{duration: 1, delay: 0.5}} viewport={{ once: true }} href="/img/MY-RESUME.pdf" download className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-xl text-base font-semibold shadow-md transition">My Resume</motion.a>
                    <motion.a initial={{opacity:0, x: 10}} whileInView={{opacity:1, x:0}} transition={{duration: 1, delay: 0.7}} viewport={{ once: true }} href="whatsapp://send?phone=+2348080755931" className="bg-white dark:bg-slate-800 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 py-3 px-8 rounded-xl text-base font-semibold shadow-md hover:bg-blue-50 dark:hover:bg-slate-700 transition">Hire Me</motion.a>
                </div>
            </div>
        </div>
    );
}

export default Hero;