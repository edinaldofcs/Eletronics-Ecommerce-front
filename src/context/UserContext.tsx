import { createContext, useState } from "react";

type User = {
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
  // updateUser: (user: Partial<User>) => void;
  updateUser: (user: User) => void;
}

export const Context = createContext<IContext | null>(null);

export const Provider = ({ children }: any) => {
  const [user, setUser] = useState<User>({
    acess_token: null,
    userName: null,
  });

  // const updateUser = (user: Partial<User>) => {
  //   setUser((prev) => {
  //     return {
  //       ...prev,
  //       ...user,
  //     };
  //   });
  // };
  const updateUser = (user: User) => {
    setUser(user);
  };

  return (
    <Context.Provider value={{ user, updateUser }}>{children}</Context.Provider>
  );
};
