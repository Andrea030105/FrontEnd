import Button from "../components/ui/Button";
import { useLocation, Navigate } from "react-router-dom";

export default function PaymentDone() {
  const location = useLocation();

  const order = location.state?.order;
  const paymentCompleted = location.state?.paymentCompleted === true;

  if (!paymentCompleted) {
    return <Navigate to="/Kart" replace />;
  }
  return (
    <div className=" bg-background p-6 rounded-2xl flex flex-col justify-center items-center min-h-[calc(100vh-655px)]">
      <div className="p-5 rounded-2xl border-2 border-badge-sconto-testo bg-badge-sconto-bg text-badge-sconto-testo text-center">
        <h2 className="text-4xl font-semibold">
          Pagamento avvenuto con successo.
        </h2>
        <p>Ordine: {order.id}</p>
        <p>Totale: {order.total}</p>
      </div>
      <Button as="link" to="/" className="mt-10 w-100 max-sm:w-auto">
        Torna alla Home
      </Button>
    </div>
  );
}
