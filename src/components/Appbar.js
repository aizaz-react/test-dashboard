import { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import NotificationIcon from "../assets/NotificationIcon";
import SettingsIcon from "../assets/SettingsIcon";
import image from "../assets/Avatar.png";

export default function ButtonAppBar() {
  const [currency, setCurrency] = useState("English");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div className="AppBar">
      <h1>Welcome to Centralin!</h1>
      <div className="AppBar-actions">
        <FormControlLabel
          value="start"
          control={<Switch defaultChecked color="primary" />}
          label="Training Mode"
          labelPlacement="start"
          sx={style}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Language"
          value={currency}
          onChange={handleChange}
          style={{ width: "8rem" }}
          size="small"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <p style={{ color: "#1D84C6" }}>{option.value}</p>
            </MenuItem>
          ))}
        </TextField>
        <NotificationIcon width="1.6rem" color="#6B7280" />
        <SettingsIcon width="1.6rem" color="#6B7280" />
        <img src={image} alt={image} style={{ width: "2.6rem" }} />
      </div>
    </div>
  );
}

const style = {
  ".css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked": {
    color: "#1D84C6",
  },
};

const currencies = [
  {
    value: "English",
  },
  {
    value: "Urdu",
  },
  {
    value: "French",
  },
  {
    value: "Spanish",
  },
];
