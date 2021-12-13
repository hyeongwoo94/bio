import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import me from '../img/me.jpg';

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
              <img className=" w-auto" src={me} alt="내사진" />
            </div>
            <div className="px-4">
              <img className=" w-auto" src={me} alt="내사진" />
            </div>
            <div className="px-4">
              <img className=" w-auto" src={me} alt="내사진" />
            </div>
            <div className="px-4">
              <img className=" w-auto" src={me} alt="내사진" />
            </div>
            <div className="px-4">
              <img className=" w-auto" src={me} alt="내사진" />
            </div>
            <div className="px-4">
              <img className=" w-auto" src={me} alt="내사진" />
            </div>
        </Slider>
      </div>
    );
  }
}
