import React from "react";
import "./about.css";
import BlobAbout from "./BlobAbout";

function About() {
  return (
    <div className="About" id="about">
      <div className="ImageContainer">
      <BlobAbout className="mobile-blob" />
      </div>
      <div className="InfoContainer">
        <h1>Double or nothing</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
          massa commodo sapien elementum dignissim. Pellentesque quis luctus
          eros. Aenean in convallis diam. Quisque dignissim dignissim lobortis.
          Quisque quis urna aliquet, aliquam arcu sit amet, vulputate risus. Sed
          dui lectus, blandit in velit quis, placerat porttitor urna. Duis eu
          imperdiet ligula. Nulla feugiat quam at pharetra consectetur. Aenean
          rutrum libero ut lectus bibendum ultrices. dui lectus, blandit in
          velit quis, placerat porttitor urna. Duis eu imperdiet ligula. Nulla
          feugiat quam at pharetra consectetur. Aenean rutrum libero ut lectus
          bibendum ultrices.
        </p>
      </div>
    </div>
  );
}

export default About;
