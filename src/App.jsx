import { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import ImagePlaceholder from "./ImagePlaceholder.jsx";
import WhyChooseUsSection from "./WhyChooseUsSection.jsx";
import PopularCategoriesSection from "./PopularCategoriesSection.jsx";
import FeaturedProductsSection from "./FeaturedProductsSection.jsx";
import LoginModal from "./LoginModal.jsx";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(true);

  useEffect(() => {
    setShowLoginModal(true);
  }, []);

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <div id="inicio" className="bg-midnight-600 text-white">
        <Navbar />
        <div className="container mx-auto flex flex-col items-center justify-center gap-12 px-4 py-16 lg:flex-row lg:px-20">
          <HeroSection />
          <ImagePlaceholder />
        </div>
      </div>

      <div id="por-que-elegirnos">
        <WhyChooseUsSection />
      </div>

      <div id="categorias">
        <PopularCategoriesSection />
      </div>

      <div id="productos-destacados">
        <FeaturedProductsSection />
      </div>
    </div>
  );
}

export default App;
