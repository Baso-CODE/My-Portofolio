//  icons
import {
  FiGithub,
  FiInstagram,
  FiLayout,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSettings,
  FiYoutube,
} from "react-icons/fi";
// services
import { FiServer, FiTrendingUp } from "react-icons/fi";
// companies icons
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";

// projects images
// -- EDUMATRIX --
import akademiASN from "./assets/img/projects/edumatrix/akademi-asn.png";
import akademiOSN from "./assets/img/projects/edumatrix/akademi-osn.png";
import allEdumatrix from "./assets/img/projects/edumatrix/all-website-edumatrix.png";
import EO1 from "./assets/img/projects/edumatrix/event-orgainazer-1.jpg";
import EO2 from "./assets/img/projects/edumatrix/event-orgainazer-2.jpg";
import EO3 from "./assets/img/projects/edumatrix/event-orgainazer-3.jpg";
import SEOEdm from "./assets/img/projects/edumatrix/seo-edumatrix-indonesia.png";

// -- GOENAKAN ID -- //
import goenakan_Project1 from "./assets/img/projects/goenakan-id/goenakan-project-1.png";
import goenakan_Project2 from "./assets/img/projects/goenakan-id/goenakan-project-2.png";
import goenakan_Project3 from "./assets/img/projects/goenakan-id/goenakan-project-3.png";

import Project7 from "./assets/img/projects/edumatrix/admin-dashboard-success-story.png";
import Project4 from "./assets/img/projects/edumatrix/internal-admin-dashboard-edumatrix.png";
import Project5 from "./assets/img/projects/edumatrix/login-admin-dashboard.png";
import Project6 from "./assets/img/projects/edumatrix/SEO-project-1.png";
import Project8 from "./assets/img/projects/edumatrix/SEO-project-2.png";
import Project9 from "./assets/img/projects/edumatrix/SEO-project-3.png";

// skills images
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg8 from "./assets/img/skills/figma.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";

// testimonial images
import TestiImage3 from "./assets/img/testimonials/testimonial-ceo-goenakan-id.jpeg";
import TestiImage2 from "./assets/img/testimonials/testimonial-dimas.PNG";
import TestiImage1 from "./assets/img/testimonials/testimonial-mas-tegar.jpeg";

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
    href: "https://www.linkedin.com/in/baso-muh/",
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
    id: "edumatrix-fullstack-seo",
    image: allEdumatrix,
    name: "Edumatrix Indonesia Platform",
    category: "full stack",
    links: [
      { name: "Main Website", url: "https://edumatrix-indonesia.com" },
      {
        name: "WEb Les Privat Masuk PTN",
        url: "https://bimbelsupercamp.com/",
      },
      {
        name: "Web Marketing OSN",
        url: "https://akademiosn.com/",
      },
      {
        name: "Bimbel Akademi ASN",
        url: "https://akademi-asn.com/",
      },
    ],
    description:
      "A dual-role contribution as a Full-Stack Developer and SEO Specialist for Edumatrix Indonesia, building a high-performance rating system and scaling organic traffic through technical optimization.",

    screenshots: [SEOEdm, akademiASN, akademiOSN],

    // Detail pekerjaan untuk SEO
    seoWork: [
      "Developed and implemented comprehensive SEO strategies to enhance website visibility and rankings.",
      "Conducted in-depth keyword research and competitor analysis using tools like Ahrefs, SEMrush, and Google Keyword Planner.",
      "Optimized on-page elements (meta descriptions, titles, internal linking) and off-page site authority.",
      "Monitored performance via Google Analytics and Search Console to resolve indexing and crawling issues.",
      "Proven track record of achieving first-page keyword rankings on Google.",
    ],

    // Detail pekerjaan untuk Fullstack
    devWork: [
      "Built the Edumatrix Indonesia Rating web app from scratch using Next.js, TypeScript, and Node.js.",
      "Integrated MySQL databases using Prisma ORM for efficient data management and optimized queries.",
      "Implemented responsive and aesthetic UI layouts with Tailwind CSS.",
      "Engineered secure RESTful APIs with JWT (JSON Web Tokens) for user authentication.",
      "Collaborated with cross-functional teams to ensure fast-loading websites optimized for both performance and SEO.",
    ],
  },
  {
    id: "event-logistics-coordinator",
    image: EO2,
    name: "Event Logistics & Management System",
    category: "management system",
    description:
      "Strategic coordination and digital management for Edumatrix's intensive learning programs, overseeing logistics, facilities, and resource distribution for hundreds of participants to ensure seamless operational execution.",

    links: [
      {
        name: "Edumatrix Program",
        url: "https://edumatrix-indonesia.com/program",
      },
    ],

    // Foto-foto kegiatan (foto saat koordinasi, foto logistik, atau foto peserta)
    screenshots: [
      EO1,
      EO2,
      EO3,
      // Tambahkan import foto kegiatan lainnya di sini
    ],

    // Detail tanggung jawab sebagai Coordinator
    managementWork: [
      "Designed and managed full-scale operational support for month-long intensive learning programs.",
      "Oversaw the end-to-end distribution of learning materials, facilities, and technical equipment for over 100+ participants.",
      "Acted as the primary bridge between teaching staff and the operational team to resolve on-site technical and logistical issues.",
      "Maintained strict project timelines, ensuring all schedules and program activities were executed with 100% punctuality.",
      "Optimized team efficiency which resulted in minimal logistics-related complaints and high participant satisfaction ratings.",
    ],

    // Sisi teknis (jika kamu menggunakan tools digital untuk mengaturnya)
    technicalTools: [
      "Utilized digital tracking systems to monitor inventory and equipment availability in real-time.",
      "Implemented structured reporting workflows to evaluate daily program progress.",
      "Coordinated cross-functional teams using collaborative project management tools.",
    ],
  },
  {
    id: "goenakan-ecommerce",
    image: goenakan_Project1,
    name: "Goenakan E-Commerce Platform",
    category: "full stack",
    description:
      "A full-featured mini e-commerce platform designed to empower local businesses. This project involved building a robust frontend for users, a custom CMS for content management, and an integrated logistics tracking system.",

    // Link yang relevan dengan Goenakan
    links: [{ name: "Goenakan Indonesia", url: "https://goenakan.id" }],

    // Masukkan screenshot mockup laptop/HP untuk e-commerce ini
    screenshots: [
      goenakan_Project1,
      goenakan_Project2,
      goenakan_Project3,
      // Tambahkan import foto Dashboard Admin atau Fitur Tracking di sini
    ],

    // Detail pekerjaan Fullstack untuk Goenakan
    devWork: [
      "Developed and maintained a full-featured mini e-commerce platform, overseeing both frontend user interface and backend system architecture.",
      "Built a custom Content Management System (CMS) from scratch to manage dynamic website content, ensuring flexibility for future updates.",
      "Engineered a comprehensive Internal Admin Dashboard to streamline operations, including product management, order processing, and sales analytics.",
      "Integrated a real-time logistics tracking system to monitor shipment status and improve supply chain visibility for internal teams.",
      "Designed and optimized MySQL databases to ensure data integrity and high performance for e-commerce and sales transactions.",
    ],

    // Skill teknis yang menonjol di proyek ini
    technicalTools: [
      "Custom CMS Architecture",
      "Real-time Logistics API Integration",
      "Admin Dashboard Analytics",
      "Database Optimization & Schema Design",
      "Responsive E-Commerce UI",
    ],
  },

  {
    id: "internal-admin-dashboard",
    image: Project4, // Ganti dengan variabel gambar utama dasbor adminmu
    name: "Internal Management & CMS Dashboard",
    category: "cms & admin",
    description:
      "A secure and comprehensive admin dashboard designed to streamline internal business operations. This system handles secure user authentication, dynamic content management for the public website, and complex backend operations including vendor management, order cashflow, and logistics tracking.",

    // Link opsional (jika dasbor ini bisa diakses publik/ada reponya)

    // Masukkan screenshot mockup halaman admin di sini
    screenshots: [
      Project4,
      Project5,
      Project7,
      // admin_Logistics, // Contoh gambar halaman logistik
      // admin_Auth // Contoh gambar halaman Auth
    ],

    // Detail pekerjaan Fullstack untuk Admin Dashboard
    devWork: [
      "Implemented a robust authentication system (Auth) to ensure secure access and role-based permissions for internal staff.",
      "Engineered a dynamic Content Management System (CMS) allowing administrators to easily update website content such as CS contacts, client testimonials, and success stories without touching code.",
      "Developed comprehensive modules for business operations, including vendor management, order cashflow tracking, and client delivery oversight.",
      "Streamlined goods receipt and logistics workflows, providing a centralized platform for the internal team to monitor the entire supply chain.",
      "Designed an intuitive and responsive admin user interface to ensure high productivity and ease of use for non-technical team members.",
    ],

    // Skill teknis yang menonjol di proyek ini
    technicalTools: [
      "Secure User Authentication (Auth)",
      "Dynamic CMS Integration",
      "Role-Based Access Control (RBAC)",
      "Logistics & Vendor Management",
      "Cashflow & Order Analytics",
    ],
  },

  {
    id: "seo-cms-platform",
    image: Project6, // Ganti dengan gambar utama (misal: grafik trafik naik atau halaman depan web)
    name: "High-Performance SEO Platform & CMS",
    category: "SEO",
    description:
      "Engineered a dynamic Content Management System (CMS) perfectly integrated with advanced technical SEO strategies. This platform empowers copywriting teams to easily manage content while securing first-page Google rankings and significantly driving organic traffic growth.",

    // Masukkan variabel gambar screenshot di sini
    screenshots: [
      Project6,
      Project8,
      Project9,
      // seo_Analytics // (Gambar grafik GSC/Analytics)
    ],

    // Detail pekerjaan sesuai dengan pengalaman SEO Specialist
    devWork: [
      "Developed and implemented comprehensive technical SEO strategies to dramatically enhance website visibility and search engine indexing.",
      "Built a custom, user-friendly CMS that allows content teams to easily optimize on-page SEO elements (meta descriptions, titles, internal linking).",
      "Conducted in-depth keyword research and competitor analysis using tools like Ahrefs, SEMrush, and Google Keyword Planner to capture high-potential traffic.",
      "Proactively monitored site health, resolving technical issues affecting crawling, and analyzed performance metrics via Google Analytics and Search Console.",
      "Successfully achieved consistent first-page Google rankings for highly competitive localized keywords (e.g., in Makassar and South Jakarta).",
    ],

    // Skill teknis yang menonjol di proyek ini
    technicalTools: [
      "Technical SEO & Core Web Vitals",
      "Google Search Console & Analytics",
      "Ahrefs & SEMrush",
      "Keyword Research & On-Page SEO",
      "Dynamic CMS Architecture",
    ],
  },
];

// projects
export const projectsNav = [
  { name: "all" },
  { name: "full stack" },
  { name: "management system" },
  { name: "cms & admin" },
  { name: "SEO" },
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

export const services = [
  {
    icon: <FiLayout />,
    name: "Full-Stack Web Development",
    description:
      "Building responsive, high-performance web applications from the ground up utilizing modern technologies such as Next.js, TypeScript, and Tailwind CSS to deliver optimal user experiences.",
  },
  {
    icon: <FiServer />,
    name: "Backend & API Development",
    description:
      "Designing scalable system architectures, developing secure RESTful APIs with Node.js & Express.js, and optimizing MySQL databases using ORMs like Prisma to ensure data integrity.",
  },
  {
    icon: <FiSettings />,
    name: "Custom CMS & E-Commerce",
    description:
      "Developing tailored business solutions, including dynamic Content Management Systems (CMS), internal admin dashboards, and e-commerce platforms with real-time integration.",
  },
  {
    icon: <FiTrendingUp />,
    name: "SEO Optimization",
    description:
      "Enhancing digital visibility and organic traffic through comprehensive On-Page and Off-Page SEO strategies, technical site optimization, and in-depth data analytics.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Baso played a crucial role in building the core application for our business. His ability to understand our complex operational needs and translate them into a fast, scalable, and intuitive digital solution was outstanding. He is not just a developer, but a strategic partner who genuinely cares about the product's success. Highly recommended for any technical challenges.",
    authorName: "Tegar Itmamul Wafa",
    authorPosition: "CEO & Head of Technology, Arsana Integra Construction",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Working alongside Baso at Edumatrix has been a good experience. As a fellow developer, I highly value his ability to bridge complex backend CMS logic with front-end technical SEO optimization. He played a crucial role in building our custom admin dashboards and high-converting landing pages. Baso is a proactive team player who consistently brings efficient, clean-code solutions to our daily challenges. Collaborating with him is always a seamless and highly productive process.",
    authorName: "Dimas Maulana",
    authorPosition: "Full Stack Web Developer, Edumatrix Group",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Working with Baso was a game-changer for Goenakan Indonesia. He successfully engineered both our client-facing mini e-commerce website and a robust internal management system. His solution completely streamlined our complex operations—seamlessly handling vendor management, logistics tracking, order cashflow, and client deliveries. His technical expertise and collaborative approach significantly accelerated our project delivery. He is a tremendous asset to any development team.",
    authorName: "Nadya Yuniar Desi Prameswari",
    authorPosition:
      "Digital Marketing Strategist | Co-Founder of Goenakan Indonesia",
  },
];

// contact

export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you build your vision.",
    description: "basoafrizamuhafriza@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Yogyakarta, Indonesia",
    description: "Ready for global collaboration",
  },
];
