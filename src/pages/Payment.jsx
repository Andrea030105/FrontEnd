import { useState } from "react";
import Checkout from "../components/braintree/Checkout";

export default function Payment() {
  const [formError, setFormError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [billing, setBilling] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    city: "",
    cap: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBilling((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormError("");
  };

  const validateBilling = () => {
    setFormSubmitted(true);

    const requiredFields = [
      "name",
      "surname",
      "email",
      "address",
      "city",
      "cap",
    ];

    const isComplete = requiredFields.every((field) => {
      return billing[field].trim() !== "";
    });

    if (!isComplete) {
      setFormError("Tutti i campi del form sono obbligatori.");
      return false;
    }

    setFormError("");
    return true;
  };

  return (
    <div className=" gap-5">
      {/* CONTAINER DATI */}
      <div className="bg-surface rounded-2xl  p-8">
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
                Nome *
              </label>
              <input
                type="text"
                name="name"
                value={billing.name}
                onChange={handleChange}
                id="name"
                className={`text-text-navy px-3 py-2 border-2 rounded-md focus:outline-none ${
                  formSubmitted && !billing.name.trim()
                    ? "border-red-500"
                    : "border-text-soft"
                }`}
              />
            </div>
            <div className="flex-1/2 flex flex-col gap-1">
              <label htmlFor="surname" className="font-semibold text-text-navy">
                Cognome *
              </label>
              <input
                type="text"
                name="surname"
                value={billing.surname}
                onChange={handleChange}
                id="surname"
                className={`text-text-navy px-3 py-2 border-2 rounded-md focus:outline-none ${
                  formSubmitted && !billing.surname.trim()
                    ? "border-red-500"
                    : "border-text-soft"
                }`}
              />
            </div>
          </div>

          <div className="flex flex-col my-4 gap-1">
            <label htmlFor="email" className="font-semibold text-text-navy">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={billing.email}
              onChange={handleChange}
              id="email"
              className={`text-text-navy px-3 py-2 border-2 rounded-md focus:outline-none ${
                formSubmitted && !billing.email.trim()
                  ? "border-red-500"
                  : "border-text-soft"
              }`}
            />
          </div>
          <div className="flex flex-col my-4 gap-1">
            <label htmlFor="address" className="font-semibold text-text-navy">
              Indirizzo *
            </label>
            <input
              type="text"
              name="address"
              value={billing.address}
              onChange={handleChange}
              id="address"
              className={`text-text-navy px-3 py-2 border-2 rounded-md focus:outline-none ${
                formSubmitted && !billing.address.trim()
                  ? "border-red-500"
                  : "border-text-soft"
              }`}
            />
          </div>

          <div className="flex gap-10">
            <div className="flex-1/2 flex flex-col gap-1">
              <label htmlFor="city" className="font-semibold text-text-navy">
                Città *
              </label>
              <input
                type="text"
                name="city"
                value={billing.city}
                onChange={handleChange}
                id="city"
                className={`text-text-navy px-3 py-2 border-2 rounded-md focus:outline-none ${
                  formSubmitted && !billing.city.trim()
                    ? "border-red-500"
                    : "border-text-soft"
                }`}
              />
            </div>
            <div className="flex-1/2 flex flex-col gap-1">
              <label htmlFor="cap" className="font-semibold text-text-navy">
                Cap *
              </label>
              <input
                type="text"
                name="cap"
                value={billing.cap}
                onChange={handleChange}
                id="cap"
                className={`text-text-navy px-3 py-2 border-2 rounded-md focus:outline-none ${
                  formSubmitted && !billing.cap.trim()
                    ? "border-red-500"
                    : "border-text-soft"
                }`}
              />
            </div>
          </div>
        </form>
        <div className="border text-border my-8"></div>
        <h2 className="font-semibold text-2xl">Metodo di pagamento</h2>
        <Checkout billing={billing} validateBilling={validateBilling} />
      </div>
    </div>
  );
}
