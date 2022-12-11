import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Images from './Images/logo.png';
import Visa from './Images/visa.png';
import Atm from './Images/atm.png';
import Atm2 from './Images/Atm2.jpg';

const Second = () => {

    return (
        <div className="container2">
            <div className="pad_margin">
                <h1 className="delivery"> Payment <span className="check"> <AiOutlineCheckCircle /> </span></h1>
                <img src={Images} height={50} width={100} className="imgLogo" />

                <div className="Visa_Inner">
                    <div className="padd_margin">
                        <input type="radio" className="radio1" />
                        <img src={Visa} height={40} width={50} className="visaImg" />
                        <h3 className="visatxt">Visa - 9999</h3>

                        <form className="form1">
                            <input className="inputSecond" type="text" placeholder="User Name" />
                            <label> | </label>
                            <input className="inputSecond" type="number" placeholder="exp. 00/11" />
                        </form>
                        <div className="btn">
                            <button className="butt">Edit</button>
                            <label> | </label>
                            <button className="butt">Delete</button>
                        </div>

                        <p className="Security">Security Code</p>
                        <div className="box">
                            <input className="input11" type="password" maxLength={3} placeholder="..." /> <span className="check1"> <AiOutlineCheckCircle /> </span>
                        </div>
                        <div className="AtmImg"> 
                        <img src={Atm} height={50} width={50} />
                        <p className="para3">3-digits on back of card</p>
                        </div>
                        <a href="" className="SymbolAdd">+</a>
                        <img className="AtmImg2" src={Atm2} height={70} width={70}/>
                        <p className="paraAdd">Add New Card</p>
                       <p className="borderbotom"></p>
                       <div className="lastPara">
                        <h3 className="headd3">Or Pay With</h3> 
                       <p className="paraLast">By using a digital wallet and continuing past this page, you have read and are<br/>
                        accepting the  <span className="color">Term Of Use </span></p>
                       </div>

                       </div>
                </div>

            </div>
        </div>
    )
}
export default Second;