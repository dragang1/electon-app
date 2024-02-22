import { useEffect, useState } from "react"
import ProductsService from "../services/productService"
import { useDispatch, useSelector } from 'react-redux';
import { getProductHandler } from "../store/productSlice";



// icons
import { FaList } from 'react-icons/fa';
import { IoGridOutline } from 'react-icons/io5';
import GridViewComponent from "../components/GridViewComponent";
import ListViewComponent from "../components/ListViewComponent";
import { motion } from 'framer-motion';


function ProductsCategoryPage() {
    const [activeView, setActiveView] = useState('gridView');

    const dispatch = useDispatch();
    const { allProducts, currentCategory } = useSelector((state) => state.productStore);

    useEffect(() => {
        ProductsService.getProductsByCategory(currentCategory)
            .then(res => dispatch(getProductHandler(res.data.products)))
            .catch(err => console.log(err));

    }, [currentCategory])

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
    }

    return (

        <motion.div
            variants={fadeFromLeftSide}
            initial='initial'
            whileInView='animate'
            viewport={{
                once: true,
            }}
            className="container mx auto mb-[50px]"
        >
            <div className='flex items-center justify-end gap-5 mt-[20px] cursor-pointer'>
                <FaList
                    size={30}
                    onClick={() => setActiveView('listView')}
                    style={{ backgroundColor: activeView !== 'gridView' ? "#EDA415" : null, }}
                    className="px-[10px] w-[40px] h-[40px]"
                />
                <IoGridOutline
                    size={30}
                    onClick={() => setActiveView('gridView')}
                    style={{ backgroundColor: activeView === 'gridView' ? "#EDA415" : null, }}
                    className="px-[10px] w-[40px] h-[40px]"
                />
            </div>

            {/* {Our products/card} */}

            <div
                className={activeView === 'gridView'
                    ? 'flex flex-wrap gap-8 items-center justify-center mt-[50px]'
                    : 'flex flex-col px-[20px]'}

            >

                {allProducts.map((item) => {

                    return (
                        <div key={item.id}>
                            {
                                activeView === 'gridView' ?
                                    <GridViewComponent
                                        item={item}

                                    />
                                    :
                                    <ListViewComponent
                                        item={item}

                                    />

                            }
                        </div>
                    );
                })}
            </div>
        </motion.div >

    )

}
export default ProductsCategoryPage;