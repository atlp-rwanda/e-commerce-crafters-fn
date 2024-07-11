import React, { useState } from "react";

interface UserData {
  id: number;
  name: string;
  email: string;
}

interface SellerTableProps {
  users: UserData[];
}

const SellerTable: React.FC<SellerTableProps> = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 15;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const onViewDetails = (user: UserData) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden  lg:mb-12 xl:ml-[5%] mt-3">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="px-4 py-2 text-left">No</th>
            <th className="px-4 py-2 text-left">User Name</th>
            <th className="px-4 py-2 text-left hidden md:table-cell lg:table-cell">
              Email
            </th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user.id}>
              <td className="px-4 py-2 text-left">
                {String(indexOfFirstUser + index + 1).padStart(2, "0")}
              </td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2 hidden md:table-cell lg:table-cell">
                {user.email}
              </td>
              <td className="px-4 py-2">
                <button
                  className="text-orange-500 hover:text-orange-700"
                  onClick={() => onViewDetails(user)}
                >
                  <i className="fas fa-eye"></i> View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">User Details</h2>
            <p>
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <div className="mt-4 text-right">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center py-4 mb-5">
        <nav className="block">
          <ul className="flex pl-0 list-none rounded space-x-2">
            {Array.from(Array(totalPages).keys()).map((pageNumber) => (
              <li key={pageNumber} className="block">
                <button
                  className={`${
                    currentPage === pageNumber + 1
                      ? "bg-gray-400 text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  } px-3 py-2 rounded-md`}
                  onClick={() => onPageChange(pageNumber + 1)}
                >
                  {pageNumber + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SellerTable;
