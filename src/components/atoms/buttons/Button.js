import React from "react";
import { BiCalendarAlt } from "react-icons/bi";
function Button({
  className = "max-w-[200px] bg-primary hover:bg-darkOrange rounded-3xl ",
  leftIcon = <BiCalendarAlt />,
  text = "Jetzt reservieren",
  rightIcon,
  onClick = () => {
    alert("comming soon!");
  },
}) {
  return (
    <button onClick={() => onClick()} className={`filled_button ${className}`}>
      {leftIcon && leftIcon}
      {text}
      {rightIcon && rightIcon}
    </button>
  );
}

export default Button;
