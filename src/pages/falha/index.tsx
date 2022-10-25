import type { NextPage } from "next";
import Button from "../../components/button";

const Fail: NextPage = () => {
  return (
    <div className="h-96 flex flex-col items-center justify-center">      
      <p className="font-bold text-gray-800 my-2">
        hummm... Parece que sua compra não foi concluída :(
      </p>
      <p className="font-bold text-gray-800 my-2">
        Tente novamente dentro de alguns minutos
      </p>
      <Button text="voltar à tela inicial" link="/" />
    </div>
  );
};

export default Fail;
