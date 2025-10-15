import DesktopIcons from "./features/desktop-icons/desktop-icons";
import TaskbarFooter from "./features/taskbar-footer/taskbar-footer";
import { AppRoutes } from "./routes/AppRoutes";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="flex">
        <div className="hidden md:block">
          <DesktopIcons />
        </div>
        <main className="flex-1">
          <AppRoutes />
        </main>
      </div>

      <TaskbarFooter />
    </>
  );
};

export default App;
