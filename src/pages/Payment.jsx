import Checkout from "../components/braintree/Checkout";

export default function Payment() {
  return (
    <div className="flex gap-5">
      {/* CONTAINER DATI */}
      <div className="bg-surface rounded-2xl flex-2/3 p-8">
        <div className=" mb-3">
          <h2 className="font-semibold text-2xl">Completa il pagamento</h2>
          <p className="text-text-soft text-sm ">
            Inserisci i dati di fatturazione e scegli come desideri pagare.
          </p>
        </div>
        <div className="border text-border"></div>
        <h2 className="font-semibold text-lg my-4">Dati di fatturazione</h2>
        <form>
          <div className="flex gap-10">
            <div className="flex-1/2 flex flex-col gap-1">
              <label htmlFor="name" className="font-semibold text-text-navy">
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="text-text-navy  px-3 py-2 border-2 border-text-soft rounded-md focus:outline-none"
              />
            </div>
            <div className="flex-1/2 flex flex-col gap-1">
              <label htmlFor="surname" className="font-semibold text-text-navy">
                Cognome
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                className="text-text-navy  px-3 py-2 border-2 border-text-soft rounded-md focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col my-4 gap-1">
            <label htmlFor="email" className="font-semibold text-text-navy">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-text-navy  px-3 py-2 border-2 border-text-soft rounded-md focus:outline-none"
            />
          </div>
          <div className="flex flex-col my-4 gap-1">
            <label htmlFor="address" className="font-semibold text-text-navy">
              Indirizzo
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="text-text-navy  px-3 py-2 border-2 border-text-soft rounded-md focus:outline-none"
            />
          </div>

          <div className="flex gap-10">
            <div className="flex-1/2 flex flex-col gap-1">
              <label htmlFor="city" className="font-semibold text-text-navy">
                Città
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="text-text-navy  px-3 py-2 border-2 border-text-soft rounded-md focus:outline-none"
              />
            </div>
            <div className="flex-1/2 flex flex-col gap-1">
              <label htmlFor="cap" className="font-semibold text-text-navy">
                Cap
              </label>
              <input
                type="text"
                name="cap"
                id="cap"
                className="text-text-navy  px-3 py-2 border-2 border-text-soft rounded-md focus:outline-none"
              />
            </div>
          </div>
        </form>
        <div className="border text-border my-8"></div>
        <h2 className="font-semibold text-2xl">Metodo di pagamento</h2>
        <Checkout />
      </div>

      {/* RIEPILOGO */}
      <div className="bg-surface rounded-2xl flex-1/3"></div>
    </div>
  );
}
