import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DropdownIcon from "../assets/DropdownIcon";
import Logout from "../assets/LogoutIcon";
import { drawerList, socialIcons } from "../data/drawerData";

const Drawer = () => {
  return (
    <div className="drawer">
      <div className="drawer-header">
        <AccountCircleIcon sx={{ fontSize: "3.5rem" }} />
        <h1>Admin One</h1>
        <p>Centralin User</p>
      </div>
      <div className="drawer-list">
        {drawerList.map(({ icon, title, dropdownIcon }, index) => (
          <div>
            <div key={index} className="list-item">
              {icon}
              <h3>{title}</h3>
              {dropdownIcon && <DropdownIcon width="1rem" color="#fff" />}
              {index === 4 && <div className="links-badge">10</div>}
            </div>
            {index === 6 && <hr />}
          </div>
        ))}
      </div>
      <div className="social-links">
        {socialIcons.map(({ icon }) => (
          <div>{icon}</div>
        ))}
      </div>
      <button>
        Logout <Logout width="1.5rem" color="#fff" />
      </button>
    </div>
  );
};

export default Drawer;
