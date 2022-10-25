import type { NextPage } from "next";
import { BsCart3 } from "react-icons/bs";
import { useUserContext } from "../../context/useContext";

const CartIcon: NextPage = () => {
  const { user } = useUserContext();
  const items =
    user.cart != undefined && user.cart?.length > 0
      ? user.cart
          ?.map((item) => item.quantity)
          .reduce((a: number, b: number) => a + b)
      : 0;

  return (
    <a href="/carrinho" className="relative w-fit">
      <BsCart3 className="w-6 h-6 text-white" />
      <div className="h-4 w-4 bg-[rgba(0,0,0,0.8)] rounded-full absolute bottom-0 right-0 flex items-center justify-center border-[1px]">
        <p className="text-white text-sm">{items}</p>
      </div>
    </a>
  );
};

export default CartIcon;
