import React, { useContext } from "react";
import { HiStar } from "react-icons/hi";
import { ProductContext } from "../context/Context";
import { RxCross2 } from "react-icons/rx"
import { useNavigate } from "react-router-dom";
import { AuthUser } from "../context/AuthContext";

export const Details = () => {
  const { product,dispatchProduct } = useContext(ProductContext);
  const nav = useNavigate();
  const { user } = AuthUser();

  return (
    <div className="flex md:flex-row flex-wrap justify-between w-full m-auto pt-28">
      <RxCross2 onClick={()=>nav("/")} className="md:ml-3 m-5 text-slate-950 text-2xl"/>
      <div className="md:w-4/5 w-11/12 min-h-[400px] m-auto flex md:flex-row flex-wrap  justify-around">
        <div className=" md:w-60 w-11/12 mx-auto my-5">
          <img className="md:w-60 w-11/12" src={product?.image} alt="name" />
        </div>
        <div className=" md:w-3/5 w-full flex flex-col h-3/4 mx-auto p-5 gap-5">
          <h3 className="text-3xl font-extrabold mb-3">{product?.title}</h3>
          <p className="text-sm font-light font-sans">{product?.description}</p>
          <div className="flex justify-between my-3">
            <div className="flex flex-row text-center">
              <div className="mr-1">
                <HiStar className="text-yellow-500 text-2xl" />
              </div>
              <span>{product?.rating?.rate}</span>
            </div>
            <span className="font-medium">Num-{product?.rating?.count}</span>
            <span className="font-bold">${product?.price}</span>
          </div>
          <div className="w-full text-start">
          <button disabled={user} onClick={()=>dispatchProduct({type:"ADD",payload:product})} className="border-blue-500 border-2 p-2 text-sm rounded">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
