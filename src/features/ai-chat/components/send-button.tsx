type SendButtonProps = {
  isLoading: boolean;
  onClickHandler: () => void;
  disabled: boolean;
};
const SendButton = ({
  isLoading,
  onClickHandler,
  disabled,
}: SendButtonProps) => {
  return (
    <button
      className={`button-3d p-5 ml-2 ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClickHandler}
      disabled={disabled}
    >
      Send
    </button>
  );
};

export default SendButton;
