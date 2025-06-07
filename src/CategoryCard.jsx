function CategoryCard({ icon: Icon, name, productCount }) {
  return (
    <div className="bg-midnight-700 flex flex-col items-center justify-center rounded-lg p-4 text-center">
      <div className="bg-midnight-800 mb-3 flex items-center justify-center rounded-full p-3">
        {Icon && <Icon className="h-6 w-6 text-white" />}
      </div>
      <h3 className="mb-1 text-lg font-semibold text-white">{name}</h3>
      <p className="text-sm text-gray-400">{productCount} productos</p>
    </div>
  );
}

export default CategoryCard;
