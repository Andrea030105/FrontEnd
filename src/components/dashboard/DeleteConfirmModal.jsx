import Modal from "../ui/Modal";
import Button from "../ui/Button";

export default function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  itemName,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-900 my-2.5">
          Confirm delete
        </h3>

        <p className="text-lg  text-gray-900 my-2.5">
          You are secure deleted <strong>{itemName}</strong>?
          <br />
          This action is irreversible.
        </p>
        <div className="flex justify-center gap-4 my-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
}
