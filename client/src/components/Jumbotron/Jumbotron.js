import React from "react";
import "./Jumbotron.css";
import logo from "../../images/OnTapLogoUpdated.png";

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <img src={ logo } alt="logo" />
    {/* <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://www.recipepuppy.com/about/api/"
    >
      Powered by Recipe Puppy
    </a> */}
  </div>
);

export default Jumbotron;
