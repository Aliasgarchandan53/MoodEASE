import React, { createContext, useContext, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState({
    login:false,
    userFirstName: "<error :Not yet login-ed>",
    userLastName: "",
    userEmail: "",
    userPassword: "",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;