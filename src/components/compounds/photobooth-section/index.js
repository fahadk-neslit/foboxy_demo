/* eslint-disable jsx-a11y/alt-text */
import { motion } from "framer-motion";
import React from "react";

function PhotoSection() {
  return (
    <div className="max-body flex w-full justify-start relative bg-red-400">
      <div className="hidden lg:flex">
        <div className="absolute top-0 right-[10em] h-[34.813em] w-[35.125em] rounded-2xl overflow-hidden">
          <img
            src="/assets/svg/big-circle.svg"
            style={{ height: "inherit", width: "inherit", objectFit: "cover" }}
          />
        </div>
        <div
          className="absolute top-0 right-[4em] h-[41.875em] w-[18.438em] rounded-2xl overflow-hidden"
          style={{ transform: "translateY(-100px)" }}
        >
          <img
            src="/assets/images/foboxy-fotobox-freisteller-intro.png"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      {/* left side - the z-index will be above the previous divs */}
      <div>
        <div
          className="absolute top-0 left-[18em] h-[29.375em] w-[20em] rounded-2xl overflow-hidden shadow-2xl"
          style={{ transform: "rotate(-6deg)" }}
        >
          <img
            src="/assets/images/foboxy-weihnachten.jpg"
            className="h-full w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <motion.div
          className="absolute top-0 left-[18em] h-[29.375em] w-[20em] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ transform: "rotate(-20deg) translateX(-200px)" }}
          whileInView={{ transform: "rotate(-20deg) translateX(-100px)" }}
          whileHover={{ transform: "rotate(-20deg) translateX(-150px)" }}
          transition={{ type: "tween", stiffness: 50, duration: 1 }}
        >
          <img
            src="/assets/images/foboxy-silvester-kiss.jpg"
            className="h-full w-full"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        <motion.div
          className="absolute top-0 left-[18em] h-[29.375em] w-[20em] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ transform: "rotate(12deg) translateX(200px)" }}
          whileInView={{ transform: "rotate(11deg) translateX(10px)" }}
          whileHover={{ transform: "rotate(11deg) translateX(100px)" }}
          transition={{ type: "tween", stiffness: 50, duration: 1 }}
        >
          <img
            src="/assets/images/foboxy-hochzeit-posing.jpg"
            className="h-full w-full"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        <motion.div
          className="absolute top-0 left-[20em] h-[6.813em] w-[8em]"
          initial={{ transform: "rotate(20deg) translateX(300px)" }}
          whileInView={{ transform: "rotate(11deg) translateX(200px)" }}
          whileHover={{ transform: "rotate(11deg) translateX(210px)" }}
          transition={{ type: "tween", stiffness: 50, duration: 1.2 }}
        >
          <img src="/assets/images/circles.png" width="100%" height="100%" />
        </motion.div>
      </div>
    </div>
  );
}

export default PhotoSection;
