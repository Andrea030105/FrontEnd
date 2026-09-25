import { Trash } from "lucide-react";
import Button from "../components/ui/Button";
import { useKart } from "../context/KartContext";
import { useProducts } from "../context/ProductsContext";
import DeleteKartModal from "../components/kart/DeleteKartModal";
import { useState } from "react";

export default function Kart() {
  const { formatPrice } = useProducts();
  const {
    modifiedQuantityDown,
    modifiedQuantityUp,
    kart,
    kartCount,
    clearKart,
  } = useKart();

  const [showItemModal, setShowItemModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRemuveKart = (item) => {
    setSelectedItem(item);
    setShowItemModal(true);
  };

  const subtotal = kart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shippingCost = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shippingCost;

  if (kartCount === 0) {
    return (
      <div className=" bg-background p-6 rounded-2xl flex flex-col justify-center items-center min-h-[calc(100vh-655px)]">
        <h2 className="text-4xl font-semibold">Carrello vuoto</h2>
        <Button as="link" to="/shop" className="mt-10 w-100 max-sm:w-auto">
          Acquista ora!
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-background p-4 sm:p-6 lg:flex-row">
      <div className="flex flex-col gap-3 lg:flex-1">
        <Button variant="danger" onClick={() => clearKart()}>
          Svuota Carrello
        </Button>
        {kart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 rounded-2xl bg-surface p-4 sm:flex-row sm:items-center sm:gap-5"
          >
            <img
              className="h-32 w-full rounded-xl object-contain sm:h-24 sm:w-24"
              src={item.src}
              alt={item.name}
            />

            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-text-navy">
                  {item.name}
                </h2>
                <p className="text-xl font-semibold text-primary-blue sm:text-2xl">
                  {formatPrice(item.price)}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:justify-center sm:gap-2">
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    onClick={() => modifiedQuantityDown(item)}
                    variant="outlineBlu"
                    size="sm"
                  >
                    -
                  </Button>

                  <span className="min-w-6 text-center text-lg font-semibold text-text-navy">
                    {item.quantity}
                  </span>

                  <Button
                    type="button"
                    onClick={() => modifiedQuantityUp(item)}
                    variant="outlineBlu"
                    size="sm"
                  >
                    +
                  </Button>
                </div>

                <Button
                  type="button"
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemuveKart(item)}
                  aria-label="Rimuovi prodotto"
                >
                  <Trash size={16} />
                </Button>
                <DeleteKartModal
                  isOpen={showItemModal}
                  onClose={() => {
                    setShowItemModal(false);
                    setSelectedItem(null);
                  }}
                  item={selectedItem}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full rounded-2xl bg-surface p-5 sm:p-6 lg:w-96">
        <h3 className="mb-4 text-xl font-semibold text-text-navy">
          Riepilogo ordine
        </h3>

        <div className="flex flex-col gap-2 text-text-soft">
          <div className="flex justify-between">
            <span>Subtotale</span>
            <span className="font-semibold text-text-navy">
              {formatPrice(subtotal)}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Spedizione</span>
            <span className="font-semibold text-text-navy">
              {shippingCost === 0 ? "Gratuita" : formatPrice(shippingCost)}
            </span>
          </div>

          <hr className="my-3 border-border" />

          <div className="flex justify-between text-lg">
            <span className="font-semibold text-text-navy">Totale</span>
            <span className="font-semibold text-primary-blue">
              {formatPrice(total)}
            </span>
          </div>
        </div>

        <Button as="link" to="/pay" className="mt-6 w-full">
          Vai al pagamento
        </Button>
      </div>
    </div>
  );
}
