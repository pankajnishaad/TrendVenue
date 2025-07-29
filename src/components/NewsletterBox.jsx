import React from 'react';

const NewsletterBox = () => {
  return (
    <div className="text-center px-4 py-8">
      <p className="text-2xl font-semibold text-gray-800">Subscribe now & get 90% off</p>
      <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
        Stay updated with our latest offers and insights. Enter your email below to subscribe to our newsletter and enjoy exclusive discounts.
      </p>

      <form
        className="w-full sm:w-2/3 md:w-1/2 flex flex-col sm:flex-row items-center gap-3 mx-auto mt-6 border border-gray-300 p-2 rounded-md"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Subscribe to newsletter"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 outline-none border-none text-sm"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-sm px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
