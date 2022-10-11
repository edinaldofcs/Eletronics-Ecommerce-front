import type { NextPage } from "next";
import Link from "next/link";
import {  useState } from "react";
import CartIcon from "../../components/cart";
import Input from "../../components/input";
import Logo from "../../components/logo";
import Menu from "../../components/menu";
import { useUserContext } from "../../context/useContext";

const Header: NextPage = () => {
  const [inputValue, setInputValue] = useState("");
  const { user } = useUserContext();  

  return (
    <div className="w-full bg-blue-800  flex flex-row-reverse items-center justify-around  px-2 py-2 sm:flex-row">
      <Menu />
      <div className="flex items-center gap-2 flex-col my-1 sm:flex-row sm:w-[50%]">
        <Logo />
        <Input
          placeholder="Buscar produtos..."
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="hidden gap-2 sm:flex">
        <div>
          {user.userName ? (
            <div className="flex flex-col items-center">
              <p className="text-white w-fit inline">Olá, {user.userName}</p>
              <CartIcon/>
            </div>
          ) : (
            <>
              <p>
                Faça o seu{" "}
                <span className="text-gray-200 hover:text-white">
                  <Link href="/login">login</Link>
                </span>
              </p>
              <p>
                Ou{" "}
                <span className="text-gray-200 hover:text-white">
                  <Link href="/cadastrar">Cadastre-se</Link>
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
