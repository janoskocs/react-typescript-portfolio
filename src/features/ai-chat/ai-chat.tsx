"use client";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import ChatMessage from "./components/chat-message";
import type { ChatMessageType } from "./types/chat-message-types";

const AIChat = () => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<ChatMessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRefocus, setShouldRefocus] = useState(false);
  const hasInitialized = useRef(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const initialAIMessage =
    "You are my assistant and you are living on my portfolio website ready to answer any question a potential employer has for Janos who is me. I am a full stack developer. My skills are JS, React, HTML, CSS, Sass, Node.js. Be friendly and don't make false things about me. Say you don't know if you don't know. You are a chatbot and just have a friendly greeting to start the conversation. Keep your answers short and to the point and make sure to advocate for me and keep things positive. Don't ask many questions, just keep it simple, if you're unsure, tell them to click on the Contact Me button and send me an email. Here's my CV: I'm a full-stack JavaScript developer with around two years of experience building productiongrade applications using React, TypeScript, Node.js and RESTful APIs. I’ve mentored over 30 students at a coding school, delivered A/B testing features at Ocado Retail, and thrive in collaborative, agile teams. I'm always learning, currently diving deeper into Next.js, and I enjoy sharing my knowledge through technical blogs. I'm a lifelong learner and a huge Windows 98 fan. Work experience: Ocado Retail Hatfield, UK JavaScript Developer Aug 2024 – present • Developed and implemented 20+ production-grade A/B tests using JavaScript and React, contributing to a projected £1.16M revenue increase.• Introduced an end-to-end automated testing strategy using Microsoft Playwright to ensure stability and quality across A/B test implementations. • Responsible for development, deployment and management of live customer facing experiments and tracking implementation with Google Analytics. • Accountable for creating documentation and mentoring colleagues to aid in new platform and testing tool adoption; providing key migration material and a point of contact for queries and support as colleagues migrated to working on the new platform. • Designed and optimised performant API interactions with a focus on caching strategies and reduced load times. • Responsible for maintaining internal business applications built with React, including implementing UI updates, fixing bugs, and ensuring overall application stability. Technical Skill Enhancement / Career Transition Mar 2024 – Jul 2024 • Deepened technical skills through online resources and self-directed projects. • Built and deployed a full-stack digital RSVP invitation app using React and Express; launched commercially on Etsy and achieved initial sales. BrainStation London, UK Senior Teaching Assistant (Software Engineering) Nov 2023 – Feb 2024 Tech stack: HTML, CSS, Sass, JavaScript, React, Node, Express, SQL • Coached 17 students through 1:1 sessions, assisting them in overcoming personal code blockers, leading to a strong above 85% class average grade. • Led 60 open studio sessions, addressing code-related queries, resulting in a 4.7/5 customer satisfaction rating. • Conducted 20 challenge workshops to assist 17 students in future technical interviews. • Managed two Agile teams of 4 developers in building a full-stack React and Express app; emphasised communication and teamwork to ensure timely and successful delivery. Teaching Assistant (Software Engineering) Jun 2023 – Sep 2023 • Graded 130 student projects, offering feedback that contributed to achieving grades above the 83% class average. • Conducted code reviews for 13 students, providing feedback on best practices such as accessibility, clean code, DRY, and documentation. • Coordinated weekly lecture reviews, including quizzes, and provided explanations on technical topics. GXO Logistics London, UK Various Roles Sep 2018 – Dec 2023 • Automated 10+ reports in Tableau and SQL, resulting in annual cost savings £40,000+. • Streamlined manual processes by developing a React-based QR code generator app, and saving colleagues 20 minutes per use, resulting in an annual cost savings of £13,000+. • Developed an interactive app using the MERN stack to deliver fire safety trainings tomanagement which helped reduce emergency evacuation time to 2 minutes from 15 minutes. If someone is asking about Janos, you know they are asking about this and everything I provided. I'll add the user's message here:";

  const fetchResponse = async (userMessage = initialAIMessage) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_API_DOMAIN}/janosai`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: userMessage,
          }),
        }
      );

      const data = await response.json();
      const reply = data.echo.candidates[0].content.parts[0].text;
      return reply;
    } catch (error) {
      console.error("Error fetching response:", error);
      return null;
    }
  };

  useLayoutEffect(() => {
    if (hasInitialized.current) return;

    const callApi = async () => {
      console.log("calling");
      setIsLoading(true);
      const response = await fetchResponse();
      console.log(response);
      if (response) {
        handleSendMessage(response, "JanosAI");
      }
      setIsLoading(false);
    };

    callApi();
    hasInitialized.current = true;
  });

  const handleSendMessage = async (
    messageToBeSent: string,
    user: "JanosAI" | "User"
  ) => {
    const uuid = self.crypto.randomUUID();

    setConversation((prev) => [
      {
        id: uuid,
        sender: user,
        message: messageToBeSent,
        time: new Date().toUTCString(),
      },
      ...prev,
    ]);

    if (user === "User") {
      setIsLoading(true);
      const response = await fetchResponse(
        initialAIMessage +
          messageToBeSent +
          "Don't greet again, don't say you are an assistant."
      );
      console.log(response);
      if (response) {
        handleSendMessage(response, "JanosAI");
      }
      setIsLoading(false);
    }

    // Clear message and trigger refocus
    setMessage("");
    if (user === "User") {
      setShouldRefocus(true);
    }
  };

  const handleSubmit = () => {
    if (message.trim() && !isLoading) {
      handleSendMessage(message, "User");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Focus textarea when component mounts
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  // Refocus after message is sent and cleared
  useEffect(() => {
    if (shouldRefocus && message === "" && textareaRef.current) {
      textareaRef.current.focus();
      setShouldRefocus(false);
    }
  }, [shouldRefocus, message]);

  return (
    <section className="flex flex-col h-full">
      <div className="bg-white gui-box-inset grow p-3 h-[50vh] overflow-y-scroll flex flex-col-reverse">
        {conversation &&
          conversation.map((chat) => <ChatMessage chat={chat} key={chat.id} />)}
      </div>
      <div className="flex justify-between mt-5">
        <textarea
          ref={textareaRef}
          className="bg-white gui-box-inset grow resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
          placeholder={
            isLoading
              ? "Waiting for response..."
              : "Type your message... (Enter to send, Shift+Enter for new line)"
          }
          rows={1}
        />
        <button
          className={`button-3d p-5 ml-2 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleSubmit}
          disabled={isLoading || !message.trim()}
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default AIChat;
