import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Resume />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 border-t border-white/5 bg-zinc-950 text-center text-xs text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Sarika Choudhary. All rights reserved.</p>
      </footer>
    </>
  );
}