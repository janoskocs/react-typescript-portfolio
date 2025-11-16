type AIChatMessageProps = {
  message: string;
  time: string;
};
const AIChatMessage = ({ message, time }: AIChatMessageProps) => {
  return (
    <div className="my-2 flex items-center ">
      <img
        src="/icons/janoskocs_mycomputer1.png"
        alt="JanosAI Microchip"
        width={42}
        height={42}
      />
      <p className="ml-1">{message}</p>
      <p className="ml-auto  text-xs text-stone-400">{time}</p>
    </div>
  );
};

export default AIChatMessage;
