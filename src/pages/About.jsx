import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About TrendVenue" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>

          <p>
            <strong>TrendVenue</strong> is a modern lifestyle and fashion destination that delivers high-quality products with seamless service. Our mission is to help individuals express themselves through curated collections and a trusted online experience.
          </p>

          <p>
            We bring handpicked styles that reflect confidence and personality, ensuring every interaction feels inspiring and valued. Whether it’s our easy exchange policy, secure payment system, or fast delivery, we’re committed to giving our customers a premium, worry-free shopping experience.
          </p>

          <h2 className='text-xl font-semibold text-gray-800'>Our Mission</h2>
          <p>
            At TrendVenue, our mission is to empower individuals to express their unique style through thoughtfully curated, high-quality products. We strive to deliver a seamless and reliable shopping experience by blending fashion-forward designs with exceptional service. Our goal is to create a brand that stands for confidence, creativity, and customer satisfaction in every interaction.
          </p>
          
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>

        {/* Quality Assurance */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>
            We are committed to offering only the best. Each product is carefully quality-checked to ensure durability, performance, and customer satisfaction. When you shop at TrendVenue, you're investing in long-lasting, premium products.
          </p>
        </div>

        {/* Convenience */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>
            From fast delivery to easy returns, we make shopping simple and stress-free. Our user-friendly platform and seamless checkout process ensure that your experience is smooth from start to finish.
          </p>
        </div>

        {/* Exceptional Customer Service */}
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>
            Our dedicated support team is here for you 24/7. Whether you have questions, need help with an order, or want to give feedback, we’re always just a message away—ready to assist with warmth and professionalism.
          </p>
        </div>

      </div>

      {/* Newsletter Box */}
      <NewsletterBox />
    </div>
  )
}

export default About
