/* eslint-disable jsx-a11y/alt-text */
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

function PhotoSection() {
  //   const { scrollY } = useScroll();
  //   const translateX = -scrollY * 0.5; // Adjust the multiplier for the desired speed
  //   const scrollRef = useRef(null);
  //   const inView = useInView({
  //     root: scrollRef,
  //     once: true, // Trigger the effect once
  //   });

  //   useMotionValueEvent(scrollY, "change", (latest) => {
  //     console.log("Page scroll: ", latest);
  //   });

  return (
    <div className="max-body flex w-full justify-start relative bg-red-400">
      <div>
        <div className="absolute top-0 right-[10em] h-[30.813em] w-[31.125em] rounded-2xl overflow-hidden">
          <img src="/assets/svg/big-circle.svg" width="100%" height="100%" />
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
          className="absolute top-0 left-[18em] h-[25.375em] w-[16em] rounded-2xl overflow-hidden"
          style={{ transform: "rotate(-6deg)" }}
        >
          <img
            src="/assets/images/foboxy-weihnachten.jpg"
            className="h-full w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className="absolute top-0 left-[18em] h-[25.375em] w-[16em] rounded-2xl overflow-hidden"
          style={{ transform: "rotate(-20deg) translateX(-200px)" }}
        >
          <img
            src="/assets/images/foboxy-hochzeit-posing.jpg"
            className="h-full w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className="absolute top-0 left-[18em] h-[25.375em] w-[16em] rounded-2xl overflow-hidden"
          style={{ transform: "rotate(20deg) translateX(200px)" }}
        >
          <img
            src="/assets/images/foboxy-silvester-kiss.jpg"
            className="h-full w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className="absolute top-0 left-[20em] h-[6.813em] w-[8em]"
          style={{ transform: "rotate(20deg) translateX(300px)" }}
        >
          <img src="/assets/images/circles.png" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
