import dropin from "braintree-web-drop-in";
import { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";
import Button from "../ui/Button";
import { useKart } from "../../context/KartContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function Checkout({ billing, validateBilling }) {
  const dropinContainerRef = useRef(null);
  const paymentInProgressRef = useRef(false);

  const [clientToken, setClientToken] = useState(null);
  const [instance, setInstance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [paying, setPaying] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const { kart, clearKart } = useKart();

  const navigate = useNavigate();

  const isBillingComplete = () => {
    const requiredFields = [
      "name",
      "surname",
      "email",
      "address",
      "city",
      "cap",
    ];

    return requiredFields.every((field) => {
      return billing?.[field]?.trim();
    });
  };

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
    if (paymentInProgressRef.current) {
      console.warn("Pagamento già in corso.");
      return;
    }

    const isFormValid = validateBilling();

    if (!isFormValid) {
      console.error("Pagamento bloccato: form incompleto.");
      return;
    }

    if (!billing || !isBillingComplete()) {
      console.error(
        "Pagamento bloccato: tutti i campi del form sono obbligatori.",
      );
      return;
    }

    if (!instance) {
      console.error("Il modulo di pagamento non è ancora pronto.");
      return;
    }

    if (!kart || kart.length === 0) {
      console.error("Il carrello è vuoto.");
      return;
    }

    paymentInProgressRef.current = true;
    setPaying(true);

    try {
      const paymentMethod = await instance.requestPaymentMethod();

      const response = await api.post("/braintree/checkout", {
        paymentMethodNonce: paymentMethod.nonce,
        items: kart.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
        })),
        billing,
      });

      if (!response.success) {
        console.error(
          "Pagamento rifiutato:",
          response.message || "Payment failed",
        );
        return;
      }

      setPaymentCompleted(true);
      clearKart();
      navigate("/paymentDone", {
        replace: true,
        state: {
          paymentCompleted: true,
          order: response.order,
        },
      });
    } catch (paymentRequestError) {
      console.error("Errore durante il pagamento:", paymentRequestError);
    } finally {
      paymentInProgressRef.current = false;
      setPaying(false);
    }
  };

  if ((!kart || kart.length === 0) && !paymentCompleted) {
    console.error("Accesso al checkout negato: il carrello è vuoto.");

    return <Navigate to="/Kart" replace />;
  }

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
    </section>
  );
}
