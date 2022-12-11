import React from "react";
import {useState} from 'react';

function Third() {

//crating hooks
 

    return (
        <div className="container3">
            <div className="paddingMar">
                <div className="one">
                    <h3>Total</h3>
                    <h3 className="hed3">$549.11</h3>
                </div>
                <div className="ticket">
                    <h2 className="one">Tickets</h2>
                    <p>Resale Tickets: $229.00 x 2</p>
                    <p className="left">$458.00</p>
                </div>
                <div className="MarTop">
                <h3>Notes From Seller</h3>
                </div>
                <p className="paraa1">xfr XFER Proof of at least one dose of COVID-19 <br/>
                vaccination for ages 5 to 11 and guests ages 12 and up <br/>
                will be required to show proof of two COVID-19 vaccine <br/>
                doses or one dose of the Johnson & Johnson vaccine. <br/>
                Masks must be worn.</p>

                <h3 className="fees">Fees</h3>
                <p className="servi">Service Fee: $44.08 x 2</p>
                <p className="dol">$88.16</p>
                <p className="ord">Order Processing Fee</p>
                <p className="dol2">$2.95</p>
                <p className="one11">Delivery</p>
                <p className="mob">Mobile Entry</p>
                <p className="mob1">Free</p>
                <div className="can11">
                <p className="can">Cancel Order</p>
                <h4 className="all">*All Sales Final - No Refunds</h4>
                <input type='checkbox' className="checkbox"/>
                <h4 className="head4">I have read and agree to the current <span className="color"> Terms of Use.</span></h4>
                <button className="btnLast" >Place Order</button>
                <h6 className="Last">*Exceptions may apply, see our Terms of Use.</h6>
                </div>
                </div>

        </div>
    )
}
export default Third;