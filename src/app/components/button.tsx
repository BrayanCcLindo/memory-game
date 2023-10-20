import { twMerge } from "tailwind-merge";

function Button({
  children,
  variant = "primary",
  onClick,
}: {
  children: React.ReactNode;
  variant?: string;
  onClick?: React.ReactEventHandler;
}) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        " rounded-full text-semibold  py-3 px-6 text-xl font-semibold hover:scale-105 duration-100 focus:scale-110",
        variant === "primary" &&
          "bg-gray text-black hover:bg-orange hover:text-white ",
        variant === "secondary" && "bg-orange text-white "
      )}
    >
      {children}
    </button>
  );
}

export default Button;
