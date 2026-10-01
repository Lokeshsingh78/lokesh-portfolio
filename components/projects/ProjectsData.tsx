import { JSX } from "react";

export interface ProjectItem {
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  description: string;
  modalContent: JSX.Element;
  category: "personal" | "freelance";
}

export const projects: ProjectItem[] = [
  {
    title: "Coder's Blog",
    imgSrc: "/coders-blog.png",
    code: "https://github.com/Lokeshsingh78/coders-blog",
    projectLink: "https://coders-blogs.vercel.app/",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "personal",
    description: "A MERN-powered full-stack blog platform with secure authentication and an intuitive user Blogs designed for developers and tech enthusiasts.",
    modalContent: (
      <>
        <p>
          A MERN-powered full-stack blog platform with secure authentication and an intuitive user Blogs designed for developers and tech enthusiasts.
        </p>
        <p>
          Built with React, Node.js, MongoDB, and Express, featuring JWT authentication, Google OAuth login, rich text editor with React-Quill, and comprehensive blog management.
        </p>
        <p>
          Includes advanced search functionality, comment system, like features, admin dashboard, and role-based access control for complete content management.
        </p>
      </>
    ),
  },
  {
    title: "RR Experience",
    imgSrc: "/rr-experience.png",
    code: "https://github.com/Lokeshsingh78/RR-Experience",
    projectLink: "https://rr-experience.vercel.app/",
    tech: ["React", "JavaScript", "CSS3"],
    category: "personal",
    description: "A luxury motion-design web experience inspired by Rolls-Royce, featuring smooth animations and premium aesthetics for an immersive user journey.",
    modalContent: (
      <>
        <p>
          A luxury motion-design web experience inspired by Rolls-Royce, crafted with smooth animations and premium visuals to deliver an immersive and elegant interface.
        </p>
        <p>
          Built using modern web technologies, this project focuses on delivering a high-end interactive experience that reflects the sophistication and refinement of the Rolls-Royce brand.
        </p>
        <p>
          It features advanced CSS animations, smooth scrolling interactions, and a fully responsive layout that adapts seamlessly across all devices.
        </p>
      </>
    ),
  },
  {
    title: "Baghecha Café",
    imgSrc: "/baghecha.png",
    code: "https://github.com/Lokeshsingh78/baghecha",
    projectLink: "https://baghecha.vercel.app/",
    tech: ["React", "JavaScript", "CSS3"],
    category: "personal",
    description: "Heritage-inspired React website with royal aesthetics, smooth animations, and a timeless café Blogs that blends tradition with modernity.",
    modalContent: (
      <>
        <p>
          Heritage-inspired React website with royal aesthetics, smooth animations, and a timeless café Blogs that blends tradition with modernity.
        </p>
        <p>
          Designed to capture the essence of Indian heritage with contemporary web design principles, featuring elegant typography and carefully crafted visual elements.
        </p>
        <p>
          Incorporates smooth page transitions, interactive menu displays, and an immersive user interface that tells the story of traditional café culture.
        </p>
      </>
    ),
  },
  {
    title: "CantGetCaught-Code",
    imgSrc: "/cantgetcaught-code-preview.png",
    code: "https://github.com/Lokeshsingh78/cantgetcaught-code",
    projectLink: "https://cantgetcaught-code.vercel.app/",
    tech: ["Next.js", "React", "JavaScript", "CSS3", "API"],
    category: "personal",
    description: "A VS Code–style web app that displays live news and stock updates so you don’t get caught in workplaces.",
    modalContent: (
      <>
        <p>
          A VS Code–inspired web application that presents real-time news and stock market data in a professional workspace layout.
        </p>
        <p>
          Designed for users who want quick access to important updates without switching between multiple platforms.
        </p>
        <p>
          Includes live API integration, fast performance with Next.js, responsive design, and a clean, productivity-focused interface.
        </p>
      </>
    ),
  },
  {
    title: "Indian Armed Forces Ranks",
    imgSrc: "/indian-armed-forces.png",
    code: "https://github.com/Lokeshsingh78/Indian-Armed-Forces--Ranks",
    projectLink: "https://lokeshsingh78.github.io/Indian-Armed-Forces--Ranks/",
    tech: ["React", "JavaScript", "CSS3"],
    category: "personal",
    description: "A comprehensive visual representation of Indian Army, Navy, and Air Force ranks, showcasing detailed hierarchy, insignias, and structured information.",
    modalContent: (
      <>
        <p>
          A comprehensive visual representation of the Indian Army, Navy, and Air Force ranks, highlighting their hierarchy, insignias, and structured classification.
        </p>
        <p>
          This educational web application is designed to help users clearly understand the rank structure across all three branches of the Indian Armed Forces.
        </p>
        <p>
          It features interactive layouts, detailed rank descriptions, official insignia visuals, and well-organized hierarchical data for easy learning and quick reference.
        </p>
      </>
    ),
  },
  {
    title: "BTech Notes RTU",
    imgSrc: "/btech-notes.jpg",
    code: "https://github.com/Lokeshsingh78/btech_notes_rtu",
    projectLink: "https://github.com/Lokeshsingh78/btech_notes_rtu",
    tech: ["Android", "Java", "XML"],
    category: "personal",
    description: "An Android application built using Java that provides a comprehensive collection of BTech notes for Rajasthan Technical University, organized by subjects and semesters.",
    modalContent: (
      <>
        <p>
          An Android application developed using Java that offers a comprehensive collection of BTech notes specifically for Rajasthan Technical University students.
        </p>
        <p>
          The app is designed as a learning resource for engineering students, providing well-structured notes, study materials, and references across multiple semesters.
        </p>
        <p>
          It features a clean and user-friendly interface, organized content by semester and subject, and offline-accessible notes to support effective learning anytime.
        </p>
      </>
    ),
  },
  {
    title: "Nation Navigator",
    imgSrc: "/nation-navigator-preview.png",
    code: "https://github.com/Lokeshsingh78/NationNavigator",
    projectLink: "https://nation-navigator-five.vercel.app/",
    tech: ["React", "CSS", "REST API"],
    category: "personal",
    description: "A React-based web application that allows users to explore countries around the world with detailed information and an interactive UI.",
    modalContent: (
      <>
        <p>
          Nation Navigator is a modern React web application designed to explore
          countries across the globe with rich and structured information.
        </p>
        <p>
          It fetches real-time country data using a public REST API and presents
          details such as flags, population, capital, region, and more in a clean,
          responsive interface.
        </p>
        <p>
          The project focuses on user-friendly navigation, search and filter
          functionality, and responsive design to deliver a smooth and engaging
          user experience.
        </p>
      </>
    ),
  },
  {
    title: "Khandelwal Motors",
    imgSrc: "/freelance-khandelwal.png",
    code: "https://github.com/Lokeshsingh78",
    projectLink: "https://khandelwalmotors.co.in/",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    category: "freelance",
    description: "Official web platform for an authorized Tata Commercial Vehicles dealership in Rajasthan, showcasing Tata Ace, Intra, Yodha, and heavy trucks with interactive EMI calculators and service booking.",
    modalContent: (
      <>
        <p>
          An official commercial vehicle dealership web platform developed for Khandelwal Motors Pvt. Ltd., an authorized Tata Motors commercial dealership with 15+ years of trusted operations in Rajasthan.
        </p>
        <p>
          Engineered with React, Vite, Tailwind CSS, and Framer Motion, featuring a comprehensive digital fleet showcase spanning Small Commercial Vehicles (Tata Ace, Intra), Pickups (Yodha), Intermediate & Light Commercial Vehicles (ILCV), Heavy Trucks, and Passenger Buses.
        </p>
        <p>
          Built with interactive customer acquisition tools including real-time EMI & finance calculators, vehicle exchange valuation, test-drive scheduling, workshop service appointment booking with genuine parts inquiry, and multi-location branch discovery across Rajasthan with direct WhatsApp consultation integration.
        </p>
      </>
    ),
  },
  {
    title: "Alpever Mail",
    imgSrc: "/freelance-alpever.png",
    code: "https://github.com/Lokeshsingh78",
    projectLink: "https://mailer.alpever.com/#dashboard",
    tech: ["JavaScript", "Node.js", "MySQL", "Resend API", "HTML5/CSS3", "REST API"],
    category: "freelance",
    description: "High-volume personalized mass mailing engine featuring dynamic variable interpolation, a dual-mode visual template studio with live desktop/mobile preview, Resend API dispatch, and real-time delivery logs.",
    modalContent: (
      <>
        <p>
          Alpever Mail is a high-volume personalized mass mailer designed to send 10 to 1,000+ personalized emails via Resend API and MySQL with live template preview and real-time delivery tracking.
        </p>
        <p>
          Includes an intuitive multi-format audience manager supporting CSV, Excel (.xlsx, .xls), and JSON uploads with automated header detection for contact details and custom variable tags.
        </p>
        <p>
          Features a Dynamic Template Studio with both WYSIWYG visual and raw HTML code editors, dynamic personalization tags (<code>{"{{name}}"}</code>, <code>{"{{company}}"}</code>, fallback tags), interactive image resizer with aspect-ratio locks, and a dual-device client simulator (Desktop & Mobile) with live contact interpolation.
        </p>
        <p>
          Equipped with queued mass campaign dispatching, scheduled daily drip automations with custom batch throttling, and comprehensive analytics tracking delivery rates, opens/reads, and failure diagnostics.
        </p>
      </>
    ),
  },
  {
    title: "Good Luck Society",
    imgSrc: "/freelance-goodluck.png",
    code: "https://github.com/Lokeshsingh78",
    projectLink: "https://www.goodlucksociety.in/",
    tech: ["React", "Vite", "Cashfree PG", "Tailwind CSS", "E-Commerce", "REST API"],
    category: "freelance",
    description: "Modern D2C e-commerce platform for an Indian luxury streetwear brand, featuring premium oversized statement collections, interactive size guides, dynamic cart drawer, and secure Cashfree checkout.",
    modalContent: (
      <>
        <p>
          A bespoke direct-to-consumer (D2C) e-commerce web platform engineered for Good Luck Society, an Indian premium streetwear brand specializing in 240+ GSM heavyweight oversized statement tees.
        </p>
        <p>
          Developed with React, Vite, and Tailwind CSS, delivering a sleek dark-aesthetic shopping experience with dynamic product filtering, interactive flatlay & body measurement size calculators, high-resolution product showcases, and animated cart drawers.
        </p>
        <p>
          Seamlessly integrated with Cashfree Payment Gateway (Cashfree PG JS SDK v3) for fast, secure checkouts across UPI, cards, and net banking, coupled with automated order processing, SEO optimization, and direct WhatsApp customer support.
        </p>
      </>
    ),
  },
];