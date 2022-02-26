import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Image0 from "../Assets/NFTs/0.png";
import Image1 from "../Assets/NFTs/1.png";
import Image2 from "../Assets/NFTs/2.png";
import Image3 from "../Assets/NFTs/3.png";
import Image4 from "../Assets/NFTs/4.png";
import Image5 from "../Assets/NFTs/5.png";
import Image6 from "../Assets/NFTs/6.png";
import Image7 from "../Assets/NFTs/7.png";
import "./Carousel.scss";

export default function Carousel() {
  const [currentIndex, setIndex] = useState(0);
  const currentImage = useRef(null);
  const currentImage2 = useRef(null);
  const swipeLeft = () => {
    if(currentIndex == 6) {
      gsap.to(currentImage.current, {opacity: 0}).duration(0.4).then(() => {
        setIndex(0)
        gsap.to(currentImage.current, {opacity: 1})
      })
    } else {
      gsap.to(currentImage.current, {opacity: 0}).duration(0.4).then(() => {
        setIndex(currentIndex + 1);
        gsap.to(currentImage.current, {opacity: 1})
      })
    }
  }
  const swipeRight = () => {

    if(currentIndex == 0) {
      gsap.to(currentImage2.current, {opacity: 0}).duration(0.4).then(() => {
        setIndex(6)
        gsap.to(currentImage2.current, {opacity: 1})
      })
    } else {
      gsap.to(currentImage2.current, {opacity: 0}).duration(0.4).then(() => {
        setIndex(currentIndex - 1);
        gsap.to(currentImage2.current, {opacity: 1})
      })
    }
  }
  const [images, setImages] = useState([
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
  ]);
  return (
    <div className="flex w-[80%] max-w-[700px] relative overflow-x-hidden gap-4">
      <div className="carousel-item h-[100%] w-[100%] max-w-[400px] max-h-[400px]">
        <img src={images[currentIndex]} className="current-image" ref={currentImage} className="w-full h-full" alt="" /> 
      </div>
      <div className="hidden md:block carousel-item h-[100%] w-[100%] max-w-[400px] max-h-[400px]">
        <img src={images[currentIndex == 6 ? 0 : currentIndex + 1]} ref={currentImage2} className="current-image2 w-full h-full" alt="" /> 
      </div>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      }} onClick={() => {
        swipeLeft()
      }} className="left-arrow absolute h-full flex flex-col items-center justify-center w-[15%] top-0 left-0">
        <i className="fa-solid fa-arrow-left text-white text-5xl align-middle"></i>
      </div>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      }} onClick={() => {
        swipeRight()
      }} className="right-arrow absolute h-full flex flex-col items-center justify-center w-[15%] top-0 right-0">
        <i className="fa-solid fa-arrow-right text-white text-5xl align-middle"></i>
      </div>
    </div>
  );
}
