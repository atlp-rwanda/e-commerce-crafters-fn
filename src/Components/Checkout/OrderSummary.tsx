import React from "react";
import { useTranslation } from "react-i18next";
import { useDeleteFromCartMutation } from "../../Redux/features/checkoutSlice";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";


interface Products {
  id: number;
  img: string;
  name: string;
  quantity: number;
  price: number;
}


interface OrderSummaryProps {
  subTotal: number;
  deliveryFeePercentage: number;
  discountPercentage: number;
  total: number;
  cartItems: any[];
  handleDelete: (id: number) => void;
  refetch: any
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subTotal,
  deliveryFeePercentage,
  discountPercentage,
  total,
  cartItems,
  handleDelete,
  refetch
}) => {
  const { t } = useTranslation();
  const userData: any = useAuthUser()

  const [deleteCartItem, { isLoading: deleteLoading, isError: deleteError }] = useDeleteFromCartMutation()

  const deleteFromCart = async (item: any) => {
    try {
      const data = {
        userId: userData.userId,
        productId: item.productId
      }
      await deleteCartItem(data).unwrap()
      refetch()


    } catch (error) {
      console.log(error)

    }
  }

  return (
    <div className=" rounded-md  ">
      <header className="bg-blue-900 text-black font-[600] text-center p-3 rounded-t-[5px]">
        {t("ORDER SUMMARY")}
      </header>
      <div className=" p-5 font-semibold">
        <div className="flex flex-col gap-[20px] ">
          {cartItems &&
            cartItems.map((item) => (
              <div
                className=" flex flex-row gap-[20px] items-center"
                key={item.id}
              >
                <div className="w-[50px] h-[50px]">
                  <img className="h-full w-full rounded-[12px]" src={item.Product.image[0]} alt={item.name} />
                </div>
                <div className="flex flex-col gap-[2px] font-[300] font-outfit">
                  <div className=" flex items-center flex-row font-[300] gap-[10px]">
                    <div className=" text-amber-600">Product:</div>
                    <div className="text-center">{item.Product.name}</div>
                  </div>
                  <div className=" flex items-center">
                    <div className=" text-amber-600">Quantity:</div>
                    <div className="text-center">{item.quantity}</div>
                  </div>
                  <div className=" flex items-center">
                    <div className=" text-amber-600">Price:</div>
                    <div className="text-center">{item.price} Rwf</div>
                  </div>
                </div>
                <div className="action h-full flex flex-col justify-between items-center">
                  <button
                    className="w-20 h-[25px] bg-primary text-white rounded-[5px] text-[10px]"
                    onClick={() => deleteFromCart(item)}
                  >
                    Remove
                  </button>
                  <div className="flex w-full my-1">
                    <div className="w-[47%] text-amber-600 text-[9px]">
                      Subtotal:{" "}
                    </div>
                    <div className="text-left text-[9px] tracking-tight">
                      {item.quantity * item.price} Rwf
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="summaryTotals-details font-outfit font-[400] m-auto w-[90%] pl-[10px]">
          <div className="summaryTotals-item flex items-center my-[10px] text-base p-0 w-[98%]">
            <div className="summarySub w-[70%] my-[5px] text-blue-800">
              Sub Total
            </div>
            <span>{subTotal} Rwf</span>
          </div>
          <div className="summaryTotals-item flex items-center my-[10px] text-base p-0 w-[98%]">
            <div className="summarySub w-[70%] my-[5px] text-blue-800">
              Delivery Fee
            </div>
            <span>{subTotal * 0.01 * deliveryFeePercentage} Rwf</span>
          </div>
          <div className="summaryTotals-item flex items-center my-[10px] text-base p-0 w-[98%]">
            <div className="summarySub w-[70%] my-[5px] text-blue-800">
              Discount
            </div>
            <span>{subTotal * 0.01 * discountPercentage} Rwf</span>
          </div>
          <hr className="my-5 border-solid border-[1.5px] border-blue-900" />
          <div className="summaryTotals-item summaryTotal flex items-center my-[10px] text-base p-0 w-[98%]">
            <div className="w-[64%] my-auto mx-[2px] pl-5 text-amber-700 font-semibold">
              Total
            </div>
            <span className="text-blue-950">{total} Rwf</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;