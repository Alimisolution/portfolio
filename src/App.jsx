import { useEffect, useState } from 'react';
import About from "./components/About";
import BigMenu from "./components/BigMenu";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import MobileMneu from "./components/MobileMneu";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Footer from "./components/Footer";

function App() {
  // Theme state and logic
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
      <BigMenu theme={theme} toggleTheme={toggleTheme} />
      <MobileMneu />
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] max-w-6xl mx-auto px-4 pt-32 md:pt-40 gap-10">
        <Hero />
      </section>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <About />
      </section>
      <section className="max-w-5xl mx-auto px-4 py-16">
        <Skills />
      </section>
      <section className="max-w-5xl mx-auto px-4 py-16">
        <Projects />
      </section>
      <section className="max-w-3xl mx-auto px-4 py-16">
        <Contact />
      </section>
      <Footer />
      <button 
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="fixed bottom-36 right-5 z-50 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white w-12 h-12 text-xl flex justify-center items-center border-2 font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </main>
  );
}

export default App;


