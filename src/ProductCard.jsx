import { TbStarFilled, TbShoppingCartPlus } from "react-icons/tb";

function ProductCard({ product }) {
  const {
    imageIcon: ImageIcon,
    tag,
    category,
    rating,
    name,
    description,
    price,
    oldPrice,
  } = product;

  const tagColors = {
    Hoy: "bg-green-500",
    Popular: "bg-red-500",
    Nuevo: "bg-blue-500",
    Oferta: "bg-yellow-500",
  };

  const tagTextColor = {
    Hoy: "text-white",
    Popular: "text-white",
    Nuevo: "text-white",
    Oferta: "text-gray-900",
  };

  return (
    <div className="relative rounded-lg border border-gray-200 bg-white p-4 shadow-md">
      {tag && (
        <span
          className={`absolute top-3 left-3 rounded-md px-2 py-1 text-xs font-semibold ${tagColors[tag] || "bg-gray-500"} ${tagTextColor[tag] || "text-white"}`}
        >
          {tag}
        </span>
      )}
      <div className="mb-4 flex h-32 w-full items-center justify-center rounded-md bg-gray-100">
        {ImageIcon && <ImageIcon className="h-16 w-16 text-gray-400" />}
      </div>
      <div className="mb-1 text-sm text-gray-500">{category}</div>
      <div className="mb-2 flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <TbStarFilled
            key={i}
            className={`h-4 w-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          />
        ))}
        <span className="ml-1 text-xs text-gray-500">{rating}</span>
      </div>
      <h3 className="mb-1 text-lg font-semibold text-gray-900">{name}</h3>
      <p className="mb-3 line-clamp-2 text-sm text-gray-600">{description}</p>
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-baseline">
          <span className="text-xl font-bold text-gray-900">C${price}</span>
          {oldPrice && (
            <span className="ml-2 text-sm text-gray-400 line-through">
              C${oldPrice}
            </span>
          )}
        </div>
        <button className="bg-midnight-500 hover:bg-midnight-600 flex items-center justify-center rounded-full p-2 text-white">
          <TbShoppingCartPlus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
