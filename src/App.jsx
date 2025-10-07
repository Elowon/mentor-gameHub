import About from "./componets/About";
import Contact from "./componets/Contact";
import Features from "./componets/Features";
import Footer from "./componets/Footer";
import Hero from "./componets/Hero";
import NavBar from "./componets/NavBar";
import Story from "./componets/Story";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
