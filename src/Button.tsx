import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="bg-indigo-600 transition-all rounded-md active:ring-2 text-white h-12 px-3 hover:bg-indigo-800">
      {children}
    </button>
  );
};
