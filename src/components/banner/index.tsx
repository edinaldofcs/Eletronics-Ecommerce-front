import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import banner from "../../public/img/banner.png";

const Banner: NextPage = () => {
  return (
    <div className="-z-50">
      <Link href="/categoria/Acessorios" >
        <Image src={banner} className="cursor-pointer"/>
      </Link>
    </div>
  );
};

export default Banner;
