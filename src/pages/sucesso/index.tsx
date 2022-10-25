import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import { useUserContext } from "../../context/useContext";

const Success: NextPage = () => {
  const { user, updateUser } = useUserContext();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (update) return;
    async function getUserCar() {
      const myUser = localStorage.getItem("eletronics");

      if (!myUser) return;
      const newUser = JSON.parse(myUser);

      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/updateUserCart`,
        {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + newUser.acess_token,
          }),
        }
      );
      const cart = await data.json();
      localStorage.setItem("eletronics", JSON.stringify({ ...newUser, cart }));
    }

    getUserCar();
    setUpdate(true);
  }, [update]);

  useEffect(() => {
    if (update) {
      const myUser = localStorage.getItem("eletronics");

      if (!myUser) return;
      const newUser = JSON.parse(myUser);
      updateUser(newUser);
    }
  }, [update]);

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
