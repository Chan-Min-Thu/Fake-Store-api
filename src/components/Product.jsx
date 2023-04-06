import React, { useContext, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/Context";

export const Product = ({ product }) => {
  const { fetchEachData,dispatchProduct } = useContext(ProductContext);
  const title = product.title;
  const [add, setAdd] = useState(false);
  return (
    <div
      onClick={() => fetchEachData(product.id)}
      className="min-w-[200px] h-[350px] shadow bg-slate-50 md:m-8 mx-auto my-4 rounded hover:shadow-2xl"
    >
      <div className="mt-2 overflow-hidden w-[200px] ">
        <h2 className="text-sm m-2 font-semibold">
          {title ? title.substring(0, 35) + "..." : title}
        </h2>
      </div>
      <Link to={`/products/:${product.id}`}>
        <div className="w-[160px] h-[180px] m-auto rounded-sm mt-3">
          <img
            className="w-[180px] h-[180px] m-auto rounded-sm hover:scale-105"
            alt="alt---"
            src={product?.image}
          />
        </div>
      </Link>
      <div className="flex justify-between m-auto mx-4 mt-5">
        <span className="font-bold text-sm">${product?.price}</span>
        <div onClick={()=>dispatchProduct({type:"ADD",payload:product})}
          className={`"${add ? "bg-green-300" : "bg-blue-300"} w-2 mr-4 rounded-4xl select-none cursor-pointer`}
        >
          <MdAddShoppingCart
            onClick={() => setAdd(true)}
            className={`${
              add ? "text-green-600 bg-green-200" : "text-blue-600 bg-blue-200"
            } text-xl `}
          />
        </div>
      </div>
      <div className="mt-3 mx-4 flex flex-row text-center">
        <HiStar className="text-xl text-yellow-500 mr-1" />
        <span className="text-base">{product?.rating.rate}</span>
      </div>
    </div>
  );
};
