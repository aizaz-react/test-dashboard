import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Profile = () => {
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="profile">
      <h1> Profile</h1>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={style}
      >
        {tabsData.map(({ id, title }) => (
          <Tab label={title} wrapped />
        ))}
      </Tabs>
      <div className="tab-selected">
        <div className="signin-form">
          <div className="title">
            <h3>Sign In</h3>
          </div>
          <div className="form">
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              fullWidth
              size="small"
              defaultValue="dummy@email.com"
            />
            <TextField
              id="outlined-basic"
              label="Confirm Email Address"
              variant="outlined"
              fullWidth
              size="small"
              defaultValue="dummy@email.com"
            />
          </div>
        </div>
        <div className="password-form">
          <div className="title">
            <h3>Security Information</h3>
          </div>
          <div className="form">
            <div className="input">
              <TextField
                id="outlined-basic"
                label="Old Password"
                variant="outlined"
                fullWidth
                size="small"
                type="password"
                defaultValue="*******"
              />
              <Button
                color="primary"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "600",
                }}
              >
                Edit
              </Button>
            </div>
            <div className="input">
              <TextField
                id="outlined-basic"
                label="New Password"
                variant="outlined"
                fullWidth
                size="small"
                type="password"
                defaultValue="*******"
              />
              <Button
                color="primary"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "600",
                }}
              >
                Edit
              </Button>
            </div>
            <div className="input">
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                fullWidth
                size="small"
                type="password"
                defaultValue="*******"
              />
              <Button
                color="primary"
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "600",
                }}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
        <div className="table">
          <h3>Account Activity</h3>
          <DataGrid
            rows={array.rows}
            columns={array.columns}
            headerHeight={50}
            rowHeight={40}
            sx={styles}
            hideFooterPagination={true}
            autoHeight={true}
            disableColumnMenu={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;

const tabsData = [
  { id: 0, title: "Personal Information" },
  { id: 1, title: "Sign In & Security" },
  { id: 2, title: "Connect & View Social Media Information" },
  { id: 3, title: "Personalization" },
  { id: 4, title: "Centralin Points" },
];

const style = {
  borderBottom: "1px solid lightgray",
  "& .css-13qnuny-MuiTabs-root": {
    minHeight: "none",
    height: "35rem",
  },
  "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root": {
    maxWidth: "none",
    minWidth: "none",
    minHeight: "none",
  },
  "& .css-zx9imm-MuiButtonBase-root-MuiTab-root": {
    padding: "0rem 0.5rem",
    minHeight: "none",
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
  },
};

const styles = {
  "& ": {
    border: "none",
  },
  "& .css-1s0hp0k-MuiDataGrid-columnHeadersInner": {
    background: "#F3F4F6",
    borderRadius: "10px 10px 0px 0px",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .css-de9k3v-MuiDataGrid-selectedRowCount ": {
    display: "none",
  },
  "& .css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root": {
    display: "none",
  },
  "& .MuiDataGrid-row": {
    fontWeight: "500",
    fontFamily: "Inter",
  },
};

const array = {
  columns: [
    {
      field: "date",
      headerName: "DATE",
      align: "start",
      editable: false,
      flex: 1,
    },
    {
      field: "time",
      headerName: "TIME",
      align: "start",
      renderCell: ({ value }) => <p style={{ color: "#1D84C6" }}>{value}</p>,
      editable: false,
      flex: 1,
    },
    {
      field: "address",
      align: "start",
      editable: false,
      flex: 1,
    },

    {
      field: "changemade",
      headerName: "CHANGE Made",
      align: "start",
      renderCell: ({ value }) => (
        <p style={{ color: value !== "Disconnection" ? "#1CB393" : "#E7414C" }}>
          {value}
        </p>
      ),
      editable: false,
      flex: 3,
    },

    {
      field: "action",
      headerName: "ACTION",
      align: "start",
      renderCell: ({ value }) => <Button> {value}</Button>,
      editable: false,
      flex: 1,
    },
  ],
  rows: [
    {
      id: "1",
      date: "22-02-2022",
      time: "10:00 PM",
      address: "192.162.20.22",
      changemade: "Success at first attempt",
      action: "Login",
    },
    {
      id: "2",
      date: "22-02-2022",
      time: "08:32 AM",
      address: "192.162.20.22",
      changemade: "Disconnection",
      action: "Login",
    },
    {
      id: "3",
      date: "22-02-2022",
      time: "09:23 PM",
      address: "192.162.20.22",
      changemade: "Success at first attempt",
      action: "Login",
    },
  ],
};
