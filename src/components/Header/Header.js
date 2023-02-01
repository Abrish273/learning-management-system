import React, { useState } from "react";
import { useStyles } from "./style";
import {
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AppsIcon from "@mui/icons-material/Apps";
import CreateClass from "../CreateClass/CreateClass";
import { useLocalContext } from "../../context/context";
import JoinClass from "../JoinClass/JoinClass";

const Header = ({ children }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { createClassDialog, setCreateClassDialog } = useLocalContext();
  const { joinClassDialog, setJoinClassDialog, loggedInUser, logout } =
    useLocalContext();

  const handleCreate = () => {
    handleClose();
    setCreateClassDialog(true);
  };
  const handleJoin = () => {
    handleClose();
    setJoinClassDialog(true);
  };

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.AppBar}
        style={{ backgroundColor: "inherit" }}
        position="static"
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerWrapper}>
            {children}
            <img
              src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
              alt="Classroom"
              style={{ width: "80px", height: "40px" }}
            />
            <Typography variant="h6" className={classes.title}>
              Classroom
            </Typography>
          </div>
          <div className={classes.header__wrapper__right}>
            <AddCircleOutlineIcon
              onClick={handleClick}
              className={classes.icon}
            />
            <AppsIcon className={classes.icon} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleJoin}>Join class</MenuItem>
              <MenuItem onClick={handleCreate}>Create class</MenuItem>
              <MenuItem onClick={() => logout()}>Log out</MenuItem>
            </Menu>
            <div>
              <Avatar src={loggedInUser?.photoURL} className={classes.icon} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <CreateClass />
      <JoinClass />
    </div>
  );
};

export default Header;
