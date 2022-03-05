import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const roles = [
    { Name: "Casey", role: "Founder" },
    { Name: "Z3N", role: "Developer" },
    { Name: "Brayden", role: "Artist" },
  ];
  return (
    <div
      style={{
        backgroundColor: `rgb(0, 26, 68)`,
      }}
      className="w-full p-3 min-h-screen flex flex-col items-center relative justify-center gap-5 border-y-2 border-white bg-black"
    >
      <h1 className="text-white underline text-3xl font-bold top-[100px] left-1/2">
        About Team
      </h1>
      <div className="flex flex-col lg:flex-row gap-9">
        {roles.map((role, i) => {
          return (
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              initial={{ opacity: 0, y: -100 }}
            >
              <img
                style={{
                  width: "300px",
                }}
                src={require(`../Assets/NFTs/${i}.png`)}
                alt=""
              />
              <h1 className="text-white text-4xl font-bold">{role.Name}</h1>
              <p className="text-white font-light">- {role.role}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
