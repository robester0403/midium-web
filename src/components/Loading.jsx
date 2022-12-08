import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";
import { CircularProgress, Typography } from "@mui/material";

const CenteredContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: center;
  margin: auto;
`;
const LoadingTypography = styled(Typography)`
  align-items: center;
  display: flex;
`;

export default function Loading(props) {
  const { isCentered, message, small, className, ...rest } = props;

  const loadingIcon = (
    <LoadingTypography
      className={classNames(className)}
      data-testid="loading-container"
      variant="body1"
      {...rest}
    >
      <CircularProgress
        color="primary"
        sx={{ mr: 1 }}
        data-testid="loading-icon"
        thickness={small ? 4 : 5}
        size={small ? 24 : 40}
      />
      {props.message}
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
  className: PropTypes.string,
};

Loading.defaultProps = {
  isCentered: false,
  small: false,
  className: "",
  message: null,
};
