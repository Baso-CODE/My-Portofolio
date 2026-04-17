// import image
import Image from "../assets/img/about3.jpg";

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 items-center xl:items-start">
          {/* --- SISI KIRI (FOTO & KETERANGAN) --- */}
          <div className="flex flex-col items-center xl:items-start w-full xl:w-auto">
            <img
              className="object-cover h-full w-full max-w-[566px] rounded-2xl shadow-lg"
              src={Image}
              alt="Baso Afriza visiting Meta Singapore"
            />
            {/* Keterangan Foto */}
            <div className="mt-4 flex items-start gap-2 max-w-[566px] text-left">
              <span className="text-xl">📸</span>
              <p className="text-sm text-paragraph italic leading-relaxed">
                Exploring the future of technology and innovation during a visit
                to the <strong>Meta Headquarters in Singapore (2024)</strong>.
              </p>
            </div>
          </div>

          {/* --- SISI KANAN (TEKS ABOUT ME) --- */}
          <div className="flex flex-col items-center text-center xl:items-start xl:text-left flex-1 mt-6 xl:mt-0">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-primary font-bold mb-3 text-white before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-10 before:hidden before:lg:block">
                Baso Afriza
              </h2>
              <p className="mb-4 text-accent font-medium">
                Full-Stack Developer & Tech Enthusiast
              </p>

              <hr className="mb-8 opacity-10 border-paragraph w-full" />

              {/* Paragraf 1: Fokus pada keahlian dasar */}
              <p className="mb-5 text-paragraph leading-relaxed">
                I am a dedicated software engineer with a strong foundation in
                building scalable, user-centric web applications. My journey in
                technology is driven by an insatiable curiosity and a deep
                desire to solve complex, real-world problems through clean code
                and strategic thinking.
              </p>

              {/* Paragraf 2: Fokus pada kolaborasi dan Apple Academy */}
              <p className="mb-8 text-paragraph leading-relaxed">
                From leading development teams in Indonesia to exploring global
                tech innovations—like my recent visit to Meta—I thrive in
                dynamic, collaborative environments. I am eager to bring my
                technical expertise, adaptability, and growth mindset to the{" "}
                <strong>Apple Developer Academy</strong>, where I hope to
                collaborate with brilliant minds to create impactful solutions
                for the ecosystem.
              </p>
            </div>

            {/* Tombol diganti menjadi lebih profesional */}
            <a
              href="#contact"
              className="btn btn-md bg-accent hover:bg-accent-hover transition-all rounded-sm text-white flex items-center justify-center px-8 w-fit">
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
