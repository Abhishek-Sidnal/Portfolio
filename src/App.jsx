import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-light-accent dark:bg-gradient-dark-accent text-light-text dark:text-dark-text">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
