"use client";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import ChatMessage from "./components/ChatMessage";
import type { ChatMessageType } from "./types/chat-message-types";

const AIChat = () => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<ChatMessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRefocus, setShouldRefocus] = useState(false);
  const hasInitialized = useRef(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const initialAIMessage = "";
  const fetchResponse = async (userMessage = initialAIMessage) => {
    try {
      const response = await fetch(`/api/gemini-ai-model`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: userMessage,
        }),
      });

      const data = await response.json();
      return data;
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
        handleSendMessage(response.summary, "JanosAI");
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
        handleSendMessage(response.summary, "JanosAI");
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
