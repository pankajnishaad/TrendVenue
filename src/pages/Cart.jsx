import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity , navigate} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14 px-4 sm:px-10'>
      <div className='text-2xl mb-6'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div className='space-y-6'>
        {cartData.map((item) => {
          const productData = products.find((product) => product._id === item._id);
          if (!productData) return null;

          return (
            <div
              key={`${item._id}-${item.size}`}
              className='flex flex-col sm:flex-row sm:items-center justify-between border rounded-xl p-4 sm:p-6 shadow-md bg-white'
            >
              {/* Left: Image */}
              <div className='flex items-start gap-4 sm:gap-6'>
                <img
                  className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md'
                  src={productData?.image?.[0] || ''}
                  alt={productData?.name || ''}
                />

                {/* Right: Details */}
                <div className='flex flex-col gap-2 text-gray-800'>
                  <p className='text-base sm:text-lg font-semibold'>
                    {productData.name}
                  </p>
                  <p className='text-sm text-gray-500'>Size: {item.size}</p>

                  <div className='flex items-center gap-2'>
                    <span className='text-sm text-gray-500'>Quantity:</span>
                    <input
                      onChange={(e)=>e.target.value===''|| e.target.value==='0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                      className='border rounded px-2 py-1 w-14 sm:w-20 text-sm'
                      type='number'
                      min={1}
                      defaultValue={item.quantity}
                    />
                  </div>

                  <p className='text-sm font-semibold text-gray-700'>
                    Price: {currency} {productData.price}
                  </p>
                </div>
              </div>

              {/* Bin Icon */}
              <div className='flex justify-end sm:justify-center mt-4 sm:mt-0'>
                <img
                  onClick={()=>updateQuantity(item._id, item.size, 0)}
                  className='w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:opacity-70'
                  src={assets.bin_icon}
                  alt="Delete"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <CartTotal/>
            <div className='w-full text-end'>
              <button onClick={()=>navigate('/place-order')}  className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;
