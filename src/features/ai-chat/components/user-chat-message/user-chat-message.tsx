type UserChatMessageProps = {
  message: string;
  time: string;
};
const UserChatMessage = ({ message, time }: UserChatMessageProps) => {
  return (
    <div className="my-2 flex items-center justify-end ">
      <p className="mr-auto text-xs text-stone-400">{time}</p>
      <p className="mr-1">{message}</p>
      <img src="/icons/user.png" alt="User profile" width={42} height={42} />
    </div>
  );
};

export default UserChatMessage;
