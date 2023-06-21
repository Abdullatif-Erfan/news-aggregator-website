import React, { createContext, useState } from "react";

export type UserContextType = {
  user: any;
  setUser: any;
};
export const UserContext = createContext({} as UserContextType);

type UserContextProviderType = {
  children: React.ReactNode;
};
type AuthUser = {
  email: string;
  name: string;
};
export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
