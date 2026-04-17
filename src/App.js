import { Route, Routes } from "react-router-dom";

// import components
import About from "./components/About";
import BackToTopBtn from "./components/BackToTopBtn";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portofolio from "./components/Portofolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import ProjectDetails from "./pages/ProjectDetails";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <Brands />
              <About />
              <Skills />
              <Portofolio />
              <Services />
              <Testimonials />
              <Contact />
            </div>
          }
        />

        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
      <BackToTopBtn />
    </div>
  );
};

export default App;
