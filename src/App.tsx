import DesktopIcons from "./features/desktop-icons/desktop-icons";
import Taskbar from "./features/taskbar/taskbar";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <DesktopIcons />
      <AppRoutes />
      <Taskbar />
    </>
  );
};

export default App;
