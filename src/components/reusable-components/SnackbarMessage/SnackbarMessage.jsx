import { Close as CloseIcon } from "@mui/icons-material";
import { Button, IconButton, Slide, Snackbar } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export default function SnackbarMessage({
  message,
  open,

  onClose,
  onAction,
  actionLabel,
  ...props
}) {
  const snackBarContents = onAction ? (
    <Button
      color="secondary"
      size="small"
      onClick={onAction}
      data-testid="actionbutton"
    >
      {actionLabel}
    </Button>
  ) : (
    <IconButton
      size="small"
      aria-label="close"
      onClick={onClose}
      data-testid="closebutton"
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
  return (
    <Snackbar
      open={open}
      message={message}
      action={snackBarContents}
      ContentProps={{
        style: {
          maxWidth: "40rem",
          color: "white",
          borderRadius: "5px",
        },
      }}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      TransitionComponent={(props) => <Slide {...props} direction="up" />}
      sx={{
        width: "100%",
        maxWidth: "200px",
      }}
      {...props}
    />
  );
}

SnackbarMessage.defaultProps = {
  actionLabel: "Run",
  onAction: undefined,
  onClose: undefined,
};

SnackbarMessage.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onAction: PropTypes.func,
  onClose: PropTypes.func,
  actionLabel: PropTypes.string,
};
