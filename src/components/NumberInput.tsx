import React from "react";

interface NumberInputProps {
  id?: string;
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({ id, label, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block mb-2">{label}</label>
    <input type="text" id={id} className="input input-bordered w-full" placeholder={placeholder} value={value} onChange={(e) => {
      if (e.target.value === '' || /^[0-9\b]+$/.test(e.target.value)) {
        onChange?.(e);
      }
    }} />
  </div>
);