import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import './Style.css';
import { useSelector } from "react-redux";
// import { cartReducers } from "../redux/reducers/reducers";

const Header = () => {

  const getData= useSelector((state)=>state.cartReducers.cart)
  console.log('getData',getData)
//-------------- Line no 15-16 gets the current state of the cart items in STORE-----------------------//



  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log("event",event)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{height:"60px"}}>
        <Container>
          <NavLink to="cart" className="text-decoration-none text-light">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none px-3 text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={4}
            color="success"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light "
              style={{ fontSize: "25px" }}
            ></i>
          </Badge>
          <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={()=>handleClose()}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
       <div className="cart-details ">
        <i className="fas fa-close smallclose p-2 "  style={{position:"absolute", top:10, right:20}} onClick={handleClose}></i>
        <div style={{display:"flex", marginTop:15}}>

        <p className="p-4">Your Cart is Empty</p>
        <img src="./cart.gif" alt="Cart" style={{height:"60px", marginTop:"15px"}}/>
        </div>
       </div>
        </Menu>
        </Container>
       
      </Navbar>
    </div>
  );
};

export default Header;
