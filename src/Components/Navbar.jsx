import React, { useEffect, useRef } from "react";
import Logo from "../Assets/main-logo.png";
import "./Navbar.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Carousel from "./Carousel";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const parallaxText = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrollValue = window.scrollY;
      const rate = (scrollValue) * -0.5;
      if (parallaxText.current) {
        parallaxText.current.style.transform = `translate3d(0px, ${rate}px, 0px)`;
      }
    });
    gsap
      .fromTo(".logo", { opacity: 0, y: 50 }, { opacity: 1, y: 0} )
      .duration(1);
      gsap.fromTo(".logo", {opacity: 1 }, {opacity: 0, scrollTrigger: {
        trigger:'.logo',
        start: '50% 50%',
        scrub: true,
      }})
  }, []);
  return (
    <div className="grid grid-cols-1 place-items-center navbar z-10 lg:flex-row  pt-8 gap-4 items-center justify-center  w-full px-9 py-3">
      <div className="h-[50vh] w-full flex flex-col items-center justify-end">
      <img
        src={Logo}
        ref={parallaxText}
        className="w-[90%] max-w-[250px] logo "
        alt=""
      />
      </div>
    </div>
  );
}
