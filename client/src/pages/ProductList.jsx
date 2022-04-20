import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useState } from "react";
import {useLocation} from "react-router-dom"

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;


const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation()
  const cat =location.pathname.split("/")[2]
  console.log(cat)

  
const [filter, setFilter]=useState({})
const [sort, setSort]=useState("newest")




const handleFilter=(e)=>{
setFilter({...filter, [e.target.name]:e.target.value})
}









//  const handleFilter=(e)=>{
// const value= e.target.value;
// setFilter({
//   ...filter,
//   [e.target.name]: value})
//  }

  return (

    
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat === 'men' && 'Clothes for men'}</Title>
      <Title>{cat === 'woman' && 'Clothes for woman'}</Title>
      <Title>{cat === 'cildren' && 'Clothes for children'}</Title>
      
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select  name="color" onChange={handleFilter}>
            <Option >
              Color
            </Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilter}> 
            <Option >
              Size
            </Option>
            <Option>x</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>xl</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
          <Option >Sort</Option>
          <Option>asc</Option>
            <Option>desc</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products sort={sort} filter={filter} cat={cat}/>

    </Container>
  );
};

export default ProductList;











