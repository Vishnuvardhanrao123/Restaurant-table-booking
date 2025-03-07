import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')`,
      }}
    >
      <div className="bg-white/75 p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-9xl font-bold text-red-500 animate-bounce">
          404
        </h1>
        <h2 className="text-4xl font-semibold text-red-500 mt-6">
          Page Not Found
        </h2>
        <p className="text-gray-900 mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>

       
        <Link
          to="/"
          className="mt-8 inline-block bg-orange-400 text-white px-6 py-3 text-lg font-medium rounded shadow hover:bg-orange-600 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
