import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import { useUserContext } from "../../context/useContext";
import { CartProps } from "../../interfaces";

export async function getServerSideProps(context: any) {
  const { token } = context.query;
  if (token) {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/validatetoken`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    if (data.status == 200) {
      const cart = await data.json();

      return { props: { cart } };
    }
    return { props: { cart: false } };
  }
  return { props: { cart: false } };
}

const Success: NextPage<{ cart: CartProps[] | boolean | [] }> = ({ cart }) => {
  const { user, updateUser } = useUserContext();
  const [carIsNotEmpty, setCarIsNotEmpty] = useState(cart);

  useEffect(() => {
    if (typeof carIsNotEmpty == "object" && carIsNotEmpty.length == 0) {
      const myUser = localStorage.getItem("eletronics");

      if (myUser) {
        const newUser = { ...JSON.parse(myUser), cart: [] };
        updateUser(newUser)
        localStorage.setItem("eletronics", JSON.stringify(newUser));
      }
      setCarIsNotEmpty(true);
    }
  }, [carIsNotEmpty]);

  return (
    <div className="h-96 flex flex-col items-center justify-center">
      {user.cart != undefined && user.cart?.length > 0 ? (
        <p className="font-bold text-gray-800">
          Estamos processando o seu pedido!
        </p>
      ) : (
        <>
          <p className="font-bold text-gray-800">
            Obrigado por comprar conosco
          </p>
          <p className="font-bold text-gray-800 my-2">
            Em breve você receberá as informações do seu pedido no email
            cadastrado
          </p>
        </>
      )}
      <Button text="voltar à tela inicial" link="/" />
    </div>
  );
};

export default Success;
