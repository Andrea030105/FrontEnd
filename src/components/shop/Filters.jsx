import { useCategories } from "../../context/CategoriesContext";
import { useSearchParams } from "react-router-dom";

export default function Filters() {
  const { categories } = useCategories();

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category");

  const selectCategory = (e) => {
    const value = e.target.value;

    if (value === "") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: value,
      });
    }
  };

  return (
    <>
      <h3 className="text-text-navy font-semibold text-4xl py-4 px-7">
        I nostri prodotti
      </h3>
      <div className="w-full max-w-xs py-4 px-7">
        <label
          htmlFor="category"
          className="mb-2 block text-md font-semibold text-text-navy"
        >
          Seleziona per categoria
        </label>

        <div className="relative">
          <select
            id="category"
            value={selectedCategory ? selectedCategory : ""}
            onChange={selectCategory}
            className="
            h-11 w-full appearance-none rounded-2xl
            border border-slate-200
            bg-white px-4 pr-11
            text-sm font-medium text-text-navy
            shadow-sm
            transition-all duration-200
            hover:border-primary-blue
            focus:border-primary-blue
            focus:outline-none
            focus:ring-4 focus:ring-primary-blue/15
            cursor-pointer
          "
          >
            <option value="">Tutte le categorie</option>

            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
