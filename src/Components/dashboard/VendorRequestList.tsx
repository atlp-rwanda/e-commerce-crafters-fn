import React from "react";

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface VendorRequestListProps {
  users: User[];
}

const VendorRequestList: React.FC<VendorRequestListProps> = ({ users }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between mb-4 pr-7">
        <span className="font-semibold text-lg">Requested To Be A Vendor</span>
        <button className="text-yellow-600">View all</button>
      </div>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="flex items-center mb-4">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10  mr-4"
            />
            <div className="flex-1">
              <div className="font-semibold">{user.name}</div>
              <div className="text-gray-600">{user.email}</div>
            </div>
            <button className="text-yellow-600 pr-7">Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendorRequestList;
