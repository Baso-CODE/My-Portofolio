// import commponent
import Projects from "./Projects";

const Portofolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            Featured Projects
          </h2>
          <p className="subtitle">
            A showcase of my recent work, ranging from scalable web applications
            to custom business solutions. Each project reflects my commitment to
            solving real-world problems through clean code, user-centric design,
            and innovative technology.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portofolio;
