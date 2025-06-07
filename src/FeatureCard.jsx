function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-midnight-700 flex flex-col items-start rounded-lg p-6 text-left shadow-md">
      <div className="bg-midnight-500 mb-4 flex items-center justify-center rounded-full p-3">
        {Icon && <Icon className="h-6 w-6 text-white" />}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-base text-gray-300">{description}</p>
    </div>
  );
}

export default FeatureCard;
