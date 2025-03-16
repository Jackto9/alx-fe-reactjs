import React from "react";

const UserProfile = () => {
  return (
    <div className="p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto bg-white shadow-md rounded-lg">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User Profile"
          className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full border-2 border-gray-300"
        />
        <h2 className="mt-4 text-lg sm:text-lg md:text-xl font-semibold text-gray-900">
          John Doe
        </h2>
        <p className="text-sm sm:text-sm md:text-base text-gray-600">
          Software Engineer
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
