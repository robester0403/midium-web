import { Tab } from "@mui/material";
import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface LinkTabProps {
  linkurl: string;
  external?: boolean;
  rest?: any[];
}

const defaultProps = {
  external: false,
};

const LinkTab = ({
  linkurl,
  external,
  ...rest
}: LinkTabProps & typeof defaultProps) => {
  const navigate = useNavigate();

  const openNewTab = useCallback(
    (url: string) => {
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
