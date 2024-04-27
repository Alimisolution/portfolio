import {FaHome} from 'react-icons/fa';
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";

function MobileMneu() {
     return (
        <nav className="bg-slate-900 py-6 px-4 flex items-center justify-between md:hidden text-sm font-bold text-white fixed bottom-0 z-20 left-0 right-0">
                  <a href="#home" className='font-bold text-2xl' >
                    <FaHome/>
                  </a>
                <a href="#about" className='font-bold text-2xl' >
                <SiAboutdotme/>
                </a>
                <a href="#skills" className='font-bold text-2xl' >
                  <GiSkills/>
                </a>
                <a href="#projects" className='font-bold text-2xl' >
                  <GrProjects/>
                </a>
                <a href="#contact" className='font-bold text-2xl' >
                  <IoIosContact/>
                </a>

            
        </nav>
    );

}

export default MobileMneu;