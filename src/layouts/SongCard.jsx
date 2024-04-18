import React from 'react';

const SongCard = ({ icon, name, onPlay }) => {
  return (
    <div
      className="flex items-center p-4 bg-white text-[#2E8B57] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg hover:text-[#FF6347] cursor-pointer transition duration-300 ease-in-out"
      onClick={onPlay}
    >
      {icon}
      <span className="ml-2">{name}</span>
    </div>
  );
};

export default SongCard;