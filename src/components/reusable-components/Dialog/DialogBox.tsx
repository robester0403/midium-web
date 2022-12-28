import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";

interface DialogBoxProps {
  open: boolean;
  handleClose: () => void;
  handleAgree: () => void;
  question: string;
  rest?: any[];
}

const DialogBox = ({
  open,
  handleClose,
  handleAgree,
  question,
  ...rest
}: DialogBoxProps) => {
  return (
    <Dialog open={open} onClose={handleClose} {...rest}>
      <DialogTitle id="dialog-title">
        <Typography variant="h5">{question}</Typography>
      </DialogTitle>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAgree} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
