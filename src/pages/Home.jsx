import Button from "../components/ui/Button";

import ProductsFeaturedList from "../components/productsList/ProductsFeaturedList";
import CategoriesList from "../components/home/CategoriesList";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="flex flex-col items-center gap-8 md:flex-row">
        <div className="w-full font-bold md:flex-1 flex flex-col gap-3">
          <div>
            <h1 className="text-6xl text-text-navy">Tecnologia</h1>
            <h1 className="text-6xl text-primary-blue">senza limiti</h1>
          </div>
          <p className="text-text-soft">
            Scopri i dispositivi che ispirano il tuo prossimo passo.
          </p>
          <div className="flex w-full gap-3">
            <Button as="link" to="/shop" className="h-10 w-40">
              Acquista ora
            </Button>
            <Button
              as="link"
              to="/about"
              className="h-10 w-40"
              variant="outlineBlu"
            >
              Scopri di più
            </Button>
          </div>
        </div>
        <div className="w-full min-w-0 md:flex-1">
          <img
            src="../../public/hero/hero-illustrazione.svg"
            alt="hero"
            className="h-auto w-full max-w-full object-contain"
          />
        </div>
      </section>
      {/*  CATEGORIES SECTION */}
      <CategoriesList />

      {/* FEATURED PRODUCTS */}
      <ProductsFeaturedList />
    </>
  );
}
