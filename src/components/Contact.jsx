function Contact(){
    return(
        <div className="px-4 md:py-24 py-20 text-center bg-slate-800 text-white md:mt-0" id="contact">
            <div className="max-w-3xl mx-auto">
            <h1 className="md:text-5xl text-4xl mb-10 font-semibold">Contact Me</h1>
            <p className="font-semibold text-lg">Contact: <span className="font-normal">08080755931</span></p>
            <p className="font-semibold text-lg">Mail: <span className="font-normal">alimirosheed5000@gmail.com</span></p>
            </div>
            <a href="#home" className="fixed bottom-28 right-5 z-10 bg-slate-800 text-white w-12 h-12 text-xl flex justify-center items-center border-2 font-bold rounded-full">&uarr;</a>
        </div>
    );
}

export default Contact