import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProductCard from "../../components/productCard";
import { useUserContext } from "../../context/useContext";
import { CategorieProps, Productsprops } from "../../interfaces";
import { categories } from "../../mock/categories";

export async function getServerSideProps(context: any) {
  // const router = useRouter();
  const { slug } = context.query;

  const res = await fetch(`http://localhost:5000/category/${slug}`);
  const category = await res.json();

  // Pass data to the page via props
  return { props: { category } };
}

const Categories: NextPage<{ category: CategorieProps }> = ({ category }) => {
  const { updateUser } = useUserContext();
  useEffect(() => {
    const items = localStorage.getItem("eletronics");
    if (items) {
      updateUser(JSON.parse(items));
    }
  }, []);

  return (
    <div className="px-6">
      <h1 className="w-full mt-4 font-bold text-2xl text-gray-900">
        {category.name}
      </h1>
      <div className="grid grid-cols-2 gap-2 flex-nowrap w-full sm:grid-cols-4">
        {category.products &&
          category.products.map((product: any) => (
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
  );
};

export default Categories;
