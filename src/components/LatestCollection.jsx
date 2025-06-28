import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts]=useState([]);
  useEffect(()=>{ setLatestProducts(products.slice(0,10));}, [])

  return (
    <div className='my-10'>
      {/* You can render your product list here */}
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}></Title>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            A perfect blend of style, comfort and elegance crafted to elevate your everyday look with timeless fashion and modern trends.
            </p>

        </div>
      {/* Rendering the products here*/}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item, index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
          
        }
      </div>
    </div>
  );
}

export default LatestCollection;
