import Button from "../components/ui/Button";
import { ArrowDownRight } from "lucide-react";
import Card from "../components/ui/Card";
import { useProducts } from "../context/ProductsContext";
import { NavLink } from "react-router-dom";
import { useKart } from "../context/KartContext";

export default function Home() {
  const CATEGORIES = [
    {
      label: "Smartphone",
      src: "../../public/Illustrazioni/prodotto-smartphone.svg",
    },
    {
      label: "Laptop",
      src: "../../public/Illustrazioni/prodotto-laptop.svg",
    },
    {
      label: "Audio",
      src: "../../public/Illustrazioni/prodotto-cuffie.svg",
    },
    {
      label: "Gaming",
      src: "../../public/Illustrazioni/prodotto-gamepad.svg",
    },
    {
      label: "Smart Home",
      src: "../../public/Illustrazioni/prodotto-smart-home.svg",
    },
  ];

  const { items, formatPrice } = useProducts();
  const { addKart } = useKart();

  return (
    <>
      {/* HERO SECTION */}
      <section className="flex ">
        <div className="w-1/2 font-bold flex flex-col gap-4 justify-center items-start">
          <div>
            <h1 className="text-8xl text-text-navy">Tecnologia </h1>
            <h1 className="text-8xl text-primary-blue">senza limiti</h1>
          </div>
          <p className="text-text-soft">
            Scopri i dispositivi che ispirano il tuo prossimo passo.
          </p>
          <div className="flex gap-5">
            <Button as="anchor" to="#products" className="w-40 h-10">
              Acquista ora
            </Button>
            <Button
              as="link"
              to="/about"
              className="w-40 h-10"
              variant="outlineBlu"
            >
              Scopri di più
            </Button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="../../public/Illustrazioni/hero-illustrazione.svg"
            alt="hero"
          />
        </div>
      </section>
      {/*  CATEGORIES SECTION */}
      <section>
        <div className="flex justify-center gap-10">
          {CATEGORIES.map((category) => (
            <Card key={category.label} size="sm" className=" text-center">
              <img src={category.src} alt={category.label} className="w-30 " />
              <div className="relative">
                <h3 className="text-text-soft my-2">{category.label}</h3>
                <ArrowDownRight className="text-text-soft absolute -bottom-1.5 left-28" />
              </div>
            </Card>
          ))}
        </div>
      </section>
      {/* FEATURED PRODUCTS */}
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
                  <p className="text-primary-blue ">
                    {formatPrice(item.price)}
                  </p>
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
    </>
  );
}
