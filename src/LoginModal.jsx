import { TbX } from "react-icons/tb";

function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess();
  };

  return (
    <div className="bg-midnight-900 bg-opacity-80 fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-midnight-700 relative w-full max-w-md rounded-lg p-8 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
          aria-label="Cerrar modal"
        >
          <TbX className="h-6 w-6" />
        </button>

        <h2 className="mb-6 text-center text-3xl font-bold text-white">
          Iniciar Sesión
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border-midnight-600 bg-midnight-800 focus:border-midnight-500 focus:ring-midnight-500 focus:ring-opacity-50 w-full rounded-md border p-3 text-white placeholder-gray-500 focus:ring focus:outline-none"
              placeholder="tu@xyz.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="border-midnight-600 bg-midnight-800 focus:border-midnight-500 focus:ring-midnight-500 focus:ring-opacity-50 w-full rounded-md border p-3 text-white placeholder-gray-500 focus:ring focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="bg-midnight-500 hover:bg-midnight-400 focus:ring-midnight-500 w-full rounded-md px-4 py-3 font-semibold text-white focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-300">
          ¿No tienes una cuenta?{" "}
          <a
            href="#"
            className="text-midnight-500 hover:text-midnight-400 font-medium"
          >
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
