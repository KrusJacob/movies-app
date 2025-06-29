import { type } from "os";
import React, { FC } from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="self-center bg-[var(--darkblue)] text-[var(--whiteColor)]  text-lg xl:text-2xl border rounded-2xl h-min py-1.5 px-3 hover:bg-[var(--blueColor)] hover:text-[var(--darkblue)]  transition-all duration-300 disabled:opacity-30 cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
