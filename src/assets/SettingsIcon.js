import React from "react";

const SettingsIcon = ({ width, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width={width}
        height={width}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 36 36"
      >
        <path
          fill={color}
          d="m32.57 15.72l-3.35-1a11.65 11.65 0 0 0-.95-2.33l1.64-3.07a.61.61 0 0 0-.11-.72l-2.39-2.4a.61.61 0 0 0-.72-.11l-3.05 1.63a11.62 11.62 0 0 0-2.36-1l-1-3.31a.61.61 0 0 0-.59-.41h-3.38a.61.61 0 0 0-.58.43l-1 3.3a11.63 11.63 0 0 0-2.38 1l-3-1.62a.61.61 0 0 0-.72.11L6.2 8.59a.61.61 0 0 0-.11.72l1.62 3a11.63 11.63 0 0 0-1 2.37l-3.31 1a.61.61 0 0 0-.43.58v3.38a.61.61 0 0 0 .43.58l3.33 1a11.62 11.62 0 0 0 1 2.33l-1.64 3.14a.61.61 0 0 0 .11.72l2.39 2.39a.61.61 0 0 0 .72.11l3.09-1.65a11.65 11.65 0 0 0 2.3.94l1 3.37a.61.61 0 0 0 .58.43h3.38a.61.61 0 0 0 .58-.43l1-3.38a11.63 11.63 0 0 0 2.28-.94l3.11 1.66a.61.61 0 0 0 .72-.11l2.39-2.39a.61.61 0 0 0 .11-.72l-1.66-3.1a11.63 11.63 0 0 0 .95-2.29l3.37-1a.61.61 0 0 0 .43-.58v-3.41a.61.61 0 0 0-.37-.59ZM18 23.5a5.5 5.5 0 1 1 5.5-5.5a5.5 5.5 0 0 1-5.5 5.5Z"
          class="clr-i-solid clr-i-solid-path-1"
        />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
    </div>
  );
};

export default SettingsIcon;
