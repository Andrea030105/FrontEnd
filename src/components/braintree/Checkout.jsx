import dropin from "braintree-web-drop-in";
import { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";
import Button from "../ui/Button";

export default function Checkout() {
  const dropinContainerRef = useRef(null);

  const [clientToken, setClientToken] = useState(null);
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [paying, setPaying] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    let mounted = true;

    const getClientToken = async () => {
      try {
        const response = await api.get("/braintree/token");
        const receivedToken = response?.clientToken;

        if (!receivedToken) {
          throw new Error("Il backend non ha restituito un client token.");
        }

        if (mounted) {
          setClientToken(receivedToken);
        }
      } catch (requestError) {
        console.error("Errore risposta Client Token:", requestError);

        if (mounted) {
          setError(
            requestError instanceof Error
              ? requestError.message
              : "Impossibile inizializzare il metodo di pagamento.",
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    getClientToken();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let createdInstance = null;
    let cancelled = false;

    const createDropin = async () => {
      if (!clientToken || !dropinContainerRef.current) {
        return;
      }

      try {
        createdInstance = await dropin.create({
          authorization: clientToken,
          container: dropinContainerRef.current,
        });

        if (cancelled) {
          await createdInstance.teardown();
          return;
        }

        setInstance(createdInstance);
      } catch (dropinError) {
        if (!cancelled) {
          console.error("Errore inizializzazione Drop-in:", dropinError);
          setError("Impossibile caricare il modulo di pagamento.");
        }
      }
    };

    createDropin();

    return () => {
      cancelled = true;
      setInstance(null);

      if (createdInstance) {
        createdInstance.teardown().catch((teardownError) => {
          console.warn(
            "Errore durante la chiusura del Drop-in:",
            teardownError,
          );
        });
      }
    };
  }, [clientToken]);

  const handlePayment = async () => {
    if (!instance) {
      setPaymentError("Il modulo di pagamento non è ancora pronto.");
      return;
    }

    setPaying(true);
    setPaymentError("");
    setSuccessMessage("");

    try {
      const paymentMethod = await instance.requestPaymentMethod();

      console.log("Metodo di pagamento ricevuto:", paymentMethod);
      console.log("Nonce ricevuto:", paymentMethod.nonce);

      setSuccessMessage("Metodo di pagamento valido. Nonce generato.");
    } catch (paymentRequestError) {
      console.error("Errore nel recupero del nonce:", paymentRequestError);

      setPaymentError(
        paymentRequestError instanceof Error
          ? paymentRequestError.message
          : "Inserisci dati di pagamento validi.",
      );
    } finally {
      setPaying(false);
    }
  };

  if (loading) {
    return <p>Caricamento metodo di pagamento...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <section>
      {/* Questo nodo deve rimanere completamente vuoto: Braintree inserisce qui il suo markup. */}
      <div ref={dropinContainerRef} />

      <Button
        type="button"
        onClick={handlePayment}
        disabled={!instance || paying}
        className="mt-4 w-full"
      >
        {paying ? "Elaborazione..." : "Paga"}
      </Button>

      {paymentError && (
        <p className="mt-3 text-sm text-red-600">{paymentError}</p>
      )}

      {successMessage && (
        <p className="mt-3 text-sm text-green-600">{successMessage}</p>
      )}
    </section>
  );
}
