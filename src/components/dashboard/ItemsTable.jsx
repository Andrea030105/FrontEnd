import Button from "../ui/Button";
import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";

export default function ItemsTable({ items, onEdit, onDelete }) {
  console.log(items);

  if (items.length === 0) {
    return <h1>No items yet</h1>;
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  return (
    <div className="overflow-auto my-5 max-h-[calc(100vh-150px)] rounded-3xl text-center">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3  text-md font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-4 py-3  text-md font-medium text-gray-500 uppercase tracking-wider">
              name
            </th>
            <th className="px-4 py-3  text-md font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-4 py-3  text-md font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-4 py-3  text-md font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-800">
                #{item.id}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-800">
                {item.name}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-800">
                {item.category}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-800">
                {formatPrice(item.price)}
              </td>
              <td className="px-4 py-3 whitespace-nowrap flex gap-3.5 justify-center text-sm text-gray-800">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => onEdit(item)}
                >
                  <Pencil />
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(item)}
                >
                  <Trash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
