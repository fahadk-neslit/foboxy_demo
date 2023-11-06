/* eslint-disable jsx-a11y/alt-text */
import { motion, useAnimation, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../atoms/buttons/Button";

function PhotoSection() {
  const controls = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    const scrollBtnPlaceholder = document.querySelector(
      "#scroll_button_placeholder"
    );
    const standImg = document.querySelector("#stand_img");
    const rootHeight = document
      .querySelector("#root")
      .getBoundingClientRect().height;
    let prevScrollValue = 0;
    const handleScroll = () => {
      if (
        window.scrollY > scrollBtnPlaceholder.offsetTop / 3 &&
        window.scrollY >= prevScrollValue
      ) {
        // If scroll is greater than 500, animate to the desired state
        controls2.start({
          transform: "rotate(-20deg) translateX(-100px)",
          transition: { type: "tween", stiffness: 100, duration: 1 },
        });
        controls.start({
          transform: "rotate(11deg) translateX(10px)",
          transition: { type: "tween", stiffness: 100, duration: 1 },
        });
      } else {
        // Otherwise, go back to the initial state
        controls2.start({
          transform: "rotate(-20deg) translateX(-200px)",
          transition: { type: "tween", stiffness: 100, duration: 1 },
        });
        controls.start({
          transform: "rotate(12deg) translateX(200px)",
          transition: { type: "tween", stiffness: 100, duration: 1 },
        });
      }
      if (window.scrollY + 50 <= rootHeight) {
        prevScrollValue = window.scrollY;
      }
    };
    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="images_section"
      className="max-body flex w-full justify-start relative "
    >
      <div
        className="hidden lg:flex  justify-between w-full max-body mt-[540px] "
        style={{ transform: "rotate(3deg)" }}
      >
        <Button
          leftIcon={null}
          text="Party Fun"
          className="rounded-2xl min-w-[220px] justify-center bg-secondary"
        />
        <Button
          leftIcon={null}
          text="Best display"
          className="rounded-2xl min-w-[220px] justify-center bg-primary"
        />
        <Button
          leftIcon={null}
          text="Jetzt reservieren"
          className="rounded-2xl min-w-[220px] justify-center bg-secondary"
        />
        <Button
          leftIcon={null}
          text="foboxy experience"
          className="rounded-2xl min-w-[220px] justify-center bg-primary"
        />

        <Button
          leftIcon={null}
          text="Just 2 Clicks"
          className="rounded-2xl min-w-[220px] justify-center bg-secondary"
        />
      </div>
      <div className="hidden lg:flex">
        <div className="absolute top-0 right-[10em] mx-auto h-[34.813em] w-[35.125em] rounded-2xl overflow-hidden">
          <img
            src="/assets/svg/big-circle.svg"
            className="z-10"
            style={{ height: "inherit", width: "inherit", objectFit: "cover" }}
          />
          <div className="absolute top-[10em] right-[10em] flex flex-col gap-6 justify-center items-center ">
            <img
              src="/assets/svg/small-logo.svg"
              width={38}
              height={38}
              className="mx-auto "
            />
            <h2 className="font-[26px] font-bold text-center leading-6 text-[#282828]">
              Rent a photo booth: Guaranteed <br />
              party fun with foboxy
            </h2>
            <Button />
          </div>
        </div>

        <div
          id="stand_img"
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
          className="absolute top-0 left-[18em] h-[12em] sm:h-[16em] md:h-[22em] lg:h-[29.375em] w-[10em] sm:w-[14em] md:w-[16em] lg:w-[20em] rounded-2xl overflow-hidden shadow-2xl"
          style={{ transform: "rotate(-6deg)" }}
        >
          <img
            src="/assets/images/foboxy-weihnachten.jpg"
            className="h-full w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <motion.div
          className="absolute top-0 left-[18em] h-[12em] sm:h-[16em] md:h-[22em] lg:h-[29.375em] w-[10em] sm:w-[14em] md:w-[16em] lg:w-[20em] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ transform: "rotate(-20deg) translateX(-200px)" }}
          animate={controls2}
          whileInView={{ transform: "rotate(-20deg) translateX(-100px)" }}
          //   whileHover={{ transform: "rotate(-20deg) translateX(-150px)" }}
          transition={{ type: "tween", stiffness: 50, duration: 1 }}
        >
          <img
            src="/assets/images/foboxy-silvester-kiss.jpg"
            className="h-full w-full"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        <motion.div
          className="absolute top-0 left-[18em] h-[12em] sm:h-[16em] md:h-[22em] lg:h-[29.375em] w-[10em] sm:w-[14em] md:w-[16em] lg:w-[20em] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ transform: "rotate(12deg) translateX(200px)" }}
          animate={controls}
          whileInView={{ transform: "rotate(11deg) translateX(10px)" }}
          //   whileHover={{ transform: "rotate(11deg) translateX(100px)" }}
          transition={{ type: "tween", stiffness: 50, duration: 1 }}
        >
          <img
            src="/assets/images/foboxy-hochzeit-posing.jpg"
            className="h-full w-full"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
        <motion.div
          className="hidden lg:block absolute top-0 left-[20em] h-[6.813em] w-[8em]"
          initial={{ transform: "rotate(20deg) translateX(300px)" }}
          whileInView={{ transform: "rotate(11deg) translateX(280px)" }}
          //   whileHover={{ transform: "rotate(11deg) translateX(290px)" }}
          transition={{ type: "tween", stiffness: 50, duration: 1.2 }}
        >
          <img src="/assets/images/circles.png" width="100%" height="100%" />
        </motion.div>
      </div>
    </div>
  );
}

export default PhotoSection;
