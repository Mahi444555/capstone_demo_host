import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import List from './List';

function App() {

const [currentItem,setCurrentItem]=useState(null);  //hooks 
const [itemList,updateItemList]=useState([]);//here we created empty array to stored all input items 

const onChangeHandler= e => {
  console.log(e.target.value);  //accessing that hook variable value from input box where we set value={pople} i.e. initial state and to access use e.target.value 
 setCurrentItem(e.target.value);
};

//create function to store in list
const addItemToList =()=>{
  updateItemList([...itemList,{item:currentItem, key: Date.now()}]);
  setCurrentItem("");  //again assing empty or clr input box
 
};

  return (
    <div className="App">
    <header className="App-header">
    <h1>My_ToDo_List</h1>

    <div className="Wrapper">
    <div className="Input-wrapper">
    <input value={currentItem} onChange={onChangeHandler} placeholder="Add New Item"/>
    <button onClick={addItemToList}>ADD</button>
    </div>

    <List itemList={itemList} updateItemList={updateItemList}/>
    </div>
    </header>
    </div>
  );
}

export default App;
