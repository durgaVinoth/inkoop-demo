import React from 'react';
const Demo=()=>{
    return<div className="container">
    <div className="left-side">
        <h2>Lorem <br/>Ipsum</h2>
        <ul>
            <li>About</li>
            <li>Services</li>
            <li>Cuisine</li>
            <li>Gallery</li>
            <li>Contact</li>
            <li>Book</li>
        </ul>
        <button align="center">Cart</button>
    </div>
    <div className="middle-part">
        <h1>What are you <br/>having for lunch</h1>
     </div>
     <div className="end">
         <p>Lorem ipsum dolor sit amet,<br/>consectetur asdipiscing elit,<br/>sed do eiusmod tempor<br/>incididunt ut labore et.</p>
     
     </div>
     <div className="box">
        <div className="box-size">
            <img src="./image/1.jpg" alt="1" />
            <h3>Mexican Taco</h3>
        </div>
        <div className="box-size">
            <img src="./image/2.jpg" alt="2" />
            <h3>Farmhouse Pizza</h3>
        </div>
        <div className="box-size">
            <img src="./image/3.jpg" alt="3" />
            <h3>Chicken Burger</h3>
        </div>
        <div className="box-size">
            <img src="./image/4.jpg" alt="4" />
            <h3>Loaded Nachoes</h3>
        </div>
     </div>
 </div>
}
export default Demo;