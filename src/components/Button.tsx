import React from "react";

interface ButtonProps {
  id: string;
  label: string;
  color: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ id, label, color, onClick }) => {
  const colorClass = `btn-${color}`;
  return (
    <button id={id} className={`btn ${colorClass}`} onClick={onClick}>
      {label}
    </button>
  );
};
