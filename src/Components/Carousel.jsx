import React, { useState, useRef, useEffect } from "react";
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
  const [images, setImages] = useState([
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
  ]);
  const items = useRef(null);
  console.log(images[0]);

  useEffect(() => {
    const slider = items.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  }, []);
  return (
      
    <ul
      style={{
          cursor: 'grab'
      }}
      ref={items}
      className="carrousel flex drag gap-4 overflow-x-auto w-[100%] max-w-[500px]  h-[100%] snap-x snap-mandatory before:shrink-1 after:shrink-0"
    >
      {images.map((image, index) => {
        return (
          <li className="shrink-0 h-[500px] rounded-3xl">
            <img src={image} className="w-[380px] max-w-[400px] rounded-3xl" alt="" />
          </li>
        );
      })}
    </ul>
  );
}
