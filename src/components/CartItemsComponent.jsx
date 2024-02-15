import React from 'react'
import { CiCircleRemove } from "react-icons/ci";

function CartItemsComponent({ item }) {

    function handleCount(item) {
        item.count--;

    }

    return (
        <div className='grid grid-cols-4 place-items-center relative'>
            <div className='flex gap-[10px] items-center'>
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className='w-[100px] h-[100px] rounded-2xl object-cover'
                />
                <div className='flex flex-col gap-1'>
                    <h2 className='text-mainBlue font-medium text-[20px]'>
                        {item.title}
                    </h2>
                    <p className='text-textColor'>{item.category}</p>
                    <p className='text-textColor'>{item.stock}</p>
                </div>
            </div>
            <div>
                <p className='text-mainBlue font-medium'>${item.price}</p>
            </div>
            <div className='flex items-center'>
                <button className='px-[8px] py-[4px] bg-slate-300 text-[18px]'>
                    +
                </button>
                <span className='px-[8px] py-[4px] bg-slate-300 text-[18px]'>
                    {item.count}
                </span>
                <button className='px-[8px] py-[4px] bg-slate-300 text-[18px]'>
                    -
                </button>
            </div>
            <div>
                <p className='text-mainBlue font-medium'>${item.cartTotalPrice}</p>
            </div>

            <CiCircleRemove
                size={25}
                color='#C33131'
                className='absolute top-0 right-0 cursor-pointer'
            />
        </div>

    )
}

export default CartItemsComponent