import Window from "../../components/window/window";
import WindowTitleBar from "../../components/window-title-bar/window-title-bar";
import WindowContent from "../../components/window-content/window-content";
import WindowFooter from "../../components/window-footer/window-footer";
// import WindowOptions from "@/components/WindowOptions/WindowOptions";

const AboutMePage = () => {
  return (
    <>
      <Window isFocused={true}>
        <WindowTitleBar icon="/icons/about-me.png">About me</WindowTitleBar>
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
            <div>
              <h1 className="font-bold">
                János Kócs | Software Engineer Portfolio
              </h1>
            </div>
            {/* <DividerLine orientation="horizontal" /> */}

            <p>
              Hey there, I&apos;m János, I&apos;m making the web more
              interactive. When I was a kid, my computer ran Windows 98, and it
              was the coolest thing ever. That&apos;s where I got the
              inspiration for my epic portfolio website.
            </p>
            {/* <DividerLine orientation="horizontal" /> */}

            <h2 className="mt-2">I make these components work together</h2>
            {/* <ul className="flex flex-wrap justify-center">
              {skills.map((skill) => (
                <li
                  key={skill.id}
                  className="text-center m-3 flex flex-col items-center"
                >
                  <Image
                    src={skill.image}
                    alt={skill.alt}
                    width={64}
                    height={64}
                  />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul> */}
          </div>
        </WindowContent>

        <WindowFooter>
          <div className="flex">
            <div className="gui-box-inset px-2">
              Copyright {new Date().getFullYear()}
            </div>
          </div>
        </WindowFooter>
      </Window>
    </>
  );
};

export default AboutMePage;
