<<<<<<< HEAD
import { data } from "autoprefixer";
import React from "react";
import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";

interface Product {
  status: string;
  quantity: number;
  productId: string;
  productName: string;
}

interface Order {
  orderId: string;
  deliveryAddress: {
    city: string;
    street: string;
  };
  userId: string;
  client: string;
  paymentMethod: string;
  status: string;
  products: Product[];
  totalAmount: number | null;
  expectedDeliveryDate: string | null;
  createdAt: string;
  updatedAt: string;
}

interface OrderTableProps {
  data: Order[];
}

console.log(data);

const OrderStatusTable: React.FC = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.datas) {
    return <div>No data available</div>;
  }

  const { datas } = state as { datas: Order[] };


=======
import React from "react";
import { useState, useMemo } from "react";

interface Order {
  buyer: string;
  products: number;
  totalAmount: number;
  status: number;
  Address: string;
  Payment: string;
  TotalAmount: string;
  date: string;
  time: string;
}

interface OrderTableProps {
  datas: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ datas }) => {
>>>>>>> origin/demo-fn-19-07
  const [productList] = useState(datas);
  const [rowsLimit] = useState(5);
  const [rowsToShow, setRowsToShow] = useState(productList.slice(0, rowsLimit));
  const [customPagination, setCustomPagination] = useState<any[]>([]);
  const [totalPage] = useState(Math.ceil(productList?.length / rowsLimit));
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    const startIndex = rowsLimit * (currentPage + 1);
    const endIndex = startIndex + rowsLimit;
    const newArray = datas.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(currentPage + 1);
  };

  const changePage = (value: number) => {
    const startIndex = value * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = datas.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(value);
  };

  const previousPage = () => {
    const startIndex = (currentPage - 1) * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = datas.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(0);
    }
  };
  useMemo(() => {
    setCustomPagination(
      Array(Math.ceil(productList?.length / rowsLimit)).fill(null)
    );
  }, [productList?.length, rowsLimit]);

  let id = 1;
  console.log(rowsToShow);
  return (
<<<<<<< HEAD
    <div className="w-full  rounded-lg shadow-md overflow-hidden lg:mb-12 xl:ml-[5%] mt-3">
      <div className="h-full">
        <div>
          <h1 className="text-2xl text-center font-semibold font-poppins text-secondary">
            Orders Table
          </h1>
        </div>
        <div className="w-full p-4 overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none mt-2">
          <table className="table-auto  text-sm overflow-scroll md:overflow-auto w-full  text-left font-inter border">
=======
    <div className="min-h-screen  bg-white flex  items-center justify-center  font-poppins  ">
      <div className="w-full max-w-4xl px-2  ">
        <div>
          <h1 className="text-2xl font-semibold font-poppins text-secondary">
            My Sales Table
          </h1>
        </div>
        <div className="w-full overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none mt-2">
          <table className="table-auto text-sm overflow-scroll md:overflow-auto w-full  text-left font-inter border">
>>>>>>> origin/demo-fn-19-07
            <thead className="rounded-lg  text-sm text-white font-semibold w-full ">
              <tr className="rounded-lg">
                <th className="py-3 px-1 text-center text-[#212B36]  sm:text-base font-bold whitespace-nowrap">
                  ID
                </th>
<<<<<<< HEAD
                <th className="py-3 px-1 text-center text-[#212B36]  sm:text-base font-bold whitespace-nowrap">
                  name
                </th>
                <th className="py-3 px-1 text-center text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Address
                </th>
                <th className="py-3 px-1  text-center gap-1 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Payment
                </th>
                <th className="py-3 px-1 text-center text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  products
                </th>
                <th className="text-center py-3 px-1 text-[#212B36] sm:text-base font-bold whitespace-nowrap gap-1">
                  status
                </th>
                <th className="py-3 px-1 text-center text-[#212B36] sm:text-base font-bold whitespace-nowrap  ">
                  Amount
                </th>
                <th className="py-3 px-1 text-center text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Date
                </th>
                <th className="py-3 px-1 text-center text-[#212B36] sm:text-base font-bold whitespace-nowrap">
=======
                <th className="py-3 px-1 text-center text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Buyer
                </th>
                <th className="py-3 px-1  text-center gap-1 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Products
                </th>
                <th className="py-3 px-1  text-center gap-1 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Total Amount
                </th>
                <th className="py-3 px-1 text-center text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                  Status
                </th>
                <th className="text-center py-3 px-1 text-[#212B36] sm:text-base font-bold whitespace-nowrap gap-1">
                  Address
                </th>
                <th className="text-center py-3 px-1 text-[#212B36] sm:text-base font-bold whitespace-nowrap gap-1">
                  Payment Method
                </th>
                <th className="py-3 px-1 text-center text-[#212B36] sm:text-base font-bold whitespace-nowrap  ">
                  Date
                </th>
                <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
>>>>>>> origin/demo-fn-19-07
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
              {rowsToShow?.map((data, index) => (
=======
              {rowsToShow?.map((order, index) => (
>>>>>>> origin/demo-fn-19-07
                <tr
                  className={`${
                    index % 2 == 0 ? "bg-white" : "bg-[#222E3A]/[6%]"
                  }`}
                  key={index}
                >
                  <td
                    className={`py-2 px-1 font-normal text-xs text-center ${
                      index == 0
                        ? "border-t-[1px] border-x-gray-300"
                        : index == rowsToShow?.length
                        ? "border-y"
                        : "border-t"
                    } whitespace-nowrap`}
                  >
                    {id++}
                  </td>
                  <td
<<<<<<< HEAD
                    className={`py-2 px-1 font-normal  text-xs text-center ${
=======
                    className={`py-2 px-1 font-normal text-xs text-center ${
>>>>>>> origin/demo-fn-19-07
                      index == 0
                        ? "border-t-[1px] border-x-gray-300"
                        : index == rowsToShow?.length
                        ? "border-y"
                        : "border-t"
                    } whitespace-nowrap`}
                  >
<<<<<<< HEAD
                    {data?.client}
                  </td>
                  <td
                    className={`py-2 px-1 text-center  font-normal text-xs   ${
=======
                    {order.buyer}
                  </td>
                  <td
                    className={`py-2 px-1 font-normal text-xs text-center ${
>>>>>>> origin/demo-fn-19-07
                      index == 0
                        ? "border-t-[1px] border-x-gray-300"
                        : index == rowsToShow?.length
                        ? "border-y"
                        : "border-t"
<<<<<<< HEAD
                    } whitespace-nowrap `}
                  >
                    {data?.deliveryAddress.city} , {data.deliveryAddress.street}
=======
                    } whitespace-nowrap`}
                  >
                    {/* {order.products} */}
                  </td>
                  <td
                    className={`py-2 px-1 font-normal text-xs text-center ${
                      index == 0
                        ? "border-t-[1px] border-x-gray-300"
                        : index == rowsToShow?.length
                        ? "border-y"
                        : "border-t"
                    } whitespace-nowrap`}
                  >
                    {/* {order.totalAmount} */}
                  </td>
                  <td
                    className={`py-2 px-1 font-normal text-xs text-center ${
                      index == 0
                        ? "border-t-[1px] border-x-gray-300"
                        : index == rowsToShow?.length
                        ? "border-y"
                        : "border-t"
                    } whitespace-nowrap`}
                  >
                    {/* {order.status} */}
                  </td>
                  <td
                    className={`py-2 px-1 text-center font-normal text-xs   ${
                      index == 0
                        ? "border-t-[1px] border-x-gray-300"
                        : index == rowsToShow?.length
                        ? "border-y"
                        : "border-t"
                    } whitespace-nowrap`}
                  >
                    {/* {order.Address} */}
>>>>>>> origin/demo-fn-19-07
                  </td>
                  <td
                    className={`py-2 px-1 text-xs  font-normal text-center  ${
                      index == 0
                        ? "border-t-[1px] border-x-gray-300"
                        : index == rowsToShow?.length
                        ? "border-y"
                        : "border-t"
                    } whitespace-nowrap`}
                  >
<<<<<<< HEAD
                    {data?.paymentMethod}
                  </td>

                  <td
                    className={`py-2 px-1 text-xs  font-normal text-center ${
=======
                    {/* {order.Payment} */}
                  </td>

                  <td
                    className={`py-5 px-1 text-xs  font-normal text-center ${
>>>>>>> origin/demo-fn-19-07
                      index == 0
                        ? "border-t-[1px] border-x-gray-300"
                        : index == rowsToShow?.length
                        ? "border-y"
                        : "border-t"
<<<<<<< HEAD
                    }  min-w-[150px]`}
                  >
                    {data?.products.map((item) => item.productName)}
=======
                    }`}
                  >
                    {/* {order.date.slice(0, 10)} */}
>>>>>>> origin/demo-fn-19-07
                  </td>
                  <td
                    className={`py-2 px-1 text-xs  font-normal text-center
                        ${
                          index == 0
                            ? "border-t-[1px] border-x-gray-300"
                            : index == rowsToShow?.length
                            ? "border-y"
                            : "border-t"
                        } 
<<<<<<< HEAD
                    `}
                  >
                    {data?.status}
                  </td>
                  <td
                    className={`py-2 px-1 text-xs   font-normal text-center
                        ${
                          index == 0
                            ? "border-t-[1px] border-x-gray-300"
                            : index == rowsToShow?.length
                            ? "border-y"
                            : "border-t"
                        } 
                    `}
                  >
                    {data?.totalAmount}
                  </td>
                  <td
                    className={`py-2 px-1 text-xs  font-normal text-center
                        ${
                          index == 0
                            ? "border-t-[1px] border-x-gray-300"
                            : index == rowsToShow?.length
                            ? "border-y"
                            : "border-t"
                        } 
                    `}
                  >
                    {data?.createdAt.slice(0, 10)}
                  </td>
                  <td
                    className={`py-2 px-3 text-xs text-center font-normal 
                        ${
                          index == 0
                            ? "border-t-[1px] border-x-gray-300"
                            : index == rowsToShow?.length
                            ? "border-y"
                            : "border-t"
                        } 
                 `}
                  >
                    {data?.createdAt.slice(11, 16)}
=======
                    min-w-[100px]`}
                  >
                    {/* {order.time} */}
>>>>>>> origin/demo-fn-19-07
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
<<<<<<< HEAD
        <div className="w-full flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
=======
        <div className="w-full  flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
>>>>>>> origin/demo-fn-19-07
          <div className="text-sm">
            Showing {currentPage == 0 ? 1 : currentPage * rowsLimit + 1} to{" "}
            {currentPage == totalPage - 1
              ? productList?.length
              : (currentPage + 1) * rowsLimit}{" "}
            of {productList?.length} entries
          </div>
          <div className="flex">
            <ul
              className="flex justify-center items-center gap-x-[10px] z-30"
              role="navigation"
              aria-label="Pagination"
            >
              <li
                className={` prev-btn flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] disabled] ${
                  currentPage == 0
                    ? "bg-[#cccccc] pointer-events-none"
                    : " cursor-pointer"
                }
  `}
                onClick={previousPage}
              >
                <img src="https://www.tailwindtap.com/assets/travelagency-admin/leftarrow.svg" />
              </li>
              {customPagination?.map((data, index) => (
                <li
                  className={`flex items-center justify-center w-[36px] rounded-[6px] h-[34px] border-[1px] border-solid bg-[#FFFFFF] cursor-pointer ${
                    currentPage == index
                      ? "text-blue-600  border-sky-500"
                      : "border-[#E4E4EB] "
                  }`}
                  onClick={() => changePage(index)}
                  key={index}
                >
                  {index + 1}
                </li>
              ))}
              <li
                className={`flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${
                  currentPage == totalPage - 1
                    ? "bg-[#cccccc] pointer-events-none"
                    : " cursor-pointer"
                }`}
                onClick={nextPage}
              >
                <img src="https://www.tailwindtap.com/assets/travelagency-admin/rightarrow.svg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default OrderStatusTable;
=======
export default OrderTable;
>>>>>>> origin/demo-fn-19-07
