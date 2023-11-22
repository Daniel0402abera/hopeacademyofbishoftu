import React, { useState } from 'react';

const ServiceCard = ({ defaultIcon, defaultTitle, defaultDetail, hoverIcon }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconToShow = isHovered ? hoverIcon : defaultIcon;
  const titleToShow = isHovered ? <span style={{ color: 'white' }}>{defaultTitle}</span> : defaultTitle;
  const detailToShow = isHovered ? <span style={{ color: 'white' }}>{defaultDetail}</span> : defaultDetail;

  return (
    <div
      className="w-72 h-80 m-9 rounded overflow-hidden shadow-lg relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute top-0 left-0 w-full h-full transition-all duration-1000"
        style={{
          background: `linear-gradient(to top, #00008b 50%, whiteSmoke 50%)`,
          backgroundSize: '100% 200%',
          backgroundPosition: isHovered ? 'bottom' : 'top',
          transition: 'background-position 1s',
        }}
      ></div>
      <div className="px-6 py-4 relative z-10">
        <div className="flex items-center justify-center">
          <img src={iconToShow} alt="Icon" className="w-16 h-16" />
        </div>
        <div className="font-bold text-2xl mb-2 mt-4 text-center">
          {titleToShow}
        </div>
        <p className="text-base  text-center">{detailToShow}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
