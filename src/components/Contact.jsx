import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa'
function Contact(){
    return(
        <div className="px-4 md:py-24 py-20 text-center bg-slate-800 text-white md:mt-0" id="contact">
            <div className="max-w-3xl mx-auto">
            <h1 className="md:text-5xl text-4xl mb-10 font-semibold">Contact Me</h1>
           <div className="flex justify-center items-center gap-10">
            <a href="https://github.com/Alimisolution?tab=repositories" target='_blank' className="font-bold md:text-4xl text-2xl">
                <FaGithub/>
            </a>
             <a href="https://twitter.com/alimi_rosh55817" target='_blank' className="font-bold md:text-4xl text-2xl">
                <FaTwitter/>
            </a>
             <a href="https://www.linkedin.com/in/alimi-rosheed-271a5423a/" target='_blank' className="font-bold md:text-4xl text-2xl">
                <FaLinkedin/>
            </a>
           </div>
            </div>
            <a href="#home" className="fixed bottom-24 right-5 z-10 bg-slate-800 text-white w-12 h-12 text-xl flex justify-center items-center border-2 font-bold rounded-full">&uarr;</a>
        </div>
    );
}

export default Contact