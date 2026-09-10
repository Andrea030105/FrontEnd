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
    <section id="products" className="bg-background py-4 my-5 rounded-2xl">
      <h3 className="text-text-navy font-semibold text-4xl py-4 px-7">
        Prodotti in evidenza
      </h3>
      <div className="flex flex-wrap justify-around items-center">
        {itemsFeatured.map((item) => (
          <Card key={item.id} size="md" className="my-3">
            <NavLink
              to="/product/:id"
              className="w-full flex flex-col gap-2 items-center font-semibold"
            >
              <img
                src="../../../public/prodotti/01-laptop-pro-15.svg"
                alt={item.name}
                className="w-30 "
              />
              <div className="w-full my-4">
                <h2 className="text-text-navy mb-3">{item.name}</h2>
                <p className="text-primary-blue ">{formatPrice(item.price)}</p>
              </div>
            </NavLink>
            <Button
              onClick={() => {
                addKart(item);
              }}
              variant="outlineBlu"
            >
              Aggiungi al carello
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
