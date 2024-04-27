import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import ProjectsData from "../projects";
AOS.init();

function Projects(){
    return(
        <div className="px-4 md:py-24 py-28 text-center bg-white text-slate-800 md:mt-0 mt-56" id="projects" data-aos="fade-up" data-aos-duration="5000">
            <div className="max-w-3xl mx-auto">
                <h1 className="md:text-5xl text-4xl mb-10 font-semibold">Projects </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols gap-20 mt-20">
                    {ProjectsData.map(pro => (
                          <div className="space-y-3" key={pro.id}>
                        <img src={pro.image} alt={pro.name} />
                        <p className="font-semibold text-xl md:text-2xl">{pro.name}</p>
                        <div className="flex justify-center items-center gap-4">
                            <p className="text-white py-3 px-5 rounded-xl bg-slate-800">{pro.code}</p>
                            <p><a className="mt-5 font-semibold text-lg border-4 py-2 px-5 rounded-xl border-blue-300 cursor-point " href={pro.link}>{pro.status}</a></p>
                        </div>
                    </div>
                    ))}
                     
                  
                </div>
            </div>
        </div>  
             
           
    
    );
}

export default Projects