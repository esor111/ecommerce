import React, { useEffect } from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Navbar from "../components/Navbar"
import Success from "../pages/Success"
import {getProductStart, getProductfaliure, getProductSuccess} from "../redux/productRedux"
import { publicRequest } from "../requestMethod";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer"

const Home = () => {
  const dispatch =useDispatch()

  useEffect(()=>{
    const getData=async()=>{
    getProductStart();
    try {
      const res = await publicRequest.get("/products");
      dispatch(getProductSuccess(res.data));
    } catch (err) {
      getProductfaliure();
    }
  }
  getData()
  }, [dispatch])
  

  return (
    <div>
    <Navbar/>
    <Success/>
      <Categories />
      <Products/>
      <div className="mt-5 bg-secondary">
      <Footer/>

      </div>
    </div>
  );
};

export default Home;




