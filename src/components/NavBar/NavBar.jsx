import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const NavBar = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const LinkTab = (props) => {
    return (
      <Tab
        onClick={(_) => {
          navigate(`/${props.linkurl}`);
        }}
        sx={{ textTransform: "none" }}
        {...props}
      />
    );
  };

  return (
    <Box sx={{ width: "100%", boxSizing: "border-box" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="nav tabs for midium"
      >
        we need to fix this linkTab to something better
        <Tab
          icon={
            <AddIcon
              sx={{
                padding: "0px",
                margin: "0px",
                minWidth: "0px",
                "&:hover": {
                  backgroundColor: "lightgrey",
                  borderRadius: "50%",
                },
              }}
            />
          }
          sx={{ padding: "0px", margin: "0px", minWidth: "0px" }}
          aria-label="add"
          onClick={(event) => {
            navigate("createposts");
          }}
        />
        <LinkTab label="For You" linkurl="" />
        <LinkTab label="About Midium" linkurl="aboutapp" />
        <LinkTab label="Anti-Medium" linkurl="antimedium" />
        <LinkTab label="About Me" linkurl="about" />
      </Tabs>
    </Box>
  );
};

export default NavBar;
