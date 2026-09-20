import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Hero from "@/app/components/Hero"
import Contact from "@/app/components/Contact"
import Experience from "@/app/components/Experience"
import Projects from "@/app/components/Projects"
import Skills from "@/app/components/Skills"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="max-w-7xl mx-auto px-4">
        <Skills/>
        <Experience/>
        <Projects/>
        {/* <Contact/> */}
      </div>
      <Footer/>
    </div>
  );
}
