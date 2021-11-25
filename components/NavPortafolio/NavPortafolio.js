import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Container from "@material-ui/core/Container";
import Link from 'next/link'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavPortafolio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Link href="/">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <ArrowBackIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" className={classes.title}>
              wecode
          </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}