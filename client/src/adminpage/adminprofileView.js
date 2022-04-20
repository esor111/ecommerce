import React, { useEffect, useState } from "react";
import { userReuest } from "../requestMethod";
import "./viewadminlist.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const ViewAdminpage = () => {
  let PF= 'http://localhost:5000/images/'
    const [product, setProduct]=useState([])
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getData = async () => {
      let res = await userReuest.get(`/users/${id}`);
      setProduct(res.data)
    };
    getData();
  }, [id]);

  return (
    <>
      <div className="container mt-2 mb-4 p-3 d-flex justify-content-center">
        <div className="card p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            {" "}
            <button className="btn btn-secondary">
              {" "}
 
              {product.img ?<img
                src={PF +product.img}
                height="100"
                width="100"
                alt="sdf"
              /> : <img src="https://www.w3schools.com/w3images/avatar2.png" height="100"
              width="100"
              alt="sdf" />}
            </button>{" "}
            <span className="name mt-3">{product.username}</span>{" "}
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
                1069 <span className="follow">Followers</span>
              </span>{" "}
            </div>
            <div className=" d-flex mt-2">
              {" "}
             <Link to={`/adminuserupdate/${product._id}`}> <button className="btn1 btn-dark" >update User</button></Link>
            </div>
            <div className="text mt-3">
              {" "}
              <span>
              {product.username}
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
      </div>
    </>
  );
};

export default ViewAdminpage;
