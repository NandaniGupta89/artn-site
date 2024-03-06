import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Me</h2>
              <p>Welcome to my artistic world! I'm Nandani Gupta, a passionate artist dedicated to expressing the beauty of life through my creations. Art has been my lifelong companion, guiding me through moments of joy, reflection, and discovery.</p>
              <p>Inspiration surrounds me in every form - from the vibrant hues of nature to the intricate details of everyday life. Each piece I create is a reflection of my emotions, thoughts, and experiences, inviting viewers to embark on their own visual journey.</p>
              <p>Feel free to explore my portfolio and reach out with any inquiries or comments. Let's embark on a journey of creativity together!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
