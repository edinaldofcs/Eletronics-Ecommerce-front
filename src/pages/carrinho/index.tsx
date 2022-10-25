import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import { useUserContext } from "../../context/useContext";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { MyNumber } from "../../components/numberFormat";
import Router from "next/router";

const CartItens = ({ item, id }: any) => {
  const { updateUser, user } = useUserContext();

  async function updateCart(productInfos: any, num: number) {
    if (productInfos.quantity == 1 && num < 1) return;

    const requestInfo = {
      method: "PUT",
      body: JSON.stringify({ qtde: num }),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + user.acess_token,
      }),
    };

    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/cart/update/${productInfos.id}`,
      requestInfo
    );

    if (data.status != 200) return;

    user.cart?.map((product) => {
      if (product.id === item.id) {
        product.quantity += num;
      }
    });

    localStorage.setItem(`eletronics`, JSON.stringify({ ...user }));
    const items = localStorage.getItem("eletronics");
    if (items) {
      updateUser(JSON.parse(items));
    }
  }

  async function removeItem(id: string) {
    const remove = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/cart/delete/${item.id}`,
      {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + user.acess_token,
        }),
      }
    );
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/updateUserCart`,
      {
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + user.acess_token,
        }),
      }
    );
    const updateUserCart = await data.json();
    updateUser({ ...user, cart: [...updateUserCart] });
    localStorage.setItem(
      `eletronics`,
      JSON.stringify({ ...user, cart: [...updateUserCart] })
    );
  }

  return (
    <div className="flex px-1 border-b justify-between flex-col sm:flex-row sm:items-center">
      <div className="flex sm:w-[60%]">
        <div className="w-[100px] flex items-center">
          <img
            className="max-w-[] min-w-[80px] max-h-[100%] cursor-pointer duration-300 ease-in-out hover:scale-105"
            src={item.img}
            alt={item.name}
          />
        </div>
        <div className="px-2 flex flex-col justify-center w-full">
          <p>{item.name}</p>
          <p>Com desconto</p>
          <MyNumber price={item.price * 1} />
        </div>
      </div>
      <div className="flex w-full min-w-[30%] px-1 sm:w-[40%] justify-evenly sm:justify-between">
        <div className="flex flex-col gap-1 justify-center items-center">
          <p>Qtde</p>
          <div className=" flex items-center">
            <ChevronLeftIcon
              onClick={() => updateCart(item, -1)}
              className="w-6 h-6 font-bold cursor-pointer text-blue-800"
            />
            <span>{item.quantity}</span>
            <ChevronRightIcon
              onClick={() => updateCart(item, 1)}
              className="w-6 h-6 first-letter:font-bold cursor-pointer text-blue-800"
            />
          </div>
          <button
            className="text-blue-800 font-semibold hover:scale-105"
            onClick={() => removeItem(id)}
          >
            remover
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>Total</p>
          {/* <p>R$ {item.price * item.quantity}</p> */}
          <MyNumber price={item.price * item.quantity} css="text-center" />
        </div>
      </div>
    </div>
  );
};

const PayInfos = (props: { text: string; value: number }) => {
  return (
    <div className="flex justify-between border-b">
      <p className="text-gray-800">{props.text}</p>
      <MyNumber price={props.value} />
    </div>
  );
};

const Cart: NextPage = () => {
  const [total, setTotal] = useState(0);

  const { user } = useUserContext();

  useEffect(() => {
    if (user.cart != undefined && user.cart?.length > 0) {
      const price = JSON.parse(`${localStorage.getItem("eletronics")}`)
        .cart?.map((i: any) => {
          return i.price * i.quantity;
        })
        .reduce((a: number, b: number) => a + b);

      setTotal(price);
    }
  }, [user]);

  async function handleCheckout() {
    const checkout = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/cart/checkout/${user.acess_token}`,
      {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + user.acess_token,
        }),
      }
    );
    const res = await checkout.json();
    if (res.statusCode === 200) {
      Router.push(res.url);
    }
  }

  return (
    <>
      {user.cart?.length == 0 ? (
        <div className="bg-gray-200 w-full h-96 flex items-center justify-center">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-gray-800">
              O seu carrinho está vazio :(
            </p>
            <Button text="Continuar comprando" link="/" />
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 w-full">
          <div className="flex flex-col items-center px-6 gap-2 py-4 sm:flex-row sm:items-start">
            <div className="flex flex-col w-[100%] shadow-sm gap-2 sm:w-[60%]">
              <div className="h-10 w-full bg-white h-20">Frete</div>
              <div className="w-full bg-white min-h-[300px]">
                {user.cart?.map((item, index) => (
                  <CartItens key={index} item={item} id={item.id} />
                ))}
              </div>
            </div>
            <div className="shadow-sm bg-white w-[100%] max-h-[450px] flex flex-col gap-2 px-4 py-4 sm:w-[40%]">
              <h2 className="font-bold text-gray-900 text-2xl mb-2">Resumo</h2>
              <PayInfos text="Total:" value={total} />
              <Button
                text="Ir para o Pagamento"
                background="bg-white"
                handleOnClick={handleCheckout}
              />
              <Button text="Continuar comprando" link="/" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
