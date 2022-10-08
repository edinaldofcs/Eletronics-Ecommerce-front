import type { NextPage } from "next";
import { CategorieProps } from "../../interfaces";

const CategoryCard: NextPage<CategorieProps> = ({id, name, img}) => { 
  return (
    <div className="w-40 bg-white border shadow-md rounded px-1 flex flex-col gap-2 py-1 my-2 duration-300 ease-in-out hover:scale-105">
      <a href={`/categoria/${name}`}>
        <div className="w-full h-32 flex justify-center">
          <img
            className="max-w-[100%] max-h-[100%]"
            src={img}
            alt="teste"
          />
        </div>
        <div className="">
          <h2 className="font-semibold text-center py-1">{name}</h2>
        </div>
      </a>
    </div>
  );
};

export default CategoryCard;
