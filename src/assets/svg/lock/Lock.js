import * as React from "react";
const LockIcon = (props) => (
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
      d="M8.876 12.5H8.75V10a6.25 6.25 0 1 1 12.5 0v2.5h-.126M15 17.5V20m8.75-1.25a8.75 8.75 0 1 1-17.5 0 8.75 8.75 0 0 1 17.5 0Z"
    />
  </svg>
);
export default LockIcon;
