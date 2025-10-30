"use client";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useState } from "react";

export default function ContactMeForm({
  setIsModalOpen,
  setModalContent,
}: {
  setIsModalOpen: (isOpen: boolean) => void;
  setModalContent: (content: { title: string; text: string }) => void;
}) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  interface ModalContent {
    title: string;
    text: string;
  }

  const handleSubmit = async (e: FormData): Promise<void> => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    // Wait for reCAPTCHA to be ready if it's not available yet
    if (!executeRecaptcha) {
      // Give it a moment to load
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!executeRecaptcha) {
        alert("reCAPTCHA not ready. Please refresh the page and try again.");
        setIsSubmitting(false);
        return;
      }
    }

    try {
      // Execute reCAPTCHA and get token
      const token = await executeRecaptcha("submit");
      if (!token) {
        alert("Failed to verify reCAPTCHA");
        return;
      }
      setIsSubmitting(true);

      // Add the token to the form data
      // formData.append("recaptcha-token", token);
      console.log("formdata", formData);
      // Send email with form data including reCAPTCHA token
      const response = await fetch("https://localhost:7038/api/send", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.success) {
        // alert(result.message);
        setModalContent({
          title: "Email Sent Successfully",
          text: "Thank you for reaching out! I will get back to you as soon as possible.",
        } as ModalContent);
        setIsModalOpen(true);
        setIsSubmitting(false);
        // Optional: Reset form
        document.querySelector("form")?.reset();
      } else {
        // alert(result.message);
        setModalContent({
          title: "Error Sending Email",
          text: "An error occurred while sending your message. Please try again later.",
        } as ModalContent);
        setIsModalOpen(true);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form action={handleSubmit} className="flex flex-col">
      <div className="flex gap-2 mb-2 justify-start">
        <label htmlFor="name" className="w-[20%]">
          Name:
        </label>
        <input
          type="text"
          name="name"
          required
          className="bg-white gui-box-inset ml-1 p-[1px] w-[50%]"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="flex gap-2 mb-2 justify-start">
        <label htmlFor="email" className="w-[20%]">
          Email:
        </label>
        <input
          type="email"
          name="email"
          required
          className="bg-white gui-box-inset ml-1 px-[1px] w-[50%]"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="flex gap-2 mb-2 justify-start">
        <label htmlFor="message" className="w-[20%]">
          Message:
        </label>
        <textarea
          name="message"
          required
          className="bg-white gui-box-inset p-[1px] w-[50%] resize-none ml-1 h-32"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="flex gap-2 mb-2 justify-start">
        <div className="w-[20%]"></div>
        <button
          type="submit"
          //   disabled={isSubmitting || !executeRecaptcha}
          className="button-3d py-2 px-1 disabled:opacity-50 disabled:cursor-not-allowed ml-1"
        >
          <img
            src="/icons/email.png"
            width={16}
            height={16}
            alt="Send"
            className="inline-block mr-2"
          />
          {isSubmitting ? "Sending..." : "Send Email"}
        </button>
      </div>
    </form>
  );
}
