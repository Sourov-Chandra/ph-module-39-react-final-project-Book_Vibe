import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="text-center">
          {/* Error Code */}
          <h1 className="text-7xl font-extrabold text-green-600">404</h1>

          {/* Title */}
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="mt-2 text-gray-600">
            Sorry, the page you are looking for doesn’t exist or has been moved.
          </p>

          {/* Button */}
          <div className="mt-6">
            <a
              href="/"
              className="inline-block px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg shadow transition"
            >
              Go Back Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
