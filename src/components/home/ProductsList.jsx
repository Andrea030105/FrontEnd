import { useProducts } from "../../context/ProductsContext";
import { useKart } from "../../context/KartContext";
import { NavLink } from "react-router-dom";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function ProductsList() {
  const { items, formatPrice } = useProducts();
  const { addKart } = useKart();
  return (
    <section id="products" className="bg-background py-4 my-5 rounded-2xl">
      <div className="flex flex-wrap justify-around items-center">
        {items.map((item) => (
          <Card key={item.id} size="md" className="my-3">
            <NavLink
              to="/product/:id"
              className="w-full flex flex-col gap-2 items-center font-semibold"
            >
              <img
                src="../../public/logo/simbolo-icona.png"
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
