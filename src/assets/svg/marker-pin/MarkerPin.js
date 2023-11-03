import * as React from "react";
const MarkerPinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      stroke="#E35205"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.25 17.858c-2.314 1.02-3.75 2.444-3.75 4.017C2.5 24.982 8.096 27.5 15 27.5s12.5-2.518 12.5-5.625c0-1.573-1.436-2.996-3.75-4.017M22.5 10c0 5.08-5.625 7.5-7.5 11.25C13.125 17.5 7.5 15.08 7.5 10a7.5 7.5 0 0 1 15 0Zm-6.25 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
    />
  </svg>
);
export default MarkerPinIcon;
