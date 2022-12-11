import React from "react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {

    const [post, setPost] = useState([]);  //created hook where initialstate is assigned by empty array 

    const fetchData = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
        console.log(res);
    }


}

export default App;