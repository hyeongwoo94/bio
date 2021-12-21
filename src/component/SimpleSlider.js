import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import my from "../img/profile1.jpeg"
import my2 from "../img/profile2.jpeg"
import my3 from "../img/profile3.png"
import my4 from "../img/profile4.png"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 800,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
            <div className="px-4">
              <img className="" src={my} alt="내사진" />
            </div>
            <div className="px-4">
              <img className="" src={my2} alt="내사진" />
            </div>
            <div className="px-4">
              <img className="bg-gray-100 " src={my3} alt="내사진" />
            </div>
            <div className="px-4">
              <img className="bg-gray-100 " src={my4} alt="내사진" />
            </div>
        </Slider>
      </div>
    );
  }
}
