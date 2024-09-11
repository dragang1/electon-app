import React, { useEffect, useState } from 'react'
import ProductsService from '../services/productService';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCategory } from '../store/productSlice';
import { Link } from 'react-router-dom';

function CategoryComponent() {
    const [category, setCategory] = useState([])
    const [isActive, setIsActive] = useState(false);

    const { currentCategory } = useSelector(state => state.productStore)
    const dispatch = useDispatch();

    useEffect(() => {
        ProductsService.getAllCategory()
            .then(res => setCategory(res.data))
            .catch(err => console.error(err))

    }, []);


    function handleCategory(item) {
        dispatch(getProductCategory(item.slug));

        setIsActive(!isActive);
    }
    return (
        <>

            <div className='bg-[#f4f4f4] py-[20px] '>
                <div className='container mx-auto flex flex-col items-center lg:flex-row gap-8 h-full'>
                    <button className='bg-mainBlue text-textWhite px-[12px] py-[6px] rounded-md cursor-pointer hover:bg-mainOrange text-[14px]'

                        onClick={() => { setIsActive(!isActive) }}
                    >{isActive ? "Hide Category" : "Show Category"}</button>


                    <ul className='grid grid-cols-1 xl:grid-cols-4 place-items-center  md:grid-cols-3 lg:grid-cols-5 gap-2 w-[100%]'>

                        {isActive ?



                            category.map((cat, index) => {
                                return (
                                    <Link to={`/products/category/${cat.slug}`} key={index}>
                                        <li
                                            style={{ backgroundColor: currentCategory === cat.slug ? "#EDA415" : null }
                                            }
                                            className='bg-mainBlue px-[16px] py-[8px] w-[250px]  hover:bg-mainOrange rounded-lg text-textWhite hover:text-[#fff] text-center cursor-pointer transition-all'

                                            onClick={() => handleCategory(cat)}
                                        >
                                            {cat.name}
                                        </li>
                                    </Link>
                                );
                            })


                            : null}

                    </ul>



                </div >
            </div >
        </>

    )
}

export default CategoryComponent