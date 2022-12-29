import { Close as CloseIcon } from "@mui/icons-material";
import { Button, IconButton, Slide, Snackbar } from "@mui/material";
import React from "react";

interface SnackbarMessageProps {
  message: string;
  open: boolean;
  onClose?: () => void;
  onAction?: () => void;
  actionLabel?: string;
  rest?: {
    [key: string]: any;
  };
}

const defaultProps = {
  actionLabel: "Run",
  onAction: undefined,
  onClose: undefined,
};

export default function SnackbarMessage({
  message,
  open,

  onClose,
  onAction,
  actionLabel,
  ...rest
}: SnackbarMessageProps & typeof defaultProps) {
  const snackBarContents = onAction ? (
    <Button
      color="inherit"
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
      {...rest}
    />
  );
}
