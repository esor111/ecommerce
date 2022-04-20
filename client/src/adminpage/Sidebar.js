import React from 'react'
import {Link} from "react-router-dom"
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div>
    <div id="sidebar">
    <div className="sidebar__title">
      <div className="sidebar__img">
        <img src="./logo192.png" alt="logo" className='img-fluid one'  style={{width: "50px"}}/>
        <Link to="/" style={{textDecoration: "none"}}><h3 >Essor Shop</h3></Link>
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
    </div>
  )
}

export default Sidebar