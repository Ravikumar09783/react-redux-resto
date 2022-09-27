import React from "react";
import { Table } from "@mui/material";
import './Style.css'

const CartDetails = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-5">Items Detail Page</h2>
        <section className="container mt-3">
          <div className="itemdetails shadow d-flex">
            <div className="item-img">
              <img
                src="https://b.zmtcdn.com/data/pictures/3/18514413/0a17b72e9fec52a3ca736f4c2ea3646f_o2_featured_v2.jpg"
                alt=""
              />
            </div>
            <div className="details d-flex justify-content-center p-3">
              <Table>
                <tr>
                  <td>
                    <p className="py-2"><strong>Restaurant</strong> : HL Frankie</p>
                    <p className="py-2"><strong>Dishes</strong> : Burger, Sandwich, Fast Food</p>
                    <p className="py-2"><strong>Price</strong> : ₹ 100</p>
                    <p className="py-2"><strong>Total</strong> : ₹ 100</p>
                  
                  </td>
                  <td>
                  <p className="py-2" ><strong>Rating</strong> : 4.0 <i class="fa-sharp fa-solid fa-star text-success"></i></p>
                  <p className="py-2"><strong>Total Order</strong> : 2525 + order placed from here recently </p>
                  <p className="py-2"><strong>Remove</strong> : <i class="fa-solid fa-trash " style={{fontSize:"20px", color:"red",cursor:"pointer"}}></i> </p>
                  
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CartDetails;
