import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useDeleteProductMutation, useSelectSingleProductQuery } from '../../Redux/features/sellerSlice'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'
import { toast } from 'react-toastify'
import UpdateProduct from '../../Components/vendor/UpdateProduct'

const VendorSingleProduct = () => {
    const [isComplete,setIsComplete] = useState<boolean>(false)
    const [isModal,setModal] = useState<boolean>(false)
    const { id } = useParams<{ id: string }>()
    const navigate:any = useNavigate()
    const token = useAuthHeader()
    const { data: singleProduct, error, isLoading,refetch } = useSelectSingleProductQuery(id)
    const [deleteProduct, { isLoading: deleteLoading, isError: deleteError }] = useDeleteProductMutation()
    const vendorData: any = localStorage.getItem('vendorData')
    const vendor = JSON.parse(vendorData)

    const [openedImage, setOpenedImage] = useState<number>(0)

    useEffect(() => {
        if (isComplete) {
            toast.success("Product updated")
            refetch().then(() => setIsComplete(false))
        }
    }, [isComplete, refetch])

    if (isLoading) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <span className='text-[32px] font-[600]'>Loading...</span>
            </div>
        )
    }
    if (error) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <span className='text-[32px] font-[600]'>No Product Found</span>
            </div>
        )
    }
    

    const expiringDate = new Date(singleProduct.expiringDate)
    const day = expiringDate.getDate()
    const month = expiringDate.toLocaleString('default', { month: 'long' })
    const year = expiringDate.getFullYear()

    const handelDelete = async () => {
        try {
            const response = await deleteProduct({ id, token, data: { vendorId: vendor.vendorId } })
            if (response) {
                toast.success("Product Deleted")
                setTimeout(() => {
                    navigate("/vendor/my-products")
                }, 1000)
            }

        } catch (error) {
            console.log(error)
        }
    }



   
    return (
        <>
  
      
        <div className='flex flex-col  gap-[20px] p-4 px-20 bg-white'>
            <a href='/vendor/my-products' className=' ml-auto '><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.6667 5H8.33333C7.44928 5 6.60143 5.35119 5.97631 5.97631C5.35119 6.60143 5 7.44928 5 8.33333V31.6667C5 32.5507 5.35119 33.3986 5.97631 34.0237C6.60143 34.6488 7.44928 35 8.33333 35H31.6667C32.5507 35 33.3986 34.6488 34.0237 34.0237C34.6488 33.3986 35 32.5507 35 31.6667V8.33333C35 7.44928 34.6488 6.60143 34.0237 5.97631C33.3986 5.35119 32.5507 5 31.6667 5ZM26 28.3333L20 22.3333L14 28.3333L11.6667 26L17.6667 20L11.6667 14L14 11.6667L20 17.6667L26 11.6667L28.3333 14L22.3333 20L28.3333 26L26 28.3333Z" fill="#777777" />
            </svg>
            </a>
            <div className='flex flex-row gap-[20px] '>
                <div className='flex w-[60%] flex-col gap-[20px]'>
                    <div className='w-full  h-[60vh] rounded-[12px]'>
                        <LazyLoadImage src={singleProduct.image[openedImage]} className='w-full rounded-[12px] h-full object-cover' />
                    </div>
                    <div className='grid  grid-cols-4 gap-[20px]'>
                        {singleProduct.image.map((item:any,index:number)=>{
                            return(

                        <div onClick={()=> setOpenedImage(index)} key={index} className=' cursor-pointer w-full h-[20vh]'>
                            <LazyLoadImage src={item} className='w-full rounded-[12px] h-full object-cover' />
                        </div>
                            )
                        })}
                      
                    
                    </div>
                </div>
                <div className='w-[40%] flex flex-col gap-[10px]'>
                    <div className='flex flex-col gap-[5px]'>
                        <span className='text-secondary font-outfit '>Product Category</span>
                        <span className='px-2 bg-gray-50 rounded-[12px] py-1 flex items-center justify-center w-[100px]'>{singleProduct.category}</span>
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <span className='text-secondary font-outfit '>Product Name</span>
                        <span className='px-2 text-balck font-outfit text-[16px]'>{singleProduct.name}</span>
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <span className='text-secondary font-outfit '>Quantity</span>
                        <span className='px-2 bg-gray-50 rounded-[12px] py-1 flex items-center justify-center max-w-[150px] min-w-[100px] font-[600] font-outfit'>{singleProduct.quantity} In Stock</span>
                    </div>
                    <div className='flex flex-col gap-[5px] font-outfit'>
                        <span className='text-secondary font-outfit '>Price</span>
                        <div className='flex flex-row gap-[10px] items-center'>
                            <span>{singleProduct.price}</span>
                            <span className='p-2 bg-gray-50'>Rwf</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[5px] font-outfit'>
                        <span className='text-secondary font-outfit '>Description</span>
                        <div className='flex flex-row gap-[10px] items-center'>
                            <span>{singleProduct.description}</span>

                        </div>
                    </div>
                    <div className='flex flex-col gap-[5px] font-outfit'>
                        <span className='text-secondary font-outfit '>Expiring Date</span>
                        <div className='flex flex-row gap-[10px] items-center'>
                            <span>{day} {month}  {year}</span>

                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='text-[18px] font-outfit'>Reviews</h1>
                <div className='flex flex-row gap-[20px]'>
                    <button onClick={()=> setModal(true)} className='p-2 bg-primary rounded-[12px] px-4 text-white font-outfit'>
                        Update
                    </button>
                    <button onClick={handelDelete} className='p-2 bg-secondary rounded-[12px] px-4 text-white font-outfit'>
                        {deleteLoading ? "In Progress" : "Delete"}
                    </button>
                </div>
            </div>
            {!isModal ? ("") : (
            <UpdateProduct productData={singleProduct} setIsComplete={setIsComplete} setModal={setModal} />

        )}
            <div className='flex felx-col gap-[20px] pt-10'>
                <div className='flex flex-row items-center gap-[10px]'>
                    <div>

                        <div className='w-[40px] h-[40px] bg-gray-300 flex rounded-full items-center justify-center'>
                            <span className='text-secondary font-outfit text-[14px]'>01</span>
                        </div>
                    </div>
                    <div className='flex font-outfit flex-col gap-[5px]'>
                        <span className='text-[18px] font-[600] text-black'>Lais Ikirezo</span>
                        <div className='flex flex-row gap-[10px] items-center'>
                            <svg width="20" height="21" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.2862 12.3562L21.6612 17.21L23.3749 24.4687C23.4695 24.8628 23.4451 25.276 23.3049 25.6562C23.1648 26.0364 22.9151 26.3666 22.5873 26.6049C22.2596 26.8433 21.8686 26.9792 21.4637 26.9954C21.0588 27.0117 20.6582 26.9076 20.3124 26.6962L13.9999 22.8112L7.68367 26.6962C7.33796 26.9064 6.9378 27.0095 6.5336 26.9926C6.12939 26.9758 5.7392 26.8397 5.41217 26.6016C5.08514 26.3634 4.83589 26.0338 4.6958 25.6543C4.55571 25.2748 4.53105 24.8623 4.62492 24.4687L6.34492 17.21L0.719922 12.3562C0.414045 12.0919 0.192828 11.7433 0.0839002 11.3539C-0.0250279 10.9646 -0.0168401 10.5518 0.107441 10.1671C0.231722 9.78237 0.466588 9.4428 0.782708 9.19077C1.09883 8.93875 1.48219 8.78544 1.88492 8.75L9.25992 8.15499L12.1049 1.27C12.2589 0.894767 12.521 0.573806 12.8579 0.347918C13.1948 0.12203 13.5912 0.00141907 13.9968 0.00141907C14.4024 0.00141907 14.7988 0.12203 15.1357 0.347918C15.4726 0.573806 15.7347 0.894767 15.8887 1.27L18.7324 8.15499L26.1074 8.75C26.511 8.78412 26.8954 8.93658 27.2127 9.18825C27.53 9.43993 27.7659 9.77964 27.891 10.1648C28.016 10.55 28.0246 10.9635 27.9157 11.3536C27.8068 11.7436 27.5852 12.0928 27.2787 12.3575L27.2862 12.3562Z" fill="#E4A951" />
                            </svg>
                            <svg width="20" height="21" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.2862 12.3562L21.6612 17.21L23.3749 24.4687C23.4695 24.8628 23.4451 25.276 23.3049 25.6562C23.1648 26.0364 22.9151 26.3666 22.5873 26.6049C22.2596 26.8433 21.8686 26.9792 21.4637 26.9954C21.0588 27.0117 20.6582 26.9076 20.3124 26.6962L13.9999 22.8112L7.68367 26.6962C7.33796 26.9064 6.9378 27.0095 6.5336 26.9926C6.12939 26.9758 5.7392 26.8397 5.41217 26.6016C5.08514 26.3634 4.83589 26.0338 4.6958 25.6543C4.55571 25.2748 4.53105 24.8623 4.62492 24.4687L6.34492 17.21L0.719922 12.3562C0.414045 12.0919 0.192828 11.7433 0.0839002 11.3539C-0.0250279 10.9646 -0.0168401 10.5518 0.107441 10.1671C0.231722 9.78237 0.466588 9.4428 0.782708 9.19077C1.09883 8.93875 1.48219 8.78544 1.88492 8.75L9.25992 8.15499L12.1049 1.27C12.2589 0.894767 12.521 0.573806 12.8579 0.347918C13.1948 0.12203 13.5912 0.00141907 13.9968 0.00141907C14.4024 0.00141907 14.7988 0.12203 15.1357 0.347918C15.4726 0.573806 15.7347 0.894767 15.8887 1.27L18.7324 8.15499L26.1074 8.75C26.511 8.78412 26.8954 8.93658 27.2127 9.18825C27.53 9.43993 27.7659 9.77964 27.891 10.1648C28.016 10.55 28.0246 10.9635 27.9157 11.3536C27.8068 11.7436 27.5852 12.0928 27.2787 12.3575L27.2862 12.3562Z" fill="#E4A951" />
                            </svg>

                        </div>
                        <span className='text-[14px] text-gray-500'>2nd June 2024</span>
                        <span className='text-[14px] text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica</span>
                    </div>
                </div>
            </div>
        </div>
  
        </>
    )
}

export default VendorSingleProduct