import WindowContent from "../../components/WindowContent/WindowContent";
import WindowFooter from "../../components/WindowFooter/WindowFooter";
import Window from "../../components/Window/Window";
import WindowTitleBar from "../../components/WindowTitleBar/WindowTitleBar";
import AIChat from "../../features/ai-chat/AIChat";

const JanosAIPage = () => {
  return (
    <>
      <Window isFocused={true}>
        <WindowTitleBar icon="/icons/janos-ai.png">JanosAI</WindowTitleBar>
        {/* <WindowOptions>
        <button className="bg-stone-300 window-options-button cursor-pointer p-0.5 mr-0.5">
          Email me
        </button>
        <button className="bg-stone-300 window-options-button cursor-pointer p-0.5 mr-0.5">
          LinkedIn
        </button>
      </WindowOptions> */}
        <WindowContent>
          <div className="p-4">
            <AIChat />
          </div>
        </WindowContent>

        <WindowFooter>
          <div className="flex">
            <div className="gui-box-inset px-2 flex items-center">
              <span className="bg-green-500 w-2 h-2 block mr-1 rounded-2xl pulse"></span>
              JanosAI is online
            </div>
            <div className="gui-box-inset px-2 flex items-center">
              This is AI and does not represent my views and opinions.
            </div>
          </div>
        </WindowFooter>
      </Window>
    </>
  );
};

export default JanosAIPage;
