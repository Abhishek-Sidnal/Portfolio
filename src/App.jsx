import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div className="min-h-screen bg-gradient-light-accent dark:bg-gradient-dark text-light-text dark:text-dark-text">
      <ThemeProvider>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <ContactUs />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
