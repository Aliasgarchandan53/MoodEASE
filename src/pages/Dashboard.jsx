import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Dashboard() {
  const { user} = useContext(UserContext);

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-center ">
        <h1 className="text-4xl text-center ">
          {user.login
            ? `Welcome to MoodEase ${user.userFirstName}!!`
            : "Please login to access dashboard."}
        </h1>
      </div>
    </div>
  );
}
