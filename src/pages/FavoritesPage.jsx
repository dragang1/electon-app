import React from 'react'
import { useSelector } from 'react-redux'

import ListViewComponent from '../components/ListViewComponent';
import GridViewComponent from '../components/GridViewComponent';
import { motion } from 'framer-motion';



function FavoritesPage() {

    const { favoriteItems } = useSelector(
        (state) => state.favoriteStore
    );

    const fadeFromLeftSide = {
        initial: {
            opacity: 0,
            x: -100,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.1,
                duration: 1,
            },
        },
    };


    return (
        <motion.div
            variants={fadeFromLeftSide}
            initial='initial'
            whileInView='animate'
            viewport={{
                once: true,
            }}
            className='container mx-auto flex flex-wrap gap-8 items-center justify-center mt-[50px] mb-[50px] '>
            {favoriteItems.map((item, index) => {

                return (
                    <GridViewComponent
                        key={item.id}
                        item={item}


                    />
                )
            })}


        </motion.div>
    )
}

export default FavoritesPage