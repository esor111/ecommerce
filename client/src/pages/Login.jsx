import { useState } from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 50px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  text-align: left
  &:disabled{
    color: green;
    cursor: not-allowed
  }
`;

const Linkk = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
color: red
`


const Login = () => {
  const {isFetching, error} =useSelector(state=>state.user.isFetching)
const dispatch =useDispatch()
const [username, setUsername]=useState()
const[password, setPassword]=useState()

const loginHandler=(e)=>{
  e.preventDefault()
  try{
    login(dispatch, {username, password});
    
  }
  catch(err){
    console.log(err)
  }
}


  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={loginHandler}>LOGIN</Button>
          {error && <Error>Something went wrong!</Error>}
          <Linkk>DO NOT YOU REMEMBER THE PASSWORD?</Linkk>
          <Link to="/register">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
