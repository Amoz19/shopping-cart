import React from "react";

const ProductCard = ({ products }) => {
  return (
    <div className="grid grid-cols-4 px-20">
      {products.map((product) => (
        <div key={product.id} className="bg-blue-100 w-fit rounded-lg my-5">
          <img
            src={product.albumImage}
            className="w-52 object-cover h-32 rounded-lg"
          />
          <div className="py-3 text-center">
            <h1 className="text-zinc-800/70">Ablumn : {product.albumName}</h1>
            <p className="text-zinc-800/70">Artist : {product.artist}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex">
              <button className="bg-white px-3 rounded-sm">+</button>
              <p className="px-2">1</p>
              <button className="bg-white px-3 rounded-sm">-</button>
            </div>
            <button className="bg-green-900 text-white px-1 rounded-sm my-3">
              Add to chart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
