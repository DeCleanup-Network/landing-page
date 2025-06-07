import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`w-full bg-black text-secondary cursor-pointer transition-all duration-300 sm:px-6 xl:py-2 py-5 leading-[1] text-[#FAFF00] text-[30px] xl:text-[80px] font-bebas ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;