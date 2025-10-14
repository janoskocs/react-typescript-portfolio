import type { ComponentKey } from "../routes/lazyImports/lazyImports.public";
type AppLinkType = "internal" | "external";

type AppType = {
  id: string;
  name: string;
  link: {
    type: AppLinkType;
    url: string;
  };
  title: string;
  description: string;
  icon: {
    src: string;
    alt: string;
  };
  showOn: {
    desktop: boolean;
    startMenu: boolean;
  };
  categories: string[];
  component: ComponentKey | null;
  featured: boolean;
};

const apps: AppType[] = [
  {
    id: "about-me",
    name: "About Me",
    link: {
      type: "internal",
      url: "/about-me",
    },
    title: "Open about me section",
    description:
      "Janos is a full stack developer specialising in React and Node.js.",
    icon: {
      src: "about-me.png",
      alt: "Profile icon",
    },
    showOn: {
      desktop: true,
      startMenu: true,
    },
    categories: ["personal", "about"],
    component: "AboutMePage",
    featured: false,
  },
  {
    id: "contact-me",
    name: "Contact Me",
    link: {
      type: "internal",
      url: "/contact-me",
    },
    title: "Open contact me section",
    description:
      "Get in touch with me to discuss tech, swimming, and more code!",
    icon: {
      src: "contact-me.png",
      alt: "Envelope",
    },
    showOn: {
      desktop: true,
      startMenu: true,
    },
    categories: ["personal", "contact"],
    component: "ContactMePage",
    featured: true,
  },
  {
    id: "janos-ai",
    name: "JanosAI",
    link: {
      type: "internal",
      url: "/janos-ai",
    },
    title: "Chat with my AI-self and learn more about my experience.",
    description:
      "JanosAI is a chat bot using Gemini API to share my experience with users.",
    icon: {
      src: "janos-ai.png",
      alt: "Robot",
    },
    showOn: {
      desktop: true,
      startMenu: true,
    },
    categories: ["AI", "chat"],
    component: "JanosAIPage",
    featured: true,
  },
  {
    id: "my-cv",
    name: "My CV",
    link: {
      type: "internal",
      url: "/my-cv",
    },
    title: "Check out my CV to learn more about my experience.",
    description:
      "Checkout and download my CV to learn more about my experience.",
    icon: {
      src: "my-cv.png",
      alt: "Document",
    },
    showOn: {
      desktop: true,
      startMenu: true,
    },
    categories: ["CV", "career"],
    component: "MyCVPage",
    featured: true,
  },
  {
    id: "my-projects",
    name: "My Projects",
    link: {
      type: "internal",
      url: "/my-projects",
    },
    title: "Check out my projects to learn more about my experience.",
    description: "See a collection of my projects.",
    icon: {
      src: "my-projects.png",
      alt: "Folder with document",
    },
    showOn: {
      desktop: true,
      startMenu: true,
    },
    categories: ["projects"],
    component: "MyProjectsPage",
    featured: true,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    link: {
      type: "external",
      url: "https://www.linkedin.com/in/janoskocs/",
    },
    title: "Let's connect on LinkedIn!",
    description: "Learn more about my experience.",
    icon: {
      src: "linkedin.png",
      alt: "LinkedIn",
    },
    showOn: {
      desktop: true,
      startMenu: true,
    },
    categories: ["linkedin", "social"],
    component: null,
    featured: false,
  },
  {
    id: "github",
    name: "GitHub",
    link: {
      type: "external",
      url: "https://github.com/janoskocs",
    },
    title: "Let's connect on GitHub!",
    description: "Check out my work on GitHub..",
    icon: {
      src: "github.png",
      alt: "GitHub",
    },
    showOn: {
      desktop: true,
      startMenu: true,
    },
    categories: ["github", "social"],
    component: null,
    featured: false,
  },
  {
    id: "my-blog",
    name: "My Blog",
    link: {
      type: "external",
      url: "https://dev.to/janoskocs",
    },
    title: "Read my blog!",
    description: "Read my blog where I share cool tech tutorials.",
    icon: {
      src: "my-blog.png",
      alt: "My Blog",
    },
    showOn: {
      desktop: true,
      startMenu: true,
    },
    categories: ["blog", "social"],
    component: null,
    featured: false,
  },
  {
    id: "youtube",
    name: "My YouTube Channel",
    link: {
      type: "external",
      url: "https://www.youtube.com/@janoscodes",
    },
    title: "Subscribe to my YouTube channel!",
    description: "I share tech easy and quick tech tutorials.",
    icon: {
      src: "youtube.png",
      alt: "My YouTube Channel",
    },
    showOn: {
      desktop: true,
      startMenu: true,
    },
    categories: ["youtube", "social"],
    component: null,
    featured: false,
  },
];

export default apps;
