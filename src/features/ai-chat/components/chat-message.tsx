import type { ChatMessageType } from "../types/chat-message-types";
import AIChatMessage from "./ai-chat-message/ai-chat-message";
import UserChatMessage from "./user-chat-message/user-chat-message";
type ChatMessageProps = {
  chat: ChatMessageType;
};
const ChatMessage = ({ chat }: ChatMessageProps) => {
  if (chat.sender === "JanosAI") {
    return (
      <AIChatMessage key={chat.id} message={chat.message} time={chat.time} />
    );
  }

  if (chat.sender === "User") {
    return (
      <UserChatMessage key={chat.id} message={chat.message} time={chat.time} />
    );
  }
};

export default ChatMessage;
