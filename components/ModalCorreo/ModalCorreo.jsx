import React, { useState } from "react";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import emailjs from "emailjs-com";
//import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";
import SuccesAlert from "../SuccesAlert/SuccesAlert";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(0.5),
    color: "white",
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          X
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ModalCorreo() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [lName, setlName] = useState("");
  const [Alert, setlAlert] = useState("");
  const [send, setSend] = useState(false);
  const submitValue = () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var frmdetails = {
      Message_Customer: lName,
      Email_Customer: email,
    };
    if (lName !== "" && re.test(email)) {
      console.log(frmdetails);
      emailjs
        .send(
          "dotcom",
          "template_p58uKSLu",
          frmdetails,
          "user_MFW8G7EXKgP2CbHXXfPn7"
        )
        .then(
          (result) => {
            console.log(result.text);
            setEmail("");
            setlName("");
            setSend(true);
            setTimeout(() => {
              console.log("Hello, World!");
              setSend(false);
            }, 3000);
          },
          (error) => {
            setlAlert("Error! Try Again Later.");
            console.log(error.text);
            setSend(false);
          }
        );
      setlAlert("");
      handleClose();
    } else {
      setlAlert("Error! Invalid Mail");
      setSend(false);
      console.log("No valido");
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function Greeting(props) {
    const showAlerts = props.show;
    if (showAlerts) {
      return <SuccesAlert openAlert={showAlerts} />;
    }
    return null;
  }
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSend(false);
  };

  return (
    <div className="inline-button">
      <Greeting
        show={send}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      />
      <button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        className="btn-purple"
      >
        CONTACT ME
      </button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        PaperProps={{
          style: { borderRadius: 0 },
        }}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{
            paddingBottom: 10,
            backgroundColor: "#383fd9",
            color: "white",
          }}
        >
          CONTACT ME
        </DialogTitle>
        <DialogContent style={{ paddingTop: 0 }}>
          <p className="alert-form">{Alert}</p>
          <p className="label-form">Your Mail:</p>
          <input
            type="mail"
            className="input-contact"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p className="label-form">Message:</p>
          <textarea
            rows="4"
            className="input-contact"
            onChange={(e) => setlName(e.target.value)}
          ></textarea>
        </DialogContent>
        <DialogActions>
          <Button onClick={submitValue} color="primary">
            ENVIAR
          </Button>
        </DialogActions>
      </Dialog>
      <style jsx>
        {`
        .inline-button{
          display:inline;
        }
        @media only screen and (max-width: 1000px) {
          .inline-button{
          display:block;
        }
        }
          .alert-form {
            color: red;
            font-family: "Roboto";
            margin-bottom: 0;
            font-size: 13px;
          }
          .btn-purple {
           
            background-color: #383fd9;
            color: white;
            font-family: "Roboto";
            font-size: 500;
            border: 0px;
            font-size: 14px;
            padding: 10px 25px 10px 25px;
            cursor: pointer;
            -webkit-box-shadow: 4px 3px 20px 0px rgba(56, 63, 217, 0.6);
            -moz-box-shadow: 4px 3px 20px 0px rgba(56, 63, 217, 0.6);
            box-shadow: 4px 3px 20px 0px rgba(56, 63, 217, 0.6);
          }
          .btn-purple:focus {
            outline: none !important;
            outline-width: 0 !important;
          }
          .input-contact {
            width: 200px;
            padding: 10px;
            border-radius: 0px;
            display: block;
            border: 1px solid #7777;
          }
          .input-contact:focus {
            outline: none !important;
            outline-width: 0 !important;
          }
          .label-form {
            font-family: "Roboto";
            font-weight: 300;
            margin-bottom: 0px;
            padding-top: 5px;
            padding-bottom: 5px;
          }
        `}
      </style>
    </div>
  );
}
