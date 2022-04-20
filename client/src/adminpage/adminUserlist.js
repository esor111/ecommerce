import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./adminuser.css";
import { useDispatch, useSelector } from "react-redux";

import { userReuest } from "../requestMethod";
import {
  getuserStart,
  getuserSuccess,
  getuserfaliure,
  deleteuserStart,
  deleteuserSuccess, deleteuserfaliure,
} from "../redux/crudUser";
const AdminUserlist = () => {
  const PF= 'http//:localhost/5000/images'
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const users = useSelector((state) => state.cuser.cuser);

  useEffect(() => {
    const getuser = async () => {
      try {
        dispatch(getuserStart());
        let res = await userReuest.get("/users");
        dispatch(getuserSuccess(res.data));
        setUser(res.data);
      } catch (err) {
        dispatch(getuserfaliure());
      }
    };
    getuser();
  }, [dispatch]);


  const deleteHandler = async (id) => {
    console.log(id)
    dispatch(deleteuserStart());
    try {
      let res= await userReuest.delete(`/users/${id}`);
      dispatch(deleteuserSuccess(res.data));
      window.location.replace("/adminuserlist")
    } catch (err) {
      dispatch(deleteuserfaliure());
    }
  };

const submitHandler=(e)=>{
e.preventDefault()
}


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
                        <th>Users Name</th>
                        <th className="text-center"></th>
                        <th className="action text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((product) => (
                        <tr className="candidates-list shadow" key={product._id}>
                          <td className="title">
                          <Link to={`/adminprofileview/${product._id}`}>
                          <div className="thumb">
                          {product.img ?     <img
                                className="img-fluid"
                                src={PF +product.img}
                                alt=""
                              /> : <img
                              className="img-fluid"
                              src="https://www.w3schools.com/w3images/avatar2.png"
                              alt=""
                            />}
                              
                            </div>
                          </Link>
                           
                            <div className="candidate-list-details">
                              <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                  <h5 className="mb-0">
                                  {product.username}
                                  </h5>
                                </div>
                                <div className="candidate-list-option">
                                  <ul className="list-unstyled">
                                    <li>
                                      <i className="fas fa-filter pr-1"></i>
                                      {product._id}
                                    </li>
                                    <li>
                                      <i className="fas fa-map-marker-alt pr-1"></i>
                                      {product.email}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td>
                            <ul className="list-unstyled mb-0 d-flex justify-content-end">
                              <li>
                                <Link
                                to={`/adminprofileview/${product._id}`}
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
                                to={`/adminuserupdate/${product._id}`}
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
                                 <div onClick={()=>deleteHandler(product._id)}> <i
                                 className="far fa-trash-alt"
                                 
                               ></i></div>
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

export default AdminUserlist;
