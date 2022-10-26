import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useUserContext } from "../../context/useContext";
import { FragmentProductProps } from "../../interfaces";
import Button from "../button";
import { MyNumber } from "../numberFormat";

const ProductCard: NextPage<FragmentProductProps> = ({
  name,
  quantity,
  sold,
  price,
  discount,
  slug,
  id,
  img,
}) => {
  const router = useRouter();
  const { user, updateUser } = useUserContext();

  async function buy(id: string) {
    if (!user.userName) {
      router.push("/login");
      return;
    }

    const object = {
      productId: id,
    };
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(object),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + user.acess_token,
      }),
    };

    const addProduct = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/cart/add`,
      requestInfo
    );

    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/updateUserCart`, {
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + user.acess_token,
      }),
    });
    const updateUserCart = await data.json();
    updateUser({ ...user, cart: [...updateUserCart] });
    localStorage.setItem(
      `eletronics`,
      JSON.stringify({ ...user, cart: [...updateUserCart] })
    );
    router.push("/carrinho");
  }

  return (
    <div className="w-40 bg-white border shadow-md rounded px-1 flex flex-col gap-2 py-2 my-2 justify-between">
      <a href={`/produto/${id}`}>
        <div className="hidden sm:flex justify-between ">
          <div className="text-center py-[1px] px-1 border-2 border-blue-600 rounded ">
            <p className="text-[8px] text-blue-900 font-medium">RESTAM</p>
            <p className="text-[8px] text-blue-900 font-medium">
              {quantity} UN.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center py-[1px] px-2 border-2 border-blue-600 rounded">
            <p className="text-[8px] text-blue-900 font-medium">Vendidos</p>
            <p className="text-[8px] text-blue-900 font-medium">({sold})</p>
          </div>
        </div>
        <div className="w-full h-32 flex justify-center items-center">
          <img className="max-w-[95%] max-h-[95%]" src={img} alt={name} />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold">{name}</h2>
          <MyNumber
            price={price * 1}
            css={"text-gray-800 line-through text-xs"}
          />
          <MyNumber
            price={price - price * discount}
            css={"text-blue-800 font-medium"}
          />
        </div>
      </a>
      <Button text="Comprar" handleOnClick={() => buy(id)} />
    </div>
  );
};

export default ProductCard;
