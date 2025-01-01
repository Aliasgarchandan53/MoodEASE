import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const JournalEntryCard = ({ id,date, title, entry, entDelete }) => {

  return (
    <div className="p-4 bg-white text-[#2E8B57] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{`${date.split('T')[0]} : ${title}`}</h3>
        <p>{entry}</p>
      </div>
      <button
        className="text-[#FF6347] hover:text-red-600 transition duration-300 ease-in-out"
        onClick={entDelete}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default JournalEntryCard;