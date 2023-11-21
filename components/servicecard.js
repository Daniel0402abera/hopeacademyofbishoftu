import React from 'react';

const ServiceCard = ({ icon, title, detail }) => {
    return (
      <div className="w-72 m-9 rounded overflow-hidden shadow-lg bg-white">
        <div className="px-6 py-4">
          <div className="flex items-center justify-center">
            <img src={icon} alt="Icon" className="w-16 h-16" />
          </div>
          <div className="font-bold text-xl mb-2 mt-4 text-center">{title}</div>
          <p className="text-gray-700 text-base text-center">{detail}</p>
        </div>
      </div>
    );
  };

export default ServiceCard;
