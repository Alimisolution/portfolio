import skill from '../skill'
import { motion } from 'motion/react';
function Skills(){
    return(
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8" id="skills">
            <div className="max-w-3xl mx-auto">
                <motion.h1 initial={{opacity:0, y: -20}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5, delay: 0.5}} className="md:text-5xl text-4xl mb-8 font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg text-center">Skills</motion.h1>
                <div className="grid xl:grid-cols-6 md:grid-cols-5 grid-cols-3 items-center justify-center gap-10 md:mt-12 mt-8 px-4">
                    {skill.map(skills =>(
                        <div key={skills.id}>
                            <motion.img initial={{opacity:0, y: -20}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5, delay: 0.5}} src={skills.image} alt="img" className="w-14 h-14 md:w-16 md:h-16 object-contain mx-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills