import Button from "../components/ui/Button";
import { useKart } from "../context/KartContext";
import { useProducts } from "../context/ProductsContext";

export default function Kart() {
  const { formatPrice } = useProducts();
  const {
    modifiedQuantityDown,
    modifiedQuantityUp,
    remouveKart,
    kart,
    kartCount,
  } = useKart();

  if (kartCount === 0) {
    return (
      <div className=" bg-background p-6 rounded-2xl text-center">
        <h2 className="text-4xl font-semibold">Carrello vuoto</h2>
        <Button as="link" to="/shop" className="mt-10 w-100">
          Acquista ora!
        </Button>
      </div>
    );
  }

  return (
    <div className=" bg-background p-6 rounded-2xl flex">
      <div className="flex-1/2 flex flex-col gap-3">
        {kart.map((item) => (
          <div key={item.id} className="min-h-20  flex">
            <div className="flex-1/3">
              <img className="w-50" src={item.src} alt={item.name} />
            </div>
            <div className="flex-2/3 flex flex-col justify-around">
              <h2 className="text-3xl font-semibold">{item.name}</h2>
              <div className="flex items-center">
                <Button
                  onClick={() => modifiedQuantityDown(item)}
                  variant="outlineBlu"
                >
                  -
                </Button>
                <span className="mx-3 text-2xl">{item.quantity}</span>
                <Button
                  onClick={() => modifiedQuantityUp(item)}
                  variant="outlineBlu"
                >
                  +
                </Button>
              </div>
              <p className="text-2xl">{formatPrice(item.price)}</p>
              <Button variant="danger" onClick={() => remouveKart(item)}>
                Rimuovi al carello
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1/2">Pagamento</div>
    </div>
  );
}
