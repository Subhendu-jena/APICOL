import React from "react";
import { useNavigate } from "react-router-dom";



const RedirectNotice: React.FC<any> = ({
  message = "You have been redirected to a new page.",
  buttonLabel = "Go to Page",
  to,
}) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
        <h2 className="text-lg font-semibold mb-4">{message}</h2>
        <button
          onClick={() => navigate(to)}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default RedirectNotice;
