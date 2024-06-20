import React from 'react';

interface DateInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DateInput: React.FC<DateInputProps> = ({ id, label, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block mb-2">{label}</label>
    <input type="date" id={id} className="input input-bordered w-full" value={value} onChange={onChange} />
  </div>
);
