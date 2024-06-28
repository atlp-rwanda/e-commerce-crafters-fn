import React from "react";

interface User {
  name: string;
  email: string;
}

interface UserTableProps {
  users: User[];
  onRemove: (email: string) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onRemove }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between mb-4 pr-7">
        <div className="flex flex-row items-center gap-[20px]">
          <span className="p-2 px-4 bg-secondary text-white rounded-[6px] ">
            Buyers 40
          </span>
          <span className="font-semibold text-lg text-gray-400">
            Sellers 30
          </span>
        </div>
        <button className="text-yellow-600">View all</button>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="font-semibold text-gray-200">Name</th>
            <th className="font-semibold text-gray-200">Email</th>
            <th className="font-semibold text-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="">
              <td className="py-2">{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="text-secondary"
                  onClick={() => onRemove(user.email)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
