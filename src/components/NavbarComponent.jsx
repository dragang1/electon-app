import { Link } from 'react-router-dom';
import logo from '../assets/eledzron.png';

// icons
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';
import { SignedOut, SignInButton, SignedIn, SignOutButton, UserButton } from '@clerk/clerk-react';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import { getSearchProductHandler } from '../store/productSlice';


function NavbarComponent() {
    const { totalProduct } = useSelector(state => state.cartStore);
    const { favoriteCount } = useSelector(state => state.favoriteStore);

    const dispatch = useDispatch();

    const searchValue = useRef();

    function handleSearchValue() {
        dispatch(getSearchProductHandler(searchValue.current.value));
        searchValue.current.value = '';
    }
    return (
        <div className=' bg-mainBlue py-[10px] xl:py-[0px]  lg:h-[100px] flex items-center'>
            <div className='container mx-auto lg:flex-row flex justify-between items-center flex-col gap-[15px]'>
                <Link to={'/'}>
                    <img src={logo} alt='eledzronLogo' />
                </Link>

                {/* TODO: search component */}
                <div className='bg-textWhite rounded-[20px] flex'>
                    <input
                        ref={searchValue}
                        type='text'
                        placeholder='Search product'
                        className='px-[25px] py-[17px] rounded-[20px] outline-none placeholder:text-black text-[14px]'
                    />
                    <button className='rounded-[20px] bg-mainOrange text-textWhite px-[41px] text-[14px]'
                        onClick={() => handleSearchValue()}
                    >
                        Search
                    </button>
                </div>

                {/* General Info */}
                <div className='flex items-center gap-[10px] text-textWhite'>
                    {/* Login  */}
                    <div className='flex items-center gap-[5px]'>
                        <CiUser size={30} />
                        <SignedOut>
                            <SignInButton />

                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignoutUrl='/' />

                        </SignedIn>

                    </div>
                    {/* Favorite  */}
                    <div className='flex items-center gap-[5px]'>
                        <div className='flex items-center'>
                            <CiHeart size={30} />
                            <span className='bg-mainOrange rounded-[50%] w-[25px] h-[25px] items-center justify-center flex '>
                                {favoriteCount}
                            </span>
                        </div>
                        <Link to='/favorites'>Favorite</Link>
                    </div>
                    {/* Cart/Products */}
                    <div className='flex items-center gap-[5px]'>
                        <div className='flex items-center'>
                            <CiShoppingCart size={30} />
                            <span className='bg-mainOrange rounded-[50%] w-[25px] h-[25px] items-center justify-center flex '>
                                {totalProduct}
                            </span>
                        </div>
                        <Link to='/cartProducts'>Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarComponent;