import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Image0 from "../Assets/NFTs/0.png";
import Image1 from "../Assets/NFTs/1.png";
import Image2 from "../Assets/NFTs/2.png";
import Image3 from "../Assets/NFTs/3.png";
import Image4 from "../Assets/NFTs/4.png";
import Image5 from "../Assets/NFTs/5.png";
import Image6 from "../Assets/NFTs/6.png";
import Banner from "../Assets/banner.png";
import Image7 from "../Assets/NFTs/7.png";
import Image339 from "../Assets/NFTs/339.png";
import "./Carousel.scss";

export default function Carousel() {
  // useEffect(() => {
  //   document.querySelectorAll(".image-elem").forEach((image, index)=> {
  //     image.height = document.querySelector(".something").style.height;
  //   })
  // })
  const [images, setImages] = useState([
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
  ]);
  return (
    <div className="marquee relative h-[50vh] w-[100vw] overflow-hidden">
      <div className="marquee--inner absolute block shrink-0 remove-scroll w-[200%] bg-black">
        <span className="flex w-[50%] float-left something relative ">
          {images.map((image, key) => (
            <img
              src={image}
              className="image-elem"
              alt=""
            />
          ))}
        </span>
        <span className="flex w-[50%] float-left something relative ">
          {images.map((image, key) => (
            <img
              src={image}
              className="image-elem"
              alt=""
            />
          ))}
        </span>
      </div>
    </div>
  );
}
