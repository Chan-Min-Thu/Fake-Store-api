import axios from "axios";
import React, { createContext, useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import reducer from "./Reducer";
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [search,setSearch] = useState("");
  const nav = useNavigate();

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const dataResults = response?.data;
    setProducts(dataResults);
    setFilteredProducts(dataResults);
    setLoading(false);
  };
  const fetchEachData = async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const dataResults = response?.data;
    setProduct(dataResults);
  };
  let handleProducts = (e) => {
    setClicked(!clicked);
    if (e.target.title === "") {
      return setFilteredProducts(products);
    } else {
      let filteredProducts = products.filter(
        (p) => p.category === e.target.title
      );
      return setFilteredProducts(filteredProducts);
    }
  };
  const handleSearchProduct = (e)=>{
     let searchProducts = products.filter(product=>product.title.toLowerCase().includes(search.toLowerCase()))
     if(searchProducts.length){ 
      nav("/")
      return setFilteredProducts(searchProducts)

     }else{
      return setFilteredProducts([])
     }
     
  }
  // useEffect(()=>{
    
  // },[search])
  useEffect(() => {
    fetchEachData();
    handleSearchProduct();
  }, [search]);

  useEffect(() => {
    fetchData();
  }, []);
  const [list, dispatchProduct] = useReducer(reducer,[]);
  return (
    <ProductContext.Provider
      value={{
        loading,
        filteredProducts,
        clicked,
        product,
        list,
        search,
        setSearch,
        setClicked,
        fetchEachData,
        handleProducts,
        dispatchProduct,
     
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
