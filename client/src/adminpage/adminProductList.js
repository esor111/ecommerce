import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./adminuser.css";
import {
  getProductStart,
  getProductSuccess,
  getProductfaliure,
} from "../redux/productRedux";
import {
  deleteProductStart,
  deleteProductSuccess,
  deleteProductfaliure,
} from "../redux/productRedux";
import { userReuest } from "../requestMethod";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const AdminProductList = () => {
  const PF = "http://localhost:5000/images/";

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products);
  const [Product, setProduct] = useState([]);
  const deleteHandler = async (id) => {
    dispatch(deleteProductStart());
    try {
      let res = await userReuest.delete(`/products/${id}`);
      dispatch(deleteProductSuccess(res.data));
      window.location.replace("/adminproductlist");
    } catch (err) {
      dispatch(deleteProductfaliure());
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const getProduct = async () => {
      dispatch(getProductStart());

      try {
        let res = await userReuest.get("/products");
        dispatch(getProductSuccess(res.data));

        setProduct(res.data);
      } catch (err) {
        dispatch(getProductfaliure());
      }
    };

    getProduct();
  }, [dispatch]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
        crossOrigin="anonymous"
      />
      <div className="row justify-content-around">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="container-fluid mt-3 mb-4 col-md-9">
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="row">
              <form onSubmit={submitHandler}>
                <div className="col-md-12 mx-auto">
                  <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                    <table className="table manage-candidates-top mb-0">
                      <thead>
                        <tr>
                          <th>Products Name</th>
                          <th className="text-center">Price</th>
                          <th className="action text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.map((product) => (
                          <tr className="candidates-list" key={product._id}>
                            <td className="title">
                              <Link  to={`/viewadminpage/${product._id}`}>
                              <div className="thumb">
                                <img
                                  className="img-fluid"
                                  src={PF + product.img}
                                  alt=""
                                />
                              </div>
                              </Link>
                              <div className="candidate-list-details">
                                <div className="candidate-list-info">
                                  <div className="candidate-list-title">
                                    <h5 className="mb-0">{product.title}</h5>
                                  </div>
                                  <div className="candidate-list-option">
                                    <ul className="list-unstyled">
                                      <li>
                                        <i className="fas fa-filter pr-1"></i>
                                        {product._id}
                                      </li>
                                      <li>
                                        <i className="fas fa-map-marker-alt pr-1"></i>
                                        kathmandu nepal, IL 60008
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="candidate-list-favourite-time text-center">
                              <Link
                                className="candidate-list-favourite order-2 text-danger"
                                href="hey"
                              >
                                <i className="fas fa-price"></i>
                              </Link>
                              <span className="candidate-list-time order-1">
                                {product.price}
                              </span>
                            </td>

                            <td>
                              <ul className="list-unstyled mb-0 d-flex justify-content-end">
                                <li>
                                  <Link
                                    to={`/viewadminpage/${product._id}`}
                                    href="hey"
                                    className="text-primary"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="view"
                                  >
                                    <i className="far fa-eye"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`/adminproductupdate/${product._id}`}
                                    href="hey"
                                    className="text-info"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Edit"
                                  >
                                    <i className="fas fa-pencil-alt"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="hey"
                                    className="text-danger"
                                    data-toggle="tooltip"
                                    title=""
                                    data-original-title="Delete"
                                  >
                                    <div
                                      onClick={() => deleteHandler(product._id)}
                                    >
                                      {" "}
                                      <i className="far fa-trash-alt"></i>
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="text-center mt-3 mt-sm-3">
                      <ul className="pagination justify-content-center mb-0">
                        <li className="page-item disabled">
                          {" "}
                          <span className="page-link">Prev</span>{" "}
                        </li>
                        <li className="page-item active" aria-current="page">
                          <span className="page-link">1 </span>{" "}
                          <span className="sr-only">(current)</span>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="hey">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="hey">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="hey">
                            ...
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="hey">
                            25
                          </Link>
                        </li>
                        <li className="page-item">
                          {" "}
                          <Link className="page-link" href="hey">
                            Next
                          </Link>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProductList;
