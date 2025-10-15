import DesktopIcons from "./features/desktop-icons/desktop-icons";
import TaskbarFooter from "./features/taskbar-footer/taskbar-footer";
import { AppRoutes } from "./routes/AppRoutes";
import "./App.css";

const App = () => {
  return (
    <>
      <DesktopIcons />
      <AppRoutes />
      <TaskbarFooter />
    </>
  );
};

export default App;
