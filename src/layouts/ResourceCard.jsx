import React from 'react';

const ResourceCard = ({ type, title, thumbnail }) => {
  return (
    <div className="p-4 bg-white text-[#2E8B57] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg hover:text-[#FF6347] cursor-pointer transition duration-300 ease-in-out">
      <img src={thumbnail} alt={title} className="w-full h-40 object-cover rounded-lg mb-2" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{type === 'video' ? 'Video' : 'Article'}</p>
    </div>
  );
};

export default ResourceCard;