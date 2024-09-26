// src/pages/NotFoundPage.js

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-gray-900 dark:text-white">
          404
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          Go back home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
