import type { routerType } from "./types/router.types";

import { AboutMePage, ContactMePage } from "./lazyImports/lazyImports.public";

const publicRoutes: routerType[] = [
  {
    path: "/",
    element: <AboutMePage />,
    title: "About me",
  },
  {
    path: "/about-me",
    element: <AboutMePage />,
    title: "About me",
  },
  {
    path: "/contact-me",
    element: <ContactMePage />,
    title: "Contact me",
  },
];

export default publicRoutes;
