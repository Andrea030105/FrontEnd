import { useProducts } from "../../context/ProductsContext";
import { NavLink } from "react-router-dom";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { useState } from "react";
import AddKartModal from "../kart/AddKartModal";

export default function ProductsList({ categorySlug }) {
  const { items, formatPrice } = useProducts();
  const [showItemModal, setShowItemModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddKart = (item) => {
    setSelectedItem(item);
    setShowItemModal(true);
  };

  const slugIfy = (value) => {
    return value.trim().replace(/\s+/g, "").toLowerCase();
  };

  if (categorySlug !== null) {
    const itemsFilter = items.filter(
      (item) => slugIfy(item.category) === categorySlug,
    );
    return (
      <>
        {/* PRODUCTS FILTERED LIST */}
        <div className="flex flex-wrap justify-around items-center px-5">
          {itemsFilter.map((item) => (
            <Card
              key={item.id}
              size="md"
              className="my-3  border-2 border-primary-blue max-md:w-full"
            >
              <NavLink
                to={`/product/${item.id}`}
                className="w-full flex flex-col gap-2 items-center font-semibold"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-50 max-md:w-70 "
                />
                <div className="w-full my-4">
                  <h2 className="text-text-navy mb-3">{item.name}</h2>
                  <p>{item.category}</p>
                  <p className="text-primary-blue ">
                    {formatPrice(item.price)}
                  </p>
                </div>
              </NavLink>
              <Button
                onClick={() => {
                  handleAddKart(item);
                }}
                variant="outlineBlu"
                className="max-md:w-full"
              >
                Aggiungi al carello
              </Button>
            </Card>
          ))}
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

  return (
    <>
      {/* PRODUCTS LIST */}
      <div className="flex flex-wrap justify-around items-center px-5">
        {items.map((item) => (
          <Card
            key={item.id}
            size="md"
            className="my-3  border-2 border-primary-blue max-md:w-full"
          >
            <NavLink
              to={`/product/${item.id}`}
              className="w-full flex flex-col gap-2 items-center font-semibold"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-50 max-md:w-70 "
              />
              <div className="w-full my-4">
                <h2 className="text-text-navy mb-3">{item.name}</h2>
                <p>{item.category}</p>
                <p className="text-primary-blue ">{formatPrice(item.price)}</p>
              </div>
            </NavLink>
            <Button
              onClick={() => {
                handleAddKart(item);
              }}
              variant="outlineBlu"
              className="max-md:w-full"
            >
              Aggiungi al carello
            </Button>
          </Card>
        ))}
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
