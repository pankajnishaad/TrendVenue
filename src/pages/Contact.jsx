import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      {/* Title Section */}
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Info Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 md:gap-28 mb-20'>
        <img
          className='w-full md:max-w-[480px]'
          src={assets.contact_img}
          alt="Contact Illustration"
        />
        <div className='flex flex-col justify-center items-start gap-6'>

          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>
            EM 220, Indus Town <br />
            Bhopal, Madhya Pradesh, India
          </p>

          <p className='text-gray-500'>
            <span className='font-semibold'>Tel:</span> (415) 555-0132 <br />
            <span className='font-semibold'>Email:</span> contact@trendvenue.com
          </p>

          <p className='font-semibold text-xl text-gray-600'>Careers at TrendAvenue</p>
          <p className='text-gray-500'>
            Learn more about our teams and job openings.
          </p>

          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition duration-300'>
            View Openings
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  )
}

export default Contact
