import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { useKart } from "../../context/KartContext";
import { useState } from "react";

export default function AddKartModal({ isOpen, onClose, item }) {
  const { addKart } = useKart();
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  if (!item) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addKart(item, quantity);
          onClose();
        }}
        className="space-y-4"
      >
        <div className="text-center text-2xl font-semibold">
          <p>Vuoi aggiungere al carrello {item.name}?</p>
        </div>

        <div className="flex items-center justify-around">
          <label htmlFor="quantity">Inserisci la quantità:</label>
          <input
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantity}
            type="number"
            min="1"
            autoFocus
            className="w-50 rounded-md border px-3 py-2 text-gray-900 focus:outline-none"
          />
        </div>

        <div className="my-4 flex justify-center gap-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button type="submit" variant="primary">
            Aggiungi
          </Button>
        </div>
      </form>
    </Modal>
  );
}
