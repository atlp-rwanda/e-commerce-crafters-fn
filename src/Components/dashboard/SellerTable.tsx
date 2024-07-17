import React from "react";

interface UserData {
  id: number;
  name: string;
  email: string;
}

interface UserTableProps {
  users: UserData[];
  onRemove: (id: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onRemove }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <table className="min-w-full">
        <thead>
          <tr className="bg-white-200 text-gray-200">
            <th className="px-4 py-2 text-left">No</th>
            <th className="px-4 py-2 text-left">User Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="">
              <td className="px-4 py-2 text-left">
                {String(index + 1).padStart(2, "0")}
              </td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td
                className="px-4 py-2 text-orange-500 cursor-pointer"
                onClick={() => onRemove(user.id)}
              >
                Remove
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
