import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { useKart } from "../../context/KartContext";
import { useState } from "react";

export default function AddKartModal({ isOpen, onClose, item }) {
  const { addKart } = useKart();
  const [quantity, setQuantity] = useState(null);

  const handleQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  if (!item) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <div className="space-y-4">
        <div className="text-center font-semibold text-2xl">
          <p>Vuoi aggiungere al carello {item.name}?</p>
        </div>
        <div className="flex items-center justify-around">
          <label>Inserisci la quantità:</label>
          <input
            onChange={handleQuantity}
            type="number"
            className="text-gray-900 w-50 px-3 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="flex justify-center gap-4 my-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              (addKart(item, quantity), onClose());
            }}
          >
            Aggiungi
          </Button>
        </div>
      </div>
    </Modal>
  );
}
