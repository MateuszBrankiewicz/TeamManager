import React from 'react';
interface SignUpButtonProps {
    onClick: () => void;
  }
const SignUpButton: React.FC<SignUpButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className='button' onClick={handleClick}>CREATE ACCOUNT</button>
  );
};

export default SignUpButton;