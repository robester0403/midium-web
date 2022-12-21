import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import { NavBarAddIcon } from "./NavBarStyle";

const NavBar = () => {
  const [tabValue, setTabValue] = useState(1);
  const navigate = useNavigate();

  const handleTabHighlight = (_, newValue) => {
    setTabValue(newValue);
  };

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    navigate("antimedium");
  };

  const LinkTab = ({ linkurl, external, ...rest }) => {
    return (
      <Tab
        onClick={() => {
          external ? openNewTab(`${linkurl}`) : navigate(`/${linkurl}`);
        }}
        sx={{ textTransform: "none" }}
        {...rest}
      />
    );
  };

  return (
    <Box sx={{ width: "100%", boxSizing: "border-box" }}>
      <Tabs
        value={tabValue}
        onChange={handleTabHighlight}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="nav tabs for midium"
      >
        <Tab
          icon={<NavBarAddIcon />}
          sx={{ padding: "0px", margin: "0px", minWidth: "0px" }}
          aria-label="add"
          onClick={() => {
            navigate("createposts");
          }}
        />
        <LinkTab label="For You" linkurl="" />
        <LinkTab label="About Midium" linkurl="aboutapp" />
        <LinkTab label="Anti-Medium" linkurl="antimedium" />
        <LinkTab
          label="About Me"
          linkurl="https://www.robertkso.com/"
          external={true}
        />
      </Tabs>
    </Box>
  );
};

export default NavBar;
