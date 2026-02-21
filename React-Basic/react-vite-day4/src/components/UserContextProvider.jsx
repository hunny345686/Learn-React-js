import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Prem",
  });
  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
};
