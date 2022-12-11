import React, { useState } from "react";
import people from "./data";
import {FaChevronLeft, FaChevronRight, FaQuoteRight, FaYenSign} from "react-icons/fa";
import App from './App.css';

const Review=()=>{
    const [index,setIndex]=useState(0);
    const {name,job,image,text}=people[index]; //Destructing of an object 

    //to check if index is there with data or not 
    
    const checkNumber=(number)=>{
        if(number>people.length-1){
            return 0; //to point to the 0th index person
        }
        if(number<0){
            return people.length-1; //to point the last index person
        }
        return number;

    }

    //logic to print the next person data when user click on button.
    const nextPerson=()=>{
        setIndex((index)=>{
            let newindex=index+1;
            return checkNumber(newindex)
        })
        
    }
    //logic to print the prev person data when user click on button.
    const prevPerson=()=>{
        setIndex((index)=>{
            let newindex=index-1;
            return checkNumber(newindex)
        })
    }

    //logic to print the randomPerson data 
    const randomPerson=()=>{
        let randomNumber=Math.floor(Math.random()*people.length);
        if(randomNumber===index){
            randomNumber=index+1;
        }
        setIndex(checkNumber(randomNumber));

    }

    return(
        <article className="review">
            <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
                <FaQuoteRight/>
            </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft/>PREV
                </button>

                <button className="next-btn" onClick={nextPerson}>
                   NEXT <FaChevronRight/>
                </button>
            </div>

            <button className="random-btn" onClick={randomPerson}>
                   Random User Data
                </button>
        </article>
    )
}


export default Review;
