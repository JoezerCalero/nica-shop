function HeroSection() {
  return (
    <div className="w-full max-w-lg text-center lg:w-1/2 lg:text-left">
      <h1 className="mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl">
        La plataforma que <br />
        <span className="decoration-midnight-500 underline">conecta</span>{" "}
        vendedores <br />y compradores
      </h1>
      <p className="mb-8 text-base text-gray-300 sm:text-lg">
        Encuentra todo lo que necesitas o comienza a vender tus productos de
        forma fácil y segura.
      </p>
      <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
        <button className="bg-midnight-500 hover:bg-midnight-400 focus:shadow-outline w-full rounded-md px-6 py-3 font-bold text-white focus:outline-none sm:w-auto">
          Comprar ahora
        </button>
        <button className="border-midnight-500 hover:bg-midnight-500 text-midnight-500 focus:shadow-outline w-full rounded-md border bg-transparent px-6 py-3 font-bold hover:text-white focus:outline-none sm:w-auto">
          Vender productos
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
