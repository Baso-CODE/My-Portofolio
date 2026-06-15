// import contact data
import { contact } from "../data";

const Contact = () => {
  const sendToWhatsApp = (e) => {
    e.preventDefault();

    // Mengambil data dari form
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Nomor WA kamu (ganti angka 0 di depan dengan 62)
    const phoneNumber = "6285241902604";

    // Merangkai isi pesan
    const textMessage = `Hello Baso,\n\nMy name is ${name} (${email}).\n\nSubject: ${subject}\n\nMessage:\n${message}`;

    // Mengubah teks menjadi format URL (agar enter dan spasi terbaca di WA)
    const encodedText = encodeURIComponent(textMessage);

    // Membuat link WhatsApp API
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Membuka tab baru yang mengarah ke WhatsApp
    window.open(waUrl, "_blank");
  };

  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        {/* section title */}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Connect With Me
          </h2>
          <p className="subtitle">
            Whether you have a question about a project, a collaboration
            proposal, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/* info */}
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1 text-paragraph">{subtitle}</p>
                    <p className="text-accent font-medium">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* form */}
          <form
            className="space-y-8 w-full max-w-[780px]"
            onSubmit={sendToWhatsApp}>
            <div className="flex flex-col md:flex-row gap-8">
              <input
                className="input"
                type="text"
                name="name" // WAJIB ADA
                placeholder="Your name"
                required
              />
              <input
                className="input"
                type="email"
                name="email" // WAJIB ADA
                placeholder="Your email"
                required
              />
            </div>
            <input
              type="text"
              className="input"
              name="subject" // WAJIB ADA
              placeholder="Subject"
              required
            />
            <textarea
              className="textarea"
              name="message" // WAJIB ADA
              placeholder="Your Message"
              required></textarea>
            <button
              type="submit"
              className="btn btn-lg bg-accent hover:bg-accent-hover rounded-sm transition-all px-10">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
