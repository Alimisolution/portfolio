import {FaHome} from 'react-icons/fa';
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";

function MobileMneu() {
     return (
        <nav className="bg-slate-900 py-6 px-2 flex items-center justify-between md:hidden text-sm font-bold text-white fixed bottom-0 z-20 left-0 right-0">
                  <a href="#home" className='font-bold text-2xl flex flex-col items-center gap-1' >
                    <FaHome/>
                    <small className='text-sm'>

                    Home
                    </small>
                  </a>
                <a href="#about" className='font-bold text-2xl flex flex-col items-center gap-1' >
                <SiAboutdotme/>
                <small className='text-sm'>

                About
                </small>
                </a>
                <a href="#skills" className='font-bold text-2xl flex flex-col items-center gap-1' >
                  <GiSkills/>
                  <small className='text-sm'>

                  Skills
                  </small>
                </a>
                <a href="#projects" className='font-bold text-2xl flex flex-col items-center gap-1' >
                  <GrProjects/>
                  <small className='text-sm'>

                  Projects
                  </small>
                </a>
                <a href="#contact" className='font-bold text-2xl flex flex-col items-center gap-1' >
                  <IoIosContact/>
                  <small className='text-sm'>

                  Contact
                  </small>
                </a>

            
        </nav>
    );

}

export default MobileMneu;