// https://github.com/ArnaudBarre/eslint-plugin-react-refresh/issues/25#issuecomment-1729071347

import type { ReactNode } from "react";
import { lazyImport } from "../../utils/lazyImport";

const AboutMePage: React.LazyExoticComponent<React.ComponentType<{}>> =
  lazyImport("../pages/about-me/about-me");
const ContactMePage: React.LazyExoticComponent<React.ComponentType<{}>> =
  lazyImport("../pages/contact-me/contact-me");

// export { AboutMePage, ContactMePage };

export const componentMap = {
  AboutMePage,
  ContactMePage,
};

export type ComponentKey = keyof typeof componentMap;
