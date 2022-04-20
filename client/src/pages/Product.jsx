import React, { useEffect, useState } from "react";
import "./product.css";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { publicRequest } from "../requestMethod";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addProduct } from "../redux/cartRedux";
import { useSelector } from "react-redux";
import Mreview from "../components/Mreview";
import {
  getReviewStart,
  getReviewSuccess,
  getReviewfaliure,
} from "../redux/reviewRedux";
import "./pReview.css";
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const Product = () => {
  let PF = "http://localhost:5000/images/";
  const dispatch = useDispatch();
  const location = useLocation();
  const product = location.pathname.split("/")[2];
  const [pdata, setPdata] = useState({});
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [rating, setRating] = useState([]);
  const user = useSelector((state) => state.user.currentUser?._id);
  const curruser= useSelector((state) => state.user.currentUser);
  const users = useSelector((state) => state.review?.review);

  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await publicRequest.get(`/products/${product}`);
        setPdata(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [product]);

  const clickHandler = (type) => {
    if (type === "decs") {
      quantity > 0 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const clickHandlerr = () => {
    dispatch(addProduct({ ...pdata, quantity, color, size }));
  };

  const submitHandlerr = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const getReview = async () => {
      dispatch(getReviewStart());
      try {
        let res = await publicRequest.get(`/reviews/${product}`);
        dispatch(getReviewSuccess(res.data));
      } catch (err) {
        dispatch(getReviewfaliure());
      }
    };

    getReview();
  }, [product, dispatch]);


  const changeHandler = (e) => {
    let value = e.target.value;
    setRating({ ...rating, [e.target.name]: value });
  };

  //post the review

  const ReviewHandler = async () => {
    try {
      await publicRequest.post(`/reviews/${product}`,{product: product, user: user, ...rating});
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div>
      <Navbar />
      <section className="container sproduct my-5">
        <div className="row mt-5">
          <div className="col-lg-5 col-md-12 col-12">
            <img src={PF + pdata.img} alt="hello" className=" img-fluid pb-1" />

            <div className="small-img-group">
              <div className="small-img-col">
                <img
                  src="../product-1.jpg"
                  alt="hello"
                  className=" small-img img-fluid"
                />
              </div>

              <div className="small-img-col">
                <img
                  src="../product-2.jpg"
                  alt="hello"
                  className=" small-img img-fluid"
                />
              </div>

              <div className="small-img-col">
                <img
                  src="../product-1.jpg"
                  alt="hello"
                  className=" small-img img-fluid"
                />
              </div>

              <div className="small-img-col">
                <img
                  src="../product-6.jpg"
                  alt="hello"
                  className=" small-img img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-12">
            <h6>Home/ T-sirt</h6>
            <h3 className="py-3">{pdata.title}</h3>
            <h2>${pdata.price}</h2>
            <select className="my-3" onChange={(e) => setSize(e.target.value)}>
              <option>Select Size</option>
              {pdata.size?.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <Filter>
              <FilterTitle>Color</FilterTitle>
              {pdata.color?.map((c) => (
                <FilterColor
                  color={c}
                  key={c}
                  onChange={() => setColor(c)}
                ></FilterColor>
              ))}
            </Filter>
            <div className="d-flex gap-2">
              <AmountContainer>
                <Remove onClick={() => clickHandler("decs")} />
                <Amount>{quantity}</Amount>
                <Add onClick={() => clickHandler("inc")} />
              </AmountContainer>
              <button className="buy-btn mt-2 mb-2" onClick={clickHandlerr}>
                Addto Cart
              </button>
            </div>

            <h4 className="mt-2 mb-2">Product Detals</h4>
            <span>{pdata.decs}</span>
          </div>
        </div>
        <div
          className="container-fluid d-flex justify-content-center"
          style={{ minWidth: "100%" }}
        >
         {curruser ?  <div className="card p-4">
         <div className="cardbody">
           <form onSubmit={submitHandlerr}>
             <h3>Write a Reviews</h3>
             <div className="col-md-6">
               <select
                 className="form-select"
                 name="rating"
                 onChange={changeHandler}
               >
               <option >review</option>
               <option >1</option>
               <option >2</option>
                 <option >3</option>
                 <option >4</option>
                 <option>5</option>
                 <option>6</option>
               </select>
             </div>

             {/* commetnt text bod*/}

             <textarea
               className="form-control"
               rows="5"
               name="review"
               onChange={changeHandler}
             ></textarea>
             <button
               className="btn btn-primary mt-3"
               onClick={ReviewHandler}
             >
               Submit
             </button>
           </form>
         </div>
       </div> :  <h1> please <button className="btn mt-3">login</button> to give a review</h1> }


        </div>
      </section>

      <div className="container-fluid row">
     <Mreview users={users} />
   </div>
    </div>
  );
};

export default Product;
