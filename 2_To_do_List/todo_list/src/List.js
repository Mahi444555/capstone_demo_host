import React from "react";
import './List.css';

function List (props){  //where we passing props from app.js i.e. itesm
 const deleteItemFromList= (key) =>{
    const newList=props.itemList.filter(itemObj => {
      return itemObj.key !==key;
   });
   props.updateItemList(newList);
 }
   return(
    <div>
    {props.itemList.map(itemObj =>{

       return (
         <div className="Item">
         <ul><li>{itemObj.item}</li></ul>
         <button onClick={()=>deleteItemFromList(itemObj.key)}>X</button>
         </div>
  ) })}
    </div>
 );
}
export default List;