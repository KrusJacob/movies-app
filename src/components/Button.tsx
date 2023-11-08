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
      className="bg-[var(--blueColor)] text-[var(--darkblue)] text-2xl xl:text-3xl border rounded-3xl h-min py-1.5 px-3 hover:bg-[var(--darkblue)] hover:text-[var(--blueColor)] transition-all duration-300 disabled:opacity-30 cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
