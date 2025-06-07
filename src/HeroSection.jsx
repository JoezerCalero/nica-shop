function HeroSection() {
  return (
    <div className="max-w-lg text-left">
      <h1 className="mb-6 text-5xl leading-tight font-bold text-white">
        La plataforma que <br />
        <span className="decoration-midnight-500 underline">conecta</span>{" "}
        vendedores <br />y compradores
      </h1>
      <p className="mb-8 text-lg text-gray-300">
        Encuentra todo lo que necesitas o comienza a vender tus productos de
        forma fácil y segura.
      </p>
      <div className="flex space-x-4">
        <button className="bg-midnight-500 hover:bg-midnight-400 focus:shadow-outline rounded-md px-6 py-3 font-bold text-white focus:outline-none">
          Comprar ahora
        </button>
        <button className="border-midnight-500 hover:bg-midnight-500 text-midnight-500 focus:shadow-outline rounded-md border bg-transparent px-6 py-3 font-bold hover:text-white focus:outline-none">
          Vender productos
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
