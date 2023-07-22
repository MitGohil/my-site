import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./CM-cmp/header.css"

import img01 from "./Image/03.jpg"
import img02 from "./Image/04.jpg"

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };
    return (
      <div className="container-fluid">
        <div className="col-12">

          <Slider ref={slider => (this.slider = slider)} {...settings} className=" mx-3 my-3">
            <div className="mx-0 my-3">
              <img src={img01} alt="" className="slide" />
            </div>
            <div className="mx-0 my-3">
              <img src={img02} alt="" className="slide" />
            </div>
            <div className="mx-0 my-3">
              <img src={img01} alt="" className="slide" />
            </div>
            <div className="mx-0 my-3">
              <img src={img02} alt="" className="slide" />
            </div>
            <div className="mx-0 my-3">
              <img src={img01} alt="" className="slide" />
            </div>
            <div className="mx-0 my-3">
              <img src={img02} alt="" className="slide" />
            </div>
          </Slider>
          <div style={{ textAlign: "center" }}>
            <button className="button m-5 p-2 px-4" onClick={this.play}>
              Play
            </button>
            <button className="button m-5 p-2" onClick={this.pause}>
              Pause
            </button>
          </div>
        </div>
      </div>
    );
  }
}