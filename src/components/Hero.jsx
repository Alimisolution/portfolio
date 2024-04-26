function Hero() {
    return (
     <div className="hero lg:grid grid-cols-2 items-center mt-28 md:mt-10 justify-center w-[100%] h-[100vh] gap-10 text-white px-4 md:px-24">
        <div className="mx-auto text-center md:text-left">
            <p className="md:text-xl">I'm Alimi AbdulRosheed (Alimisolution)</p>
            <h1 className="font-bold text-4xl md:text-7xl mt-5">Software Engineer</h1>
            <h1 className="font-bold text-lg md:text-2xl mb-10 mt-5">Full-Stack javascript Developer</h1>
              <div className="space-y-1 flex items-center gap-5 justify-center md:justify-start">
              <a href="/img/alimisolution.jpg" download className="border-2 border-blue-300 py-3 md:px-12 px-5 rounded-2xl text-sm ">Download My Resume</a>
              <a href="mailto:alimirosheed5000@gmail.com" className="border-2 border-blue-300 py-3 md:px-12 px-5 rounded-2xl text-sm ">Mail Me</a>
             
            </div>
        </div>
        <div className="my-14 md:py-12 border-8 p-3 border-blue-300">
            <img src="/img/me.jpeg" alt="me" className="md:w-[500px] h-[500px] w-[100%]  object-cover text-center mx-auto"/>
            
        </div>
     </div>
    );
}

export default Hero;