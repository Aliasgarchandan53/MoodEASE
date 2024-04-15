import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-center ">
        {
          user.login?<h1 className="text-4xl text-center ">
          Welcome to MoodEase {user.userFirstName}!!
        </h1>:<h1 className="text-4xl text-center ">Please login to access dashboard.</h1>
        }
      </div>
    </div>
  );
}
