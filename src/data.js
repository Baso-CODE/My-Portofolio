//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/p1.webp";
import Project2 from "./assets/img/projects/p2.webp";
import Project3 from "./assets/img/projects/p3.webp";
import Project4 from "./assets/img/projects/p4.webp";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: "",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/baso.afriza/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/Baso-CODE",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/baso-muh-afriza-8a1963282/",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Make a Music compiler",
    category: "UI/UX design",
  },
  {
    id: "2",
    image: Project2,
    name: "Beautiful me",
    category: "web development",
  },
  {
    id: "3",
    image: Project3,
    name: "Marble Component",
    category: "UI/UX design",
  },
  {
    id: "4",
    image: Project4,
    name: "Clean In Home",
    category: "branding",
  },
  {
    id: "5",
    image: Project5,
    name: "Kokain SignatureMe",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    name: "Realme SmartWatch",
    category: "web development",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "I am a passionate and creative web designer with a primary focus on creating engaging and intuitive user experiences. I love combining modern design elements, smart colors and precise typography to create a strong visual identity that matches a client's vision and goals.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "With a strong understanding of programming languages and web frameworks, I am able to design and develop responsive and functional websites. My desire to continuously learn and keep up with technological developments helps me stay relevant in the world",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "I am a branding specialist committed to helping brands discover and define their identity in memorable ways. With expertise in branding strategy and visual design, I strive to create strong and cohesive narratives for brands.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "I am a dedicated and visionary Chief Executive Officer (CEO), leading the company with strategic vision and strong leadership. With a background in business management and corporate strategy, I lead teams toward goal achievement and sustainable growth.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "The branding expert we collaborated with demonstrated a deep understanding of our brand essence. Their strategic approach to branding not only revitalized our visual identity but also created a compelling narrative that resonated with our target audience. ",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "The web design services provided were truly exceptional. The designer demonstrated a keen eye for aesthetics, creating a visually stunning and user-friendly website. The attention to detail and responsiveness across various devices exceeded our expectations. ",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Meta",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "The web developer exhibited exceptional technical skills and a profound understanding of web development frameworks. Their ability to translate complex ideas into functional, user-friendly websites was remarkable. ",
    authorName: "Olivia Doe",
    authorPosition: "Head of software Engginer, Amazon",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at basoafrizamuhafriza@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Makassar , Indonesia",
    description: "Serving clients worldwide",
  },
];
