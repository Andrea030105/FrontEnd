import { NavLink } from "react-router-dom";
import { useProducts } from "../../context/ProductsContext";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { useKart } from "../../context/KartContext";

export default function ProductsFeaturedList() {
  const { items, formatPrice } = useProducts();
  const { addKart } = useKart();

  const itemsFeatured = items.filter((item) => item.featured);
  return (
    <section className="bg-background py-4 my-5 rounded-2xl">
      <h3 className="text-text-navy font-semibold text-2xl sm:text-3xl lg:text-4xl py-4 px-4 sm:px-7">
        Prodotti in evidenza
      </h3>
      <div className="flex flex-wrap justify-around gap-2 px-4 md:max-lg:gap-0 ">
        {itemsFeatured.map((item) => (
          <Card
            key={item.id}
            size="md"
            className="my-3   max-md:w-full border-primary-blue border-1"
          >
            <NavLink
              to={`/product/${item.id}`}
              className="w-full flex flex-col gap-2 items-center font-semibold"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-50 max-md:w-70"
              />
              <div className="w-full my-4 ">
                <h2 className="text-text-navy mb-3 text-sm sm:text-base line-clamp-2">
                  {item.name}
                </h2>
                <p className="text-primary-blue">{formatPrice(item.price)}</p>
              </div>
            </NavLink>
            <Button
              onClick={() => {
                addKart(item);
              }}
              variant="outlineBlu"
              className="w-full"
            >
              Aggiungi al carrello
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
