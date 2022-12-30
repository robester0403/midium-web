import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import LinkTab from "../reusable-components/LinkTab/LinkTab";

const NavBar = () => {
  const [tabValue, setTabValue] = useState(1);
  const navigate = useNavigate();

  const handleTabHighlight = (
    _: any,
    newValue: React.SetStateAction<number>
  ) => {
    setTabValue(newValue);
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
          icon={<AddIcon sx={addIconStyleProps} />}
          sx={{ padding: "0px", margin: "0px", minWidth: "0px" }}
          aria-label="add"
          onClick={() => {
            navigate("createposts");
          }}
        />
        <LinkTab linkUrl="" label="Your Articles" />
        <LinkTab label="What is Midium" linkUrl="aboutapp" />
        <LinkTab
          label="About The Author"
          linkUrl="https://www.robertkso.com/"
          external
        />
      </Tabs>
    </Box>
  );
};

export default NavBar;

const addIconStyleProps = {
  padding: "0px",
  margin: "0px",
  minWidth: "0px",
  "&:hover": {
    backgroundColor: "lightgrey",
    borderRadius: "50%",
  },
};
