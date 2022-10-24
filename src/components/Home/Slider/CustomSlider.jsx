import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default function CustomSlider({ settings, children }) {
  const slickSlideSettings = settings || {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: true,
        },
      },
    ],
  };
  return (
    <Styled >
      <Slider {...slickSlideSettings}>{children}</Slider>
    </Styled>
  );
}

const Styled = styled.div`
  
  .slick-arrow {
    background-color: #fff;
    z-index: 4;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    /* margin-top: -24px; */
    text-align: center;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 15%);
    border: 0;
    font-size: 16px;
    line-height: 100%;
    #text {
      display: none;
    }
    &:before {
      content: none;
    }
    &:after {
      content: "";
      display: inline-block;
      background: url("https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/arrows.a8b0bad.svg")
        no-repeat;
      background-size: 16px 64px;
      width: 16px;
      height: 16px;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
    &.slick-prev {
      left: -17px;
      border-radius: 30px;
      &:after {
        background-position: 0 -32px;
      }
    }
    &.slick-next {
      right: -17px;
      border-radius: 30px;
      &:after {
        background-position: 0 -48px;
      }
    }
  }
`;
