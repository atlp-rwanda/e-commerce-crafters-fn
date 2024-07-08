import React from "react";

const TopProduct = () => {
  return (
    <div className=" mt-10  w-[600px]  py-10 px-10 rounded-md bg-white">
      <h1>Top product</h1>
      <div className="flex justify-between  ">
        <div>
          <p>Id</p>
          <p>01</p>
          <p>02</p>
          <p>03</p>
          <p>04</p>
        </div>
        <div>
          <p>Name</p>
          <p>Home decore</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
        <div>
          <p>Popularity</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
        <div>
          <p>Sales</p>
          <p>46%</p>
          <p>17%</p>
          <p>19%</p>
          <p>29%</p>
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
