import React from "react";
import Image from "next/image";

const Download = () => {
  const WhiteCircle =
    require("../styles/images/decorative-white-circle.svg").default;
  const BlueCircle =
    require("../styles/images/decorative-blue-circle.svg").default;
  const YellowCircle =
    require("../styles/images/decorative-yellow-circle.svg").default;
  const GreenDiamond =
    require("../styles/images/decorative-green-diamond.svg").default;
  const downloadiphone = require("../styles/images/download-iphone.jpg");
  return (
    <div id="download" className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="image-container">
              <Image
                className="img-fluid"
                src={downloadiphone}
                alt="alternative"
              />
            </div>
            <p className="p-large">
              Do you feel like you're wasting time with small stuff instead of
              working towards your goals? Start using Sync to organize your time
              and get a grip on your personal development
            </p>
            <a className="btn-solid-lg" href="#your-link">
              <i className="fab fa-apple"></i>DOWNLOAD
            </a>
            <a className="btn-solid-lg" href="#your-link">
              <i className="fab fa-google-play"></i>DOWNLOAD
            </a>
          </div>
        </div>
      </div>
      <div className="deco-white-circle-1">
        <Image src={WhiteCircle} alt="alternative" />
      </div>
      <div className="deco-white-circle-2">
        <Image src={WhiteCircle} alt="alternative" />
      </div>
      <div className="deco-blue-circle">
        <Image src={BlueCircle} alt="alternative" />
      </div>
      <div className="deco-yellow-circle">
        <Image src={YellowCircle} alt="alternative" />
      </div>
      <div className="deco-green-diamond">
        <Image src={GreenDiamond} alt="alternative" />
      </div>
    </div>
  );
};

export default Download;
