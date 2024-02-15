import React from 'react'
import { Rating } from '@mui/material'
import { Link } from 'react-router-dom'

function CardProductComponent({ item }) {
    return (


        <div className='w-[300px] h-full border border-mainBlue rounded-[20px] flex flex-col  text-center gap-[15px]' >
            <div className='relative'>
                <img src={item.thumbnail} alt={item.title} className='w-full h-[150px] object-cover rounded-t-[20px]' />
                <div className='absolute top-0 bottom-0 left-0 right-0 rounded-t-[20px] opacity-60 bg-[#000000] hover:opacity-0 transition-all cursor-pointer' />
            </div>
            <h2 className='text-xl font-bold'>{item.title}</h2>
            <span className='text-mainBlue'>${item.price}</span>
            <div>

                <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
            </div>
            <Link to={`productDetails/${item.id}`}>View detail...</Link>
        </div>

    )
}

export default CardProductComponent