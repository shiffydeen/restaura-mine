import About from "./components/About"
import Contact from "./components/Contact"
import Dishes from "./components/Dishes"
import Expertise from "./components/Expertise"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Mission from "./components/Mission"
import NavBar from "./components/NavBar"
import Reviews from "./components/Reviews"


function App() {


  return (
    <main className="text-neutral-100">
      <HeroSection />
      <NavBar />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
