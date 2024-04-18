import React from 'react';

const JournalEntryCard = ({ date, entry }) => {
  return (
    <div className="p-4 bg-white text-[#2E8B57] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <h3 className="text-lg font-semibold">{date}</h3>
      <p>{entry}</p>
    </div>
  );
};

export default JournalEntryCard;