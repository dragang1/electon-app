// icons
import { IoPaperPlane } from 'react-icons/io5';
import { FaHeadphonesAlt } from 'react-icons/fa';

function SubscribeComponent() {
    return (
        <section className='bg-textWhite px-[40px] py-[30px]  flex flex-col lg:flex-row gap-[30px] items-center justify-between rounded-[20px]'>
            <h3 className='text-2xl text-mainBlue font-bold'>
                Subscribe newsletter
            </h3>

            <div className='bg-mainOrange rounded-[10px] flex items-center px-[24px] py-[12px]'>
                <input
                    type='text'
                    placeholder='Enter your email'
                    className='bg-transparent outline-none text-textWhite placeholder:text-textWhite'
                />
                <IoPaperPlane size={25} color='white' />
            </div>

            <div className='flex items-center gap-[10px]'>
                <FaHeadphonesAlt size={40} color='#EDA415' />
                <span className='text-2xl'>+38131231231</span>
            </div>
        </section>
    );
}

export default SubscribeComponent;