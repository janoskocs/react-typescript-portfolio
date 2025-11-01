import DesktopIcons from "./features/desktop-icons/desktop-icons";
import TaskbarFooter from "./features/taskbar-footer/taskbar-footer";
import { AppRoutes } from "./routes/AppRoutes";
import "./App.css";
import StartMenu from "./features/start-menu/start-menu";
import { useState } from "react";

const App = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  return (
    <>
      <div className="flex bg-teal-600 min-h-screen">
        <div className="hidden md:block">
          <DesktopIcons />
        </div>
        <main className="flex-1">
          <AppRoutes />
        </main>
      </div>
      <StartMenu
        isStartMenuOpen={isStartMenuOpen}
        setIsStartMenuOpen={setIsStartMenuOpen}
      />
      <TaskbarFooter setIsStartMenuOpen={setIsStartMenuOpen} />
    </>
  );
};

export default App;
