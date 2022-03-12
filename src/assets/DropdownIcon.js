import React from "react";

const DropdownIcon = ({ width, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width={width}
        height={width}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m8 4l8 8l-8 8"
        />
      </svg>
    </div>
  );
};

export default DropdownIcon;
