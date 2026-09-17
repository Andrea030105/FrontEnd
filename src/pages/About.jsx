import Button from "../components/ui/Button";

export default function About() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="flex mt-10">
        <div className="flex-1/2 flex flex-col gap-3 justify-center">
          <div>
            <div className="uppercase text-sm text-primary-blue font-semibold px-4 py-2 rounded-2xl border border-primary-blue w-30">
              chi siamo
            </div>
            <h1 className="text-6xl text-text-navy">La tecnologia</h1>
            <h1 className="text-6xl text-primary-blue">per le persone</h1>
          </div>
          <p className="text-text-soft">
            Da oltre 10 anni aiutiamo le persone a sceglierela tecnologia
            giusta, con consulenza reale e spedizioni rapide in tutta Italia.
          </p>

          <Button as="link" to="/shop" className="h-10 w-40">
            Scopri lo shop
          </Button>
        </div>
        <div className="flex-1/2 flex justify-center ">
          <div className="relative">
            <img
              src="../../public/about/hero-globe.svg"
              alt="hero"
              className="w-100"
            />
            <div className="bg-surface uppercase  font-semibold px-4 py-2 rounded-2xl  w-50 absolute top-6 left-80">
              <p className="text-sm text-text-soft">clienti soddisfatti</p>
              <p className="text-2xl">500k+</p>
            </div>
            <div className="bg-surface uppercase  font-semibold px-4 py-2 rounded-2xl  w-50 absolute bottom-6 right-80">
              <p className="text-sm text-text-soft">paesi serviti</p>
              <p className="text-2xl">30+</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
