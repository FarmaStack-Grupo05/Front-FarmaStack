import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
        <p className="text-xl font-medium mb-8 text-gray-600">
          ¡Oops! La página que buscas no existe.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

