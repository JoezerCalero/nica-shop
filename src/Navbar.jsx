import { TbShoppingCart, TbUserCircle } from "react-icons/tb";

function Navbar() {
  return (
    <nav className="bg-midnight-700 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <span className="mr-8 text-xl font-bold text-white">NicaShop</span>
          <div className="bg-midnight-800 relative rounded-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-none bg-transparent py-2 pr-3 pl-10 text-white placeholder-gray-500 focus:border-transparent focus:ring-0 focus:outline-none sm:text-sm"
              placeholder="Buscar productos, categorías, vendedores..."
            />
          </div>
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <a href="#inicio" className="text-white hover:text-gray-300">
              Inicio
            </a>
          </li>
          <li>
            <a href="#categorias" className="text-white hover:text-gray-300">
              Categorías
            </a>
          </li>
          <li>
            <a href="#vender" className="text-white hover:text-gray-300">
              Vender
            </a>
          </li>
          <li>
            <a href="#comprar" className="text-white hover:text-gray-300">
              Comprar
            </a>
          </li>
          <li>
            <a href="#ayuda" className="text-white hover:text-gray-300">
              Ayuda
            </a>
          </li>
          <li>
            <TbShoppingCart className="h-6 w-6 cursor-pointer text-white hover:text-gray-300" />
          </li>
          <li>
            <TbUserCircle className="h-6 w-6 cursor-pointer text-white hover:text-gray-300" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
