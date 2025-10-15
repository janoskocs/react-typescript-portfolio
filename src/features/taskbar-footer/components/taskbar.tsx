import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import apps from "../../../data/apps";
import type { AppType as OriginalAppType } from "../../../data/apps";
import path from "path";

type AppWithFocus = OriginalAppType & { isFocused?: boolean };

const Taskbar = () => {
  const { pathname } = useLocation();
  const [runningApps, setRunningApps] = useState<AppWithFocus[]>([]);
  useEffect(() => {
    let app: AppWithFocus | undefined;
    if (pathname === "/") {
      app = apps.find((a) => a.id === "about-me");
    } else {
      app = apps.find((a) => a.link.url === pathname);
    }

    if (!app) return;
    if (app.link.type === "external") return;
    setRunningApps((prevRunningApps) => {
      let changed = false;

      const newRunningApps = prevRunningApps.map((runningApp) => {
        const shouldBeFocused = runningApp.id === app!.id;
        if (runningApp.isFocused !== shouldBeFocused) changed = true;
        return shouldBeFocused
          ? { ...runningApp, isFocused: true }
          : runningApp.isFocused
          ? { ...runningApp, isFocused: false }
          : runningApp;
      });

      const isAlreadyRunning = prevRunningApps.some((ra) => ra.id === app!.id);

      if (!isAlreadyRunning) {
        changed = true;
        newRunningApps.push({ ...app!, isFocused: true });
      }

      return changed ? newRunningApps : prevRunningApps;
    });
  }, [pathname]);

  return (
    <section className="flex w-full">
      {runningApps.map((app) => (
        <Link
          to={app.link.url}
          key={app.id}
          target={app.link.type === "external" ? "_blank" : "_self"}
          className={`${
            app.isFocused
              ? "flex items-center ml-0.5 p-1 md:w-1/5 cursor-pointer button-3d-focused"
              : "flex items-center ml-0.5 p-1 md:w-1/5 cursor-pointer button-3d"
          }`}
        >
          <img
            src={`./icons/${app.icon.src}`}
            alt={app.icon.alt}
            className="w-[24px] mr-1"
          />
          {app.name}
        </Link>
      ))}
    </section>
  );
};

export default Taskbar;
