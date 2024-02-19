import React from 'react'
import { Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import GridViewComponent from './GridViewComponent'
import ListViewComponent from './ListViewComponent'

function CardProductComponent({ item, activeView }) {
    return (
        <>
            {/* {
                activeView === 'gridView' ? <GridViewComponent key={item.id}
                    item={item} /> : <ListViewComponent key={item.id}
                        item={item} />
            } */}

        </>



    )
}

export default CardProductComponent