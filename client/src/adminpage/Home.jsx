// import React from "react";
// // import Announcement from "../components/Announcement";
// import Categories from "../components/Categories";
// // import Footer from "../components/Footer";
// // import Navbar from "../components/Navbar";
// // import Newsletter from "../components/Newsletter";
// import Products from "../components/Products";
// // import Slider from "../components/Slider";

// const Home = () => {
//   return (
//     <div>

//       <Categories />
//       <Products/>
//     </div>
//   );
// };

// export default Home;

// // <Newsletter/>

//       // <Linknnouncement />
//       // <Navbar />
//       // <Slider />



import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AdminUserlist from "../pages/adminUserlist"
import AdminProductList from "../pages/adminProductList";
import AdminuserDetail from "../pages/adminuserDetail"
import MainAdmin from "./mainAdmin";
import Sidebar from "./Sidebar";
const Home = () => {
  return (
    <>
    <Router>
    <Switch>
    <Route exact path="/" component={MainAdmin}>
    <MainAdmin />
    </Route>

    <Route path="/adminuserlist" component={AdminUserlist}>
    <AdminUserlist />
    </Route>


    <Route path="/adminuserdetail" component={AdminuserDetail}>
    <AdminuserDetail />
    </Route>


    <Route path="/adminproductlist" component={AdminProductList}>
    <AdminProductList />
    </Route>
    
    <Route path="/sidebar" component={Sidebar}>
    <Sidebar />
    </Route>
    
    </Switch>
    </Router>
    </>
  );
};

export default Home;
