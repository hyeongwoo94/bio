import nello from "../img/Nello.png";
import tones from "../img/Tones.png";
import ace from "../img/Ace.png";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Hardcode extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 800,
      cssEase: "linear",
    };
    return (
      <div className="mb-8">
        <h2 className="text-center text-sm text-gray-400 my-6">이미지 클릭시 해당헤이지 바로가기</h2>
        <Slider {...settings}>
          <div className="">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="http://hyeong.dothome.co.kr/renewal/nello.html"
              >
                <img className=" w-auto" src={nello} alt="내사진" />
              </a>
          </div>
          <div className="">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="http://hyeong.dothome.co.kr/renewal/home.html"
              >
                <img className="bo w-auto" src={tones} alt="내사진" />
              </a>
          </div>
          <div className="">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="http://hyeong.dothome.co.kr/renewal/ace.html"
              >
                <img className="border w-auto" src={ace} alt="내사진" />
              </a>
          </div>
        </Slider>
      </div>
    );
  }
}

// <div>
//   <img src={nello} />
//   <img src={tones} />
//   <img src ={ace} />
// </div>
