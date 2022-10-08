import type { NextPage } from "next";
import Image from "next/image";
import banner from "../../public/img/banner.png";

const Banner: NextPage = () => {
  return (
    <div className="-z-50">
      <a href="/categoria/Acessorios" >
        <Image src={banner} className="-z-50"/>
      </a>
    </div>
  );
};

export default Banner;
