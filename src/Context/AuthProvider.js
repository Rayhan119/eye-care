import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  //  const { useServices } = UseServices();
  // const data = { useServices, allContext };
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
