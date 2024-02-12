import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductsService from '../services/productService';
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function ProductDetailsPage() {
    const [currentImage, setCurrentImage] = useState(0)
    const [singleProduct, setSingleProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        ProductsService.getSingleProduct(id)
            .then((res) => {
                setSingleProduct(res.data);
                setIsLoading(true);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {isLoading && (
                <div className='flex mt-[50px]'>
                    <div className='flex flex-col justify-center items-center gap-[30px] lg:w-[50%]'>
                        <img src={singleProduct.images[currentImage]} alt={singleProduct.title} className='border border-mainBlue rounded-[20px] h-[400px]' />
                        <div className=' flex gap-[10px]'>
                            {singleProduct.images.map((el, i) => {
                                return <img src={el} alt='slika' key={i} className={`${currentImage === i ? "border-mainOrange " : "border-mainBlue"
                                    }w-[100px] h-[100px] p-[5px] object-cover rounded-[20px] border  cursor-pointer`} onClick={() => { setCurrentImage(i) }} />
                            })}
                        </div>
                    </div>

                    <div className='lg:w-[50%]'>
                        <h2>{singleProduct.title}</h2>
                        <span>{singleProduct.price}</span>
                        <p>
                            <span>Reviews:</span>
                            {singleProduct.rating}
                        </p>
                        <p>
                            Availability:
                            {singleProduct.stock ?
                                <span>
                                    <FaCheck />
                                    In stock
                                </span> :
                                <span>
                                    <ImCross />
                                    Out of stock
                                </span>}
                        </p>
                        <p>Hurry up! Only {singleProduct.stock} products left in stock!</p>
                        <hr className='mt-[10px]' />
                        <p>
                            Total price: <span>${singleProduct.price}</span>
                        </p>
                    </div>
                </div>
            )

            }

        </>
    )
}
export default ProductDetailsPage;