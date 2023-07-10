import React from 'react';
interface SignInButtonProps {
    onClick: () => void;
  }
const SignInButton: React.FC<SignInButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className='button' onClick={handleClick}>SIGN IN</button>
  );
};

export default SignInButton;