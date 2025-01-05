import React, { useState } from 'react';
import infoIcon from '../assets/infoIcon.svg'; 

type InfoIconProps = {
  message?: string;
  linkUrl?: string;
};

const InfoIcon: React.FC<InfoIconProps> = ({ message, linkUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={infoIcon} alt="info icon" className="cursor-pointer" />

      {isHovered  && (
        <div className="absolute bottom-full bg-white text-black text-p5-regular rounded py-1 px-2 shadow-lg group-hover:block min-w-[20rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
          {message}
          {"\n"}
          {linkUrl && (
            <a href={linkUrl} className="text-blue-500 underline " target="_blank" rel="noopener noreferrer"
            >
              {linkUrl}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default InfoIcon;