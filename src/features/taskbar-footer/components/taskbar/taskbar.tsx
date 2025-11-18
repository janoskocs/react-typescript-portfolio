import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TaskbarApp from "../taskbar-app/taskbar-app";
import apps from "../../../../data/apps";
import type { AppType as OriginalAppType } from "../../../../data/apps";

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
        <TaskbarApp key={app.id} app={app} />
      ))}
    </section>
  );
};

export default Taskbar;
