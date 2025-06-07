import CategoryCard from "./CategoryCard.jsx";
import {
  TbSalad,
  TbDevices,
  TbHanger,
  TbHome,
  TbBook,
  TbBallBaseball,
} from "react-icons/tb";

function PopularCategoriesSection() {
  const categories = [
    { icon: TbSalad, name: "Comida", productCount: "1,845" },
    { icon: TbDevices, name: "Electrónica", productCount: "1,345" },
    { icon: TbHanger, name: "Moda", productCount: "2,389" },
    { icon: TbHome, name: "Hogar", productCount: "1,876" },
    { icon: TbBook, name: "Libros", productCount: "945" },
    { icon: TbBallBaseball, name: "Juguetes", productCount: "723" },
  ];

  return (
    <section className="bg-white py-20 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Categorías populares</h2>
          <a href="#ver-todas" className="text-blue-400 hover:underline">
            Ver todas &gt;
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              name={category.name}
              productCount={category.productCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCategoriesSection;
