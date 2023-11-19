import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          {/* <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              
              <option value="Cameras & Lenses">Cameras & Lenses</option>
              <option value="Computers & Laptops">Computers & Laptops</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Motorcycles">Motorcycles</option>
              <option value="Tablets">Tablets</option>
              <option value="Books">Books</option>
              <option value="Stationary">Stationary</option>
            </select>
          </div> */}
          {/* <div className="otherQuickOptions"> */}
            <span onClick={()=>setCategory("Clothing")} >Clothing</span>
            <span onClick={()=>setCategory("Lab Items")} >Lab Items</span>
            <span onClick={()=>setCategory("Electronics")} >Electronics</span>
            <span onClick={()=>setCategory("General Purpose")} >General Purpose</span>
            <span onClick={()=>setCategory("Books")} >Books</span>
            <span onClick={()=>setCategory("Stationary")} >Stationary</span>
            <span onClick={()=>setCategory("Mobile Phones")} >Mobile Phones</span>
            <span onClick={()=>setCategory("Matress/Househol")} >Matress/Household</span>
          {/* </div> */}
        </div>
        <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
