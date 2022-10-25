import type { NextPage } from "next";
import Banner from "../components/banner";
import CategoryCard from "../components/categoryCard";
import ProductCard from "../components/productCard";
import { useUserContext } from "../context/useContext";
import { CategorieProps, ProductProps } from "../interfaces";

export async function getServerSideProps(context: any) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product/bestSellers`
  );
  const bestSellers = await data.json();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`);
  const categories = await res.json();

  return { props: { bestSellers, categories } };
}

const Home: NextPage<{
  bestSellers: ProductProps[];
  categories: CategorieProps[];
}> = ({ bestSellers, categories }) => {
  const {user} = useUserContext()
  return (
    <>
      <Banner />
      <div className="flex flex-col  h-full min-h-[100vh] justify-center items-center px-8 py-4">
        <h1 className="w-full" id="categorias">
          Categorias
        </h1>
        <div className="grid grid-cols-2 w-full sm:grid-cols-3 md:grid-cols-4">
          {categories.map((category, index) => (
            <CategoryCard
              id={category.id}
              name={category.name}
              img={category.img}
              key={Math.random()}
            />
          ))}
        </div>
        <h1 className="w-full mt-4" id="maisvendidos">
          Mais vendidos
        </h1>
        <div className="grid grid-cols-2 w-full items sm:grid-cols-3 md:grid-cols-4 ">
          {bestSellers.map((product) => (
            <ProductCard
              key={Math.random()}
              name={product.name}
              quantity={product.quantity}
              sold={product.sold}
              price={product.price}
              discount={product.discount}
              slug={product.slug}
              id={product.id}
              img={JSON.parse(product.img)[0]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
