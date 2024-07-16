//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Contador from "./component/contador.jsx";

let number = 0;

setInterval(function () {
    number++;
    ReactDOM.createRoot(document.getElementById('app')).render(<Contador number={number} />)
}, 1000);
//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

