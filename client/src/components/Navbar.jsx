import React from "react";
import "./style/navbar.css";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../redux/userRedux";
const Navbar = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart?.quantity);
  const user = useSelector((state) => state.user?.currentUser);
  const username = useSelector((state) => state.user.currentUser?.username);
  const isAdmin = useSelector(state=>state.user.currentUser?.isAdmin)

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess());
    window.location.replace("/login");
  };

const adminHandler=()=>{
  if(!isAdmin){
    alert(`sorry  ` +  username  + '  only admin can access this dashboard')
  }

}


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-1 fixed-top">
      <div className="container">
        <Link
          className="navbar-brand d-flex justify-content-between align-items-center order-lg-0"
          to="/"
        >
          <img src="../logo192.png" alt="" />
          <span className="text-uppercase fw-lighter ms-2">Essor</span>
        </Link>

        <div className="order-lg-2 nav-btns">
          <Link to="/cart">
            <button type="button" className="btn position-relative">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </button>
          </Link>
          {user ? (
            <Link to="/login"  onClick={logoutHandler}>
              <button
                type="button"
                className="btn position-relative btn-primary"
              >
                <h4>Logout</h4>
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button
                type="button"
                className="btn position-relative btn-primary"
              >
                <h4>Login</h4>
              </button>
            </Link>
          )}
        </div>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse order-lg-1 bg-dark"
          id="navMenu"
        >
          <ul className="navbar-nav mx-auto text-center text-light">
            <li className="nav-item px-2 py-2 text-light">
              <Link className="nav-link text-uppercase text-light" to="/">
                home
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link
                className="nav-link text-uppercase text-light"
                
              >
                products
              </Link>
            </li>
            <li className="nav-item px-2 py-2">
              <Link className="nav-link text-uppercase text-light">
                specials
              </Link>
            </li>
   
            <li className="nav-item px-2 py-2">
              <Link
                className="nav-link text-uppercase text-light"
                onClick={logoutHandler}
              >
                Logout
              </Link>
            </li>
            <li className="nav-item px-2 py-2 border-0">
              <Link
                className="nav-link text-uppercase text-light"
                to="/dashboard"
                onClick={adminHandler}
              >
                dashboard
              </Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
