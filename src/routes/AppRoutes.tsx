import { useRoutes } from "react-router-dom";
import type { routeType } from "./types/router.types";
import protectedRoutes from "./protected.routes";
import publicRoutes from "./public.routes";

import { Suspense } from "react";
// import { Main } from "@/router/lazyImports/lazyImports.public";

export const AppRoutes = () => {
  const commonRoutes: routeType[] = [
    // {
    //   path: "/",
    //   element: <Main />,
    // },
  ];

  const auth = { user: false };

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>{element}</Suspense>
    </>
  );
};
