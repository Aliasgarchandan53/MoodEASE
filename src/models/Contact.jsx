import React from "react";
import Button from "../layouts/Button";
export default function Contact(closeForm) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" >
      <div className="popup-form absolute mt-12 text-black" >
        <form className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor" >Login / SignUp</h1>
          <div className="flex flex-col" >
          <input
            type="text"
            name="userFirstName"
            id="userFirstName"
            placeholder="First Name"
            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
          />
          </div>
          <div className="flex flex-col" >
          <input
            type="text"
            name="userLastName"
            id="userLastName"
            placeholder="Last Name"
            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
          />
          </div>
          <div className="flex flex-col" >
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="Your Email"
            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
          />
          </div>
          <div className="flex flex-col" >
          <input
            type="number"
            name="userNumber"
            id="userNumber"
            placeholder="Phone No."
            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
          />
          </div>

        <div className="flex flex-row  justify-center gap-2 ">
          <Button title='Login'/>
          <Button title='SignUp'/>
          <button className="bg-backgroundColor text-white px-10 rounded-md active:bg-red-500" onClick={closeForm}>
            Close
          </button>
        </div>

        </form>
      </div>
    </div>
  );
}
