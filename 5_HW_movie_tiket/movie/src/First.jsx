import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const First = () => {
    //hooks 

    return (
        <>

            <div className="container">

                <div className="pad_margin">
                    <h1 className="delivery"> Delivery <span className="check"> <AiOutlineCheckCircle /> </span></h1>
                    <h3 className="head3">Mobile Entry - Free</h3>
                    <p className="paraFirst">Tickets Available by Sun Apr 3, 2022 <br />
                        These mobile tickets will be transferred directly to you from a trusted seller. We'll email
                        you instruction on how to accept them on the original ticket provider's mobile app.
                    </p>
                </div>

            </div>
        </>
    )

}
export default First;