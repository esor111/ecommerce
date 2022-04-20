import React, { useEffect, useState } from "react";
import "./viewadminlist.css";
import {
  updateProductStart,
  updateProductSuccess,
  updateProductfaliure,
} from "../redux/productRedux";
import { useDispatch } from "react-redux";
import { userReuest } from "../requestMethod";
import { useLocation } from "react-router-dom";
const AdminProductupdate = () => {
  let PF= 'http://localhost:5000/images/'

  const [product, setProduct] = useState({});

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [store, setStore] = useState([]);
  const dispatch = useDispatch();
  const updateHandler = async () => {
    dispatch(updateProductStart());
    try {
      const res = await userReuest.put(`/products/${id}`, store);
      dispatch(updateProductSuccess(res.data));
      window.location.replace("/adminproductlist")
    } catch (err) {
      dispatch(updateProductfaliure());
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    const value = e.target.value;

    setStore({ ...store, [e.target.name]: value });
    console.log(store);
  };

  useEffect(() => {
    const getData = async () => {
      let res = await userReuest.get(`/products/${id}`);
      setProduct(res.data);
    };
    getData();
  }, [id]);

  return (
    <div className="container mt-2 mb-4 p-3  justify-content-center">
      <div className="row">
        <div className="card p-4 col-md-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            {" "}
            <button className="mutton mutton-secondary">
              {" "}
              <img
                src={PF +product.img}
                height="100"
                width="100"
                alt="sdf"
              />
            </button>{" "}
            <span className="name mt-3">{product.title}</span>{" "}
            <span className="idd">@Essorshop</span>
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
              {" "}
              <span className="idd1">{product._id}</span>{" "}
              <span>
                <i className="fa fa-copy"></i>
              </span>{" "}
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
              {" "}
              <span className="number">
                1069 <span className="follow"></span>
              </span>{" "}
            </div>
            <div className=" d-flex mt-2">
              {" "}
              <button className="btn1 mutton-dark"> Update Product</button>{" "}
            </div>
            <div className="text mt-3">
              {" "}
              <span>
                {product.decs}
                <br /> Artist/ Creative Director by Day #NFT minting@ with FND
                night.{" "}
              </span>{" "}
            </div>
            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
              {" "}
              <span>
                <i className="fa fa-twitter"></i>
              </span>{" "}
              <span>
                <i className="fa fa-facebook-f"></i>
              </span>{" "}
              <span>
                <i className="fa fa-instagram"></i>
              </span>{" "}
              <span>
                <i className="fa fa-linkedin"></i>
              </span>{" "}
            </div>
            <div className=" px-2 rounded mt-4 date ">
              {" "}
              <span className="join">Joined May,2021</span>{" "}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <form
            className="form-horizontal"
            action=""
            method="POST"
            onSubmit={submitHandler}
          >
            <fieldset>
              <div id="legend">
                <legend className="">Update</legend>
              </div>
              <div className="control-group mb-3">
                <label className="control-label" for="username">
                  title
                </label>
                <div className="controls">
                  <input
                    type="text"
                    id="username"
                    name="title"
                    placeholder="enter title"
                    className="input-xlarge"
                    onChange={changeHandler}
                  />
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" >
                  decription
                </label>
                <div className="controls">
                  <input
                    type="text"
                    name="decs"
                    placeholder="enter decription"
                    className="input-xlarge"
                    onChange={changeHandler}
                  />
                  <p className="help-block">
                    Password should be at least 4 characters
                  </p>
                </div>
              </div>

              <div className="control-group">
                <label className="control-label" >
                  price
                </label>
                <div className="controls">
                  <input
                    type="number"
                    id="password"
                    name="price"
                    placeholder="enter "
                    className="input-xlarge"
                    onChange={changeHandler}
                  />
                  <p className="help-block">
                    Password should be at least 4 characters
                  </p>
                </div>
              </div>

              <div className="control-group mb-3">
                <label className="control-label" >
                  size
                </label>

                <div className="controls">
                  <select name="size" onChange={changeHandler}>
                    <option>size</option>
                    <option>m</option>
                    <option>xl</option>
                    <option>xxl</option>
                    <option>lg</option>
                  </select>
                </div>

                <div className="controls">
                  <select name="color" onChange={changeHandler}>
                    <option>color</option>
                    <option>red</option>
                    <option>blue</option>
                    <option>yellow</option>
                    <option>green</option>
                  </select>
                </div>
              </div>

              <div className="control-group mb-2">
                <label className="control-label" >
                  category
                </label>
                <div className="controls">
                  <select name="categories" onChange={changeHandler}>
                    <option>category</option>
                    <option>men</option>
                    <option>woman</option>
                    <option>children</option>
                  </select>
                </div>
              </div>

              <button className="coloo" onClick={updateHandler}>
                update
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProductupdate;
