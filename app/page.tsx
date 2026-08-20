import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Hero from "@/app/components/Hero"
import Contact from "@/app/components/Contact"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Contact/>
      <Footer/>
    </div>
  );
}
