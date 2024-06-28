import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 rounded-lg bg-white rounded-lg">
      <div className=" p-2">All Users</div>
      <div className=" p-2 border flex flex-row items-center gap-[10px] rounded-lg">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.58366 17.5C13.9559 17.5 17.5003 13.9555 17.5003 9.58329C17.5003 5.21103 13.9559 1.66663 9.58366 1.66663C5.2114 1.66663 1.66699 5.21103 1.66699 9.58329C1.66699 13.9555 5.2114 17.5 9.58366 17.5Z"
            stroke="#C9C9C9"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.3337 18.3333L16.667 16.6666"
            stroke="#C9C9C9"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <input
          type="text"
          placeholder="Search something"
          className="outline-none"
        />
      </div>
    </div>
  );
};

export default Header;
