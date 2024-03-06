import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      
      <div className="intro" >
      
 
        <div className="overlay">
          
          <div className="container">
            
            <div className="row">
              
              <div className="col-md-8 col-md-offset-2 intro-text">
              
                <h1>
                  LET'S EXPLORE THE WORLD OF ART
                  <span></span>
                </h1>
                <p>
                  "Art is the language of the soul, a timeless symphony of colors and forms that whispers truths, evokes emotions, and bridges worlds."</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Explore
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
