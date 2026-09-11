import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { useKart } from "../context/KartContext";
import Button from "../components/ui/Button";
import { Loader2 } from "lucide-react";

export default function DetailItem() {
  const { addKart } = useKart();
  const { items, formatPrice, loading } = useProducts();

  const { id } = useParams();

  const findItem = items.find((item) => item.id === parseInt(id));

  if (loading) {
    return (
      <div className="w-full flex justify-center">
        <Loader2 className="animate-spin w-50 h-50 text-primary-blue" />
      </div>
    );
  }

  if (!findItem) {
    return (
      <div className="w-full flex justify-center">
        <p className=" w-50 h-50 text-primary-blue">Prodotto non trovato</p>
      </div>
    );
  }

  return (
    <div className="min-h-70 flex bg-background p-6 rounded-2xl">
      <div className="flex-1/2 flex items-center justify-center">
        <img src={findItem.src} alt={findItem.name} />
      </div>
      <div className="flex-1/2 flex flex-col gap-5 text-lg">
        <h2 className="text-6xl font-semibold text-center">{findItem.name}</h2>
        <p>
          <strong>Categoria:</strong> {findItem.category}
        </p>
        <p>
          <strong>Prezzo:</strong> {formatPrice(findItem.price)}
        </p>
        <p>
          <strong>Descrizione:</strong> {findItem.description}
        </p>
        <Button onClick={addKart}>Aggiungi al carello</Button>
      </div>
    </div>
  );
}
