import PropTypes from 'prop-types';

function BigMenu({ theme, toggleTheme }) {
    return (
        <nav className="px-6 md:px-24 text-slate-900 dark:text-slate-100 py-4 fixed top-0 right-0 left-0 z-10 shadow-lg flex justify-between items-center bg-white dark:bg-slate-900/80 backdrop-blur-md">
            <div className="flex gap-2 items-center">
                <img src="./img/logo.png" className="w-6 sm:w-8" alt="logo-img" />
                <p className="text-xl tracking-widest font-bold">limisolution</p>
            </div>
            <div className="hidden md:flex gap-10 font-semibold">
                <a href="#home" className="hover:text-blue-500 transition">Home</a>
                <a href="#about" className="hover:text-blue-500 transition">About</a>
                <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
                <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
                <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
            </div>
            <div className="flex items-center gap-2">
                <button onClick={toggleTheme} aria-label="Toggle dark mode" className="rounded-full p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition">
                    {theme === 'dark' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 6.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
                    )}
                </button>
                <div className="space-y-1 border border-blue-500 dark:border-blue-300 py-2 sm:px-8 px-4 rounded-2xl">
                    <a href="mailto:alimisolution1@gmail.com">Mail Me</a>
                </div>
            </div>
        </nav>
    );
}

BigMenu.propTypes = {
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
};

export default BigMenu;