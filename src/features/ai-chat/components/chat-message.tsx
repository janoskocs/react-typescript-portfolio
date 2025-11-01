import type { ChatMessageType } from "../types/chat-message-types";
type ChatMessageProps = {
  chat: ChatMessageType;
};
const ChatMessage = ({ chat }: ChatMessageProps) => {
  if (chat.sender === "JanosAI") {
    return (
      <div key={chat.id} className="my-2 flex items-center ">
        <img
          src="/icons/janoskocs_mycomputer1.png"
          alt="JanosAI Microchip"
          width={42}
          height={42}
        />
        <p className="ml-1">{chat.message}</p>
        <p className="ml-auto  text-xs text-stone-400">{chat.time}</p>
      </div>
    );
  }

  if (chat.sender === "User") {
    return (
      <div key={chat.id} className="my-2 flex items-center justify-end ">
        <p className="mr-auto text-xs text-stone-400">{chat.time}</p>
        <p className="mr-1">{chat.message}</p>
        <img src="/icons/user.png" alt="User profile" width={42} height={42} />
      </div>
    );
  }
};

export default ChatMessage;
