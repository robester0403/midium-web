import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const DialogBox = ({ open, handleClose, handleAgree, question, ...rest }) => {
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

DialogBox.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleAgree: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
};
