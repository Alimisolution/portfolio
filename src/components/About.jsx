import { motion } from "motion/react"

function About(){
    return(
        <div id="about" className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8">
            <img src="/img/me-2.png" alt="about-me" className="w-32 h-32 rounded-full object-cover ring-2 ring-blue-400 dark:ring-blue-600 shadow-md" />
            <div className="flex-1 text-center md:text-left">
                <motion.h1 initial={{opacity:0, y: -20}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5, delay: 0.5}} className="md:text-4xl text-3xl mb-6 font-bold text-blue-700 dark:text-blue-400">About Me</motion.h1>
                <motion.p initial={{opacity:0, y: -20}} whileInView={{opacity:1, x:0}} transition={{duration: 0.5, delay: 1}} className="text-lg text-slate-700 dark:text-slate-200 mb-4">My name is <span className='font-semibold text-blue-600 dark:text-blue-300'>Alimi AbdulRosheed</span> (Alimisolution). I am a dedicated Software Engineer with 5 years of front-end and 3 years of back-end experience, specializing in Full-Stack and MERN-Stack development. I have a proven track record of building high-quality, responsive web and mobile applications using modern technologies. I am passionate about solving real-world problems through code, continuously learning, and delivering impactful digital solutions. I am actively seeking new opportunities to contribute my skills and grow with forward-thinking teams.</motion.p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">HTML</span>
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">CSS</span>
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">JavaScript</span>
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">React</span>
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">Node.js</span>
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">Express</span>
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">MongoDB</span>
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">Tailwind</span>
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">React-Native</span>
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">C#/Asp.Net</span>
                </div>
            </div>
        </div>
    );
}

export default About