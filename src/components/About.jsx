import { motion } from "motion/react"

function About(){
    return(
        <div className="px-4 md:py-24 py-14 pt-28 text-center bg-white text-slate-800" id="about">
            <div className="max-w-3xl mx-auto">
            <motion.h1 initial={{opacity:0, y: -20}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5, delay: 0.5}} className="md:text-5xl text-4xl mb-14 font-semibold">About Me</motion.h1>
            <motion.p initial={{opacity:0, y: -20}} whileInView={{opacity:1, x:0}} transition={{duration: 0.5, delay: 1}} className="text-lg">My name is Alimi AbdulRosheed (Alimisolution), i'm a Software Engineer, Mern Stack and Full-Stack 
            javascript developer, having 4 years of experience in front-end and 1 year of experience in backend, the technologies i use are Html, Css, 
            Javascript, Bootstrap, Tailwindcss, ReactJS, AstroJS, NextJS, ExpressJS, MongoDB, PostgreSQL, i design fully functioning and responsive website 
            with my skills, i am 
            available for any opportunity and promise to give it my best</motion.p>
            </div>
        </div>
    );
}

export default About