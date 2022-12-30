import { Tab } from "@mui/material";
import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type IProps = {
  linkUrl: string;
  external?: boolean;
};

type LinkTabProps = React.ComponentProps<typeof Tab> & IProps;

const LinkTab = (props: LinkTabProps) => {
  const { linkUrl, external = false, ...rest } = props;
  console.log(external);
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
        external ? openNewTab(`${linkUrl}`) : navigate(`/${linkUrl}`);
      }}
      sx={{ textTransform: "none" }}
      {...rest}
    />
  );
};

export default LinkTab;
