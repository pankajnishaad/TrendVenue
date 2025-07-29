import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const cartAmount = getCartAmount();
  const total = cartAmount === 0 ? 0 : cartAmount + delivery_fee;

  return (
    <div className='w-full'>
      <div className='text-2xl mb-4'>
        <Title text1={'CART'} text2={'TOTAL'} />
      </div>

      <div className='flex flex-col gap-2 text-sm'>
        {/* Subtotal */}
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {cartAmount}.00</p>
        </div>
        <hr />

        {/* Shipping Fee */}
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>
        <hr />

        {/* Total */}
        <div className='flex justify-between font-semibold'>
          <b>Total</b>
          <b>{currency} {total}.00</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
