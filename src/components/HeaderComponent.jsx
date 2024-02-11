import React from 'react';

// icons
import { GrLocation } from 'react-icons/gr';
import { CiDeliveryTruck } from 'react-icons/ci';

function HeaderComponent() {
    return (
        <div className='container mx-auto flex-col sm:flex-row py-[10px] flex justify-between items-center h-[70px]'>
            <p className='text-[14px]'>
                Need help? Call us: (+98) 0234 456 789
            </p>
            <div className='flex items-center gap-[36px]'>
                <div className='flex items-center gap-[10px] text-[14px]'>
                    <GrLocation size={24} />
                    <span>Our Store</span>
                </div>
                <div className='flex items-center gap-[10px] text-[14px]'>
                    <CiDeliveryTruck size={24} />
                    <span>Track your order</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
