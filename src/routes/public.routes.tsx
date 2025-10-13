import type { routerType } from "./types/router.types";

import { Main, ContactMePage } from "./lazyImports/lazyImports.public";

const publicRoutes: routerType[] = [
  {
    path: "/",
    element: <Main />,
    title: "main",
  },
  {
    path: "/contact-me",
    element: <ContactMePage />,
    title: "main",
  },
];

export default publicRoutes;
