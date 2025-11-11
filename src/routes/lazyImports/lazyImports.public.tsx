// https://github.com/ArnaudBarre/eslint-plugin-react-refresh/issues/25#issuecomment-1729071347
import { lazyImport } from "../../utils/lazyImport";

const AboutMePage: React.LazyExoticComponent<React.ComponentType<{}>> =
  lazyImport("../pages/about-me/about-me");
const ContactMePage: React.LazyExoticComponent<React.ComponentType<{}>> =
  lazyImport("../pages/contact-me/contact-me");
const JanosAIPage: React.LazyExoticComponent<React.ComponentType<{}>> =
  lazyImport("../pages/janos-ai/janos-ai");
const MyCVPage: React.LazyExoticComponent<React.ComponentType<{}>> = lazyImport(
  "../pages/my-cv/my-cv"
);
const MyProjectsPage: React.LazyExoticComponent<React.ComponentType<{}>> =
  lazyImport("../pages/my-projects/my-projects");

// export { AboutMePage, ContactMePage };

export const componentMap = {
  AboutMePage,
  ContactMePage,
  JanosAIPage,
  MyCVPage,
  MyProjectsPage,
};

export type ComponentKey = keyof typeof componentMap;
