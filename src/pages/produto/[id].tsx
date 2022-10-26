import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Button from "../../components/button";
import { useUserContext } from "../../context/useContext";
import { MyNumber } from "../../components/numberFormat";

export async function getServerSideProps(context: any) {
  // const router = useRouter();
  const { id } = context.query;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`);
  const product = await res.json();
  product.img = JSON.parse(product.img);
  product.description = JSON.parse(product.description);
 
  return { props: { product } };
}

const Product: NextPage<any> = ({ product }) => {
  const router = useRouter();
  const [rotate, setRotate] = useState(false);
  const [image, setImage] = useState(product.img[0]);
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
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.acess_token,
      },
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
    <div className="bg-white">
      <div className="py-2 px-6 my-2 border-b">
        <p className="border-b py-2">
          Você está em: Produto{" "}
          {`> ${product.name} > Cód: ${product.id.substring(0, 5)}...`}
        </p>
        <p className="py-2">{product.name}</p>
      </div>
      <div className="flex px-6 flex-col items-center sm:flex-row ">
        <div className="w-[100%] flex sm:w-[50%]">
          <div className="w-[15%]">
            {product.img?.map((image: string, index: number) => (
              <img
                key={Math.random()}
                className="max-w-[100%] max-h-[100%] cursor-pointer hover:scale-105"
                src={`${image}`}
                alt="teste"
                onClick={() => setImage(image)}
              />
            ))}
          </div>
          <div className="w-[85%] h-auto min-h-[250px] bg-white flex justify-center py-1 ">
            {image && <img className="w-[80%] " src={image} alt="teste" />}
          </div>
        </div>
        <div className="w-[100%] px-4 space-y-2 sm:w-[50%] border-l-2 border-l-blue-500">
          <p>
            Vendido e entregue por:{" "}
            <span className="text-blue-800 font-semibold">Eletronics</span>
          </p>
          <h2 className="text-blue-800 text-2xl font-medium">
            <MyNumber price={product.price - product.price * product.discount} />
          </h2>
          <p className="text-gray-800">A vista no pix com até 15%off</p>
          <MyNumber
            price={product.price * 0.85}
            css="text-gray-800 font-medium"
          />

          <p className="text-gray-800">
            Em até 6x de R$ <MyNumber price={product.price / 6} /> sem juros no
            cartão
          </p>
          <Button text="Comprar" handleOnClick={() => buy(product.id)} />
        </div>
      </div>
      <div className="flex my-4 py-2 border-b">
        <div className="w-[50%] px-6">Frete</div>
        <div className="w-[50%] px-6"> similares</div>
      </div>
      <div className="px-6 my-4">
        <details>
          <summary className="list-none flex items-center justify-between">
            <h2 className="text-blue-800 text-2xl font-medium">Descrição</h2>
            <CaretDownIcon
              className={`text-blue-800 scale-[3] font-bold cursor-pointer  transition duration-300 ease-in-out ${
                rotate && "rotate-180"
              }`}
              onClick={() => setRotate(!rotate)}
            />
          </summary>
          {product.description &&
            product.description.map(
              (description: { title: string; text: string }, index: number) => (
                <div key={index}>
                  <h3 className="font-semibold mt-2">{description.title}</h3>
                  <p className="text-[14px]">{description.text}</p>
                </div>
              )
            )}
        </details>
      </div>
    </div>
  );
};

export default Product;
