import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

const NavBar = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  const handleChange = (_, newValue) => {
    setValue(newValue);
    // can be useful later on
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
    <Box sx={{ width: "100%" }}>
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
            <IconButton sx={{ padding: "0px", margin: "0px", minWidth: "0px" }}>
              <AddIcon />
            </IconButton>
          }
          sx={{ padding: "0px", margin: "0px", minWidth: "0px" }}
          aria-label="add"
          onClick={(event) => {
            navigate("createposts");
          }}
        />
        <LinkTab label="For You" linkurl="" />
        <LinkTab label="Midium" linkurl="antimedium" />
        <LinkTab label="About Me" linkurl="" />
        <LinkTab label="Logs & Roadmap" linkurl="" />
      </Tabs>
    </Box>
  );
};

export default NavBar;
