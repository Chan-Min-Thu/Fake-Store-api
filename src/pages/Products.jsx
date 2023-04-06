import React, { useContext,useState} from "react";
import { Product } from "../components/Product";
import { ProductContext } from "../context/Context";
import { HiMenu } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import '../index.css'


export const Products = () => {
  const { filteredProducts, loading,handleProducts} = useContext(ProductContext);
  const [open,setOpen] = useState(true);
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // useEffect(() => {
  //   window.scrollY()
  // }, [])
  

  return (
    <div className="w-full bg-slate-200 m-auto pt-36 relative">
      <div>
      <HiMenu className={`md:hidden ${open?"inline":"hidden"} fixed z-30 ml-2 top-[150px]`} onClick={()=>setOpen(!open)}/>
        <ul className={`md:flex md:flex-row md:static md:shadow-none shadow-lg md:z-0 p-2 fixed z-30 ${open? "hidden":"flex"} flex-col md:bg-slate-200 bg-gray-300 md:w-9/12 md:rounded-none rounded-r-md w-auto md:h-10 h-[160px] justify-around font-extrabold md:text-xl text-xs mb-4  md:border-b-2  overflew-scroll border-slate-900 md:m-auto`}>
          <li className="md:hidden mb-1">
          <RxCross2 className={`md:hidden ${open?"hidden":"inline"} text-lg`} onClick={()=>setOpen(!open)}/>
          </li>
          <li className="border-gray-400 border-b-[2px] w-16 md:w-0 text-center md:bg-slate-200 mb-2">
            <button title=""  onClick={(e) =>handleProducts(e)} >All</button>
          </li>
          <li className="border-gray-400 border-b-[2px] w-16 md:w-0 text-center md:bg-slate-200 mb-2">
            <button title="men's clothing"  onClick={(e) => handleProducts(e)}>Men</button>
          </li>
          <li className="border-gray-400 border-b-[2px] w-16 md:w-0 text-center md:bg-slate-200 mb-2">
            <button title="women's clothing"  onClick={(e) =>handleProducts(e)}>Women</button>
          </li>
          <li className="border-gray-400 border-b-[2px] w-16 md:w-0 text-center md:bg-slate-200 mb-2">
            <button title="electronics"  onClick={(e) =>handleProducts(e)}>Electronics</button>
          </li>
          <li className="border-gray-400 border-b-[2px] w-16 md:w-0 text-center md:bg-slate-200 mb-2">
            <button title="jewelery"  onClick={(e) =>handleProducts(e)}>Jewelery</button>
          </li>
        </ul>
      </div>
      <div className="w-11/12 min-h-screen m-auto">
        <div className="max-w-10/12 mt-6 m-auto flex flex-row flex-wrap justify-center">
          {loading
           ? list.map((list) => (
                <div key={list}>
                  <div className="w-[200px] h-[300px] shadow-sm bg-slate-300 m-4 rounded">
                    <div className="mt-2 overflow-hidden w-[180px] mx-auto h-4 bg-slate-300 mb-3"></div>
                    <div className="w-[160px] h-[180px] m-auto rounded-sm mt-3 bg-slate-300"></div>
                  </div>
                </div>
              ))
            : filteredProducts.length ?filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
              )):<h1 className="text-2xl font-bold mt-10 m-auto">Your SearchResult is not found.</h1>}
        </div>
      </div>
    </div>
  );
};
