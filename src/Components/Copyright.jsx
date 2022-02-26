import React from "react";
import Logo from "../Assets/main-logo.png";

export default function Copyright() {
  return (
    <div
      style={{
        backgroundColor: "#001A44",
      }}
      className="h-[40vh] border-t border-white w-full text-white text-xl flex flex-col items-center justify-center gap-3"
    >
      <div className="flex gap-6 items-center  justify-center">
        <a href="https://discord.gg/JdPr6gHbhv" target="_blank">
          <i className="fa-brands fa-discord text-3xl text-white hover:scale-125 transition-all"></i>
        </a>
        <a href="https://www.twitter.com/TheChimpetts/" target="_blank">
          <i className="fa-brands fa-twitter text-3xl text-white hover:scale-125 transition-all"></i>
        </a>
      </div>
    </div>
  );
}
