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
  useEffect(() => {
    /*--------------------
Vars
--------------------*/
    const $menu = document.querySelector(".menu");
    const $items = document.querySelectorAll(".menu--item");
    const $images = document.querySelectorAll(".menu--item img");
    let menuWidth = $menu.clientWidth;
    let itemWidth = $items[0].clientWidth;
    let wrapWidth = $items.length * itemWidth;

    let scrollSpeed = 0;
    let oldScrollY = 0;
    let scrollY = 0;
    let y = 0;

    /*--------------------
Lerp
--------------------*/
    const lerp = (v0, v1, t) => {
      return v0 * (1 - t) + v1 * t;
    };

    /*--------------------
Dispose
--------------------*/
    const dispose = (scroll) => {
      gsap.set($items, {
        x: (i) => {
          return i * itemWidth + scroll;
        },
        modifiers: {
          x: (x, target) => {
            const s = gsap.utils.wrap(
              -itemWidth,
              wrapWidth - itemWidth,
              parseInt(x)
            );
            return `${s}px`;
          },
        },
      });
    };
    dispose(0);

    /*--------------------
Wheel
--------------------*/
    const handleMouseWheel = (e) => {
      scrollY -= e.deltaY * 0.9;
    };

    /*--------------------
Touch
--------------------*/
    let touchStart = 0;
    let touchX = 0;
    let isDragging = false;
    const handleTouchStart = (e) => {
      touchStart = e.clientX || e.touches[0].clientX;
      isDragging = true;
      $menu.classList.add("is-dragging");
    };
    const handleTouchMove = (e) => {
      if (!isDragging) return;
      touchX = e.clientX || e.touches[0].clientX;
      scrollY += (touchX - touchStart) * 2.5;
      touchStart = touchX;
    };
    const handleTouchEnd = () => {
      isDragging = false;
      $menu.classList.remove("is-dragging");
    };

    /*--------------------
Listeners
--------------------*/
    $menu.addEventListener("mousewheel", handleMouseWheel);

    $menu.addEventListener("touchstart", handleTouchStart);
    $menu.addEventListener("touchmove", handleTouchMove);
    $menu.addEventListener("touchend", handleTouchEnd);

    $menu.addEventListener("mousedown", handleTouchStart);
    $menu.addEventListener("mousemove", handleTouchMove);
    $menu.addEventListener("mouseleave", handleTouchEnd);
    $menu.addEventListener("mouseup", handleTouchEnd);

    $menu.addEventListener("selectstart", () => {
      return false;
    });

    /*--------------------
Resize
--------------------*/
    window.addEventListener("resize", () => {
      menuWidth = $menu.clientWidth;
      itemWidth = $items[0].clientWidth;
      wrapWidth = $items.length * itemWidth;
    });

    /*--------------------
Render
--------------------*/
    const render = () => {
      requestAnimationFrame(render);
      y = lerp(y, scrollY, 0.1);
      dispose(y);

      scrollSpeed = y - oldScrollY;
      oldScrollY = y;

      gsap.to($items, {
        skewX: -scrollSpeed * 0.2,
        rotate: scrollSpeed * 0.01,
        scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.003,
      });
    };
    render();
  }, []);
  const swipeLeft = () => {
    if (currentIndex == 6) {
      gsap
        .to(currentImage.current, { opacity: 0 })
        .duration(0.4)
        .then(() => {
          setIndex(0);
          gsap.to(currentImage.current, { opacity: 1 });
        });
    } else {
      gsap
        .to(currentImage.current, { opacity: 0 })
        .duration(0.4)
        .then(() => {
          setIndex(currentIndex + 1);
          gsap.to(currentImage.current, { opacity: 1 });
        });
    }
  };
  const swipeRight = () => {
    if (currentIndex == 0) {
      gsap
        .to(currentImage2.current, { opacity: 0 })
        .duration(0.4)
        .then(() => {
          setIndex(6);
          gsap.to(currentImage2.current, { opacity: 1 });
        });
    } else {
      gsap
        .to(currentImage2.current, { opacity: 0 })
        .duration(0.4)
        .then(() => {
          setIndex(currentIndex - 1);
          gsap.to(currentImage2.current, { opacity: 1 });
        });
    }
  };
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
      <div className="flex menu w-[100vw]">
        {images.map((image, index) => {
          return (
            <div className="menu--item image-active h-full" key={index}>
              <img src={image} className="max-w-[300px] w-full" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
