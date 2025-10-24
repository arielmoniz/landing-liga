import { Toaster } from './components/ui/sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ImpactNumbers } from './components/ImpactNumbers';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { Startups } from './components/Startups';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <ImpactNumbers />
        <Projects />
        <Testimonials />
        <Partners />
        <Startups />
        <FAQ />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
