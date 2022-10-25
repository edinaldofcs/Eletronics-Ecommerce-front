import { createContext, useEffect, useState } from "react";

export type User = {
  acess_token: string | null;
  userName: string | null;
  cart?: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    img: string;
  }[];
};

interface IContext {
  user: User;
  updateUser: (user: User) => void;
}

export const Context = createContext<IContext | null>(null);

export const Provider = ({ children }: any) => {
  const [user, setUser] = useState<User>({
    acess_token: null,
    userName: null,
  });
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const myUser = localStorage.getItem("eletronics");
    if (myUser) {
      window.addEventListener("storage", (e) => {
        updateUser(JSON.parse(myUser));
      });

      updateUser(JSON.parse(myUser));
    }
  }, []);
  
  const updateUser = (user: User) => {
    setUser(user);
  };

  return (
    <Context.Provider value={{ user, updateUser }}>{children}</Context.Provider>
  );
};
