import type { NextPage } from "next";
import { useRouter } from "next/router";

const Payments: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  let text = "";
  let title = `${slug}`.toLocaleUpperCase();

  switch (slug) {
    case "politicas":
      text = "Aqui na Eletronics, levamos muito a sério a sua privacidade. Por isso contamos com ...Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore, deleniti illum officia cumque perspiciatis iure quae ipsum vel eveniet molestiae harum dolor error obcaecati sed a, adipisci dicta enim.";
      break;
    case "sobre":
      text = "Fundado em 2022, a Eletronics vem se destacando por apresentar os produtos mais inovadores em questão de tecnologia e desempenho. Também já possuí vários prêmios e..... Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore, deleniti illum officia cumque perspiciatis iure quae ipsum vel eveniet molestiae harum dolor error obcaecati sed a, adipisci dicta enim.";
      break;

    default:
      break;
  }

  return (
    <div className="w-full px-10 py-4 h-96">
      <h1 className="font-bold text-gray-900 text-2xl">{title}</h1>
      <p className="mt-4 tracking-wider text-justify">{text}</p>
    </div>
  );
};

export default Payments;
