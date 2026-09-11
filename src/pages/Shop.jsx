import { useSearchParams } from "react-router-dom";
import ProductsList from "../components/productsList/ProductsList";
import Filters from "../components/shop/Filters";

export default function Shop() {
  const [searchParams] = useSearchParams();

  const categorySlug = searchParams.get("category");

  return (
    <section id="products" className="bg-background py-4  rounded-2xl">
      <Filters></Filters>
      <ProductsList categorySlug={categorySlug} />
    </section>
  );
}
