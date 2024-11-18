import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  const profilePicVariants = {
    hover: {
      scale: 1.5,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full h-screen mx-auto">

      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} text-white max-sm:text-[2rem] max-md:text-nowrap`}
          >
            Hi, I'm <span className=" text-[#915EFF] ">Suryansh</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 lg:w-[55vw] md:w-[70vw] sm:w-[65vw] text-white-100 text-justify md:font-normal `}
          >
            A proactive{" "}
            <span style={{ color: "violet", fontWeight: "bold" }}>
              B.Sc. Economics & Analytics
            </span>{" "}
            student. Expertise in Excel, Python, and business forecasting.
            Passionate about driving data-driven insights and a web development
            as a freelancer.
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center max-xs:bottom-4">
        <div
          className={` ${styles.heroSubText} absolute  bottom-[180px] w-full flex justify-center items-center text-[#915eff]`}
        >
          Click Here to Scroll!
        </div>
        <a href="#about">
          <div className="mb-[100px] w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
