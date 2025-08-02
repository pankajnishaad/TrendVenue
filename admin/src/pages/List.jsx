import React, { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios';

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setList(response.data.product);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4">
      <p className="mb-4 text-lg font-semibold">All Products List</p>

      <div className="hidden md:grid grid-cols-[80px_1fr_1fr_1fr_100px] bg-gray-100 border-b font-medium text-sm px-3 py-2">
        <span>Image</span>
        <span>Name</span>
        <span>Category</span>
        <span>Price</span>
        <span className="text-center">Action</span>
      </div>

      <div className="flex flex-col gap-2">
        {list.length === 0 && (
          <p className="text-center py-8 text-gray-500">No products found.</p>
        )}

        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 md:grid-cols-[80px_1fr_1fr_1fr_100px] items-center gap-3 border-b px-3 py-2 text-sm"
          >
            <img
              className="w-16 h-16 object-cover rounded"
              src={item.image?.[0] || 'https://via.placeholder.com/60'}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p className="hidden md:block">{item.category}</p>
            <p>{currency}{item.price}</p>
            <button
              onClick={() => removeProduct(item._id)}
              className="text-red-600 hover:text-red-800 text-right md:text-center"
              title="Remove Product"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
