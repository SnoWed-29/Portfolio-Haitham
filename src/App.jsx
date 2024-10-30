import "./App.css";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
        <Experiences />
      </header>
    </>
  );
}

export default App;
