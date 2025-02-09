import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ResourceCard = ({ id, type, title, thumbnail = "", link, resDelete }) => {
  const redirectToResource = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="p-4 bg-white text-[#2E8B57] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg relative">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-2"
      />
      <h3
        className="text-lg font-semibold hover:text-[#FF6347] cursor-pointer transition duration-300 ease-in-out"
        onClick={redirectToResource}
      >
        {title}
      </h3>
      <p className="text-sm mb-2">{type === "Video" ? "Video" : "Article"}</p>
      <button
        className="text-[#FF6347] hover:text-red-600 transition duration-300 ease-in-out absolute bottom-2 right-2"
        onClick={resDelete}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default ResourceCard;