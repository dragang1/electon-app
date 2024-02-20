import React from 'react'
import { Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

function GridViewComponent({ item }) {

    return (

        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }}
            className='w-[300px] h-full border border-mainBlue rounded-[10px] flex flex-col  text-center gap-[15px]' >
            <div className='relative'>
                <img src={item.thumbnail} alt={item.title} className='w-full h-[150px] object-cover rounded-t-[10px]' />
                <div className='absolute top-0 bottom-0 left-0 right-0 rounded-t-[10px] opacity-60 bg-[#000000] hover:opacity-0 transition-all cursor-pointer' />
            </div>
            <h2 className='text-xl font-bold'>{item.title}</h2>
            <span className='text-mainBlue'>${item.price}</span>
            <div>

                <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
            </div>
            <Link to={`/productDetails/${item.id}`}
                className='bg-mainOrange text-textWhite px-[12px] py-[6px] rounded-md cursor-pointer hover:bg-mainBlue '

            >View detail...</Link>
        </motion.div >




    )
}

export default GridViewComponent