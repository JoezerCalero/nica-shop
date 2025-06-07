import FeatureCard from "./FeatureCard.jsx";
import { TbCoin, TbShieldCheck, TbChartLine } from "react-icons/tb";

function WhyChooseUsSection() {
  const features = [
    {
      icon: TbCoin,
      title: "Comisiones bajas",
      description:
        "Ofrecemos las comisiones más competitivas del mercado para que maximices tus ganancias.",
    },
    {
      icon: TbShieldCheck,
      title: "Compras seguras",
      description:
        "Sistema de pagos protegido y verificación de vendedores para garantizar tu seguridad.",
    },
    {
      icon: TbChartLine,
      title: "Impulsa tu negocio",
      description:
        "Herramientas de marketing y análisis para ayudarte a aumentar tus ventas.",
    },
  ];

  return (
    <section className="bg-white py-20 text-center">
      {" "}
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-4xl font-bold text-gray-900">
          ¿Por qué elegir NicaShop?
        </h2>{" "}
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-700">
          La plataforma más completa para conectar vendedores y compradores con
          herramientas diseñadas para el éxito.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
