// import React, { useEffect, useState } from "react";
// import { publicRequest } from "../requestMethod";
// import { useLocation } from "react-router-dom";

// const Review = () => {
//   const loaction = useLocation();
//   const id = loaction.pathname.split("/")[2];
//   const [review, setReview] = useState([]);
//   console.log(review);
//   useEffect(() => {
//     const getReview = async () => {
//       let res = await publicRequest.get("/reviews");
//       setReview(res.data);
//     };
//     getReview();
//   }, []);

//   useEffect(() => {
//     const getReview = async () => {
//       // let res = await publicRequest.get(`/reviews/${id}`);
//       setReview(res.data);
//     };
//     getReview();
//   }, [id]);

//   const ReviewHandler = () => {};
//   const submitHandler = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div>
//       <div className="card p-4">
//         <div className="cardbody">
//           <form onSubmit={submitHandler}>
//             <h3>Write a Reviews</h3>
//             <div className="col-md-6">
//               <label>Rating</label>
//               <select className="form-select">
//                 <option value="">1- poor</option>
//                 <option value="1">2- fair</option>
//                 <option value="2">select</option>
//                 <option value="3">select</option>
//                 <option value="4">select</option>
//                 <option value="5">select</option>
//               </select>
//             </div>

//             {/* commetnt text bod*/}

//             <textarea className="form-control" rows="5"></textarea>
//             <button className="btn btn-primary mt-3" onClick={ReviewHandler}>
//               Submit
//             </button>
//           </form>

//           <h1>{review}</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Review;
