import { useState } from "react";
import ProductCard from "./ProductCard.jsx";
import {
  TbChevronLeft,
  TbChevronRight,
  TbCake,
  TbGift,
  TbCurrencyEuro,
  TbClockHour3,
  TbHanger,
  TbDevices,
} from "react-icons/tb";

function FeaturedProductsSection() {
  const [activeTab, setActiveTab] = useState("Comida");
  const [startIndex, setStartIndex] = useState(0);

  const products = {
    Comida: [
      {
        imageIcon: TbCake,
        tag: "Hoy",
        category: "Comida",
        rating: 4.8,
        name: "Gallo Pinto Tradicional",
        description:
          "Auténtico gallo pinto nicaragüense con crema, queso y plátano maduro.",
        price: "120",
        oldPrice: null,
      },
      {
        imageIcon: TbGift,
        tag: "Popular",
        category: "Comida",
        rating: 4.8,
        name: "Vigorón Completo",
        description:
          "Yuca cocida con chicharrón y ensalada de repollo. Auténtico sabor.",
        price: "150",
        oldPrice: "199",
      },
      {
        imageIcon: TbCurrencyEuro,
        tag: "Nuevo",
        category: "Comida",
        rating: 4.7,
        name: "Quesillo Tradicional",
        description:
          "Tortilla con queso, cebolla curtida y crema. El auténtico quesillo de La Paz.",
        price: "80",
        oldPrice: null,
      },
      {
        imageIcon: TbClockHour3,
        tag: "Oferta",
        category: "Comida",
        rating: 4.5,
        name: "Nacatamal Especial",
        description:
          "Tradicional nacatamal con cerdo, arroz, papa, hierbabuena y más.",
        price: "100",
        oldPrice: "150",
      },
      {
        imageIcon: TbCake,
        tag: "Nuevo",
        category: "Comida",
        rating: 4.6,
        name: "Empanadas de Plátano",
        description: "Deliciosas empanadas rellenas de queso y plátano maduro.",
        price: "60",
        oldPrice: null,
      },
      {
        imageIcon: TbGift,
        tag: "Popular",
        category: "Comida",
        rating: 4.7,
        name: "Buñuelos de Yuca",
        description: "Buñuelos de yuca con miel de rapadura.",
        price: "75",
        oldPrice: null,
      },
      {
        imageIcon: TbCurrencyEuro,
        tag: "Oferta",
        category: "Comida",
        rating: 4.2,
        name: "Arroz a la Valenciana",
        description: "Arroz con mariscos y pollo, al estilo tradicional.",
        price: "200",
        oldPrice: "250",
      },
      {
        imageIcon: TbClockHour3,
        tag: "Hoy",
        category: "Comida",
        rating: 4.9,
        name: "Sopa de Res",
        description: "Sopa de res con verduras frescas y masa de maíz.",
        price: "180",
        oldPrice: null,
      },
      {
        imageIcon: TbCake,
        tag: "Nuevo",
        category: "Comida",
        rating: 4.3,
        name: "Tajadas con queso",
        description: "Plátano frito con queso rallado.",
        price: "50",
        oldPrice: null,
      },
      {
        imageIcon: TbGift,
        tag: "Popular",
        category: "Comida",
        rating: 4.1,
        name: "Pinolillo frío",
        description: "Bebida tradicional a base de maíz y cacao.",
        price: "40",
        oldPrice: null,
      },
    ],
    Moda: [
      {
        imageIcon: TbHanger,
        tag: "Nuevo",
        category: "Moda",
        rating: 4.9,
        name: "Camisa Casual",
        description:
          "Camisa de algodón de alta calidad, perfecta para el día a día.",
        price: "350",
        oldPrice: null,
      },
      {
        imageIcon: TbHanger,
        tag: "Oferta",
        category: "Moda",
        rating: 4.5,
        name: "Pantalón Jeans Slim Fit",
        description: "Jeans modernos y cómodos para cualquier ocasión.",
        price: "400",
        oldPrice: "550",
      },
      {
        imageIcon: TbHanger,
        tag: "Popular",
        category: "Moda",
        rating: 4.7,
        name: "Vestido de Verano",
        description: "Vestido ligero y fresco ideal para climas cálidos.",
        price: "600",
        oldPrice: null,
      },
      {
        imageIcon: TbHanger,
        tag: "Hoy",
        category: "Moda",
        rating: 4.6,
        name: "Zapatillas Deportivas",
        description:
          "Calzado cómodo y con estilo para tus actividades diarias.",
        price: "800",
        oldPrice: "1000",
      },
      {
        imageIcon: TbHanger,
        tag: "Nuevo",
        category: "Moda",
        rating: 4.8,
        name: "Chaqueta de Cuero",
        description: "Chaqueta de cuero genuino, estilo clásico.",
        price: "1500",
        oldPrice: null,
      },
      {
        imageIcon: TbHanger,
        tag: "Popular",
        category: "Moda",
        rating: 4.7,
        name: "Gorra Deportiva",
        description: "Gorra ajustable con diseño moderno.",
        price: "150",
        oldPrice: null,
      },
      {
        imageIcon: TbHanger,
        tag: "Oferta",
        category: "Moda",
        rating: 4.2,
        name: "Bufanda de Lana",
        description: "Bufanda cálida y suave para el invierno.",
        price: "200",
        oldPrice: "280",
      },
      {
        imageIcon: TbHanger,
        tag: "Hoy",
        category: "Moda",
        rating: 4.9,
        name: "Reloj de Pulsera",
        description: "Reloj elegante con correa de cuero.",
        price: "900",
        oldPrice: null,
      },
      {
        imageIcon: TbHanger,
        tag: "Nuevo",
        category: "Moda",
        rating: 4.6,
        name: "Lentes de Sol",
        description: "Gafas de sol polarizadas con protección UV.",
        price: "300",
        oldPrice: null,
      },
    ],
    Electrónica: [
      {
        imageIcon: TbDevices,
        tag: "Popular",
        category: "Electrónica",
        rating: 4.7,
        name: "Audífonos Inalámbricos",
        description:
          "Sonido de alta fidelidad con cancelación de ruido. Ideal para viajar.",
        price: "700",
        oldPrice: "900",
      },
      {
        imageIcon: TbDevices,
        tag: "Nuevo",
        category: "Electrónica",
        rating: 4.8,
        name: "Smartwatch Ultrafino",
        description: "Reloj inteligente con monitor de salud y notificaciones.",
        price: "1200",
        oldPrice: null,
      },
      {
        imageIcon: TbDevices,
        tag: "Oferta",
        category: "Electrónica",
        rating: 4.6,
        name: "Laptop Ultrabook",
        description: "Potente laptop con procesador de última generación.",
        price: "8000",
        oldPrice: "9500",
      },
      {
        imageIcon: TbDevices,
        tag: "Hoy",
        category: "Electrónica",
        rating: 4.9,
        name: "Cámara Mirrorless",
        description:
          "Cámara profesional con alta resolución y múltiples funciones.",
        price: "6000",
        oldPrice: null,
      },
      {
        imageIcon: TbDevices,
        tag: "Popular",
        category: "Electrónica",
        rating: 4.5,
        name: "Teclado Mecánico RGB",
        description: "Teclado gaming con retroiluminación RGB.",
        price: "850",
        oldPrice: null,
      },
      {
        imageIcon: TbDevices,
        tag: "Nuevo",
        category: "Electrónica",
        rating: 4.7,
        name: 'Monitor Curvo 27"',
        description: "Monitor para juegos con alta tasa de refresco.",
        price: "2500",
        oldPrice: "3000",
      },
      {
        imageIcon: TbDevices,
        tag: "Oferta",
        category: "Electrónica",
        rating: 4.3,
        name: "Disco Duro Externo 1TB",
        description: "Almacenamiento portátil de alta velocidad.",
        price: "400",
        oldPrice: "500",
      },
      {
        imageIcon: TbDevices,
        tag: "Hoy",
        category: "Electrónica",
        rating: 4.8,
        name: "Sistema de Sonido 5.1",
        description: "Experiencia de audio inmersiva para tu hogar.",
        price: "1800",
        oldPrice: null,
      },
    ],
  };

  const categories = Object.keys(products);
  const productsPerPage = 4;

  const currentProducts = products[activeTab];
  const maxStartIndex = Math.max(0, currentProducts.length - productsPerPage);

  const goToNextProducts = () => {
    setStartIndex((prevIndex) => {
      const newIndex = Math.min(prevIndex + productsPerPage, maxStartIndex);
      console.log(
        "Next clicked. Old index:",
        prevIndex,
        "New index:",
        newIndex,
        "Max Index:",
        maxStartIndex,
      );
      return newIndex;
    });
  };

  const goToPrevProducts = () => {
    setStartIndex((prevIndex) => {
      const newIndex = Math.max(0, prevIndex - productsPerPage);
      console.log(
        "Prev clicked. Old index:",
        prevIndex,
        "New index:",
        newIndex,
      );
      return newIndex;
    });
  };

  const displayedProducts = currentProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  console.log(
    "Active Tab:",
    activeTab,
    "Start Index:",
    startIndex,
    "Displayed Products Length:",
    displayedProducts.length,
    "Total Products:",
    currentProducts.length,
    "Max Start Index:",
    maxStartIndex,
  );

  return (
    <section className="bg-white py-20 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Productos destacados</h2>
          <div className="flex space-x-2">
            <button
              className="rounded-full bg-gray-200 p-2 text-gray-600 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={goToPrevProducts}
              disabled={startIndex === 0}
            >
              <TbChevronLeft className="h-5 w-5" />
            </button>
            <button
              className="rounded-full bg-gray-200 p-2 text-gray-600 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={goToNextProducts}
              disabled={startIndex >= maxStartIndex}
            >
              <TbChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mb-8 flex space-x-6 border-b border-gray-200">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`border-b-2 px-2 py-3 text-lg font-semibold ${
                activeTab === cat
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => {
                setActiveTab(cat);
                setStartIndex(0);
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {displayedProducts.map((product, index) => (
              <ProductCard key={`${product.name}-${index}`} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">
            No hay productos en esta categoría.
          </p>
        )}
      </div>
    </section>
  );
}

export default FeaturedProductsSection;
