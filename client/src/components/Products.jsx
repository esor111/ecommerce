import React, { useEffect, useState } from "react";
import {getProductStart, getProductfaliure, getProductSuccess} from "../redux/productRedux"
import "./style/products.css";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import Product from "../components/Product";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Products = ({ cat, filter, sort }) => {
  const product = useSelector(state=>state.product.products)
  console.log(product)
  const [filterProduct, setFilter] = useState([]);
  const dispatch = useDispatch();


useEffect(()=>{
  const getData=async()=>{
  getProductStart();
  try {
    const res = await publicRequest.get(cat ?`/products?category=${cat}`: "/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    getProductfaliure();
  }
}
getData()
}, [cat ,dispatch])






  useEffect(() => {
    cat &&
      setFilter(
        product.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [product, filter, cat]);

  useEffect(() => {
    if (sort === "newest") {
      setFilter((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === "asc") {
      setFilter((prev) => [...prev].sort((a, b) => b.price - a.price));
    } else {
      setFilter((prev) => [...prev].sort((a, b) => a.price - b.price));
    }
  }, [sort]);

  return (
    <section id="featured" className="">
      <div className="container-fluid text-center ">
        <h3>Our Featured</h3>
        <hr className="mx-auto" />
        <p>here you can check out our new products with price and rymo</p>
        <div className="row mx-auto container-fluid">
          {cat
            ? filterProduct.map((items) => (
                <Product items={items} key={items._id} />
              ))
            : product
                .slice(0, 20)
                .map((items) => <Product items={items} key={items._id} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;


