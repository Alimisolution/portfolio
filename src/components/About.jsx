import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function About(){
    return(
        <div className="px-4 md:py-24 py-14 pt-28 text-center bg-white text-slate-800 md:mt-0 mt-40" id="about"   data-aos="fade-up"
        data-aos-duration="5000">
            <div className="max-w-3xl mx-auto">
            <h1 className="md:text-5xl text-4xl mb-10 font-semibold">About Me</h1>
            <p className="text-lg">My name is Alimi AbdulRosheed (Alimisolution), i'm Software Engineer, Mern Stack and Full-Stack 
            javascript developer, having 2 years of experience in front-end and 1 year of experience in backend, my skilss are Html, Css, 
            Javascript, Bootstrap, Tailwindcss, ReactJS, ExpressJS, MongoDB, MySql, i design fully functioning and responsive website 
            with my skills, i am 
            available for any opportunity and promise to give it my best</p>
            </div>
        </div>
    );
}

export default About