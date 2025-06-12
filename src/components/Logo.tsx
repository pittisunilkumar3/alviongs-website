import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  textOnly?: boolean;
  variant?: 'default' | 'footer';
}

const Logo: React.FC<LogoProps> = ({
  animated = true,
  size = 'md',
  textOnly = false,
  variant = 'default'
}) => {
  // Size mapping
  const sizeMap = {
    sm: {
      logoHeight: 30,
      fontSize: 'text-xl',
      logoWidth: 30,
    },
    md: {
      logoHeight: 40,
      fontSize: 'text-2xl',
      logoWidth: 40,
    },
    lg: {
      logoHeight: 60,
      fontSize: 'text-4xl',
      logoWidth: 60,
    },
  };


  return (
    <Link to="/" className="flex items-center group">
      {!textOnly && (
        <>
          <div className="mr-3 relative">
            <img
              src="/images/logo.png"
              alt="ALVION Logo"
              width={sizeMap[size].logoWidth * 2}
              height={sizeMap[size].logoHeight}
              className={`transition-transform duration-300 ${animated ? 'group-hover:scale-110' : ''} object-contain`}
              style={{
                height: sizeMap[size].logoHeight,
                width: 'auto',
                maxWidth: sizeMap[size].logoWidth * 2
              }}
            />
          </div>
          <div className={`font-bold ${sizeMap[size].fontSize} ${
            variant === 'footer'
              ? 'text-white group-hover:logo-gradient transition-all duration-300'
              : 'text-alvionblue group-hover:text-alviongreen transition-colors duration-300'
          }`}>
            ALVION
          </div>
        </>
      )}
      {textOnly && (
        <div className={`font-bold ${sizeMap[size].fontSize} logo-gradient`}>
          ALVION
        </div>
      )}
    </Link>
  );
};

export default Logo;
