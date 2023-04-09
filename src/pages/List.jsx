import React, { useContext } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ProductContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

export const List = () => {
  const { list, dispatchProduct } = useContext(ProductContext);
  const nav = useNavigate();
  let price = list.map((p) => p.price * p.qty);
  const total = price.reduce((a, b) => a + b, 0);
  return (
    <div className="flex md:flex-row flex-col m-auto pt-32">
      <IoMdArrowRoundBack
        onClick={() => nav("/")}
        className="font-bold text-2xl"
      />
      <div className="flex md:justify-center justify-start flex-col md:w-5/12 w-full m-2 md:m-auto">
        <table className="md:w-full w-11/12 text-sm text-left  text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-slate-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="md:px-6 px-1 py-3">
                <span className="md:px-6 px-1 py-3">Image</span>
              </th>
              <th scope="col" className="md:px-6 px-1 py-3">
                Quentity
              </th>
              <th scope="col" className="md:px-6 px-1 py-3">
                Price
              </th>
              <th scope="col" className="md:px-6 px-1 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map(
              (product) =>
                product.qty > 0 && (
                  <tr
                    key={product.id}
                    className="bg-white-100  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="md:w-18 w-5 md:px-6 px-1">
                      <img
                        className="md:w-full w-5"
                        src={product.image}
                        alt="Apple Watch"
                      />
                    </td>
                   
                    <td className="md:px-6 px-1 py-4">
                      <div className="flex items-center w-28 m-auto space-x-3">
                        <button
                          onClick={() =>
                            dispatchProduct({
                              type: "DECRASE",
                              payload: product,
                            })
                          }
                          className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <div className="w-5">
                          <span>{product.qty}</span>
                        </div>
                        <button
                          onClick={() =>
                            dispatchProduct({ type: "ADD", payload: product })
                          }
                          className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="md:px-6 px-2 font-semibold text-gray-900 w-18 dark:text-white">
                      {(product.qty * product.price).toFixed(2)}
                    </td>
                    <td className="md:px-6 px-2">
                      <p
                        onClick={() =>
                          dispatchProduct({
                            type: "DELETE",
                            payload: product,
                          })
                        }
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Remove
                      </p>
                    </td>
                  </tr>
                )
            )}
            {list.length? (
              <tr className="bg-white-200  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="md:px-6 px-1 py-4 text-xl">
                  <button onClick={()=>nav('/order')} className="font-bold text-yellow-500 border-yellow-200 bg-yellow-200 rounded px-2 py-1 hover:border-yellow-300 border-2">Order</button>
                </td>
                <td className="md:px-6 px-1 py-4 text-xl font-semibold">Total</td>
                <td className="md:px-6 px-1 py-4  text-right text-xl">
                  <HiArrowNarrowRight />
                </td>
                <td className="md:px-6 px-1 py-4 text-2xl font-bold">
                  ${total.toFixed(2)}
                </td>
              </tr>
            ):<></>}
          </tbody>
        </table>
        {list.length === 0 && (
          <div
            key={list.length}
            className="text-center m-auto text-xl font-bold mt-24"
          >
            There is no selected products.
          </div>
        )}
      </div>
    </div>
  );
};
