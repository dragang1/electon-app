import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItemsComponent from '../components/CartItemsComponent';
import country from "../constants/country"

function CartProducts() {
    const [currentCoupon, setCurrentCoupon] = useState();

    const { cart, totalPrice } = useSelector(state => state.cartStore);

    const coupon = useRef();

    function handleCoupon() {
        setCurrentCoupon(coupon.current.value);

        coupon.current.value = '';
    }

    return (
        <div className='mt-[20px] lg:mt-[50px] mb-[50px] px-[20px]'>
            <div className='container mx-auto flex flex-col lg:flex-row gap-5'>
                {/* left side */}
                <div className='w-full lg:w-[70%]'>
                    {/* Header of items */}
                    <div className='grid grid-cols-4 bg-[#E2F4FF] h-[60px] place-items-center mb-[20px]'>
                        <p className='text-[20px] text-textColor font-medium'>
                            Product
                        </p>
                        <p className='text-[20px] text-textColor font-medium'>
                            Price
                        </p>
                        <p className='text-[20px] text-textColor font-medium'>
                            Quantity
                        </p>
                        <p className='text-[20px] text-textColor font-medium'>
                            Subtotal
                        </p>
                    </div>
                    {/* body/content of items */}
                    <div className='flex flex-col gap-4'>
                        {cart.map((item, index) => {
                            return <CartItemsComponent item={item} key={index} index={index} />;
                        })}
                    </div>
                </div>
                {/* right side */}
                <div className='w-full lg:w-[30%] border border-mainBlue flex flex-col gap-3  sticky top-0  rounded-lg'>
                    {/* heading/title */}
                    <div className='h-[60px] bg-[#E2F4FF] flex items-center justify-center'>
                        <h2 className='text-center font-medium text-[20px] '>
                            Cart Total
                        </h2>
                    </div>
                    {/* content */}
                    <div className='px-[20px] flex flex-col gap-[20px]'>
                        <div className='flex items-center justify-between my-[15px]  border-b border-textColor'>
                            <p className='text-[20px] font-medium text-mainBlue'>
                                Subtotal
                            </p>
                            <span className='text-[20px]'>${
                                currentCoupon === 'alphaCode' ? totalPrice / 2 : totalPrice
                            }</span>
                        </div>
                        {/* discount */}
                        <div className=''>
                            <p className='text-[14px] text-slate-500'>
                                Take your discount 50%
                            </p>
                            <div className='border border-slate-500 rounded-full flex items-center justify-center w-full'>
                                <input
                                    ref={coupon}
                                    type='text'
                                    placeholder='Insert your coupon'
                                    className='px-[8px] py-[4px] rounded-full outline-none w-full'
                                />
                                <button className=' px-[8px] py-[4px] rounded-full text-mainBlue mr-[5px]'
                                    onClick={() => handleCoupon()}

                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                        {/* country */}
                        <div >
                            <select className='w-full px-[8px] py-[4px] border border-slate-500 rounded-full bg-textWhite '>
                                {country.map((el, index) => {
                                    return <option key={index}>{el.name}</option>;
                                })}
                            </select>
                        </div>

                        <button className='bg-mainOrange text-textWhite px-[16px] py-[8px] rounded-full mb-[30px]'>
                            Proceed to Checkout
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartProducts