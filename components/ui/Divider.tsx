import React from 'react';

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return (
    <div 
      className={`w-full h-[1px] block bg-black mb-4 ${className}`}
      aria-hidden="true" 
    />
  );
};

export default Divider; 