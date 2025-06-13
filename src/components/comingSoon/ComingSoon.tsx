import React from 'react'
import { useNavigate } from 'react-router-dom';
import { paths } from '../../route/path';

const ComingSoon: React.FC= () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(paths.home);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Coming Soon</h1>
      <p className="text-lg text-gray-600 mb-8">
        We’re working hard to bring you something amazing. Stay tuned!
      </p>
      <button
        onClick={goHome}
        className="px-6 py-3 bg-orange-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default ComingSoon
