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
    <div className="flex w-[100%] relative overflow-x-hidden gap-4">
      <div className="flex w-[100vw] mr-[550px]">

      {
        images.map((image, index) => {
          return (
            <div className="carousel-image h-full" key={index}>
              <img src={image} className="max-w-[300px]" alt="" />
            </div>
          )
        })
      }
      </div>
      <div className="flex w-[100vw]">

      {
        images.map((image, index) => {
          return (
            <div className="carousel-image h-full" key={index}>
              <img src={image} className="max-w-[300px]" alt="" />
            </div>
          )
        })
      }
      </div>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }} onMouseEnter={(e) => {
        const carouselImages = document.querySelectorAll(".carousel-image");
        carouselImages.forEach(image => {
          image.classList.add("image-active");
        })
      }}  className="left-arrow absolute top-0 left-0 h-full w-[4vw] flex items-center justify-center">

        <i className="fa-solid fa-arrow-left text-white text-4xl"></i>
      </div>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }} 
      onMouseEnter={(e) => {
        const carouselImages = document.querySelectorAll(".carousel-image");
        carouselImages.forEach(image => {
          image.classList.add("image-active");
          image.addEventListener("animationend", (e) => {
            image.classList.remove("image-active");
          })
        })
      }}       className="left-arrow absolute top-0 right-0 h-full w-[4vw] flex items-center justify-center">
        <i className="fa-solid fa-arrow-right text-white text-4xl"></i>
      </div>
    </div>
  );
}
