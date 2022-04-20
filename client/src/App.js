// import Home from "./pages/Home";
// import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
// import Products from "./components/Products";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import ProductList from "./pages/ProductList"
// const App = () => {
// const user =true  
//   return(

//     <>
//     <Router>
//     <Switch>

//     <Route exact path="/" component={Home}>
//     {user ? <Home/> : <Redirect to="/register"/>}
//     </Route>

//     <Route path="/products/:category" component={Products}>
//     <ProductList/>
//     </Route>


//     <Route  path="/product/:id" component={Product}>
//     <Product/>
//     </Route>

//     <Route  path="/cart" component={Cart}>
//     <Cart/>
//     </Route>
    
 
//      <Route  path="/login" component={Login}>
//      {user ? <Redirect to="/"/> : <Login/>}
//      </Route>


//     <Route exact path="/register" component={Register}>
//     {user ? <Redirect to="/" /> : <Register/> }
//     </Route>


//     </Switch>
//     </Router>
//     </>

//   )
// };

// export default App;



import React from 'react'
import Product from "./pages/Product"
import Home from './pages/Home';
import Cart from './pages/Cart';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import ProductList from './pages/ProductList';
import Login from "./pages/Login"
import Register from "./pages/Register"
import MainAdmin from "./adminpage/mainAdmin"
import AdminProductList from "./adminpage/adminProductList"
import Adminuserlist from "./adminpage/adminUserlist"
import Newproduct from "./adminpage/NewProduct"
import ViewAdminpage from './adminpage/viewAdminpage';
import AdminProductupdate from "./adminpage/adminProductupdate"
import AdmincreateUser from "./adminpage/adminUsercreate"
import AdminUserupdate from './adminpage/adminUserupdate';
import Adminprofileview from "./adminpage/adminprofileView";
import { useSelector } from 'react-redux';
const App = () => {
  const user = useSelector(state=>state.user.currentUser?.isAdmin)
  return (
    <Router>
    <Switch>
    <Route exact path={"/"} component={Home}>
    <Home/>
    </Route>

    <Route exact path={"/dashboard"} component={MainAdmin}>
    {user ? <MainAdmin/>: <Redirect to="/"/>}
    </Route>

    <Route  path={"/adminproductList"} component={AdminProductList}>
    {user ?<AdminProductList/> : <Redirect to="/"/>}
    </Route>

    <Route  path={"/adminuserlist"} component={Adminuserlist}>
    <Adminuserlist/>
    </Route>
    <Route  path={"/viewadminpage/:id"} component={ViewAdminpage}>
    <ViewAdminpage/>
    </Route>

    <Route  path={"/adminproductupdate/:id"} component={AdminProductupdate}>
    <AdminProductupdate/>
    </Route>

    <Route  path={"/newproduct"} component={Newproduct}>
    <Newproduct/>
    </Route>


    <Route exact path={"/product/:id"} component={Product}>
    <Product/>
    </Route>


    <Route exact path={"/admincreateuser"} component={AdmincreateUser}>
    <AdmincreateUser/>
    </Route>

    <Route exact path={"/adminuserupdate/:id"} component={AdminUserupdate}>
    <AdminUserupdate/>
    </Route>

    
    <Route exact path={"/adminprofileview/:id"} component={Adminprofileview}>
    <Adminprofileview/>
    </Route>


    <Route  path={"/cart"} component={Cart}>
    <Cart/>
    </Route>


    <Route exact path={"/products/:id"} component={ProductList}>
    <ProductList/>
    </Route>

    <Route exact path={"/login"} component={Login}>
    
    </Route>

    <Route exact path={"/register"} component={Register}>
    {!user ?<Register/>: <Redirect to="/"/>}
    </Route>


    </Switch>
    </Router>
    )
}

export default App