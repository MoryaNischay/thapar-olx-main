import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        {/* <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div> */}
        <div>
         
            <p className="heading">Made With ❤️ By</p>
         
          <div className="list">
            <a href="https://github.com/AdityaTomar-AT">Aditya Tomar</a>
            <a href="https://github.com/Rushil08">Rushil Agarwal</a>
            <a href="https://github.com/MoryaNischay">Nischay Morya</a>
          </div>
        </div>
        {/* <div>
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div> */}
      </div>
      <div className="footer">
        {/* <p>Other Countries Pakistan - South Africa - Indonesia</p> */}
        <p>Free Classifieds in Thapar. © 2021-2025</p>
      </div>
    </div>
  );
}

export default Footer;
