import "../index.css";
import React from 'react';

type ButtonProps = {
  type?: 'solid' | 'outline'; // Optional, defaults to 'solid'
  button?: 'primary' | 'secondary';
  children: React.ReactNode; // Content inside the button
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ type = 'solid', button, children, onClick }) => {
 var  buttonClasses;

 if (button === 'primary') {
    buttonClasses = 'px-4';
  } else if (button === 'secondary') {
    buttonClasses = 'w-full';
  }

  const baseStyles =
    'py-4 h-6 rounded-md text-p2-bold transition-all duration-200 flex items-center justify-center';

  const types = {
    solid: 'bg-primary-darkGreen text-white hover:bg-opacity-90',
    outline:
      'bg-transparent text-primary-darkGreen border border-primary-darkGreen hover:bg-primary-darkGreen hover:text-white',
  };

  return (
    <button
      className={`${baseStyles} ${types[type]} ${buttonClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
