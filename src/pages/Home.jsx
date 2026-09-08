import Button from "../components/ui/Button";
function Home() {
  return (
    <>
      <section className="flex">
        <div className="w-1/2 font-bold flex flex-col gap-4 justify-center items-start">
          <div>
            <h1 className="text-8xl text-text-navy">Tecnologia </h1>
            <h1 className="text-8xl text-primary-blue">senza limiti</h1>
          </div>
          <p className="text-text-soft">
            Scopri i dispositivi che ispirano il tuo prossimo passo.
          </p>
          <div className="flex gap-5">
            <Button className="w-40 h-10">Acquista ora</Button>
            <Button className="w-40 h-10" variant="outlineBlu">
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
    </>
  );
}

export default Home;
