import React, { useContext, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { TfiShoppingCart } from "react-icons/tfi";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/Context";
import { UserAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { list, search, setSearch } = useContext(ProductContext);
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logOut();
    console.log("You are logout...");
    navigate("/");
  };
  return (
    <div className="w-full h-20 bg-slate-200 shadow-md fixed z-50">
      <div className="md:w-10/12 relative w-full m-auto">
        <div className="w-full h-20  flex justify-between sticky top-20">
          <div
            onClick={() => navigate("/")}
            className="flex flex-row justify-between ml-5 m-auto"
          >
            <div>
              <GiShoppingCart className="text-2xl text-red-950 mr-2" />
            </div>
            <div className="text-xl text-blue-600 font-bold">Shopping.</div>
          </div>
          <div className="flex flex-row  md:w-1/2 justify-center pl-10 mr-4">
            <div className="flex md:w-1/2 w-full justify-between p-5">
              <div className="mr-5">
                <input
                  className="outline-none bg-slate-100 md:inline hidden text-sm text-gray-700 py-2 px-2 rounded-lg"
                  type="text"
                  name="title"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                />
                <BiSearchAlt2
                  onClick={() => setOpen(!open)}
                  className="text-xl md:hidden inline mb-2"
                />
              </div>
              <div className="relative mr-6">
                <span
                  className={`${
                    list.length ? "inline" : "hidden"
                  } px-[4px] absolute top-[-12px] right-[-12px] text-red-50 font-bold text-xs bg-red-500 rounded-3xl`}
                >
                  {list?.length}
                </span>
                <TfiShoppingCart
                  onClick={() => navigate("/lists")}
                  className="text-xl"
                />
              </div>
              <div className="relative">
                <FaRegUser
                  onClick={() => setProfile(!profile)}
                  className="text-xl"
                />

                <div
                  data-popover
                  className={`absolute z-50 right-[-10px] top-[32px] ${
                    profile ? "inline" : "hidden"
                  } w-40 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800`}
                >
                  <div className="px-3 py-2 m-auto bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                    {user ? (
                      <button
                        onClick={() => handleLogOut()}
                        className="font-semibold m-auto text-gray-900 "
                      >
                        Log Out
                      </button>
                    ) : (
                      <Link to={"/login"}>
                      <button  className="font-semibold m-auto text-gray-900 ">
                        Log In
                      </button>
                      </Link>
                    )}
                  </div>
                  <div className="px-2 py-2">
                    {user ? (
                      <p className="text-sm font-semibold">
                        Email : {user.email}
                      </p>
                    ) : (
                      <p className="text-sm font-semibold"> Please log in.</p>
                    )}
                  </div>
                  <div data-popper-arrow></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`w-full md:hidden ${open ? "inline" : "hidden"}`}>
        <input
          className={`outline-none w-full bg-slate-100 ${
            open ? "inline" : "hidden"
          } md:hidden text-sm text-gray-700 py-2 px-2 rounded-b-lg`}
          type="text"
          name="title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
        />
      </div>
    </div>
  );
};
