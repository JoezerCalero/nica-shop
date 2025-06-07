import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import ImagePlaceholder from "./ImagePlaceholder.jsx";
import WhyChooseUsSection from "./WhyChooseUsSection.jsx"; // Ruta actualizada
import PopularCategoriesSection from "./PopularCategoriesSection.jsx"; // Ruta actualizada

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Sección superior con fondo azul oscuro */}
      <div className="bg-midnight-600 text-white">
        <Navbar />
        <div className="container mx-auto flex flex-grow items-center justify-center gap-12 px-10 py-16 lg:px-20">
          <HeroSection />
          <ImagePlaceholder />
        </div>
      </div>

      {/* Secciones siguientes con fondo blanco */}
      <WhyChooseUsSection />
      <PopularCategoriesSection />
    </div>
  );
}

export default App;
