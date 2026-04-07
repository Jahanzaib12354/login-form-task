import React, { createContext, useState } from "react";

// 1. Context create karo
export const UserContext = createContext<any>(null);

// 2. Provider component
export const UserProvider: React.FC<{ children: any }> = ({ children }) => {
  const [user, setUser] = useState(null); 

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

