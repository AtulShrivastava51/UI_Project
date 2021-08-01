import React from 'react';
import './App.css';
import logo from './Logo-2.png';
import cart from './shopping-cart.png';
import profile from './noun_profile_2068277.png';
import bannerImage from './Mask Group 1.png';

function App() {
  return (
    <div className="App">

      <div className="topnav">
          <a className="Home" href="#home">
            <img className="Logo" src={logo} alt=""></img>
          </a>
        <div className="course">
         <a className="Courses" href="#courses">COURSES</a>
         </div><div className="wishlist">
         <a className="wishList"href="#wishlist">WISHLIST</a>
        </div>
          <a className="Cart" href="#Cart">
            <img className="CartLogo" src={cart} alt=""></img>
          </a>

          <a className="profile" href="#profile">
            <img className="profileLogo"src={profile} alt=""></img>
          </a>
      </div>


      <div className="Banner">
          <p className="bannerTitle">Discover Latest Courses on React </p>
          <img className="bannerImage" src={bannerImage} alt=""></img>
      </div>
    <h1 className="header1">All Courses</h1>

    <div className="sorting">
      <select className="sort" name="sort" id="sort">
      <option value="price">Price </option>
      <option value="name">Name </option>
      </select>
  </div>

  <div className="search-container">
    <form action="/">
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit">Search</button>
    </form>
  </div>
  <div className="cart">
    <p className="cartHeader"> YOUR CART DETAILS</p>
    <p className="cartBackdropText">Your cart is empty right now. 
    Please add courses in the cart from the list</p>
    <footer className="cartFooter">
      <p className="Total">Total Cart Value</p>
      <p className="TotalValue"> RS 0</p>
    </footer>
  </div>
  <div className="card">
    <div className="courseImage"></div>
    <h4 className="courseTitle">Responsive Design Course XYZ How to design responsive templates</h4> 
    <h4 className="courseInstructor">John Doe</h4> 
    <button className="WishListIcon" type="submit"></button>
    <h4 className="coursePrice">RS 1000/-</h4> 
    <h4 className="initialPrice">1500</h4> 
    <button className="AddToCart"> ADD TO CART</button>
  </div>
  <div className="card1">
  <div className="courseImage"></div>
    <h4 className="courseTitle">Responsive Design Course XYZ How to design responsive templates</h4> 
    <h4 className="courseInstructor">John Doe</h4> 
    <button className="WishListIcon" type="submit"></button>
    <h4 className="coursePrice">RS 1000/-</h4> 
    <h4 className="initialPrice">-</h4> 
    <button className="AddToCart"> ADD TO CART</button>
  </div>
  <div className="card2">
  <div className="courseImage"></div>
    <h4 className="courseTitle">Responsive Design Course XYZ How to design responsive templates</h4> 
    <h4 className="courseInstructor">John Doe</h4> 
    <button className="WishListIcon" type="submit"></button>
    <h4 className="coursePrice">RS 1000/-</h4> 
    <h4 className="initialPrice">1500</h4> 
    <button className="AddToCart"> ADD TO CART</button>
  </div>
  <div className="card3">
  <div className="courseImage"></div>
    <h4 className="courseTitle">Responsive Design Course XYZ How to design responsive templates</h4> 
    <h4 className="courseInstructor">John Doe</h4> 
    <button className="WishListIcon" type="submit"></button>
    <h4 className="coursePrice">RS 1000/-</h4> 
    <h4 className="initialPrice">2500</h4> 
    <button className="AddToCart"> ADD TO CART</button>
  </div>
  <div className="card4">
  <div className="courseImage"></div>
    <h4 className="courseTitle">Responsive Design Course XYZ How to design responsive templates</h4> 
    <h4 className="courseInstructor">John Doe</h4> 
    <button className="WishListIcon" type="submit"></button>
    <h4 className="coursePrice">RS 1000/-</h4> 
    <h4 className="initialPrice">1500</h4> 
    <button className="AddToCart"> ADD TO CART</button>
  </div>
  <div className="PageNo">
     
  </div>

    </div>
  );
}

export default App;
