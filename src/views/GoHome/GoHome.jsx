import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "./GoHomeStyle";

const GoHome = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <PageContainer>
      <Typography variant="body1" component="div">
        Go back to home page
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleGoHome}>
        Go Home
      </Button>
    </PageContainer>
  );
};

export default GoHome;
