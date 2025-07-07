import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/Journey";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
     <div
  className="fixed top-0 -z-10 h-full w-full bg-cover bg-no-repeat bg-center"
  style={{ backgroundImage: `url('/assets/riya_background.JPG')` }}
></div>


      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
};

export default App;
