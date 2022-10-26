import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Input from "../../components/input";
import Logo from "../../components/logo";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

const Footer: NextPage = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="w-full pb-4 bg-blue-800">
      <div className="bg-blue-900 py-6 flex-col  flex gap-4 items-center justify-around sm:flex-row">
        <Logo />

        <form className="flex gap-2 flex-col items-center sm:flex-row">
          <label htmlFor="email3" className="w-[60%] text-center min-w-[200px] text-white">Receber nossas ofertas?</label>
          <Input
            placeholder="Digite seu email"
            value={inputValue}
            type="email"
            id="email3"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white py-2 px-3 transition duration-300 all text-blue-800 font-bold hover:bg-blue-700 hover:text-white"
          >
            Enviar
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-4 px-4 py-4 items-center text-center justify-center sm:flex-row sm:items-start sm:gap-8 sm:justify-around">
        <div className="text-white">
          <h3 className="font-bold" id="/info/institucional">
            Institucional
          </h3>
          <Link href="/info/sobre">
            <p className="cursor-pointer">Sobre</p>
          </Link>
          <Link href="/info/politicas">
            <p className="cursor-pointer">politicas de privacidade</p>
          </Link>
        </div>
        <div className="text-white">
          <h3 className="font-bold">Contato</h3>
          <p>Telefone: (xx) x xxxx-xxxx</p>
          <p>Endereço: Rua xxx</p>
          <p>Email: contato@xxx.com.br</p>
        </div>
        <div className="text-white">
          <h3 className="font-bold">Redes sociais</h3>
          <div className="flex gap-2 items-center justify-center py-2">
            <Link href="/">
              <GitHubLogoIcon className="cursor-pointer w-8 h-8 duration-100 ease-linear hover:scale-110" />
            </Link>
            <Link href="/">
              <InstagramLogoIcon className="cursor-pointer w-8 h-8 duration-100 ease-linear hover:scale-110" />
            </Link>
            <Link href="/">
              <LinkedInLogoIcon className="cursor-pointer w-8 h-8 duration-100 ease-linear hover:scale-110" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
