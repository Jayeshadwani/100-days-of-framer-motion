import React, { useState, useEffect } from "react";
import style from "./style";
import { motion } from "framer-motion";

export default function Animation() {
  const texts = ["student", "of", "framer-motion"];
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{style}</style>
      <div className="contentWrapper">
        <h1 className="heading">Welcome!! &nbsp;</h1>
        <motion.h1
          key={currentText}
          initial={{
            rotateX: "0deg",
            opacity: [0, 1, 0],
            y: "-10px",
            width: 260,
            textAlign: "left",
          }}
          animate={{
            rotateX: ["0deg", "90deg", "0deg"],
            opacity: [0, 1, 0],
            scale: [1, 1.01, 1],
            y: ["-10px", "0px", "10px"],
            color: ["#000", "#f00", "#00f", "#000"],
          }}
          transition={{ duration: 1, ease: "linear", staggerChildren: 1 }}
          className="textToAnimate">
          {currentText}
        </motion.h1>
      </div>
    </>
  );
}
