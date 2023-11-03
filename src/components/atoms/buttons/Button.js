import React from "react";
import { BiCalendarAlt } from "react-icons/bi";
function Button({
  leftIcon = <BiCalendarAlt />,
  text = "Jetzt reservieren",
  rightIcon,
  onClick = () => {
    alert("comming soon!");
  },
}) {
  return (
    <button onClick={() => onClick()} className="filled_button">
      {leftIcon && leftIcon}
      {text}
      {rightIcon && rightIcon}
    </button>
  );
}

export default Button;
