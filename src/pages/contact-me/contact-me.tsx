import Window from "../../components/window/window";
import WindowTitleBar from "../../components/window-title-bar/window-title-bar";
import WindowContent from "../../components/window-content/window-content";
import WindowFooter from "../../components/window-footer/window-footer";
import { useState } from "react";
import ContactMeForm from "../../features/contact-me-form/contact-me-form";

const ContactMePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    text: string;
  }>({
    title: "",
    text: "",
  });
  return (
    <>
      <Window isFocused={true}>
        <WindowTitleBar
          icon="/icons/contact-me.png"
          iconAlt="Envelope and a globe"
        >
          Contact me
        </WindowTitleBar>
        <WindowContent>
          <div className="p-4">
            <div className="p-0.5 flex flex-col md:flex-row gap-4">
              <div>
                <img
                  src="/icons/contact-me.png"
                  width={64}
                  height={64}
                  alt="Contact Me"
                  className="mb-4 rounded m-auto block"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold mb-2">Get in Touch</h2>
                <p className="mb-4">
                  I&apos;d love to hear from you! Whether you have a question,
                  feedback, or just want to say hello, feel free to reach out
                  using the form below.
                </p>
                <ContactMeForm
                  setModalContent={setModalContent}
                  setIsModalOpen={setIsModalOpen}
                />
              </div>
            </div>
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

export default ContactMePage;
