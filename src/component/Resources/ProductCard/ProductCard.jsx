import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product, discountPercentage }) {
  return (
    <div
      key={product.id}
      className="cursor-pointer bg-white border border-gray-200 p-3 rounded-xl transition-all duration-300 group"
    >
      <Link href={`/product/${product.slug}`}>
        <div className="relative w-full h-[250px] rounded-lg overflow-hidden mb-3">
          <Image
            src={product.thumbnail}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <h3 className="text-sm font-semibold line-clamp-2 text-black mb-2">
          {product.name}
        </h3>

        <div className="flex justify-between items-center mb-2">
          <p className="text-base font-bold text-black whitespace-nowrap">
            ৳{parseFloat(product.discount_price).toLocaleString()}
          </p>
          <p className="text-xs text-gray-500">
            Stock: {product.available_stock}
          </p>
        </div>

        <div className="flex justify-between items-center mb-1">
          <p className="text-xs text-gray-500 italic">
            ({discountPercentage}% Off)
          </p>
          <p className="text-sm text-gray-400 line-through">
            ৳{parseFloat(product.regular_price).toLocaleString()}
          </p>
        </div>

        <div className="flex items-center text-xs gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < product.rating_avg ? "text-black" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-1 text-gray-500">({product.rating_count})</span>
        </div>
      </Link>
    </div>
  );
}
