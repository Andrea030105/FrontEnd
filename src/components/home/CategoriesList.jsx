import { NavLink } from "react-router-dom";
import Card from "../ui/Card";
import { ArrowDownRight } from "lucide-react";
import { useCategories } from "../../context/CategoriesContext";

export default function CategoriesList() {
  const { categories } = useCategories();
  return (
    <section className="my-6">
      <div className="flex -mx-4 snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scroll-px-4 lg:mx-0 lg:flex-wrap lg:justify-center lg:overflow-visible lg:px-0 lg:pb-0 lg:scroll-px-0 lg:snap-none lg:gap-10">
        {categories.map((category) => (
          <NavLink
            key={category.slug}
            to={`/shop?category=${category.slug}`}
            className="shrink-0"
          >
            <Card size="sm" className="text-center">
              <img
                src={category.src}
                alt={category.label}
                className="w-40 h-20"
              />
              <div className="relative w-full">
                <h3 className="text-text-soft my-2 text-sm sm:text-base">
                  {category.label}
                </h3>
                <ArrowDownRight className="text-text-soft absolute -bottom-5 -right-3 " />
              </div>
            </Card>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
