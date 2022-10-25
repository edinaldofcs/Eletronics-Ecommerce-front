import type { NextPage } from "next";
import ProductCard from "../../components/productCard";
import { CategorieProps } from "../../interfaces";

export async function getServerSideProps(context: any) {
  // const router = useRouter();
  const { slug } = context.query;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${slug}`);
  const category = await res.json();
  
  return { props: { category } };
}

const Categories: NextPage<{ category: CategorieProps }> = ({ category }) => {
  
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
