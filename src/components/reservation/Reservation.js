import React from "react";
import './Reservation.css';
import Button from "../../ui/button/Button";

function Reservation() {
    return(
       <div className="container">
           <form className="form">
               <input placeholder="CHECK-IN DATE"/>
               <input placeholder="CHECK-OUT DATE"/>
               <input placeholder="No. of adults"/>
               <input placeholder="No. of children"/>
              <Button name="checkout"/>
           </form>
       </div>
    )
}

export default Reservation;