import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
//import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(.5),
    color: 'white',
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

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
          style: { borderRadius: 0 }
        }}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{ paddingBottom:10,backgroundColor:'#383fd9',color:'white' }}>
          CONTACT ME
        </DialogTitle>
        <DialogContent style={{ paddingTop:0 }}>
          <p className="label-form">Mail:</p>
          <input type="text" className="input-contact"></input>
          <p className="label-form">Message:</p>
          <textarea rows="4" className="input-contact"></textarea>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose} color="primary">
            ENVIAR
          </Button>
        </DialogActions>
      </Dialog>
      <style jsx>
        {`
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
          .input-contact{
            width:200px;
            padding:10px;
            border-radius:0px;
            display:block;
            border: 1px solid #7777;
          }
          .input-contact:focus{
            outline: none !important;
            outline-width: 0 !important;
          }
          .label-form{
            font-family: "Roboto";
            font-weight:300;
            margin-bottom:0px;
            padding-top: 5px;
            padding-bottom: 5px;
          }
          
        
        `}
      </style>
    </div>
  );
}
