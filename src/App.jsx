import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

function App() {
  return (
    <div className="bg-midnight-600 flex min-h-screen flex-col text-white">
      <Navbar />
      <div className="flex flex-grow items-center justify-center gap-12 px-10 py-16 lg:px-20">
        <HeroSection />
        <ImagePlaceholder />
      </div>
    </div>
  );
}

export default App;
