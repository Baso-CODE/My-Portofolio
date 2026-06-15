import WomanImg from "../assets/img/fototitit.png";

const Hero = () => {
  // Format Link WhatsApp
  const waNumber = "6285241902604";
  const waMessage =
    "Hello Baso! I saw your portfolio and I am interested in connecting with you.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    waMessage,
  )}`;

  return (
    <section
      id="home"
      // Mengganti h-screen dengan min-h-screen dan menambah padding atas/bawah untuk mobile
      className="section min-h-screen lg:min-h-[80vh] flex items-center bg-primary pt-28 pb-12 lg:pt-0 lg:pb-0">
      {/* Menambah px-4 agar konten tidak menempel rapat di pinggir layar HP */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          {/* --- SISI KIRI (TEKS & TOMBOL) --- */}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <p className="text-paragraph text-base sm:text-lg mb-3 font-body">
              Hello, I'm Baso Afriza
            </p>

            {/* Menyesuaikan ukuran font H1 agar tidak terlalu besar di HP (text-4xl) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-primary font-bold text-white mb-6 leading-tight max-w-[600px]">
              Building <span className="text-accent">Impactful</span> Digital
              Experiences.
            </h1>

            {/* Menambahkan padding horizontal (px-2) khusus di HP agar paragraf lebih rapi */}
            <p className="subtitle mb-8 lg:mb-10 max-w-[500px] text-sm sm:text-base lg:text-lg px-2 lg:px-0">
              I am a Full-Stack Developer & SEO Specialist passionate about
              crafting scalable, user-centric applications. Driven by curiosity
              and a highly collaborative mindset, I am eager to innovate and
              push boundaries at the <strong>Apple Developer Academy</strong>.
            </p>

            {/* Tombol WhatsApp */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-md sm:btn-lg bg-accent hover:bg-accent-hover text-white flex items-center justify-center gap-2 transition-all w-fit px-6 sm:px-8 py-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              Let's Connect
            </a>
          </div>

          {/* --- SISI KANAN (GAMBAR) --- */}
          {/* Menghapus negative margin di bawah gambar dan mengatur ulang persentase lebarnya */}
          <div className="flex-1 w-full flex justify-center lg:justify-end mt-12 lg:mt-0">
            <img
              src={WomanImg}
              alt="Baso Afriza"
              className="w-[80%] sm:w-[60%] lg:w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] object-cover drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
