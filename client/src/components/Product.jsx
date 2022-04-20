import React from 'react'
import "./style/products.css";
import {Link} from "react-router-dom"
const Product = ({items}) => {
  const PF = "http://localhost:5000/images/";

  return (
<div className="product text-center col-lg-2 col-md-2 col-12">
<Link to={`/product/${items._id}`}><img src={PF + items.img} className="img-fluid widd" alt="hello" />

</Link>
<div className="star">
  <i className="fa fa-star"></i>
  <i className="fa fa-star"></i>
  <i className="fa fa-star"></i>
  <i className="fa fa-star"></i>
</div>
<h4 className="p-name">{items.title}</h4>
</div>

	)
}

export default Product











// import React, { useEffect, useState } from "react";
// import "./style/products.css";
// import { Star } from "@material-ui/icons";
// import { Link } from "react-router-dom";
// import { publicRequest } from "../requestMethod";
// import Product from "../components/Product"

// const Products = () => {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         let res = await publicRequest.get("/products");
//         setProduct(res.data);
//       } catch (err) {}
//     };
//     getData();
//   });

//   return (
//     <>
    
    
//       {product.map(() => (
//         <div className="pro-container">

//        <Product/>


//         </div>

//       ))}

//     </>
//   );
// };

// export default Products;





















// /** @format */

// import {
// 	FavoriteBorderOutlined,
// 	SearchOutlined,
// 	ShoppingCartOutlined,
// } from "@material-ui/icons";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const Info = styled.div`
// 	opacity: 0;
// 	width: 100%;
// 	height: 100%;
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	background-color: rgba(0, 0, 0, 0.2);
// 	z-index: 3;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	transition: all 0.5s ease;
// 	cursor: pointer;
// `;

// const Container = styled.div`
// 	flex: 1;
// 	margin: 5px;
// 	min-width: 280px;
// 	height: 350px;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	background-color: #f5fbfd;
// 	position: relative;

// 	&:hover ${Info} {
// 		opacity: 1;
// 	}
// `;

// const Circle = styled.div`
// 	width: 200px;
// 	height: 200px;
// 	border-radius: 50%;
// 	background-color: white;
// 	position: absolute;
// `;

// const Image = styled.img`
// 	height: 75%;
// 	z-index: 2;
// `;

// const Icon = styled.div`
// 	width: 40px;
// 	height: 40px;
// 	border-radius: 50%;
// 	background-color: white;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	margin: 10px;
// 	transition: all 0.5s ease;
// 	&:hover {
// 		background-color: #e9f5f5;
// 		transform: scale(1.1);
// 	}
// `;

// const Product = ({ item }) => {
// 	return (
// 		<Container>
// 			<Circle />
// 			<Image src={item.img} />
// 			<Info>
// 				<Icon>
// 					<ShoppingCartOutlined />
// 				</Icon>
// 				<Icon>
// 					<Link to={`/product/${item._id}`}>
// 						<SearchOutlined />
// 					</Link>
// 				</Icon>
// 				<Icon>
// 					<FavoriteBorderOutlined />
// 				</Icon>
// 			</Info>
// 		</Container>
// 	);
// };

// export default Product;
