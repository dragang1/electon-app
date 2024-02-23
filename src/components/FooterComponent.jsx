import SubscribeComponent from './SubscribeComponent';

import logo from '../assets/eledzronDark.png';

// content/constants
import {
    aboutUs,
    footerContent,
    getHelp,
} from '../constants/footerContent';

// icons
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import FooterListComponent from './FooterListComponent';

function FooterComponent() {
    return (
        <div className='bg-[#E2F4FF]  py-[40px] mt-[50px]'>
            <div className='container mx-auto'>
                <SubscribeComponent />

                {/* content fotter */}
                <div className='mt-[50px] flex flex-col md:flex-row  '>
                    {/* left side */}
                    <div className='flex flex-row md:flex-col gap-[20px] w-full md:w-[20%] mb-[40px] px-[20px]'>
                        <img src={logo} alt='myLogo' className='w-[150px]' />

                        <div className='flex items-center gap-[15px]'>
                            <FaFacebook size={24} color='#EDA415' />
                            <FaInstagram size={24} color='#EDA415' />
                        </div>
                    </div>

                    {/* right side */}
                    <div className='flex items-start gap-[30px] w-full md:w-[80%] justify-between px-[20px]'>
                        <FooterListComponent
                            title='Find Products'
                            items={footerContent}
                        />
                        <FooterListComponent title='Get Help' items={getHelp} />
                        <FooterListComponent title='About Us' items={aboutUs} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;