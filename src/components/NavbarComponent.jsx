import { Link } from 'react-router-dom';
import logo from '../assets/eledzron.png';

// icons
import { CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci';
import { SignedOut, SignInButton, SignedIn, SignOutButton, UserButton } from '@clerk/clerk-react';


function NavbarComponent() {
    return (
        <div className=' bg-mainBlue py-[10px] xl:py-[0px]  lg:h-[100px] flex items-center'>
            <div className='container mx-auto lg:flex-row flex justify-between items-center flex-col gap-[15px]'>
                <img src={logo} alt='eledzronLogo' />

                {/* TODO: search component */}
                <div className='bg-textWhite rounded-[20px] flex'>
                    <input
                        type='text'
                        placeholder='Search product'
                        className='px-[25px] py-[17px] rounded-[20px] outline-none placeholder:text-black text-[14px]'
                    />
                    <button className='rounded-[20px] bg-mainOrange text-textWhite px-[41px] text-[14px]'>
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
                                0
                            </span>
                        </div>
                        <Link to='/'>Favorite</Link>
                    </div>
                    {/* Cart/Products */}
                    <div className='flex items-center gap-[5px]'>
                        <div className='flex items-center'>
                            <CiShoppingCart size={30} />
                            <span className='bg-mainOrange rounded-[50%] w-[25px] h-[25px] items-center justify-center flex '>
                                0
                            </span>
                        </div>
                        <Link to='/'>Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarComponent;