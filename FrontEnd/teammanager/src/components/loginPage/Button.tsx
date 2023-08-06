import './Buttons.css'
import React from 'react';
interface SignInButtonProps {
    onClick: () => void;
    message: string;
  }
const Button: React.FC<SignInButtonProps> = ({message, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className='button' onClick={handleClick} >{message}</button>
  );
};

export default Button;