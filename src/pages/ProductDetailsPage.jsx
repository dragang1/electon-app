import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductsService from '../services/productService';
import { FaCheck, FaHeart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Rating } from '@mui/material';
import { CiHeart } from 'react-icons/ci';
import ButtonComponent from '../components/ButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import { saveCartHandler, setPriceHandler } from '../store/cartSlice';
import { saveFavoriteHandler } from '../store/favoriteSlice';
import { motion } from 'framer-motion';






function ProductDetailsPage() {
    const [currentImage, setCurrentImage] = useState(0)
    const [singleProduct, setSingleProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [favoriteIcon, setFavoriteIcon] = useState(null);

    const { favoriteItems } = useSelector(state => state.favoriteStore);

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        ProductsService.getSingleProduct(id)
            .then((res) => {
                setSingleProduct(res.data);
                setIsLoading(true);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    // Na promenu samog favoriteItems-a
    useEffect(() => {
        favoriteItems.find((item) => {
            if (item.id === parseInt(id)) {
                setFavoriteIcon(item.id)
            }
        })
    }, [favoriteItems]);


    // Ovde saljem proizovd u REDUX!
    function handleProduct() {
        dispatch(saveCartHandler(singleProduct));

    }

    // Ovde cuvamo podatak u favoriteSlice(redux)
    function handleFavorite() {
        dispatch(saveFavoriteHandler(singleProduct));
    }


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

    const fadeFromRightSide = {
        initial: {
            opacity: 0,
            x: 100,
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
        <>
            {isLoading && (
                <div className='container mx-auto mb-[50px]'>
                    <div className='flex mt-[50px] flex-col items-center justify-center gap-[30px] lg:gap-[10px] lg:flex-row'>
                        {/* left side images */}
                        <motion.div
                            variants={fadeFromLeftSide}
                            initial='initial'
                            whileInView='animate'
                            viewport={{
                                once: true,
                            }}
                            className=' flex flex-col gap-[30px] justify-center items-center w-full px-[20px] lg:px-[0px] lg:w-[50%]'
                        >
                            <img
                                src={singleProduct.images[currentImage]}
                                alt={singleProduct.title}
                                className='border border-mainBlue rounded-[20px] h-[400px]'
                            />
                            <div className='flex flex-wrap gap-[10px]'>
                                {singleProduct.images.map((el, i) => {
                                    return (
                                        <img
                                            src={el}
                                            alt='bla'
                                            key={i}
                                            className={`${currentImage === i
                                                ? 'border-mainOrange'
                                                : 'border-mainBlue'
                                                } w-[100px] h-[100px] p-[5px] object-cover rounded-[20px] border  cursor-pointer`}
                                            onClick={() => setCurrentImage(i)}
                                        />
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* right side content */}
                        <motion.div
                            variants={fadeFromRightSide}
                            initial='initial'
                            whileInView='animate'
                            viewport={{
                                once: true,
                            }}
                            className='lg:w-[50%] w-full px-[20px] lg:px-[0px] flex flex-col gap-3'
                        >
                            <h2 className='text-[30px] text-mainBlue font-bold'>
                                {singleProduct.title}
                            </h2>
                            <span className='text-[30px] text-textColor'>
                                ${singleProduct.price}
                            </span>
                            <div className='flex items-center gap-2'>
                                <span className='text-textColor'>Reviews:</span>
                                <Rating
                                    name='half-rating-read'
                                    defaultValue={singleProduct.rating}
                                    precision={0.5}
                                    readOnly
                                />
                            </div>
                            <div className='flex items-center gap-2'>
                                Availability:
                                {singleProduct.stock ? (
                                    <span className='flex items-center gap-2 text-[#30BD57] font-bold'>
                                        <FaCheck color='#30BD57' size={20} />
                                        In Stock
                                    </span>
                                ) : (
                                    <span className='flex items-center gap-2 text-[#FF0000] font-bold'>
                                        <ImCross color='#FF0000' size={20} />
                                        Out of stock
                                    </span>
                                )}
                            </div>

                            <p className='text-textColor font-bold'>
                                Hurry up! only{' '}
                                <span className='text-[18px] text-[#30BD57] font-bold'>
                                    {singleProduct.stock}
                                </span>{' '}
                                product left in stock!
                            </p>
                            <hr className='mt-[10px]' />
                            <p className='text-textColor text-[20px]'>
                                Total Price:{' '}
                                <span className='text-mainBlue font-bold'>
                                    ${singleProduct.price}
                                </span>
                            </p>

                            {/* ADD / FAVORITE SECTION */}

                            <div className='flex items-center gap-3'>
                                {/* <ButtonComponent
									label='Add Cart'
									bgColor='#EDA415'
									textColor='#fff'
								/> */}
                                <Link
                                    to={'/cartProducts'}
                                    className='px-[32px] py-[12px] rounded-full bg-mainOrange text-textWhite'
                                    onClick={() => handleProduct()}>
                                    Add Cart
                                </Link>

                                <button className='px-[32px] py-[12px] rounded-full bg-slate-400'>
                                    <Link to='/favorites'>
                                        {favoriteIcon === parseInt(id) ? <FaHeart size={32} color='red' onClick={() => handleFavorite()} /> :
                                            <CiHeart size={32} color='#fff' onClick={() => handleFavorite()} />}

                                    </Link>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </>
    );
}
export default ProductDetailsPage;