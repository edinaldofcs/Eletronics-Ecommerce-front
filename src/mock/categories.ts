import { CategorieProps } from "../interfaces";
import { products } from "./products";

export const categories: CategorieProps[] = [
  {
    id: "1",
    name: "Games",
    products: products.filter(p=>{
      return p.categoryId === "1"
    }),
    img:""
  },
  {
    id: "2",
    name: "Hardwares",
    products: products.filter(p=>{
      return p.categoryId === "2"
    }),
    img:""
  },
  {
    id: "3",
    name: "Monitores",
    img:""
  },
  {
    id: "4",
    name: "Acessórios",
    img:""
  },
];
