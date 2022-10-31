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

      return { props: { clear: true } };
    }
    return { props: { clear: false } };
  }
  return { props: { clear: false } };
}

const Success: NextPage<{ clear: boolean }> = ({ clear }) => {
  const { user, updateUser } = useUserContext();

  useEffect(() => {
    if (clear) {
      const myUser = localStorage.getItem("eletronics");

      if (myUser) {
        const newUser = { ...JSON.parse(myUser), cart: [] };
        localStorage.setItem("eletronics", JSON.stringify(newUser));
        updateUser(newUser)
      }
    
    }
  },[]);

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
