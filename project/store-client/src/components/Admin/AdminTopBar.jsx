import React from 'react';

const AdminTopBar = () => {
  return (
    <div className="w-full h-16 bg-transparent-600 shadow-sm flex justify-end items-center px-4 space-x-4">
      {/* Notification Button - Black color */}
      <button
        className="relative text-white bg-blue-600 p-2 rounded-full hover:bg-gray-800 transition duration-300"
        onClick={() => alert('View Notifications')} // Add action on click
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.828 2.828 0 0018 13V7a6 6 0 10-12 0v6a2.828 2.828 0 00-.595 2.595L4 17h5m6 0v1a3 3 0 11-6 0v-1"
          />
        </svg>
        {/* Badge for notifications */}
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          3
        </span>
      </button>

      {/* Admin Button */}
      <button
        className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition duration-300"
        onClick={() => alert('Go to Admin Panel')} // Add action on click
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 11c2.5 0 4.5-2 4.5-4.5S14.5 2 12 2 7.5 4 7.5 6.5 9.5 11 12 11zm0 1c-3 0-5.5 1.5-5.5 3.5v4h11v-4c0-2-2.5-3.5-5.5-3.5z"
          />
        </svg>
      </button>
    </div>
  );
};

export default AdminTopBar;
