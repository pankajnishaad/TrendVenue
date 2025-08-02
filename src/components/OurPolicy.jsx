import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around items-center gap-12 sm:gap-6 py-5 px-4 text-center text-gray-700'>
      
      {/* Policy Item */}
      <div className='flex flex-col items-center max-w-xs'>
        <img src={assets.exchange_icon} className='w-12 mb-3' alt="Exchange Icon" />
        <p className='font-semibold mb-1'>Easy Exchange Policy</p>
        <p className='text-gray-500 text-xs sm:text-sm'>We offer hassle-free exchange policy.</p>
      </div>

      {/* Fast shipping */}
      
      <div className='flex flex-col items-center max-w-xs'>
        <img src={assets.delivery} className='w-12 mb-3' alt="Shipping Icon" />
        <p className='font-semibold mb-1'>Fast Delivery</p>
        <p className='text-gray-500 text-xs sm:text-sm'>Get your products delivered in 3-5 days.</p>
      </div>

      {/* Secure Payment */}
      <div className='flex flex-col items-center max-w-xs'>
        <img src={assets.payment} className='w-12 mb-3' alt="Secure Payment Icon" />
        <p className='font-semibold mb-1'>Secure Payment</p>
        <p className='text-gray-500 text-xs sm:text-sm'>Your transactions are 100% safe and encrypted.</p>
      </div>

      {/* 24/7 Customer Support */}
      <div className='flex flex-col items-center max-w-xs'>
        <img src={assets.support_img} className='w-12 mb-3' alt="Customer Support Icon" />
        <p className='font-semibold mb-1'>24/7 Support</p>
        <p className='text-gray-500 text-xs sm:text-sm'>Our team is here to help you anytime, anywhere.</p>
      </div>

      {/* Quality Assurance */}
      <div className='flex flex-col items-center max-w-xs'>
        <img src={assets.quality_icon} className='w-12 mb-3' alt="Quality Icon" />
        <p className='font-semibold mb-1'>Quality Guarantee</p>
        <p className='text-gray-500 text-xs sm:text-sm'>We deliver only top-notch, quality-checked products.</p>
      </div>
      

    </div>
  );
};

export default OurPolicy;
