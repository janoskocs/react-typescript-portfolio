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
    projects: boolean;
  };
  categories: string[];
  component: ComponentKey | null;
  repositoryLinks: {
    clientLink: string | null;
    serverLink: string | null;
    genericLink: string | null;
    liveLink: string | null;
  };
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
      projects: false,
    },
    categories: ["personal", "about"],
    component: "AboutMePage",
    repositoryLinks: {
      clientLink: null,
      serverLink: null,
      genericLink: null,
      liveLink: null,
    },
    featured: true,
  },
  {
    id: "contact-me",
    name: "contact Me",
    link: {
      type: "internal",
      url: "/contact-me",
    },
    title: "Open contact me section",
    description:
      "Janos is a full stack developer specialising in React and Node.js.",
    icon: {
      src: "contact-me.png",
      alt: "Profile icon",
    },
    showOn: {
      desktop: true,
      startMenu: true,
      projects: false,
    },
    categories: ["personal", "about"],
    component: "ContactMePage",
    repositoryLinks: {
      clientLink: null,
      serverLink: null,
      genericLink: null,
      liveLink: null,
    },
    featured: true,
  },
];

export default apps;
