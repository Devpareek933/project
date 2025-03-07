import React from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
          <p className="text-sm line-through text-gray-500">₹{product.originalPrice}</p>
          <p className="text-sm text-green-600">{product.discount}% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;