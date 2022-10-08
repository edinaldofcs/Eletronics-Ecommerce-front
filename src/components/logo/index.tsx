import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/logo.svg";

const Logo: NextPage = () => {
  return (
    <>
      <a href="/">
        <Image src={logo} width={80} height={80} className="cursor-pointer" />
      </a>
    </>
  );
};

export default Logo;
