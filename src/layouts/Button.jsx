import React from 'react'

export default function Button({title,...props}) {
  return (
    <div>
      <button className="bg-brightColor text-white px-4 py-2 mx-4 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out "  {...props} >
        {title} 
      </button>
    </div>
  )
}
