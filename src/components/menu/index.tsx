import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import type { NextPage } from "next";
import { useUserContext } from "../../context/useContext";
interface Props {
  text: string;
  link?: string;
  handleOnclick?: () => void;
}

export const Item = ({ text, link, handleOnclick }: Props) => {
  return (
    <>
      {typeof link == "string" && link != "" ? (
        <a href={link}>
          <p className="w-[100vw] sm:w-72 text-center bg-blue-100 border-t-[1px] border-t-blue-300 px-20 cursor-pointer hover:bg-blue-200">
            {text}
          </p>
        </a>
      ) : (
        <p
          className="w-[100vw] sm:w-72 text-center bg-blue-100 border-t-[1px] border-t-blue-300 px-20 cursor-pointer hover:bg-blue-200"
          onClick={handleOnclick}
        >
          {text}
        </p>
      )}
    </>
  );
};

const Menu: NextPage = () => {
  const { user } = useUserContext();

  function handleLeave() {  
    localStorage.removeItem("eletronics");
    window.location.reload()
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="mx-1 focus:outline-none  duration-150 ease-in-out hover:scale-110">
        <HamburgerMenuIcon className="text-white scale-150" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="mt-2 z-50">
        <Item text="Home" link="/" />
        <Item text="Mais vendidos" link="/#maisvendidos" />
        <Item text="Categorias" link="/#categorias" />
        <Item text="Politicas" link="/info/politicas" />
        <Item text="Sobre" link="/info/sobre" />
        {user.userName ? (
          <Item text="Carrinho" link="/carrinho" />
        ) : (
          <>
            <Item text="login" link="/login" />
            <Item text="Cadastre-se" link="/cadastrar" />
          </>
        )}
        <Item text="Sair" handleOnclick={handleLeave} />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Menu;
