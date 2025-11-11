import Window from "../../components/window/window";
import WindowTitleBar from "../../components/window-title-bar/window-title-bar";
import WindowContent from "../../components/window-content/window-content";
import WindowFooter from "../../components/window-footer/window-footer";
import AIChat from "../../features/ai-chat/ai-chat";

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
          <div className="p-4 h-full">
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
