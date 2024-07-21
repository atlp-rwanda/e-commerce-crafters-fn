
import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useCreateOrderMutation, useCreatePaymentMutation } from "../../Redux/features/checkoutSlice";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'
import LocationButton from "../../Lib/locationButton";

interface paymentProps {
  totalAmount: number
}

const Payment = (data: paymentProps) => {

  const userData:any = useAuthUser()
  const [district,setDistrict] = useState<string>("")
   const [sector,setSector] = useState<string>("")
   const [cell,setCell] = useState<string>("")
   const [city,setCity] = useState<string>("")
   const [streetAddress,setStreetAddress] = useState<string>("")
   const [errorMessage,setErrorMessage] = useState<string>("")
   const [loadingPay,setLoadingPay] = useState<boolean>(false)

   const [createOrder, {isLoading,isError}] = useCreateOrderMutation()
   const [createPayment, {isLoading:payLoading,isError:payError}] = useCreatePaymentMutation()


  const { t } = useTranslation();

  const validation = async(e: FormEvent)=>{
    
    e.preventDefault()
    if(!district || !sector || !streetAddress){
      setErrorMessage(t("Please fill all the fields"))
    }else{
      setErrorMessage(t(""))
      handelSubmit()
    }
  }
  const token = useAuthHeader()

  const handelSubmit = async()=>{
    setLoadingPay(true)
    try {
      const data = {
        userId: userData.userId,
        deliveryAddress:{
          district,
          sector,
          streetAddress,
        },
        client: userData.name,
        paymentMethod: "stripe"
      }


      const response = await createOrder(data).unwrap()
      if(response.message){
        const paymentRes:any = await createPayment({data:response.order.orderId,token:token})
        setLoadingPay(false)
        window.location.href = paymentRes.data.url;
      }
      
    } catch (error) {

      console.log(error)
    }
  }
  return (
    <div className="payment-details w-[550px] rounded-[5px] hover:shadow-md ">
      <header className="bg-primary text-white text-center p-4 rounded-t-[5px]">
        {t("PAYMENT DETAILS")}
      </header>
      <div className="payment-content px-[30px] py-[50px]">
        {errorMessage}
        <form onSubmit={validation} action="" className="p-[5px] flex flex-col gap-[20px] w-[90%] m-auto">
            <LocationButton setCell={setCell} setCity={setCity} setDistrict={setDistrict} setStreetAddress={setStreetAddress} />
          <div className="contacts w-full gap-[10px] grid grid-cols-2 justify-between mb-5">
            <input
              onChange={(e)=> setDistrict(e.target.value)}
              value={district}
              type="text"
              className="contact street  p-3 rounded-[7px] bg-gray-100 pl-[15px]"
              placeholder={t("District")}
            />
            <input
            onChange={(e)=> setSector(e.target.value)}
            value={cell}

              type="text"
              className="contact street  p-3 rounded-[7px] bg-gray-100 pl-[15px]"
              placeholder={t("Sector")}
            />
          </div>
            <input
            onChange={(e)=> setStreetAddress(e.target.value)}
            value={streetAddress}

              type="text"
              className="contact street  p-3 w-full rounded-[7px] bg-gray-100 pl-[15px]"
              placeholder={t("Street address")}
            />
          <div className="method w-full mb-4">
          </div>
          <button type="submit" className="payment bg-primary w-[96%] h-10 rounded-[7px] m-auto text-white hover:bg-blue-800">
            {loadingPay ? ("Wait A moment" ) : (t("Continue To Payment"))}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
