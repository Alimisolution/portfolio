import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import skill from '../skill'
function Skills(){
    return(
        <div className="px-4 md:py-24 pt-10 text-center text-white md:mt-0 mt-20" id="skills" data-aos="fade-up"
        data-aos-duration="5000">
            <div className="max-w-3xl mx-auto">
            <h1 className="md:text-5xl text-4xl mb-5 font-semibold">Skills</h1>
            <div className="grid xl:grid-cols-6 md:grid-cols-5 grid-cols-3 items-center justify-center gap-20 md:mt-20 mt-12 px-4">
             {skill.map(skills =>(
                <div key={skills.id}>
                    <img src={skills.image} alt="img" />
                </div>
             ))}
            
            </div>
            </div>
        </div>
    );
}

export default Skills