import { useEffect, useState } from "react"
import ProductsService from "../services/productService"
import { useDispatch, useSelector } from 'react-redux';
import { getProductHandler } from "../store/productSlice";
import CardProductComponent from "../components/CardProductComponent";


// icons
import { FaList } from 'react-icons/fa';
import { IoGridOutline } from 'react-icons/io5';
import GridViewComponent from "../components/GridViewComponent";
import ListViewComponent from "../components/ListViewComponent";


function HomePage() {
    const [activeView, setActiveView] = useState('gridView');

    const dispatch = useDispatch();
    const { allProducts } = useSelector((state) => state.productStore);

    useEffect(() => {
        ProductsService.getAllProducts()
            .then(res => dispatch(getProductHandler(res.data.products)))
            .catch(err => console.log(err));

    }, [])

    return (

        <div className="container mx auto" >
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

            <div className={activeView === 'gridView'
                ? 'flex flex-wrap gap-8 items-center justify-center mt-[50px]'
                : 'flex flex-col px-[20px]'

            }>

                {allProducts.map((item, index) => {

                    return (
                        <>
                            {
                                activeView === 'gridView' ? <GridViewComponent key={item.id} item={item} />
                                    : <ListViewComponent key={item.id} item={item} />

                            }
                        </>
                    );
                })}
            </div>
        </div >


    )
}

export default HomePage