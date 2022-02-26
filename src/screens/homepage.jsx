import React, {useState} from "react";
import Banner from "../Assets/banner.png";
import "./homepage.scss";
import Logo from "../Assets/banner.png";
import Carousel from "../Components/Carousel";

export default function Homepage() {

    const [qna, setQna] = useState([
        { Question: "What is The Chimpetts?", Answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { Question: "What is the total supply?", Answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { Question: "What is the total supply?", Answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { Question: "What is the total supply?", Answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    ]);
  return (
    <div
      style={{
        backgroundImage: `url(${Logo})`,
        backgroundSize: "cover",
      }}
      className="bg-black gradient-shit w-full h-screen flex flex-col items-center justify-center"
    >
      <Carousel />
    </div>
  );
}
