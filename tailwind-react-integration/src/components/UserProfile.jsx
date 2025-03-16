import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg p-4 sm:p-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <img
        src="https://via.placeholder.com/150"
        alt="User Profile"
        className="rounded-full w-24 h-24 sm:w-36 sm:h-36 object-cover"
      />
      <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
        John Doe
      </h2>
      <p className="text-sm sm:text-base text-gray-600 text-center">
        Frontend Developer | React Enthusiast | Tailwind CSS Lover
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
        Follow
      </button>
    </div>
  );
};

export default UserProfile;
