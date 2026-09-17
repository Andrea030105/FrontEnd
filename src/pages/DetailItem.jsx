import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import Button from "../components/ui/Button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import AddKartModal from "../components/productsList/AddKartModal";

export default function DetailItem() {
  const { items, formatPrice, loading } = useProducts();
  const [showItemModal, setShowItemModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { id } = useParams();

  const findItem = items.find((item) => item.id === parseInt(id));

  const handleAddKart = () => {
    setSelectedItem(findItem);
    setShowItemModal(true);
  };

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
    <>
      <div className="min-h-70 flex max-lg:flex-col  bg-background p-6 rounded-2xl">
        <div className="flex-1/2 flex lg:mr-5 mb-5 items-center justify-center">
          <img
            src={findItem.src}
            alt={findItem.name}
            className="max-lg:w-100"
          />
        </div>
        <div className="flex-1/2 flex flex-col gap-5 text-lg">
          <h2 className="text-4xl font-semibold text-center">
            {findItem.name}
          </h2>
          <p>
            <strong>Categoria:</strong> {findItem.category}
          </p>
          <p>
            <strong>Prezzo:</strong> {formatPrice(findItem.price)}
          </p>
          <p>
            <strong>Descrizione:</strong> {findItem.description}
          </p>
          <Button onClick={() => handleAddKart()}>Aggiungi al carello</Button>
        </div>
      </div>
      <AddKartModal
        isOpen={showItemModal}
        onClose={() => {
          setShowItemModal(false);
          setSelectedItem(null);
        }}
        item={selectedItem}
      />
    </>
  );
}
