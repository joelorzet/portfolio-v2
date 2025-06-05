import { Header } from '@/components/header/Header';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/projects/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/Footer';
import { ServicesProvider } from './contexts/ServicesContext';

function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100">
            <Header />
            <ServicesProvider>
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Contact />
                </main>
                <Footer />
            </ServicesProvider>
        </div>
    );
}

export default App;
