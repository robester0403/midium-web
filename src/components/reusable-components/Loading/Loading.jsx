import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";
import { CenteredContainer, LoadingTypography } from "./LoadingStyle";

export default function Loading(props) {
  const { isCentered, message, small, ...rest } = props;

  const loadingIcon = (
    <LoadingTypography
      data-testid="loading-container"
      variant="body1"
      sx={{ mt: 3 }}
      {...rest}
    >
      <CircularProgress
        color="primary"
        sx={{ mr: 1 }}
        data-testid="loading-icon"
        thickness={small ? 4 : 5}
        size={small ? 12 : 40}
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
}

Loading.propTypes = {
  isCentered: PropTypes.bool,
  message: PropTypes.string,
  small: PropTypes.bool,
};

Loading.defaultProps = {
  isCentered: false,
  small: false,
  message: null,
};
