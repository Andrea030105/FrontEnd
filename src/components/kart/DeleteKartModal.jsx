import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { useKart } from "../../context/KartContext";

export default function DeleteKartModal({ isOpen, onClose, item }) {
  const { remouveKart } = useKart();

  if (!item) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          remouveKart(item);
          onClose();
        }}
        className="space-y-4"
      >
        <div className="text-center text-2xl font-semibold">
          <p>Vuoi rimuovere dal carrello {item.name}?</p>
        </div>

        <div className="my-4 flex justify-center gap-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>

          <Button type="submit" variant="danger">
            Rimuovi
          </Button>
        </div>
      </form>
    </Modal>
  );
}
