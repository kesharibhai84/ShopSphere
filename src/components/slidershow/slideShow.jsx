import React from "react";
import "./slideShow.scss";
import ImageSlider from "../herosection/ImageSlider";
function Slideshow() {
  return (
    <div className="layout">
      <div className="left">
        <div className="title">EVENTS</div>
        <div className="subtext">
          <h1>
            Discover <br /> <br />
            All
            <br />
            <br /> The
            <br />
            <br /> Events
          </h1>
        </div>
      </div>
      <div className="right">
        {/* <Gallary /> */}
        <ImageSlider/>
      </div>
    </div>
  );
}

export default Slideshow;
