import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addResource } from "../features/resources/resourceSlice";
import conf from "../conf/conf";
export default function Resourceform({ closeForm ,userId="" }) {
  const initialResource = {
    type: "",
    title: "",
    thumbnail:"",
    link: "",
    userid:userId
  };
  const [resource, setResource] = useState(initialResource);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setResource({ ...resource, [name]: value });
  };

  const addResourceHandler = (event) => {
    event.preventDefault();
    let url = `https://api.unsplash.com/search/photos?page=1&query=${resource.title}&client_id=${conf.unsplashApiKey}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let randomNum = Math.floor(Math.random() * 10);
        resource.thumbnail = data.results[randomNum].urls.regular ;
        console.log(resource)
        dispatch(addResource(resource));
        setResource(initialResource);
        closeForm();
      })
      .catch((error)=>{
        console.log(`Error fetching image from unsplash : ${error.message}`)
        resource.thumbnail="https://plus.unsplash.com/premium_photo-1666299537516-bef50f6bf5ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWluZGZ1bGxuZXNzJTIwbWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
        dispatch(addResource(resource));
        setResource(initialResource);
        closeForm();
      })
      ;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form
          className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl"
          onSubmit={addResourceHandler}
        >
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Add Resource
          </h1>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Type"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              id="type"
              name="type"
              value={resource.type}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Title"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              id="title"
              name="title"
              value={resource.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Link"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              id="link"
              name="link"
              value={resource.link}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-row  justify-center gap-2 ">
            <button
              type="submit"
              className="bg-brightColor text-white px-8 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out "
            >
              Add
            </button>
            <button
              type="button"
              className="bg-backgroundColor text-white px-8 rounded-md active:bg-red-500"
              onClick={closeForm}
              id="close"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
