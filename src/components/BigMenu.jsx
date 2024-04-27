function BigMenu() {
    return (
        <nav className="px-6 md:px-24 text-slate-900  py-4 fixed top-0 right-0 left-0 z-10 shadow-lg flex justify-between items-center bg-white">
            <div className="flex gap-2">
           <img src="./img/logo.png" className="w-6 sm:w-8" alt="logo-img" />
           <p className="text-xl tracking-widest ">limisolution</p>
            </div>
            <div className="hidden md:flex gap-10 font-semibold">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="space-y-1 border-2 border-blue-300 py-2 sm:px-8 px-4 rounded-2xl">
               <a href="whatsapp://send?phone=+2348080755931">Chat Me</a>
            </div>
         
        </nav>
    );
}

export default BigMenu;