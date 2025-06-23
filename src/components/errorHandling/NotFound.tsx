// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound : React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-center p-6">
      <div>
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-700 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
