import { Header } from '@/components/header/Header';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100">
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
