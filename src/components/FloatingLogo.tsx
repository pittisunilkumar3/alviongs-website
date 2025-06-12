import React from 'react';

interface FloatingLogoProps {
  className?: string;
  size?: number;
}

const FloatingLogo: React.FC<FloatingLogoProps> = ({
  className = '',
  size = 200
}) => {


  return (
    <div className={`float ${className}`}>
      <img
        src="/images/logo.png"
        alt="ALVION Logo"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-lg animate-pulse object-contain"
        style={{
          animationDuration: '3s',
          animationIterationCount: 'infinite'
        }}
      />
    </div>
  );
};

export default FloatingLogo;
