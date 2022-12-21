import { Tab } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LinkTab = ({ linkurl, external, ...rest }) => {
  const navigate = useNavigate();

  const openNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    navigate("about");
  };
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

export default LinkTab;
