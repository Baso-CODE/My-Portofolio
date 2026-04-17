import { FiChevronLeft, FiExternalLink } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "../data";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center text-white font-primary">
        Project not found!
      </div>
    );
  }

  return (
    <section className="section bg-primary min-h-screen pt-32">
      <div className="container mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="flex items-center text-accent mb-12 hover:underline w-fit">
          <FiChevronLeft className="mr-2" /> Back to Home
        </Link>

        <div className="max-w-[1000px] mx-auto">
          {/* Header Project */}
          <div className="flex flex-col mb-12 border-b border-secondary pb-8">
            <h2 className="text-4xl lg:text-5xl font-primary font-bold text-white mb-4">
              {project.name}
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <span className="bg-tertiary text-accent px-4 py-1 rounded-full text-sm capitalize border border-accent/20">
                {project.category}
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {project.links?.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-paragraph hover:text-accent transition-all italic text-sm border-b border-transparent hover:border-accent">
                    <FiExternalLink className="mr-2" /> {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Project Overview
            </h3>
            <p className="text-paragraph text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* --- BAGIAN DINAMIS 1: SEO WORK (Hanya muncul jika ada datanya) --- */}
          {project.seoWork && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-accent mb-6 border-l-4 border-accent pl-4">
                As Search Engine Optimization Specialist
              </h3>
              <ul className="grid md:grid-cols-1 gap-4 text-paragraph">
                {project.seoWork.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* --- BAGIAN DINAMIS 2: MANAGEMENT WORK (Untuk Project 2 / Event) --- */}
          {project.managementWork && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-accent mb-6 border-l-4 border-accent pl-4">
                Key Responsibilities & Event Coordination
              </h3>
              <ul className="grid md:grid-cols-1 gap-4 text-paragraph">
                {project.managementWork.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* GALERI GAMBAR DI TENGAH */}
          <div className="my-20 space-y-8">
            <h3 className="text-center text-white font-primary text-xl italic opacity-60">
              Project Visual Documentation
            </h3>
            <div className="grid gap-8">
              {project.screenshots?.map((img, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl border border-secondary shadow-2xl">
                  <img
                    src={img}
                    alt={`${project.name} screenshot ${index + 1}`}
                    className="w-full h-auto group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* --- BAGIAN DINAMIS 3: FULLSTACK WORK --- */}
          {project.devWork && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-accent mb-6 border-l-4 border-accent pl-4">
                As Full-Stack Web Developer
              </h3>
              <ul className="grid md:grid-cols-1 gap-4 text-paragraph">
                {project.devWork.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* --- BAGIAN DINAMIS 4: TECHNICAL TOOLS (Untuk Project 2) --- */}
          {project.technicalTools && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Technical Execution & Strategy
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technicalTools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-secondary border border-accent/30 text-paragraph px-4 py-2 rounded-lg text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer Detail */}
          <div className="mt-20 pt-8 border-t border-secondary text-center text-paragraph italic">
            <p>
              End of project detail. Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
