import React from "react";
import { CircularProgress } from "@mui/material";
import { CenteredContainer, LoadingTypography } from "./LoadingStyle";

interface IProps {
  isCentered: boolean;
  message: string;
  small: boolean;
  rest?: {
    [key: string]: any;
  };
}

type LoadingProps = React.ComponentProps<typeof CircularProgress> & IProps;

const Loading = (props: LoadingProps) => {
  const { isCentered = false, message = null, small = false, ...rest } = props;

  const loadingIcon = (
    <LoadingTypography
      data-testid="loading-container"
      variant="body1"
      sx={{ mt: 3 }}
    >
      <CircularProgress
        color="primary"
        sx={{ mr: 1 }}
        data-testid="loading-icon"
        thickness={small ? 4 : 5}
        size={small ? 12 : 40}
        {...rest}
      />
      {message}
    </LoadingTypography>
  );

  return isCentered ? (
    <CenteredContainer data-testid="centered-container">
      {loadingIcon}
    </CenteredContainer>
  ) : (
    loadingIcon
  );
};

export default Loading;
