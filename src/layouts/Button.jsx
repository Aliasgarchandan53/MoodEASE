import React from 'react'

export default function Button({title,onClick}) {
  return (
    <div>
      <button className="bg-brightColor text-white px-4 py-2 mx-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out " onClick={onClick} >
        {title} 
      </button>
    </div>
  )
}
