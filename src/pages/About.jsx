import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Check } from "lucide-react";

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
      {/* STATS SECTION */}
      <section className="flex justify-between my-20">
        <Card
          size="sm"
          className="w-80 h-40 flex justify-center items-center font-semibold"
        >
          <p className="text-4xl text-primary-blue">10+</p>
          <p className="text-text-soft my-4">Anni di esperienza</p>
        </Card>
        <Card
          size="sm"
          className="w-80 h-40 flex justify-center items-center font-semibold"
        >
          <p className="text-4xl text-primary-blue">500K+</p>
          <p className="text-text-soft my-4">Clienti soddisfatti</p>
        </Card>
        <Card
          size="sm"
          className="w-80 h-40 flex justify-center items-center font-semibold"
        >
          <p className="text-4xl text-primary-blue">1.200+</p>
          <p className="text-text-soft my-4">Prodotti in catalogo</p>
        </Card>
        <Card
          size="sm"
          className="w-80 h-40 flex justify-center items-center font-semibold"
        >
          <p className="text-4xl text-primary-blue">30+</p>
          <p className="text-text-soft my-4">Paesi serviti</p>
        </Card>
      </section>
      {/* STORY SECTION */}
      <section className="flex">
        <div className="flex-1/2">
          <div className="relative h-120 flex justify-center items-center bg-background p-6 rounded-4xl">
            <div className="px-4 h-20 bg-surface flex items-center justify-center gap-2 font-semibold rounded-4xl absolute bottom-6 left-7 shadow-xl/30">
              <div className="w-10 border border-primary-blue rounded-full text-primary-blue p-2  shadow-navy-profondo">
                <Check />
              </div>
              <div>
                <p className="uppercase text-sm text-text-soft">
                  team technova
                </p>
                <p>Dal 2016</p>
              </div>
            </div>
            <img
              src="/public/about/story-laptop.svg"
              alt="laptop"
              className="w-100"
            />
            <img
              src="/public/about/story-plant.svg"
              alt="plant"
              className="w-40 absolute right-0 bottom-9"
            />
          </div>
        </div>
        <div className="flex-1/2">
          <div className="flex  flex-col gap-5 p-10">
            <div className="uppercase text-sm text-primary-blue font-semibold px-4 py-2 rounded-2xl border border-primary-blue w-50">
              la nostra storia
            </div>
            <h3 className="text-4xl text-navy-profondo font-semibold">
              Nata da un'idea semplice
            </h3>
            <p className="text-text-soft text-lg">
              TechNova nasce nel 2016 dall'idea di tre amici appasionati di
              tecnologia, stanchi di scegliere tra prezzo, qualità e assistenza.
              Oggi selezioniamo ogni prodotto a mano, lo testiamo davvero e lo
              raccontiamo con trasparenza, prima di venderlo.
            </p>
            <ul>
              <li className="flex items-center my-3">
                <div className="w-10 border border-green-700 text-green-800 bg-green-200 rounded-full p-2  shadow-navy-profondo">
                  <Check />
                </div>
                <span className="ms-3">
                  Spedizione in 24h su tutto il catalogo
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-10 border border-green-700 text-green-800 bg-green-200 rounded-full p-2  shadow-navy-profondo">
                  <Check />
                </div>
                <span className="ms-3">Reso gratuito entro 30 giorni</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* VALUES SECTION */}
      <section className="my-20">
        <div className="text-center">
          <h3 className="text-4xl font-semibold text-navy-profondo">
            I nostri valori
          </h3>
          <p className="text-2xl text-text-soft my-6">
            Ciò che guida ogni nostra decisione, ogni giorno.
          </p>
        </div>
        <div className="flex justify-between">
          <Card
            size="sm"
            className="w-90 h-60 flex justify-center items-start gap-3 p-8 font-semibold"
          >
            <img
              src="/public/about/icon-quality.svg"
              alt="iconQuality"
              className="w-15"
            />
            <p className="text-2xl text-navy-profondo">Qualità Garantita</p>
            <p className="text-text-soft  text-sm">
              Ogni prodotto passa attraverso controlli qualità rigorosi.
            </p>
          </Card>
          <Card
            size="sm"
            className="w-90 h-60 flex justify-center items-start gap-3 p-8 font-semibold"
          >
            <img
              src="/public/about/icon-innovation.svg"
              alt="iconInnovation"
              className="w-15"
            />
            <p className="text-2xl text-navy-profondo">Innovazione Costante</p>
            <p className="text-text-soft  text-sm">
              Selezioniamo solo tecnologie davvero all'avanguardia.
            </p>
          </Card>
          <Card
            size="sm"
            className="w-90 h-60 flex justify-center items-start gap-3 p-8 font-semibold"
          >
            <img
              src="/public/about/icon-sustainability.svg"
              alt="iconSustainability"
              className="w-15"
            />
            <p className="text-2xl text-navy-profondo">Sostenibilità</p>
            <p className="text-text-soft  text-sm">
              Packaging riciclabile e logistica a basso impatto.
            </p>
          </Card>
          <Card
            size="sm"
            className="w-90 h-60 flex justify-center items-start gap-3 p-8 font-semibold"
          >
            <img
              src="/public/about/icon-support.svg"
              alt="iconSupport"
              className="w-15"
            />
            <p className="text-2xl text-navy-profondo">Assistenza Dedicata</p>
            <p className="text-text-soft  text-sm">
              Un team reale pronto ad aiutarti in ogni fase.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
