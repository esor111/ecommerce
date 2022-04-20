import React from "react";
import { Link } from "react-router-dom";
import "./adminuser.css"
import "../style.css"
const AdminProductList = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
        crossorigin="anonymous"
      />
<div className="row justify-content-around">

<div id="sidebar" className="col-md-3">
<div className="sidebar__title">
  <div className="sidebar__img">
    <img src="assets/logo.png" alt="logo" />
    <h1>Codersbite</h1>
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
    <Link to="#">Dashboard</Link>
  </div>
  <h2>MNG</h2>
  <div className="sidebar__link">
    <i className="fa fa-user-secret" aria-hidden="true"></i>
    <Link to="/adminproductlist">UsersList</Link>
  </div>
  <div className="sidebar__link">
    <i className="fa fa-building-o"></i>
    <Link to="#">Company Management</Link>
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
  <div className="sidebar__link">
    <i className="fa fa-calendar-check-o"></i>
    <Link to="#">Special Days</Link>
  </div>
  <div className="sidebar__link">
    <i className="fa fa-files-o"></i>
    <Link to="#">Apply for leave</Link>
  </div>
  <h2>PAYROLL</h2>
  <div className="sidebar__link">
    <i className="fa fa-money"></i>
    <Link to="#">Payroll</Link>
  </div>
  <div className="sidebar__link">
    <i className="fa fa-briefcase"></i>
    <Link to="#">Paygrade</Link>
  </div>
  <div className="sidebar__logout">
    <i className="fa fa-power-off"></i>
    <Link to="#">Log out</Link>
  </div>
</div>
</div>


      <div class="container-fluid mt-3 mb-4 col-md-9">
        <div class="col-lg-9 mt-4 mt-lg-0">
          <div class="row">
            <div class="col-md-12 mx-auto">
              <div class="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                <table class="table manage-candidates-top mb-0">
                  <thead>
                    <tr>
                      <th>Candidate Name</th>
                      <th class="text-center">Status</th>
                      <th class="action text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="candidates-list">
                      <td class="title">
                        <div class="thumb">
                          <img
                            class="img-fluid"
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt=""
                          />
                        </div>
                        <div class="candidate-list-details">
                          <div class="candidate-list-info">
                            <div class="candidate-list-title">
                              <h5 class="mb-0">
                                <Link href="#">Brooke Kelly</Link>
                              </h5>
                            </div>
                            <div class="candidate-list-option">
                              <ul class="list-unstyled">
                                <li>
                                  <i class="fas fa-filter pr-1"></i>Information
                                  Technology
                                </li>
                                <li>
                                  <i class="fas fa-map-marker-alt pr-1"></i>
                                  Rolling Meadows, IL 60008
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="candidate-list-favourite-time text-center">
                        <Link
                          class="candidate-list-favourite order-2 text-danger"
                          href="#"
                        >
                          <i class="fas fa-heart"></i>
                        </Link>
                        <span class="candidate-list-time order-1">
                          Shortlisted
                        </span>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-end">
                          <li>
                            <Link
                              href="#"
                              class="text-primary"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="view"
                            >
                              <i class="far fa-eye"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              class="text-info"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Edit"
                            >
                              <i class="fas fa-pencil-alt"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              class="text-danger"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Delete"
                            >
                              <i class="far fa-trash-alt"></i>
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr class="candidates-list">
                      <td class="title">
                        <div class="thumb">
                          <img
                            class="img-fluid"
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            alt=""
                          />
                        </div>
                        <div class="candidate-list-details">
                          <div class="candidate-list-info">
                            <div class="candidate-list-title">
                              <h5 class="mb-0">
                                <Link href="#">Ronald Bradley</Link>
                              </h5>
                            </div>
                            <div class="candidate-list-option">
                              <ul class="list-unstyled">
                                <li>
                                  <i class="fas fa-filter pr-1"></i>Human
                                  Resources
                                </li>
                                <li>
                                  <i class="fas fa-map-marker-alt pr-1"></i>
                                  Monroe Township, NJ 08831
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="candidate-list-favourite-time text-center">
                        <Link
                          class="candidate-list-favourite order-2 text-danger"
                          href="#"
                        >
                          <i class="fas fa-heart"></i>
                        </Link>
                        <span class="candidate-list-time order-1">
                          Shortlisted
                        </span>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-end">
                          <li>
                            <Link
                              href="#"
                              class="text-primary"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="view"
                            >
                              <i class="far fa-eye"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              class="text-info"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Edit"
                            >
                              <i class="fas fa-pencil-alt"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              class="text-danger"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Delete"
                            >
                              <i class="far fa-trash-alt"></i>
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr class="candidates-list">
                      <td class="title">
                        <div class="thumb">
                          <img
                            class="img-fluid"
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                            alt=""
                          />
                        </div>
                        <div class="candidate-list-details">
                          <div class="candidate-list-info">
                            <div class="candidate-list-title">
                              <h5 class="mb-0">
                                <Link href="#">Rafael Briggs</Link>
                              </h5>
                            </div>
                            <div class="candidate-list-option">
                              <ul class="list-unstyled">
                                <li>
                                  <i class="fas fa-filter pr-1"></i>Recruitment
                                  Consultancy
                                </li>
                                <li>
                                  <i class="fas fa-map-marker-alt pr-1"></i>
                                  Haines City, FL 33844
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="candidate-list-favourite-time text-center">
                        <Link
                          class="candidate-list-favourite order-2 text-danger"
                          href="#"
                        >
                          <i class="fas fa-heart"></i>
                        </Link>
                        <span class="candidate-list-time order-1">
                          Shortlisted
                        </span>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-end">
                          <li>
                            <Link
                              href="#"
                              class="text-primary"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="view"
                            >
                              <i class="far fa-eye"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              class="text-info"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Edit"
                            >
                              <i class="fas fa-pencil-alt"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              class="text-danger"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Delete"
                            >
                              <i class="far fa-trash-alt"></i>
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr class="candidates-list">
                      <td class="title">
                        <div class="thumb">
                          <img
                            class="img-fluid"
                            src="https://bootdey.com/img/Content/avatar/avatar3.png"
                            alt=""
                          />
                        </div>
                        <div class="candidate-list-details">
                          <div class="candidate-list-info">
                            <div class="candidate-list-title">
                              <h5 class="mb-0">
                                <Link href="#">Vickie Meyer</Link>
                              </h5>
                            </div>
                            <div class="candidate-list-option">
                              <ul class="list-unstyled">
                                <li>
                                  <i class="fas fa-filter pr-1"></i>Human
                                  Resources
                                </li>
                                <li>
                                  <i class="fas fa-map-marker-alt pr-1"></i>
                                  Minneapolis, MN 55406
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="candidate-list-favourite-time text-center">
                        <Link
                          class="candidate-list-favourite order-2 text-danger"
                          href="#"
                        >
                          <i class="fas fa-heart"></i>
                        </Link>
                        <span class="candidate-list-time order-1">
                          Shortlisted
                        </span>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-end">
                          <li>
                            <Link
                              href="#"
                              class="text-primary"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="view"
                            >
                              <i class="far fa-eye"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              class="text-info"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Edit"
                            >
                              <i class="fas fa-pencil-alt"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              class="text-danger"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Delete"
                            >
                              <i class="far fa-trash-alt"></i>
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr class="candidates-list">
                      <td class="title">
                        <div class="thumb">
                          <img
                            class="img-fluid"
                            src="https://bootdey.com/img/Content/avatar/avatar4.png"
                            alt=""
                          />
                        </div>
                        <div class="candidate-list-details">
                          <div class="candidate-list-info">
                            <div class="candidate-list-title">
                              <h5 class="mb-0">
                                <Link href="#">Nichole Haynes</Link>
                              </h5>
                            </div>
                            <div class="candidate-list-option">
                              <ul class="list-unstyled">
                                <li>
                                  <i class="fas fa-filter pr-1"></i>Information
                                  Technology
                                </li>
                                <li>
                                  <i class="fas fa-map-marker-alt pr-1"></i>
                                  Botchergate, Carlisle
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="candidate-list-favourite-time text-center">
                        <Link
                          class="candidate-list-favourite order-2 text-danger"
                          href="#"
                        >
                          <i class="fas fa-heart"></i>
                        </Link>
                        <span class="candidate-list-time order-1">
                          Shortlisted
                        </span>
                      </td>
                      <td>
                        <ul class="list-unstyled mb-0 d-flex justify-content-end">
                          <li>
                            <Link
                              href="#"
                              class="text-primary"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="view"
                            >
                              <i class="far fa-eye"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              class="text-info"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Edit"
                            >
                              <i class="fas fa-pencil-alt"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              class="text-danger"
                              data-toggle="tooltip"
                              title=""
                              data-original-title="Delete"
                            >
                              <i class="far fa-trash-alt"></i>
                            </Link>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="text-center mt-3 mt-sm-3">
                  <ul class="pagination justify-content-center mb-0">
                    <li class="page-item disabled">
                      {" "}
                      <span class="page-link">Prev</span>{" "}
                    </li>
                    <li class="page-item active" aria-current="page">
                      <span class="page-link">1 </span>{" "}
                      <span class="sr-only">(current)</span>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        2
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        ...
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" href="#">
                        25
                      </Link>
                    </li>
                    <li class="page-item">
                      {" "}
                      <Link class="page-link" href="#">
                        Next
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      </div>

    </>
  );
};

export default AdminProductList;
