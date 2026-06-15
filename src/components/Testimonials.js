import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center ">
          <h2
            className=" section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem]
           before:-left-64 before:hidden before:lg:block">
            What Other People Say
          </h2>
          <p className="subtitle">
            With over three years of experience as a Full-Stack Web Developer, I
            combine technical precision with creative strategy to deliver
            impactful digital solutions. Here is what my clients and colleagues
            have to say about our collaborations.
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
