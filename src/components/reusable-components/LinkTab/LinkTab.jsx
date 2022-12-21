import { Tab } from "@mui/material";
import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LinkTab = ({ linkurl, external, ...rest }) => {
  const navigate = useNavigate();

  const openNewTab = useCallback(
    (url) => {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
      if (newWindow) {
        newWindow.opener = null;
      }
      navigate("about");
    },
    [navigate]
  );

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
