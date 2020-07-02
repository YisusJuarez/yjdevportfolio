import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { green } from "@material-ui/core/colors";
import SnackbarContent from '@material-ui/core/SnackbarContent';

export default function SuccesAlert(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={props.openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        
      >
        <SnackbarContent
          style={{
            backgroundColor: "#2ECC71",
          }}
          message="Email sent successfully, Thank You :D"
        />
      </Snackbar>
    </div>
  );
}
