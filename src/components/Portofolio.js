import React from "react";

// import commponent
import Projects from "./Projects";

const Portofolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My Latest Work
          </h2>
          <p className="subtitle">
            I am a Fresh Graduate, even though I am a Fresh Graduate I am a
            young person who wants to continue learning to develop skills in the
            field of programming.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portofolio;
