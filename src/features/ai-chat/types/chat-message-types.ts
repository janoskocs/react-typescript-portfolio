export type ChatMessageType = {
    id: string;
    sender: "JanosAI" | "User";
    message: string;
    time: string;
}