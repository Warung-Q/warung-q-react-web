import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Hidden,
  Menu,
  MenuItem,
  IconButton
} from "@material-ui/core";
import { MoreVert as MoreVertIcon } from "@material-ui/icons";
import logoApp from "../assets/logos/Warung-Q_logo_draft_2.png";

export default function AppbarSignUp({ color }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar style={{ backgroundColor: color }}>
        <Toolbar>
          <img src={logoApp} alt="Warung-Q" style={{ width: 80 }} />
          <Typography variant="h6" style={{ fontWeight: "bold", flexGrow: 1 }}>
            Warung-Q
          </Typography>
          <Hidden only={["sm", "md", "lg", "xl"]}>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
              style={{ color: "white" }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: "20ch"
                }
              }}
            >
              <MenuItem>
                <Link
                  to="/"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textDecoration: "none"
                  }}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/signin"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textDecoration: "none"
                  }}
                >
                  Sign In
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/signup"
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textDecoration: "none"
                  }}
                >
                  Sign Up
                </Link>
              </MenuItem>
            </Menu>
          </Hidden>
          <Hidden only="xs">
            <Box>
              <Button style={{ marginLeft: 30 }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Home
                </Link>
              </Button>
              <Button style={{ marginLeft: 30 }}>
                <Link
                  to="/signin"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Sign In
                </Link>
              </Button>
              <Button
                variant="container"
                style={{ backgroundColor: "white", marginLeft: 30 }}
              >
                <Link
                  to="/signup"
                  style={{ color: color, textDecoration: "none" }}
                >
                  Sign Up
                </Link>
              </Button>
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
}
