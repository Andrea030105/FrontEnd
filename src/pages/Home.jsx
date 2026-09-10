import Button from "../components/ui/Button";
import { ArrowDownRight } from "lucide-react";
import Card from "../components/ui/Card";
import ProductsList from "../components/home/ProductsList";

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
      <ProductsList></ProductsList>
    </>
  );
}
