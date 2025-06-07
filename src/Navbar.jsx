import { useState } from "react";
import { TbShoppingCart, TbUserCircle, TbMenu2, TbX } from "react-icons/tb";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-midnight-700 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex w-full items-center lg:w-auto">
          <span className="mr-4 text-xl font-bold text-white lg:mr-8">
            NicaShop
          </span>

          <div className="bg-midnight-800 relative hidden flex-grow rounded-md lg:flex">
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7 0 0010.607 10.607z"
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

        <div className="flex items-center space-x-4 lg:space-x-6">
          <TbShoppingCart className="h-6 w-6 cursor-pointer text-white hover:text-gray-300" />
          <TbUserCircle className="h-6 w-6 cursor-pointer text-white hover:text-gray-300" />

          <button
            className="text-white lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <TbX className="h-8 w-8" />
            ) : (
              <TbMenu2 className="h-8 w-8" />
            )}
          </button>

          <ul className="hidden items-center space-x-6 lg:flex">
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
          </ul>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-midnight-600 bg-midnight-700 border-t px-4 py-3 lg:hidden"
        >
          <div className="bg-midnight-800 relative mb-4 rounded-md">
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-none bg-transparent py-2 pr-3 pl-10 text-white placeholder-gray-500 focus:border-transparent focus:ring-0 focus:outline-none sm:text-sm"
              placeholder="Buscar productos, categorías, vendedores..."
            />
          </div>

          <ul className="flex flex-col space-y-3">
            <li>
              <a
                href="#inicio"
                className="block rounded-md px-3 py-2 text-white hover:text-gray-300"
                onClick={handleNavLinkClick}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#categorias"
                className="block rounded-md px-3 py-2 text-white hover:text-gray-300"
                onClick={handleNavLinkClick}
              >
                Categorías
              </a>
            </li>
            <li>
              <a
                href="#vender"
                className="block rounded-md px-3 py-2 text-white hover:text-gray-300"
                onClick={handleNavLinkClick}
              >
                Vender
              </a>
            </li>
            <li>
              <a
                href="#comprar"
                className="block rounded-md px-3 py-2 text-white hover:text-gray-300"
                onClick={handleNavLinkClick}
              >
                Comprar
              </a>
            </li>
            <li>
              <a
                href="#ayuda"
                className="block rounded-md px-3 py-2 text-white hover:text-gray-300"
                onClick={handleNavLinkClick}
              >
                Ayuda
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
