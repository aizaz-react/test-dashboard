import React from "react";

const YoutubeIcon = ({ width, color }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width={width}
        height={width}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 20 20"
      >
        <path
          fill={color}
          d="M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334zM10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zm0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9s5 .443 5 3.9s-.086 3.9-5 3.9z"
        />
      </svg>
    </div>
  );
};

export default YoutubeIcon;