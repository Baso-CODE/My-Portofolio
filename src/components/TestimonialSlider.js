// import testimonial data
import { testimonials } from "../data";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true, // Menambahkan efek dinamis pada titik pagination agar lebih rapi
        }}
        autoplay={{
          delay: 6000, // DIPERLAMBAT MENJADI 6 DETIK: Agar pengunjung punya waktu membaca teks yang panjang
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper pb-12" // Memberi jarak bawah agar titik pagination tidak menabrak teks
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
            <SwiperSlide key={index}>
              {/* Menambahkan items-center agar gambar dan teks sejajar di tengah secara vertikal */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center justify-center mb-10 px-4 lg:px-0">
                {/* --- BAGIAN GAMBAR --- */}
                {/* Menambahkan shrink-0 agar kotak gambar tidak mengecil saat teksnya panjang */}
                <div className="w-full h-64 lg:w-[328px] lg:h-[328px] shrink-0">
                  <img
                    className="rounded-2xl w-full h-full object-cover shadow-lg"
                    src={authorImg}
                    alt={authorName}
                  />
                </div>

                {/* --- BAGIAN TEKS --- */}
                {/* Mengatur teks menjadi rata tengah di Mobile, dan rata kiri di Desktop */}
                <div className="flex flex-col max-w-3xl text-center lg:text-left">
                  {/* Memperbaiki ukuran font agar responsif (text-lg di mobile, text-2xl di desktop) */}
                  <h5 className="font-body text-lg lg:text-2xl mb-8 italic font-normal leading-relaxed">
                    "{authorText}"
                  </h5>
                  <div>
                    <p className="text-xl text-accent font-semibold mb-1">
                      {authorName}
                    </p>
                    <p className="text-sm lg:text-base text-gray-400">
                      {authorPosition}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
