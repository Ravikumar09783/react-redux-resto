import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartData from "./CartData";
import "./Style.css";
import { ADD } from "../redux/actions/action";
import { useDispatch } from "react-redux";

const Cart = () => {
  const [data, setData] = useState(CartData);
  // console.log("CartData",CartData);
  const dispatch = useDispatch();

  const addToCart =(e)=>{
    // console.log("Get the data of clicked products",e)
    dispatch(ADD(e))
  }





  return (<>
  <h1 className="text-center" >Add Items to Cart Project</h1>

<div className="mt-5 justify-content-center d-flex">
      

      <div className="row d-flex justify-content-center align-items-center container card-box">
      {data.map((res, id) => {
        return (
          <div className="col-md-3 mt-3 justify-content-center align-items-center container" key={id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={res.imgdata} style={{height:"16rem"}}/>
              <Card.Body>
                <Card.Title>{res.rname}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="d-flex justify-content-center ">

                <Button variant="primary" className="col-lg-12" onClick={()=>{addToCart(res)}}>Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      </div>
    </div>
  </>
    
  );
};

export default Cart;
