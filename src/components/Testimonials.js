import React from "react";

import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center ">
          <h2
            className=" section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem]
           before:-left-64 before:hidden before:lg:block"
          >
            What Other people say?
          </h2>
          <p className="subtitle">
            I am a software engineer studying at Purwadika digital technology
            school, with my skills and knowledge can I be part of your big
            project.
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
