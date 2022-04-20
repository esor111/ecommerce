import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./mainadmin.css";
import { userReuest } from "../requestMethod";
const MainAdmin = () => {
  const [newuser, setNewUser] = useState([]);
  useEffect(() => {
    const getuser = async () => {
      let res = await userReuest.get("/users?new=true");
      setNewUser(res.data);
    };
    getuser();
  }, []);

  return (
    <div>
      <div>
        <div className="containerr">
          <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark"
            style={{ zIndex: "99", width: "100%", textAlign: "center" }}
          >
            <div className="container-fluid">
              <Link to="#" className="navbar-brand">
                Brand
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav bg-dark color-white z-index-n1 position-relative">
                  <Link to="/" className="nav-item nav-link active">
                    Home
                  </Link>
                  <Link
                    to="/adminproductlist"
                    className="nav-item nav-link active"
                  >
                    productslist
                  </Link>
                  <Link
                    to="/adminuserlist"
                    className="nav-item nav-link active"
                  >
                    UsersList
                  </Link>
                 
                </div>
                <form className="d-flex">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <button type="button" className="btn btn-secondary">
                      <i className="bi-search"></i>
                    </button>
                  </div>
                </form>
                <div className="navbar-nav">
                  <Link to="/login" className="nav-item nav-link">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <main>
            <div className="main__container">
              <div className="main__title">
                <img src="assets/hello.svg" alt="" />
              </div>

              <div className="main__cards">
                <div className="card">
                  <Link to="/adminuserlist" style={{ textDecoration: "none" }}>
                    <i
                      className="fa fa-user-o fa-2x text-lightblue"
                      aria-hidden="true"
                    ></i>
                    <div className="card_inner">
                      <p className="text-primary-p">VIEW USER LISTS</p>
                      <span className="font-bold text-title">6</span>
                    </div>
                  </Link>
                </div>

                <div className="card">
                  <Link
                    to="/adminproductlist"
                    style={{ textDecoration: "none" }}
                  >
                    <i
                      className="fa fa-video-camera fa-2x text-yellow"
                      aria-hidden="true"
                    ></i>
                    <div className="card_inner">
                      <p className="text-primary-p">VIEW PRODUCT LISTS</p>
                      <span className="font-bold text-title">40</span>
                    </div>
                  </Link>
                </div>

                <div className="card">
             
                <Link
                to="/newproduct"
                style={{ textDecoration: "none" }}
              >
                <i
                  className="fa fa-video-camera fa-2x text-yellow"
                  aria-hidden="true"
                ></i>
                <div className="card_inner">
                  <p className="text-primary-p">CREATE NEW PRODUCT</p>
                  <span className="font-bold text-title">40</span>
                </div>
              </Link>


                </div>



              </div>
              <div className="charts">
                <div className="charts__left">
                  <div className="charts__left__title">
                    <div>
                      <h1>newly join members</h1>
                      <p>kathmandu, nepal</p>
                    </div>
                    <i className="fa fa-usd" aria-hidden="true"></i>
                  </div>
                  {newuser.map((user) => (
                    <>
                      <div id="apex1">
                        <div className="container border align-items-center p-2">
                          <div className="row justify-content-between align-items-center">
                            <div className="col-md-2">
                              <img
                                className="img-fluid"
                                src="https://www.w3schools.com/w3images/avatar2.png"
                                alt=""
                              />
                            </div>

                            <div className="col-md-2">
                              <p>{user.username}</p>
                            </div>

                            <div className="col-md-4 d-flex">
                              <i className="fa fa-eye" aria-hidden="true"></i>

                              <p>{user.email}</p>
                            </div>


                            <div className="col-md-2 d-flex">
                            <i className="fa fa-eye" aria-hidden="true"></i>

                            <p>Dispaly</p>
                          </div>

                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>

                <div className="charts__right">
                  <div className="charts__right__title">
                    <div>
                      <h1>Stats Reports</h1>
                      <p>kathmandu, Nepal</p>
                    </div>
                    <i className="fa fa-usd" aria-hidden="true"></i>
                  </div>

                  <div className="charts__right__cards">
                    <div className="card1">
                      <h1>Income</h1>
                      <p>$75,300</p>
                    </div>

                    <div className="card2">
                      <h1>Sales</h1>
                      <p>$124,200</p>
                    </div>

                    <div className="card3">
                      <h1>Users</h1>
                      <p>3900</p>
                    </div>

                    <div className="card4">
                      <h1>Orders</h1>
                      <p>1881</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <div id="sidebar">
            <div className="sidebar__title">
              <div className="sidebar__img">
                <img
                  src="./logo192.png"
                  alt="logo"
                  className="img-fluid one"
                  style={{ width: "50px" }}
                />
                <Link to="/" style={{ textDecoration: "none" }}>
                  {" "}
                  <h2> Essor Shop</h2>
                </Link>
              </div>
              <i
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
              ></i>
            </div>

            <div className="sidebar__menu">
              <div className="sidebar__link active_menu_link">
                <i className="fa fa-home"></i>
                <Link to="/">Home</Link>
              </div>
              <h2>MNG</h2>
              <div className="sidebar__link">
                <i className="fa fa-user-secret" aria-hidden="true"></i>
                <Link to="/adminuserlist">UsersList</Link>
              </div>
              <div className="sidebar__link">
                <i className="fa fa-building-o"></i>
                <Link to="/adminproductlist">ProductList</Link>
              </div>
              <div className="sidebar__link">
                <i className="fa fa-wrench"></i>
                <Link to="#">Employee Management</Link>
              </div>
              <div className="sidebar__link">
                <i className="fa fa-archive"></i>
                <Link to="#">Warehouse</Link>
              </div>
              <div className="sidebar__link">
                <i className="fa fa-handshake-o"></i>
                <Link to="#">Contracts</Link>
              </div>
              <h2>LEAVE</h2>
              <div className="sidebar__link">
                <i className="fa fa-question"></i>
                <Link to="#">Requests</Link>
              </div>
              <div className="sidebar__link">
                <i className="fa fa-sign-out"></i>
                <Link to="#">Leave Policy</Link>
              </div>

              <div className="sidebar__logout">
                <i className="fa fa-power-off"></i>
                <Link to="#">Log out</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAdmin;
