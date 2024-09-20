import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gradient-light-accent dark:bg-gradient-dark-accent text-light-text dark:text-dark-text">
      <Navbar />
      <Hero />
      <About />
      <ContactUs/>
    </div>
  );
}

export default App;
