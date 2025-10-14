import type { routerType } from "./types/router.types";
import { componentMap } from "./lazyImports/lazyImports.public";
import apps from "../data/apps";

const publicRoutes: routerType[] = apps
  .filter((app) => app.link.type === "internal" && app.component)
  .map((app) => {
    const Component =
      componentMap[app.component ? app.component : "AboutMePage"];

    if (!Component) {
      console.warn(
        `Component "${app.component}" not found in componentMap for app "${app.id}"`
      );
      return null;
    }

    return {
      path: app.link.url,
      element: <Component />,
      title: app.title,
    };
  })
  .filter(Boolean) as routerType[];

const homeApp = apps.find((app) => app.id === "about-me");
if (homeApp?.component) {
  const HomeComponent = componentMap[homeApp.component];
  publicRoutes.unshift({
    path: "/",
    element: <HomeComponent />,
    title: "Home",
  });
}

export default publicRoutes;
