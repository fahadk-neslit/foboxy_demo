import React, { useEffect, useState } from "react";
import { BiCalendarAlt } from "react-icons/bi";

/**
 *
 * @param {*} leftIcon(optional) - Left icon position
 * @param {*} text(required) - Text position center
 * @param {*} rightIcon(optional) - Right icon position
 * @returns {motion.button}
 */
function ScrollButton({
  leftIcon = <BiCalendarAlt size={24} />,
  text = "Jetzt reservieren",
  rightIcon,
  onClick = () => {
    alert("comming soon!");
  },
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollContainer, setScrollContainer] = useState(null);

  useEffect(() => {
    const container = document.querySelector("#scroll_button_placeholder");
    setScrollContainer(container.offsetTop);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      const container = document.querySelector("#scroll_button_placeholder");
      setScrollContainer(container.offsetTop);
    });
  }, []);

  const handleScroll = () => {
    const scrollBtn = document.querySelector(".scroll_button");
    const scrollBtnPlaceholder = document.querySelector(
      "#scroll_button_placeholder"
    );

    if (window.scrollY > scrollBtnPlaceholder.offsetTop / 3) {
      setIsScrolled(true);

      scrollBtn.style.transform = `translate(${
        scrollBtnPlaceholder.offsetWidth / 2 -
        (scrollBtn?.getBoundingClientRect().width / 2 + 80)
      }px, ${
        window.innerHeight -
        scrollBtnPlaceholder.offsetTop -
        80 +
        window.scrollY
      }px`;

      if (window.innerWidth - scrollBtn?.getBoundingClientRect().right === 80) {
        if (scrollBtn?.classList?.contains("custom_transition"))
          scrollBtn?.classList?.remove("custom_transition");
      }
    } else {
      setIsScrolled(false);
      const scrollBtn = document.querySelector(".scroll_button");
      if (!scrollBtn?.classList?.contains("custom_transition")) {
        scrollBtn?.classList?.add("custom_transition");
      }
      scrollBtn.style.transform = `translate(0%,0%)`;
    }
  };
  return (
    <button
      onClick={onClick}
      className={`scroll_button custom_transition`}
      style={{
        position: "absolute",
        top: scrollContainer,
        left: 0,
        right: 0,
        width: isScrolled ? 50 : "auto",
        margin: "auto",
      }}
    >
      {leftIcon && leftIcon}
      {!isScrolled && <span>{text}</span>}
      {rightIcon && rightIcon}
    </button>
  );
}

export default ScrollButton;
