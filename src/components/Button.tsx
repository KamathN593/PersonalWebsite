import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button
        type="button"
        className={"btn btn-outline-" + color + " rounded-circle"}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
