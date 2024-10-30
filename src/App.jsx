import "./App.css";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
        <About />
        <Experiences />
        <Projects />
      </header>
    </>
  );
}

export default App;
