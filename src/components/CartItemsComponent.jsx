import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { removeProductHandler, setPriceHandler } from '../store/cartSlice';
import { Link } from 'react-router-dom';

function CartItemsComponent({ item, index }) {

    const dispatch = useDispatch();

    return (
        <div className='grid grid-cols-4 place-items-center relative px-[10px]'>
            <div className='flex gap-[10px] items-center'>
                <Link to={`/productDetails/${item.id}`} >
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                        className='w-[100px] h-[100px] rounded-2xl object-cover' />

                </Link>




                <div className='flex-col gap-1 hidden lg:flex'>
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
                <button
                    className='px-[8px] py-[4px] bg-slate-300 text-[18px]'
                    onClick={() =>
                        dispatch(setPriceHandler({ increment: 1, index }))
                    }
                >
                    +
                </button>
                <span className='px-[8px] py-[4px] bg-slate-300 text-[18px]'>
                    {item.count}
                </span>
                <button
                    className='px-[8px] py-[4px] bg-slate-300 text-[18px]'
                    onClick={() =>
                        dispatch(setPriceHandler({ increment: -1, index }))
                    }

                >
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
                onClick={() => dispatch(removeProductHandler(index))}
            />
        </div>

    )
}

export default CartItemsComponent