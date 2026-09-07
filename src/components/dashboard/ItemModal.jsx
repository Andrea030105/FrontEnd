import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

export default function ItemModal({ isOpen, onClose, onSave, item, mode }) {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "Electronics",
    price: "",
  });

  useEffect(() => {
    if (isOpen) {
      if (mode === "edit" && item) {
        setFormData({
          name: item.name,
          price: item.price.toString(),
          category: item.category,
        });
      } else {
        setFormData({
          name: "",
          price: "",
          category: "Electronics",
        });
      }
      setErrors({});
    }
  }, [isOpen, mode, item]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "The name is required";
    }

    if (!formData.price) {
      newErrors.price = "The price is required";
    } else {
      const price = parseFloat(formData.price);
      if (isNaN(price) || price <= 0) {
        newErrors.price = "Prices must be positive numbers.";
      }
    }

    if (!formData.category) {
      newErrors.category = "The category is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(errors);

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      await onSave({
        name: formData.name,
        price: parseFloat(formData.price),
        category: formData.category,
      });
    } catch (error) {
      console.error("Error on save item:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const title = mode === "create" ? "Add New Item" : "Modify Item";

  const CATEGORIES = ["Electronics", "Games", "Other"];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            className={`text-gray-900 w-full px-3 py-2 border rounded-md focus:outline-none ${errors.name ? "border-red-300" : "border-gray-300"}`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Price *
          </label>
          <input
            type="number"
            name="price"
            id="price"
            step="0.01"
            min="0"
            placeholder="Price"
            onChange={handleChange}
            value={formData.price}
            className={`text-gray-900 w-full px-3 py-2 border rounded-md focus:outline-none ${errors.price ? "border-red-300" : "border-gray-300"}`}
          />
          {errors.price && (
            <p className="mt-1 text-sm text-red-600">{errors.price}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category *
          </label>
          <select
            name="category"
            id="category"
            onChange={handleChange}
            value={formData.category}
            className={`text-gray-900 w-full px-3 py-2 border rounded-md focus:outline-none ${errors.category ? "border-red-300" : "border-gray-300"}`}
          >
            {CATEGORIES.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">{errors.category}</p>
          )}
        </div>
        <div className="flex justify-center gap-4 my-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button type="submit" variant="primary" loading={loading}>
            {mode === "create" ? "Create Item" : "Save"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
