import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Loader2 } from "lucide-react";
import Button from "../components/ui/Button";
import ItemsTable from "../components/dashboard/ItemsTable";
import ItemModal from "../components/dashboard/ItemModal";
import DeleteConfirmModal from "../components/dashboard/DeleteConfirmModal";

export default function DashboardItems() {
  const [items, setItems] = useState([]);
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState("");

  // MODAL STATE
  const [showItemModal, setShowItemModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalMode, setModalMode] = useState("create"); // 'create' or 'edit'

  const fetchItems = async () => {
    try {
      const response = await api.get("/items");
      if (response.success) {
        setItems(response.data);
      }
    } catch (error) {
      setError("Error loading items");
      console.error("Error fatch items:", error);
    } finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchItems();
  }, []);

  const handleEditItem = (item) => {
    setSelectedItem(item);
    setModalMode("edit");
    setShowItemModal(true);
  };
  const handleDeleteItem = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const handleCreateItem = () => {
    setSelectedItem(null);
    setModalMode("create");
    setShowItemModal(true);
  };

  const handleSaveItem = async (itemData) => {
    try {
      let response = "";
      switch (modalMode) {
        case "create":
          response = await api.post("/items", itemData);
          if (response.success) {
            setItems([...items, response.data]);
          }
          break;
        case "edit":
          response = await api.put(`/items/${selectedItem.id}`, itemData);
          if (response.success) {
            setItems(
              items.map((item) =>
                item.id === selectedItem.id ? response.data : item,
              ),
            );
          }
          break;
      }
      setShowItemModal(false);
      setSelectedItem(null);
    } catch (error) {
      console.error("Error saving item:", error);
      throw error;
    }
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await api.delete(`/items/${selectedItem.id}`);
      if (response.success) {
        setItems(items.filter((item) => item.id !== selectedItem.id));
      }
      setShowDeleteModal(false);
      setSelectedItem(null);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  if (loding) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
        {error}
      </div>
    );
  }

  return (
    <div>
      <div>
        {" "}
        <Button onClick={handleCreateItem}>Add Item</Button>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <ItemsTable
          items={items}
          onEdit={handleEditItem}
          onDelete={handleDeleteItem}
        />
      </div>

      <ItemModal
        isOpen={showItemModal}
        onClose={() => {
          setShowItemModal(false);
          setSelectedItem(null);
        }}
        onSave={handleSaveItem}
        item={selectedItem}
        mode={modalMode}
      />

      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setSelectedItem(null);
        }}
        onConfirm={handleConfirmDelete}
        itemName={selectedItem?.name}
      />
    </div>
  );
}
